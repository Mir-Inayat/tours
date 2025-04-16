import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Booking } from '@/types/booking';
import { saveBooking } from '@/lib/bookings';
import fs from 'fs/promises';
import path from 'path';

const bookingsFilePath = path.join(process.cwd(), 'data', 'bookings.json');

export async function GET() {
  try {
    let bookings = [];
    try {
      const content = await fs.readFile(bookingsFilePath, 'utf8');
      bookings = JSON.parse(content);
    } catch (error) {
      // File doesn't exist yet, that's okay
    }
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'from', 'to', 'date', 'passengers', 'vehicleType'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` }, 
        { status: 400 }
      );
    }
    
    const newBooking: Booking = {
      id: uuidv4(),
      ...data,
      sourcePage: data.sourcePage || 'unknown', // Ensure sourcePage is included
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    await saveBooking(newBooking);
    
    return NextResponse.json({ success: true, message: "Booking received", id: newBooking.id });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
