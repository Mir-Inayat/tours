"use client";

import { useState } from "react";
import { Booking } from "@/types/booking";
import { 
  MoreVertical, 
  Edit, 
  CheckCircle, 
  XCircle, 
  Download, 
  Trash2,
  Eye
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
      router.refresh();
      setIsStatusUpdateAlertOpen(false);
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

      // Refresh rather than reload
      router.refresh();
      router.push('/admin/bookings');
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

  const viewBookingDetails = () => {
    router.push(`/admin/bookings/${booking.id}`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <MoreVertical className="h-4 w-4 text-gray-500" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          
          <DropdownMenuItem onClick={viewBookingDetails}>
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setIsStatusUpdateAlertOpen(true)}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Update Status
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={downloadBookingDetails}>
            <Download className="h-4 w-4 mr-2" />
            Download Details
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem 
            onClick={() => setIsDeleteAlertOpen(true)}
            className="text-red-600 focus:text-red-600"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this booking. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Status Update Dialog */}
      <AlertDialog open={isStatusUpdateAlertOpen} onOpenChange={setIsStatusUpdateAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update Booking Status</AlertDialogTitle>
            <AlertDialogDescription>
              Change the status of this booking.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="status" className="text-right">
                Status
              </label>
              <select 
                id="status"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as any)}
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleStatusUpdate}>
              Update
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}