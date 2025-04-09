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

// GET all blogs
export async function GET() {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
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