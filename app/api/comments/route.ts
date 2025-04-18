import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

// Define the comments data directory
const dataDirectory = path.join(process.cwd(), 'data', 'blogs');

// GET all comments across all blogs
export async function GET() {
  try {
    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDirectory);
    } catch (error) {
      // Directory doesn't exist, create it
      await fs.mkdir(dataDirectory, { recursive: true });
      // Return empty array since there are no blogs/comments yet
      return NextResponse.json([]);
    }
    
    // Get all blog files
    const files = await fs.readdir(dataDirectory);
    const blogFiles = files.filter(file => file.endsWith('.json'));
    
    // Collect comments from all blogs
    const allComments = [];
    
    for (const file of blogFiles) {
      try {
        const content = await fs.readFile(path.join(dataDirectory, file), 'utf8');
        const blog = JSON.parse(content);
        
        if (blog.comments && Array.isArray(blog.comments)) {
          // Map comments to include blog information
          const blogComments = blog.comments.map(comment => ({
            ...comment,
            blogId: blog.id,
            blogTitle: blog.title,
            // Map to expected status format
            status: comment.approved ? 'approved' : 'pending',
            // Ensure createdAt is available
            createdAt: comment.date
          }));
          
          allComments.push(...blogComments);
        }
      } catch (error) {
        console.error(`Error processing blog file ${file}:`, error);
        // Continue with other files even if one fails
      }
    }
    
    // Sort by date, most recent first
    allComments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json(allComments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}