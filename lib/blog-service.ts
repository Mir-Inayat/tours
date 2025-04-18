import fs from "fs/promises";
import path from "path";
import { Blog } from "@/types/blog";

// Function to get blogs by tag
export async function getBlogsByTagServer(tag: string): Promise<Blog[]> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs');
  try {
    // Ensure the directory exists
    try {
      await fs.access(dataDirectory);
    } catch (error) {
      // Create directory if it doesn't exist
      await fs.mkdir(dataDirectory, { recursive: true });
      return [];
    }
    
    // Read all blog files
    const files = await fs.readdir(dataDirectory);
    const blogFiles = files.filter(file => file.endsWith('.json'));
    
    // Parse each blog file and filter by tag
    const blogsWithTag = await Promise.all(
      blogFiles.map(async (file) => {
        const content = await fs.readFile(path.join(dataDirectory, file), 'utf8');
        const blog = JSON.parse(content) as Blog;
        
        // Check if the blog has the specified tag
        if (blog.tags && 
            blog.tags.some(blogTag => 
              blogTag.toLowerCase() === tag.toLowerCase())) {
          return blog;
        }
        return null;
      })
    );
    
    // Filter out null values and published blogs
    return blogsWithTag
      .filter((blog): blog is Blog => blog !== null && !!blog.published)
      .sort((a, b) => {
        const dateA = new Date(a.publishedDate || a.createdAt);
        const dateB = new Date(b.publishedDate || b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
  } catch (error) {
    console.error('Error fetching blogs by tag:', error);
    return [];
  }
}

// Function to get all blogs
export async function getAllBlogsServer(): Promise<Blog[]> {
  const dataDirectory = path.join(process.cwd(), 'data', 'blogs');
  try {
    // Ensure the directory exists
    try {
      await fs.access(dataDirectory);
    } catch (error) {
      // Create directory if it doesn't exist
      await fs.mkdir(dataDirectory, { recursive: true });
      return [];
    }
    
    // Read all blog files
    const files = await fs.readdir(dataDirectory);
    const blogFiles = files.filter(file => file.endsWith('.json'));
    
    // Parse each blog file
    const blogs = await Promise.all(
      blogFiles.map(async (file) => {
        const content = await fs.readFile(path.join(dataDirectory, file), 'utf8');
        return JSON.parse(content) as Blog;
      })
    );
    
    // Return only published blogs, sorted by date
    return blogs
      .filter(blog => blog.published)
      .sort((a, b) => {
        const dateA = new Date(a.publishedDate || a.createdAt);
        const dateB = new Date(b.publishedDate || b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}

// Function to get a blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  // Your implementation to fetch the blog
  
  // Make sure to include faqs in the returned data
  return {
    ...blogData,
    faqs: blogData.faqs || []
  };
}