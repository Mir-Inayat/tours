import { Metadata } from "next"
import { notFound } from "next/navigation"
import fs from "fs/promises"
import path from "path"
import Image from "next/image"
import { Blog } from "@/types/blog"
import { BlogContent } from "@/components/blog/blog-content"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { BlogGalleryCarousel } from "@/components/ui/blog-gallery-carousel"
import Link from "next/link"
import { CalendarIcon, UserIcon, TagIcon, MessageCircleIcon } from "lucide-react"
import CommentSection from "@/components/comments/CommentSection"
import BlogFAQs from "@/components/blog/BlogFAQs"

// Interface for the page params
interface BlogPageParams {
  params: {
    slug: string
  }
}

// Get blog by slug
async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs')
  try {
    const files = await fs.readdir(dataDirectory)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    for (const file of jsonFiles) {
      const filePath = path.join(dataDirectory, file)
      const content = await fs.readFile(filePath, 'utf8')
      const blogData = JSON.parse(content) as Blog
      
      if (blogData.slug === slug && blogData.published) {
        return blogData
      }
    }
    
    return null
  } catch (error) {
    console.error('Error reading blog:', error)
    return null
  }
}

// Get all blogs
async function getAllBlogs(): Promise<Blog[]> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs')
  try {
    const files = await fs.readdir(dataDirectory)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    const blogs: Blog[] = []
    
    for (const file of jsonFiles) {
      const filePath = path.join(dataDirectory, file)
      const content = await fs.readFile(filePath, 'utf8')
      const blogData = JSON.parse(content) as Blog
      
      if (blogData.published) {
        blogs.push(blogData)
      }
    }
    
    return blogs
  } catch (error) {
    console.error('Error reading blogs:', error)
    return []
  }
}

// Get related blogs based on tags
async function getRelatedBlogs(currentBlog: Blog, limit: number = 3): Promise<Blog[]> {
  const allBlogs = await getAllBlogs()
  
  // Filter out the current blog and find blogs with matching tags
  return allBlogs
    .filter(blog => 
      blog.id !== currentBlog.id && 
      blog.tags.some(tag => currentBlog.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

// Helper function to get image source with fallback
function getImageSrc(src: string): string {
  if (!src || src.trim() === '') {
    return '/images/placeholder-blog.jpg'
  }
  return src
}

// Generate metadata
export async function generateMetadata({ params }: BlogPageParams): Promise<Metadata> {
  // Fix: Await params before accessing its properties
  const resolvedParams = await Promise.resolve(params)
  const blog = await getBlogBySlug(resolvedParams.slug)

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found."
    }
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: `/blog/${blog.slug}`,
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title
        }
      ],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author]
    }
  }
}

// Sample gallery images - in production, these would come from your CMS or data files
const getGalleryImages = (blogSlug: string) => {
  // This could be customized based on blog category or content
  // For now, using sample images
  return [
    {
      src: "https://yashikatourandtravel.com/wp-content/uploads/2023/10/1.webp",
      alt: "Tour vehicle",
      caption: "Our premium fleet of vehicles"
    },
    {
      src: "https://yashikatourandtravel.com/wp-content/uploads/2023/10/2.webp",
      alt: "Sedan car",
      caption: "Comfortable sedans for city travel"
    },
    {
      src: "https://yashikatourandtravel.com/wp-content/uploads/2023/10/3.webp",
      alt: "SUV",
      caption: "Spacious SUVs for group travel"
    },
    {
      src: "https://yashikatourandtravel.com/wp-content/uploads/2023/10/7.webp",
      alt: "Taxi service",
      caption: "Professional drivers at your service"
    }
  ]
}

export default async function BlogPage({ params }: BlogPageParams) {
  // Fix: Await params before accessing its properties
  const resolvedParams = await Promise.resolve(params)
  const blog = await getBlogBySlug(resolvedParams.slug)
  
  if (!blog) {
    notFound()
  }
  
  // Get gallery images for this blog
  const galleryImages = getGalleryImages(resolvedParams.slug)
  
  // Get related blogs
  const relatedBlogs = await getRelatedBlogs(blog)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{blog.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content area - 2/3 width on large screens */}
        <div className="lg:w-2/3">
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Cover image */}
            <div className="relative h-80">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Blog header */}
            <div className="p-6 sm:p-8 border-b">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <UserIcon size={16} className="mr-1" />
                  <span>{blog.author}</span>
                </div>
                
                <div className="flex items-center">
                  <CalendarIcon size={16} className="mr-1" />
                  <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString()}</time>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    <span className="inline-flex items-center gap-1">
                      <TagIcon size={12} />
                      {tag.replace(/-/g, ' ')}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Blog content */}
            <div className="p-6 sm:p-8 prose prose-slate max-w-none">
              <BlogContent content={blog.content} />
            </div>

            {/* FAQs section */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="container mx-auto px-4 max-w-4xl">
                <BlogFAQs faqs={blog.faqs} />
              </div>
            )}

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="mt-16 p-6 sm:p-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedBlogs.map(relatedBlog => (
                    <div key={relatedBlog.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                      <div className="relative h-48">
                        <Link href={`/blog/${relatedBlog.slug}`}>
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
                        <Link href={`/blog/${relatedBlog.slug}`}>
                          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">{relatedBlog.title}</h3>
                        </Link>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{relatedBlog.author}</span>
                          <Link 
                            href={`/blog/${relatedBlog.slug}`}
                            className="text-blue-600 text-sm hover:underline"
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
            
            {/* Comments section - Use the CommentSection component */}
            <div className="p-6 sm:p-8 border-t">
              <CommentSection 
                blogId={blog.id.toString()} 
                comments={blog.comments || []}
              />
            </div>
            
            {/* FAQs section if available */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="p-6 sm:p-8 border-t">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {blog.faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
        
        {/* Sidebar - 1/3 width on large screens */}
        <div className="lg:w-1/3 space-y-8">
          {/* Booking Form (reusing the BusBookingForm) */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="bg-orange-500 text-white py-4 px-6 rounded-t-lg">
              <h3 className="text-xl font-semibold">Book Your Ride Now</h3>
              <p className="text-sm mt-1">Fill the form below and we'll get back to you shortly</p>
            </div>
            <div className="p-4">
              <BusBookingForm />
            </div>
          </div>
          
          {/* Gallery Carousel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Our Services Gallery</h3>
            <BlogGalleryCarousel images={galleryImages} className="mb-4" />
            <p className="text-sm text-gray-600">
              Experience our premium fleet of vehicles and professional services
            </p>
            <a 
              href="/services" 
              className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium"
            >
              View All Services →
            </a>
          </div>
          
          {/* Related services/content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Our Popular Services</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/servicelocaltaxi" 
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <span className="bg-gray-100 rounded-full p-1 mr-3">🚕</span>
                  <span>Local Taxi Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="/serviceout" 
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <span className="bg-gray-100 rounded-full p-1 mr-3">🚙</span>
                  <span>Outstation Taxi Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="/serviceTempo" 
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <span className="bg-gray-100 rounded-full p-1 mr-3">🚐</span>
                  <span>Tempo Traveller Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="/servicebus" 
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <span className="bg-gray-100 rounded-full p-1 mr-3">🚌</span>
                  <span>Bus Rental Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="/serviceCorporateCab" 
                  className="flex items-center text-gray-700 hover:text-orange-500"
                >
                  <span className="bg-gray-100 rounded-full p-1 mr-3">🏢</span>
                  <span>Corporate Cab Solutions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}