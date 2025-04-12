import { NextResponse } from 'next/server';

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

// Store bookings in memory for development (in production you'd use a database)
if (!(global as any).bookings) {
  (global as any).bookings = [];
}

export async function GET() {
  try {
    return NextResponse.json((global as any).bookings);
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
    
    // Create a new booking with a unique ID
    const newBooking: BookingData = {
      ...booking,
      id: `booking-${Date.now()}`,
      date: booking.date || new Date().toISOString(),
      status: booking.status || 'new'
    };
    
    // Add to our in-memory storage
    (global as any).bookings.push(newBooking);
    
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
