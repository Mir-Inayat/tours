import fs from 'fs/promises';
import path from 'path';
import { Booking } from '@/types/booking';

const bookingsFilePath = path.join(process.cwd(), 'data', 'bookings.json');

/**
 * Get all bookings from the data file
 */
export async function getBookings(): Promise<Booking[]> {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch (error) {
      // Directory doesn't exist, create it
      await fs.mkdir(dataDir, { recursive: true });
    }

    try {
      const content = await fs.readFile(bookingsFilePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      // File doesn't exist yet, return empty array
      return [];
    }
  } catch (error) {
    console.error('Error reading bookings file:', error);
    return []; // Return empty array in case of error
  }
}

/**
 * Save a new booking to the data file
 */
export async function saveBooking(booking: Booking): Promise<void> {
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

/**
 * Delete a booking by ID
 */
export async function deleteBooking(id: string): Promise<boolean> {
  try {
    const bookings = await getBookings();
    const index = bookings.findIndex(booking => booking.id === id);
    
    if (index === -1) {
      return false;
    }
    
    bookings.splice(index, 1);
    await fs.writeFile(bookingsFilePath, JSON.stringify(bookings, null, 2));
    return true;
  } catch (error) {
    console.error('Error deleting booking:', error);
    return false;
  }
}

/**
 * Update a booking by ID
 */
export async function updateBooking(id: string, updates: Partial<Booking>): Promise<Booking | null> {
  try {
    const bookings = await getBookings();
    const index = bookings.findIndex(booking => booking.id === id);
    
    if (index === -1) {
      return null;
    }
    
    const updatedBooking = {
      ...bookings[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    bookings[index] = updatedBooking;
    await fs.writeFile(bookingsFilePath, JSON.stringify(bookings, null, 2));
    
    return updatedBooking;
  } catch (error) {
    console.error('Error updating booking:', error);
    return null;
  }
}

/**
 * Get a booking by ID
 */
export async function getBookingById(id: string): Promise<Booking | null> {
  try {
    const bookings = await getBookings();
    const booking = bookings.find(booking => booking.id === id);
    return booking || null;
  } catch (error) {
    console.error('Error getting booking by ID:', error);
    return null;
  }
}