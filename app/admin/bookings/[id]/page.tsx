import { notFound } from 'next/navigation';
import { getBookingById } from '@/lib/bookings';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { BookingActions } from '@/components/admin/booking-actions';
import { 
  ArrowLeft, 
  CalendarIcon, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  User,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default async function BookingDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const booking = await getBookingById(params.id);
  
  if (!booking) {
    notFound();
  }
  
  // Helper function to get status color
  function getStatusColor(status: string) {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  }
  
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <Link href="/admin/bookings" className="mr-4 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold">Booking Details</h1>
        </div>
        
        <div>
          <BookingActions booking={booking} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main info card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
              <h2 className="text-lg md:text-xl font-semibold">{booking.name}</h2>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Trip Details</h3>
                <div className="mt-2 space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">From:</p>
                      <p className="text-gray-700">{booking.from}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">To:</p>
                      <p className="text-gray-700">{booking.to}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Contact Information</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <p>{booking.phone}</p>
                  </div>
                  {booking.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                      <p className="break-all">{booking.email}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Travel Information</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Date: </span>
                      <span>{formatDate(booking.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Passengers: </span>
                      <span>{booking.passengers}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {booking.message && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Message</h3>
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <div className="flex items-start">
                      <MessageSquare className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{booking.message}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Side panel */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Vehicle</h3>
              <p className="font-medium">{booking.vehicleType}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Booking Created</h3>
              <p>{formatDate(booking.createdAt)}</p>
              <p className="text-xs text-gray-500">{new Date(booking.createdAt).toLocaleTimeString()}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Last Updated</h3>
              <p>{formatDate(booking.updatedAt)}</p>
              <p className="text-xs text-gray-500">{new Date(booking.updatedAt).toLocaleTimeString()}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Source Page</h3>
              <p className="text-sm break-words">
                {booking.sourcePage || 'Unknown'}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Booking ID</h3>
              <p className="font-mono text-xs break-all">{booking.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}