import Image from "next/image";
import Link from "next/link";
import { getBlogsByTagServer, getAllBlogsServer } from "@/lib/blog-service";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { formatDate } from "@/lib/utils";

// Helper function to get image source
function getImageSrc(imageUrl: string): string {
  const defaultImage = "https://yashikatourandtravel.com/wp-content/uploads/2024/02/Yashika-Tour-Travels.png";
  if (!imageUrl || imageUrl.includes('svg+xml') || imageUrl.startsWith('data:')) {
    return defaultImage;
  }
  return imageUrl;
}

// This is a Server Component
export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Convert searchParams to a concrete value to avoid the dynamic API issue
  let tagParam: string | undefined;
  try {
    // In Next.js App Router, searchParams is already a parsed object, not a ReadableURLSearchParams
    // We just need to safely type cast it
    tagParam = typeof searchParams.tag === 'string' ? searchParams.tag : undefined;
  } catch (e) {
    console.error('Error accessing searchParams:', e);
    tagParam = undefined;
  }
  
  // Get blogs based on tag or all blogs
  const blogs = tagParam 
    ? await getBlogsByTagServer(tagParam) 
    : await getAllBlogsServer();

  // Get main featured blog (most recent)
  const mainBlog = blogs.length > 0 ? blogs[0] : null;
  
  // Get trending posts first (if any are marked as trending)
  const trendingBlogs = blogs
    .filter(blog => blog.isTrending)
    .slice(0, 4);  
  
  // If not enough trending blogs, supplement with latest
  if (trendingBlogs.length < 4) {
    const nonTrendingBlogs = blogs
      .filter(blog => !blog.isTrending && blog.id !== mainBlog?.id)
      .slice(0, 4 - trendingBlogs.length);
    trendingBlogs.push(...nonTrendingBlogs);
  }
  
  // Latest blogs (excluding main and trending)
  const usedBlogIds = [
    ...(mainBlog ? [mainBlog.id] : []), 
    ...trendingBlogs.map(blog => blog.id)
  ];
  
  const latestBlogs = blogs
    .filter(blog => !usedBlogIds.includes(blog.id))
    .slice(0, 6);
  
  // Extract all tags from blogs to create topic sections
  const allTags = blogs.flatMap(blog => blog.tags || []);
  const tagCounts: Record<string, number> = {};
  
  allTags.forEach(tag => {
    if (tag) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  });
  
  // Sort tags by frequency (most used first) and get top 6
  const topTags = Object.keys(tagCounts)
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 6);
  
  // Group blogs by topic
  const blogsByTopic: Record<string, any[]> = {};
  
  topTags.forEach(tag => {
    blogsByTopic[tag] = blogs
      .filter(blog => blog.tags?.includes(tag))
      .slice(0, 4);
  });

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Travel Blog</h1>
      
      {/* Hero Section: Featured + Trending */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Main Featured Blog */}
        {mainBlog && (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
              <div className="relative h-96">
                <Link href={`/blog/${mainBlog.slug}`} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={getImageSrc(mainBlog.coverImage || '/blogs/78.png')}
                    alt={mainBlog.title}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex gap-2 mb-2">
                    {mainBlog.tags?.slice(0, 2).map((tag, i) => (
                      <Link 
                        key={i}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full hover:bg-orange-600"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/blog/${mainBlog.slug}`} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-3xl font-bold mb-2">{mainBlog.title}</h2>
                  </Link>
                  <p className="text-sm opacity-90 mb-3">
                    {mainBlog.description || mainBlog.content?.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">
                      Yashika Team • {formatDate(mainBlog.publishedDate || mainBlog.createdAt)}
                    </p>
                    <Link 
                      href={`/blog/${mainBlog.slug}`}
                      className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Trending Posts Sidebar */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-red-500 w-2 h-6 mr-3"></span>
            Trending Now
          </h2>
          
          {trendingBlogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md flex h-24 hover:shadow-lg transition">
              <div className="relative w-1/3">
                <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={getImageSrc(blog.coverImage)}
                    alt={blog.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="p-3 w-2/3">
                <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-medium text-sm line-clamp-2">{blog.title}</h3>
                </Link>
                <p className="text-xs text-gray-500 mt-2">
                  {formatDate(blog.publishedDate || blog.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Latest Articles Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="bg-blue-500 w-2 h-6 mr-3"></span>
          Latest Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg h-full flex flex-col">
                <div className="relative h-48">
                  <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src={getImageSrc(blog.coverImage)}
                      alt={blog.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </Link>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex gap-2 mb-2">
                    {blog.tags?.slice(0, 1).map((tag, i) => (
                      <Link 
                        key={i}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full hover:bg-gray-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
                    {blog.description || blog.content?.substring(0, 100)}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500">Yashika Team</span>
                    <span className="text-sm text-gray-500">
                      {formatDate(blog.publishedDate || blog.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Topic-based sections */}
      {topTags.map((tag, index) => (
        <div key={tag} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-emerald-500 w-2 h-6 mr-3"></span>
            {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogsByTopic[tag].map((blog, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                  <div className="relative h-40">
                    <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={getImageSrc(blog.coverImage)}
                        alt={blog.title}
                        fill
                        loading="lazy"
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                      <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-2">
                      {formatDate(blog.publishedDate || blog.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="text-blue-500 text-sm hover:underline"
            >
              View all articles about {tag.replace(/-/g, ' ')} →
            </Link>
          </div>
        </div>
      ))}
      
      {/* Newsletter section */}
      <NewsletterForm />
    </div>
  );
}