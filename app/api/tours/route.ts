import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

// This would connect to your database in a real app
let tours = [
  { id: 1, name: "Delhi to Jaipur", price: "₹2,500", duration: "2 Days", status: "Active" },
  { id: 2, name: "Noida to Agra", price: "₹1,800", duration: "1 Day", status: "Active" },
];

export async function GET() {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  return NextResponse.json({ tours });
}

export async function POST(request: Request) {
  const session = await getServerSession();
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const data = await request.json();
  const newTour = {
    id: tours.length + 1,
    ...data,
    status: "Active",
  };
  
  tours.push(newTour);
  return NextResponse.json({ tour: newTour }, { status: 201 });
}