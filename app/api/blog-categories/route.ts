import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// In a real app, this would come from your database
// Add 'export' keyword here to make the array available for import
export let categories = [
  {
    id: "1",
    name: "Travel",
    slug: "travel",
    description: "Travel related articles",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Adventure",
    slug: "adventure",
    description: "Adventure related articles",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Tips",
    slug: "tips",
    description: "Travel tips and guides",
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  // In a real app, fetch from database
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
    
    // In a real app, save to database
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