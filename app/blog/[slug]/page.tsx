import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import fs from "fs/promises";
import path from "path";
import { Metadata } from "next";
import BlogFAQs from "@/components/blog/BlogFAQs";

interface BlogPageParams {
  params: {
    slug: string;
  };
}

// Function to get all blogs
async function getBlogs(): Promise<Blog[]> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs');
  try {
    const files = await fs.readdir(dataDirectory);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const blogs = await Promise.all(jsonFiles.map(async (file) => {
      const filePath = path.join(dataDirectory, file);
      const content = await fs.readFile(filePath, 'utf8');
      return JSON.parse(content) as Blog;
    }));
    
    return blogs;
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// Function to get a blog by slug
async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find(blog => blog.slug === slug) || null;
}

// Generate metadata
export async function generateMetadata({ params }: BlogPageParams): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }
  
  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.metaKeywords,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    }
  };
}

export default async function BlogPage({ params }: BlogPageParams) {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  // Generate related blogs by matching tags
  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs
    .filter(b => 
      b.published && 
      b.id !== blog.id && 
      b.tags.some(tag => blog.tags.includes(tag))
    )
    .slice(0, 3); // Get up to 3 related blogs

  // Helper for image source
  const getImageSrc = (imageUrl: string): string => {
    const defaultImage = "https://yashikatourandtravel.com/wp-content/uploads/2024/02/Yashika-Tour-Travels.png";
    if (!imageUrl || imageUrl.includes('svg+xml') || imageUrl.startsWith('data:')) {
      return defaultImage;
    }
    return imageUrl;
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-md">
        <div className="relative h-[400px]">
          <Image
            src={getImageSrc(blog.coverImage)}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map(tag => (
              <Link 
                href={`/blog?tag=${encodeURIComponent(tag)}`} 
                key={tag}
                className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tag.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.publishDate || blog.createdAt || "").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}</span>
          </div>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
          
          {/* FAQs Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="mt-10 border-t pt-8">
              <BlogFAQs faqs={blog.faqs} />
            </div>
          )}

          {/* Share Section */}
          <div className="flex items-center gap-4 mt-10 pt-6 border-t">
            <span className="font-semibold">Share:</span>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_APP_URL || 'https://example.com'}/blog/${blog.slug}`)}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Twitter
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_APP_URL || 'https://example.com'}/blog/${blog.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900"
            >
              Facebook
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_APP_URL || 'https://example.com'}/blog/${blog.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map(relatedBlog => (
              <div key={relatedBlog.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-48">
                  <Link href={`/blog/${relatedBlog.slug}`} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={getImageSrc(relatedBlog.coverImage)}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="p-5">
                  <Link href={`/blog/${relatedBlog.slug}`} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">{relatedBlog.title}</h3>
                  </Link>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{relatedBlog.author}</span>
                    <Link 
                      href={`/blog/${relatedBlog.slug}`}
                      className="text-blue-600 text-sm hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}