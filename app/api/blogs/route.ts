import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { Blog } from '@/types/blog';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// Helper function to read all blogs
async function getBlogs(): Promise<Blog[]> {
  try {
    const files = await fs.readdir(dataDirectory);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    const blogs = await Promise.all(jsonFiles.map(async (file) => {
      const filePath = path.join(dataDirectory, file);
      const content = await fs.readFile(filePath, 'utf8');
      return JSON.parse(content) as Blog;
    }));
    
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// GET endpoint for blogs with optional tag filter
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tag = searchParams.get('tag');
    
    // Ensure the directory exists
    try {
      await fs.access(dataDirectory);
    } catch (error) {
      // Create directory if it doesn't exist
      await fs.mkdir(dataDirectory, { recursive: true });
      return NextResponse.json([]);
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
    
    // Filter and sort blogs
    let filteredBlogs = blogs.filter(blog => blog.published);
    
    if (tag) {
      // If tag is provided, filter by tag
      filteredBlogs = filteredBlogs.filter(blog => 
        blog.tags && blog.tags.some(blogTag => 
          blogTag.toLowerCase() === tag.toLowerCase())
      );
    }
    
    // Sort blogs by date (newest first)
    filteredBlogs.sort((a, b) => {
      const dateA = new Date(a.publishedDate || a.createdAt);
      const dateB = new Date(b.publishedDate || b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
    
    return NextResponse.json(filteredBlogs);
    
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST a new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, excerpt, coverImage, author, tags } = body;
    
    // Generate an ID and slug
    const id = Date.now().toString();
    const slug = title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    
    const newBlog: Blog = {
      id,
      title,
      slug,
      content,
      excerpt: excerpt || content.substring(0, 150) + '...',
      coverImage: coverImage || '/placeholder-blog.jpg',
      author,
      date: new Date().toISOString(),
      published: body.published || false,
      tags: tags || []
    };
    
    // Save to file
    const filePath = path.join(dataDirectory, `${id}.json`);
    await fs.writeFile(filePath, JSON.stringify(newBlog, null, 2));
    
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}