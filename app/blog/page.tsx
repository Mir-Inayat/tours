import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";
import fs from "fs/promises";
import path from "path";
import { Navbar } from "@/components/ui/navbar";

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
    
    // Filter only published blogs and sort by date
    return blogs
      .filter(blog => blog.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  
  // Get main featured blog (most recent)
  const mainBlog = blogs.length > 0 ? blogs[0] : null;
  
  // Get trending posts first (if any are marked as trending)
  const trendingBlogs = blogs
    .filter(blog => blog.isTrending)
    .slice(0, 4); // Get up to 4 trending posts
  
  // If not enough trending blogs, supplement with latest
  if (trendingBlogs.length < 4) {
    const nonTrendingBlogs = blogs
      .filter(blog => !blog.isTrending)
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
  
  // Create topic structure from tags
  const allTags = blogs.flatMap(blog => blog.tags);
  const uniqueTags = Array.from(new Set(allTags));
  const topTags = uniqueTags.slice(0, 6); // Top 6 topics
  
  // Group blogs by topic
  const blogsByTopic: Record<string, Blog[]> = {};
  
  topTags.forEach(tag => {
    blogsByTopic[tag] = blogs.filter(blog => blog.tags.includes(tag)).slice(0, 4);
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Travel Blog</h1>
        
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No blog posts available yet.</p>
          </div>
        ) : (
          <>
            {/* Featured Post and Trending Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Main Featured Blog */}
              <div className="lg:col-span-2">
                {mainBlog && (
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                    <div className="relative h-96">
                      <Image
                        src={mainBlog.coverImage}
                        alt={mainBlog.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex gap-2 mb-2">
                          {mainBlog.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-3xl font-bold mb-2">{mainBlog.title}</h2>
                        <p className="text-sm opacity-90 mb-3">{mainBlog.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm">{mainBlog.author} • {new Date(mainBlog.date).toLocaleDateString()}</p>
                          <Link 
                            href={`/blog/${mainBlog.slug}`} 
                            className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trending Posts Sidebar */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="bg-red-500 w-2 h-6 mr-3"></span>
                  Trending Now
                </h2>
                {trendingBlogs.map(blog => (
                  <Link href={`/blog/${blog.slug}`} key={blog.id}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-md flex h-24 hover:shadow-lg transition">
                      <div className="relative w-1/3">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 w-2/3">
                        <h3 className="font-medium text-sm line-clamp-2">{blog.title}</h3>
                        <p className="text-xs text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Latest Posts */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-blue-500 w-2 h-6 mr-3"></span>
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestBlogs.map(blog => (
                  <Link href={`/blog/${blog.slug}`} key={blog.id} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex gap-2 mb-2">
                          {blog.tags.slice(0, 1).map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">{blog.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-sm text-gray-500">{blog.author}</span>
                          <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Posts by Topic */}
            {topTags.map(tag => (
              <div key={tag} className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className={`bg-emerald-500 w-2 h-6 mr-3`}></span>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {blogsByTopic[tag].map(blog => (
                    <Link href={`/blog/${blog.slug}`} key={blog.id} className="group">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                        <div className="relative h-40">
                          <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
                            {blog.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-2">{new Date(blog.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link href={`/blog/topics/${tag}`} className="text-blue-500 text-sm hover:underline">
                    View all articles about {tag} →
                  </Link>
                </div>
              </div>
            ))}
            
            {/* Newsletter Subscription */}
            <div className="bg-gray-50 rounded-xl p-8 text-center mt-16">
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Subscribe to our newsletter to receive travel tips, exclusive deals, and the latest blog updates.
              </p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow rounded-l-lg p-3 border-y border-l border-gray-300 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}