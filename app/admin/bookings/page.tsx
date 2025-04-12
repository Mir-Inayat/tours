"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import type { BookingData } from "@/app/api/bookings/route"

export default function BookingsPage() {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/bookings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching bookings');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchBookings();
  }, []);

  async function updateBookingStatus(id: string, status: string) {
    // Implement status update logic
    console.log(`Updating booking ${id} to ${status}`);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Booking Requests</h1>
        
        {isLoading ? (
          <div className="text-center py-8">Loading bookings...</div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No bookings found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Vehicle</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Trip Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Dates</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{booking.fullName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{booking.phoneNumber}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {booking.vehicleType} ({booking.numberOfPeople} people)
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{booking.tripType}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {new Date(booking.departureDate).toLocaleDateString()}
                      {booking.returnDate && (
                        <> - {new Date(booking.returnDate).toLocaleDateString()}</>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium
                          ${booking.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                            booking.status === 'processed' ? 'bg-yellow-100 text-yellow-800' :
                            booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateBookingStatus(booking.id, 'processed')}
                        >
                          Process
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}