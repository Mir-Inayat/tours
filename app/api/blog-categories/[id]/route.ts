import { NextRequest, NextResponse } from 'next/server';

// Reference the categories from the parent route
// In a real app, this would come from your database
import { categories } from '../route';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // In a real app, delete from database
    const index = categories.findIndex(cat => cat.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }
    
    categories.splice(index, 1);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}