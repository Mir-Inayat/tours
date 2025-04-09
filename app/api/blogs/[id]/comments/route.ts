import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { Blog, Comment } from '@/types/blog';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// POST a new comment
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    
    const { name, email, content: commentContent } = await request.json();
    
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      email,
      content: commentContent,
      date: new Date().toISOString(),
      approved: false // Comments need approval by default
    };
    
    // Initialize comments array if it doesn't exist
    if (!blog.comments) {
      blog.comments = [];
    }
    
    blog.comments.push(newComment);
    
    await fs.writeFile(filePath, JSON.stringify(blog, null, 2));
    
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
  }
}