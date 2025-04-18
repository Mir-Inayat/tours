import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Blog } from '@/types/blog';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const resolvedParams = await Promise.resolve(params);
  const blogId = resolvedParams.id;

  try {
    const filePath = path.join(dataDirectory, `${blogId}.json`);
    
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const resolvedParams = await Promise.resolve(params);
  const blogId = resolvedParams.id;

  try {
    const filePath = path.join(dataDirectory, `${blogId}.json`);
    
    const content = await fs.readFile(filePath, 'utf8');
    const blog = JSON.parse(content) as Blog;
    
    const updates = await request.json();
    const updatedBlog = { ...blog, ...updates };
    
    await fs.writeFile(
      filePath,
      JSON.stringify(updatedBlog, null, 2),
      'utf8'
    );
    
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const resolvedParams = await Promise.resolve(params);
  const blogId = resolvedParams.id;

  try {
    const filePath = path.join(dataDirectory, `${blogId}.json`);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // Delete the file
    await fs.unlink(filePath);
    
    return NextResponse.json(
      { success: true, message: 'Blog deleted successfully' }
    );
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const blogData = await request.json();
  
  // Make sure faqs are included in the data passed to your storage function
  const updatedBlog = await updateBlogInDatabase({
    ...blogData,
    faqs: blogData.faqs || [],
    id: params.id
  });
  
  return Response.json(updatedBlog);
}