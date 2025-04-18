import { Blog } from "@/types/blog";

// Client-safe function to get blogs by tag
export async function getBlogsByTag(tag: string): Promise<Blog[]> {
  try {
    const response = await fetch(`/api/blogs?tag=${encodeURIComponent(tag)}`);
    if (!response.ok) throw new Error('Failed to fetch blogs by tag');
    return response.json();
  } catch (error) {
    console.error('Error fetching blogs by tag:', error);
    return [];
  }
}

// Client-safe function to get all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch('/api/blogs');
    if (!response.ok) throw new Error('Failed to fetch blogs');
    return response.json();
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}