import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// Helper function to find a comment in all blog files
async function findCommentInBlogs(commentId: string) {
  try {
    const files = await fs.readdir(dataDirectory);
    const blogFiles = files.filter(file => file.endsWith('.json'));
    
    for (const file of blogFiles) {
      const content = await fs.readFile(path.join(dataDirectory, file), 'utf8');
      const blog = JSON.parse(content);
      
      if (blog.comments && Array.isArray(blog.comments)) {
        const commentIndex = blog.comments.findIndex((c: any) => c.id === commentId);
        
        if (commentIndex !== -1) {
          return { blog, blogPath: path.join(dataDirectory, file), commentIndex };
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error finding comment:', error);
    return null;
  }
}

// UPDATE (PATCH) a comment
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { status } = await request.json();
    
    // Find the comment in blogs
    const result = await findCommentInBlogs(id);
    
    if (!result) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    
    const { blog, blogPath, commentIndex } = result;
    
    // Update comment status
    if (status === 'approved') {
      blog.comments[commentIndex].approved = true;
    } else if (status === 'rejected' || status === 'spam') {
      blog.comments[commentIndex].approved = false;
    }
    
    // Add status field to keep track of admin decisions
    blog.comments[commentIndex].status = status;
    
    // Save the updated blog
    await fs.writeFile(blogPath, JSON.stringify(blog, null, 2));
    
    return NextResponse.json({ 
      success: true,
      message: `Comment status updated to ${status}`
    });
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 });
  }
}

// DELETE a comment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Find the comment in blogs
    const result = await findCommentInBlogs(id);
    
    if (!result) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    
    const { blog, blogPath, commentIndex } = result;
    
    // Remove the comment
    blog.comments.splice(commentIndex, 1);
    
    // Save the updated blog
    await fs.writeFile(blogPath, JSON.stringify(blog, null, 2));
    
    return NextResponse.json({ 
      success: true,
      message: 'Comment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 });
  }
}

// GET a single comment
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Find the comment in blogs
    const result = await findCommentInBlogs(id);
    
    if (!result) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }
    
    const { blog, commentIndex } = result;
    const comment = blog.comments[commentIndex];
    
    return NextResponse.json({
      ...comment,
      blogId: blog.id,
      blogTitle: blog.title,
      status: comment.approved ? 'approved' : 'pending',
      createdAt: comment.date
    });
  } catch (error) {
    console.error('Error getting comment:', error);
    return NextResponse.json({ error: 'Failed to get comment' }, { status: 500 });
  }
}