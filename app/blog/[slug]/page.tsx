import { notFound } from "next/navigation";
import Image from "next/image";
import { Blog } from "@/types/blog";
import fs from "fs/promises";
import path from "path";
import CommentSection from "@/components/comments/CommentSection";

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs');
  try {
    const files = await fs.readdir(dataDirectory);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    for (const file of jsonFiles) {
      const filePath = path.join(dataDirectory, file);
      const content = await fs.readFile(filePath, 'utf8');
      const blog = JSON.parse(content) as Blog;
      
      if (blog.slug === slug) {
        return blog;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error finding blog:', error);
    return null;
  }
}

// Proper type for params
interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Make sure params is fully resolved before accessing its properties
  const { slug } = params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="relative h-72 md:h-96 mb-8">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      
      <div className="flex items-center mb-8">
        <p className="text-gray-600">
          {new Date(blog.date).toLocaleDateString()} • {blog.author}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="prose prose-lg max-w-none">
        {/* Split content by paragraphs and render */}
        {blog.content.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      
      <hr className="my-16 border-gray-200" />
      
      {/* Comments Section */}
      <CommentSection blogId={blog.id} comments={blog.comments || []} />
    </div>
  );
}