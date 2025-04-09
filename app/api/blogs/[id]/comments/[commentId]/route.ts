import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { Blog } from '@/types/blog';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// PATCH/UPDATE a comment
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string; commentId: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    
    const { approved } = await request.json();
    
    if (!blog.comments) {
      return NextResponse.json({ error: 'No comments found' }, { status: 404 });
    }
    
    const commentIndex = blog.comments.findIndex(c => c.id === params.commentId);
    
    if (commentIndex === -1) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    
    blog.comments[commentIndex].approved = approved;
    
    await fs.writeFile(filePath, JSON.stringify(blog, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 });
  }
}

// DELETE a comment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; commentId: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    
    if (!blog.comments) {
      return NextResponse.json({ error: 'No comments found' }, { status: 404 });
    }
    
    blog.comments = blog.comments.filter(c => c.id !== params.commentId);
    
    await fs.writeFile(filePath, JSON.stringify(blog, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 });
  }
}