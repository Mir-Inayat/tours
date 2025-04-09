import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { Blog } from '@/types/blog';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// GET a single blog by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }
}

// PATCH/UPDATE a blog
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    
    const updates = await request.json();
    
    // If title changes, update the slug
    if (updates.title && updates.title !== blog.title) {
      updates.slug = updates.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    }
    
    const updatedBlog = { ...blog, ...updates };
    
    await fs.writeFile(filePath, JSON.stringify(updatedBlog, null, 2));
    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE a blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filePath = path.join(dataDirectory, `${params.id}.json`);
    await fs.unlink(filePath);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}