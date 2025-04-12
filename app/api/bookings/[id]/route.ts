import { NextResponse } from 'next/server';
import { BookingData } from '../route';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Fix: Directly use params.id without awaiting as params is already resolved
    const bookingId = params.id;
    const updates = await request.json();
    
    // In a real app, you'd use a database query here
    // For simplicity here, we'll use global state
    const bookings: BookingData[] = (global as any).bookings || [];
    
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }
    
    const updatedBooking = {
      ...bookings[bookingIndex],
      ...updates
    };
    
    bookings[bookingIndex] = updatedBooking;
    
    return NextResponse.json({
      success: true,
      message: 'Booking updated successfully',
      booking: updatedBooking
    });
    
  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = params.id;
    
    const bookings: BookingData[] = (global as any).bookings || [];
    
    const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }
    
    const deletedBooking = bookings.splice(bookingIndex, 1)[0];
    
    return NextResponse.json({
      success: true,
      message: 'Booking deleted successfully',
      booking: deletedBooking
    });
    
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete booking' },
      { status: 500 }
    );
  }
}