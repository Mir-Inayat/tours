"use client";

import { useState } from "react";
import { Booking } from "@/types/booking";
import { 
  MoreVertical, 
  Edit, 
  CheckCircle, 
  XCircle, 
  Download, 
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface BookingActionsProps {
  booking: Booking;
}

export function BookingActions({ booking }: BookingActionsProps) {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isStatusUpdateAlertOpen, setIsStatusUpdateAlertOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<'pending' | 'confirmed' | 'completed' | 'cancelled'>(booking.status);

  const handleStatusUpdate = async () => {
    try {
      const response = await fetch(`/api/bookings/${booking.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update booking status');
      }

      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error('Error updating booking status:', error);
      alert('Failed to update booking status. Please try again.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/bookings/${booking.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking. Please try again.');
    }
  };

  const downloadBookingDetails = () => {
    // Format booking details for download
    const bookingDetails = `
Booking ID: ${booking.id}
Name: ${booking.name}
Contact: ${booking.phone}${booking.email ? `\nEmail: ${booking.email}` : ''}
From: ${booking.from}
To: ${booking.to}
Date: ${new Date(booking.date).toLocaleDateString()}
Passengers: ${booking.passengers}
Vehicle Type: ${booking.vehicleType}
Status: ${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
Created: ${new Date(booking.createdAt).toLocaleString()}
${booking.message ? `\nMessage: ${booking.message}` : ''}
    `;

    // Create a blob and download it
    const blob = new Blob([bookingDetails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking-${booking.id.slice(0, 8)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <MoreVertical className="h-4 w-4 text-gray-500" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[200px]">
          <DropdownMenuLabel>Booking Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onSelect={() => window.location.href = `/admin/bookings/${booking.id}`}>
            <Edit className="h-4 w-4 mr-2" />
            View Details
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          {booking.status !== 'confirmed' && (
            <DropdownMenuItem 
              onSelect={() => {
                setNewStatus('confirmed');
                setIsStatusUpdateAlertOpen(true);
              }}
            >
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              Confirm Booking
            </DropdownMenuItem>
          )}
          
          {booking.status !== 'completed' && (
            <DropdownMenuItem
              onSelect={() => {
                setNewStatus('completed');
                setIsStatusUpdateAlertOpen(true);
              }}
            >
              <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
              Mark as Completed
            </DropdownMenuItem>
          )}
          
          {booking.status !== 'cancelled' && (
            <DropdownMenuItem
              onSelect={() => {
                setNewStatus('cancelled');
                setIsStatusUpdateAlertOpen(true);
              }}
            >
              <XCircle className="h-4 w-4 mr-2 text-red-500" />
              Cancel Booking
            </DropdownMenuItem>
          )}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onSelect={downloadBookingDetails}>
            <Download className="h-4 w-4 mr-2" />
            Download Details
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            className="text-red-600 focus:text-red-700"
            onSelect={() => setIsDeleteAlertOpen(true)}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Booking
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Status Update Alert Dialog */}
      <AlertDialog 
        open={isStatusUpdateAlertOpen} 
        onOpenChange={setIsStatusUpdateAlertOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update Booking Status</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to change this booking's status to{" "}
              <span className="font-semibold text-black">
                {newStatus}
              </span>?
              {newStatus === 'cancelled' && 
                " This will cancel the booking and may notify the customer."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleStatusUpdate}>
              Update Status
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Alert Dialog */}
      <AlertDialog 
        open={isDeleteAlertOpen} 
        onOpenChange={setIsDeleteAlertOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this booking? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}