import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Booking } from '@/types/booking';
import fs from 'fs/promises';
import path from 'path';

const bookingsFilePath = path.join(process.cwd(), 'data', 'bookings.json');

// Create the saveBooking function inline if import is causing issues
async function saveBooking(booking: Booking): Promise<void> {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch (error) {
      // Directory doesn't exist, create it
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Get existing bookings
    let bookings: Booking[] = [];
    try {
      const content = await fs.readFile(bookingsFilePath, 'utf8');
      bookings = JSON.parse(content);
    } catch (error) {
      // File doesn't exist yet, that's okay
      console.log("Creating new bookings file");
    }

    // Add new booking
    bookings.push(booking);

    // Write back to file
    await fs.writeFile(bookingsFilePath, JSON.stringify(bookings, null, 2));
  } catch (error) {
    console.error('Error saving booking:', error);
    throw new Error('Failed to save booking');
  }
}

export async function GET() {
  try {
    let bookings: Booking[] = [];
    try {
      const content = await fs.readFile(bookingsFilePath, 'utf8');
      bookings = JSON.parse(content);
    } catch (error) {
      // File doesn't exist yet, return empty array
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
    console.log("Received booking data:", data);
    
    // Validate required fields - remove email from required fields
    const requiredFields = ['name', 'phone', 'from', 'to', 'date', 'passengers', 'vehicleType'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      console.error("Missing required fields:", missingFields);
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` }, 
        { status: 400 }
      );
    }
    
    const newBooking: Booking = {
      id: uuidv4(),
      name: data.name,
      phone: data.phone,
      from: data.from,
      to: data.to,
      date: data.date,
      passengers: data.passengers,
      vehicleType: data.vehicleType,
      message: data.message || "",
      sourcePage: data.sourcePage || 'unknown',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Only add email if provided
    if (data.email) {
      newBooking.email = data.email;
    }
    
    console.log("Saving booking:", newBooking);
    await saveBooking(newBooking);
    
    return NextResponse.json({ 
      success: true, 
      message: "Booking received", 
      id: newBooking.id 
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ 
      error: "Failed to process booking" 
    }, { status: 500 });
  }
}
