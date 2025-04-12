import { NextResponse } from 'next/server'

// Define the data structure for bookings
export interface BookingData {
  fullName: string;
  phoneNumber: string;
  pickupLocation: string;
  dropoffLocation: string;
  tripType: "One-Way Trip" | "Round Trip";
  vehicleType: string;
  numberOfPeople: string;
  departureDate: string;
  returnDate?: string;
  date: string;
  status: "new" | "processed" | "completed" | "cancelled";
}

// Mock database for development
let bookings: BookingData[] = [];

export async function GET() {
  try {
    // In a real app, you would fetch from a database
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
    const booking = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'phoneNumber', 'pickupLocation', 'dropoffLocation', 
                           'vehicleType', 'numberOfPeople', 'departureDate'];
    
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
    
    // Add ID and timestamp if not provided
    const newBooking = {
      ...booking,
      id: `booking-${Date.now()}`,
      date: booking.date || new Date().toISOString(),
      status: booking.status || 'new'
    };
    
    // In a real app, you would save to a database
    bookings.push(newBooking);
    
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
