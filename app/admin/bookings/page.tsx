"use client";

import { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogClose 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar, Car, Search, Eye, MapPin, User, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

// Types
interface Booking {
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

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [filterVehicle, setFilterVehicle] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterTripType, setFilterTripType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch bookings data
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Fetch from API endpoint
        const response = await fetch('/api/bookings');
        
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        
        const data = await response.json();
        setBookings(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast({
          title: "Error",
          description: "Failed to load bookings. Please try again.",
          variant: "destructive"
        });
        setBookings([]);
        setIsLoading(false);
      }
    };
    
    fetchBookings();
  }, []);
  
  // Update booking status
  const updateStatus = async (id: string, newStatus: "new" | "processed" | "completed" | "cancelled") => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update booking status');
      }
      
      // Optimistically update UI
      setBookings(prev => 
        prev.map(booking => booking.id === id ? {...booking, status: newStatus} : booking)
      );
      
      if (selectedBooking && selectedBooking.id === id) {
        setSelectedBooking({...selectedBooking, status: newStatus});
      }
      
      toast({
        title: "Status Updated",
        description: `Booking has been marked as ${newStatus}.`,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  // Filter bookings
  const filteredBookings = bookings.filter(booking => {
    const matchesVehicle = filterVehicle ? booking.vehicleType === filterVehicle : true;
    const matchesStatus = filterStatus ? booking.status === filterStatus : true;
    const matchesTripType = filterTripType ? booking.tripType === filterTripType : true;
    const matchesSearch = searchQuery 
      ? booking.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        booking.phoneNumber?.includes(searchQuery) ||
        booking.pickupLocation?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.dropoffLocation?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesVehicle && matchesStatus && matchesTripType && matchesSearch;
  });

  // Get unique vehicle types for filter dropdown
  const vehicleTypes = [...new Set(bookings.map(booking => booking.vehicleType))];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Booking Management</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, phone, location"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Vehicle Type</label>
            <Select value={filterVehicle} onValueChange={setFilterVehicle}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Vehicles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Vehicles</SelectItem>
                {vehicleTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Trip Type</label>
            <Select value={filterTripType} onValueChange={setFilterTripType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Trips" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Trips</SelectItem>
                <SelectItem value="One-Way Trip">One-Way</SelectItem>
                <SelectItem value="Round Trip">Round Trip</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Trip</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                    No bookings found
                  </TableCell>
                </TableRow>
              ) : (
                filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      {format(new Date(booking.date), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{booking.fullName}</div>
                      <div className="text-sm text-muted-foreground">{booking.phoneNumber}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        booking.tripType === 'Round Trip' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-blue-100 text-blue-800'
                      }>
                        {booking.tripType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{booking.vehicleType}</div>
                      <div className="text-sm text-muted-foreground">{booking.numberOfPeople} people</div>
                    </TableCell>
                    <TableCell>
                      {format(new Date(booking.departureDate), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        booking.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        booking.status === 'processed' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          setSelectedBooking(booking);
                          setIsViewDialogOpen(true);
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
      
      {/* View Booking Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              Booking Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedBooking && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {format(new Date(selectedBooking.date), "dd MMMM yyyy")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <div className="flex items-center gap-2">
                    <Badge className={
                      selectedBooking.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      selectedBooking.status === 'processed' ? 'bg-yellow-100 text-yellow-800' :
                      selectedBooking.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                    </Badge>
                    <Select 
                      defaultValue={selectedBooking.status} 
                      onValueChange={(value) => updateStatus(
                        selectedBooking.id, 
                        value as "new" | "processed" | "completed" | "cancelled"
                      )}
                    >
                      <SelectTrigger className="w-[140px] h-7">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="processed">Processed</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      {selectedBooking.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {selectedBooking.phoneNumber}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Trip Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Trip Type</p>
                    <p className="font-medium">{selectedBooking.tripType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Number of People</p>
                    <p className="font-medium">{selectedBooking.numberOfPeople}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Pick-up Location</p>
                    <p className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      {selectedBooking.pickupLocation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Drop-off Location</p>
                    <p className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      {selectedBooking.dropoffLocation}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Vehicle & Schedule</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Vehicle Type</p>
                    <p className="font-medium">{selectedBooking.vehicleType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Departure Date</p>
                    <p className="font-medium">
                      {format(new Date(selectedBooking.departureDate), "dd MMM yyyy")}
                    </p>
                  </div>
                  {selectedBooking.returnDate && (
                    <div>
                      <p className="text-sm text-gray-500">Return Date</p>
                      <p className="font-medium">
                        {format(new Date(selectedBooking.returnDate), "dd MMM yyyy")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between space-x-2 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => updateStatus(selectedBooking.id, "cancelled")}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Cancel Booking
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => updateStatus(selectedBooking.id, "processed")}
                  >
                    Mark as Processed
                  </Button>
                  <Button 
                    onClick={() => updateStatus(selectedBooking.id, "completed")}
                  >
                    Complete Booking
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}