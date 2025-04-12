import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the data structure for bookings
export interface BookingData {
  id: string;
  fullName: string;
  phoneNumber: string;
  pickupLocation: string;
  dropoffLocation: string;
  tripType: string;
  vehicleType: string;
  numberOfPeople: string;
  departureDate: string;
  returnDate?: string;
  date: string;
  status: "new" | "processed" | "completed" | "cancelled";
}

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

export async function POST(request: Request) {
  try {
    // Read existing bookings
    let bookings = [];
    try {
      const content = await fs.readFile(bookingsFilePath, 'utf8');
      bookings = JSON.parse(content);
    } catch (error) {
      // File doesn't exist yet, that's okay
    }
    
    const booking = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'fullName', 
      'phoneNumber', 
      'pickupLocation', 
      'dropoffLocation', 
      'vehicleType', 
      'numberOfPeople', 
      'departureDate'
    ];
    
    for (const field of requiredFields) {
      if (!booking[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // If it's a round trip, returnDate is required
    if (booking.tripType === 'Round Trip' && !booking.returnDate) {
      return NextResponse.json(
        { error: 'Return date is required for round trips' },
        { status: 400 }
      );
    }
    
    const newBooking: BookingData = {
      ...booking,
      id: `booking-${Date.now()}`,
      date: booking.date || new Date().toISOString(),
      status: booking.status || 'new'
    };
    
    // Add new booking
    bookings.push(newBooking);
    
    // Make sure directory exists
    await fs.mkdir(path.dirname(bookingsFilePath), { recursive: true });
    
    // Write updated bookings back to file
    await fs.writeFile(bookingsFilePath, JSON.stringify(bookings, null, 2), 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking received successfully',
      booking: newBooking 
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
