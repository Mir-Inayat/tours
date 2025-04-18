import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// This will dynamically generate categories from blog tags
export async function getCategories() {
  try {
    const blogsDirectory = path.join(process.cwd(), 'data/blogs');
    
    // Check if directory exists
    if (!fs.existsSync(blogsDirectory)) {
      return [];
    }
    
    // Get all JSON files in the directory
    const files = fs.readdirSync(blogsDirectory).filter(file => file.endsWith('.json'));
    
    // Map of tags to avoid duplicates
    const tagMap = new Map();
    
    // Process each blog file
    for (const file of files) {
      const filePath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const blog = JSON.parse(fileContent);
      
      // Process tags if they exist
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => {
          if (tag && !tagMap.has(tag)) {
            // Create a slug from the tag
            const slug = tag.toLowerCase().replace(/[^\w\s-]/gi, '').replace(/\s+/g, '-');
            
            tagMap.set(tag, {
              id: uuidv4(),
              name: tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
              slug,
              description: `Posts related to ${tag.replace(/-/g, ' ')}`,
              createdAt: new Date().toISOString()
            });
          }
        });
      }
    }
    
    // Convert map to array
    return Array.from(tagMap.values());
  } catch (error) {
    console.error("Error reading blog files:", error);
    return [];
  }
}

// Export the categories for other files to use
export let categories = [];

// Initialize categories 
(async () => {
  categories = await getCategories();
})();

export async function GET() {
  // Ensure categories are loaded
  if (categories.length === 0) {
    categories = await getCategories();
  }
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }
    
    // Create slug from name
    const slug = body.name
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    // Create new category
    const newCategory = {
      id: uuidv4(),
      name: body.name,
      slug,
      description: body.description || "",
      createdAt: new Date().toISOString(),
    };
    
    // Add to in-memory categories
    categories.push(newCategory);
    
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}