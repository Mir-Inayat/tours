"use client";

import { useState, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  Car,
  Mail
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  
  // State for notifications
  const [notifications, setNotifications] = useState({
    comments: 0,
    bookings: 0,
    contacts: 0
  });
  
  // Fetch notification counts
  useEffect(() => {
    const fetchNotificationCounts = async () => {
      try {
        // Fetch bookings
        const bookingsResponse = await fetch('/api/bookings');
        const bookings = await bookingsResponse.json();
        const newBookings = bookings.filter(booking => booking.status === 'new').length;
        
        // Fetch contacts
        const contactsResponse = await fetch('/api/contact');
        const contacts = await contactsResponse.json();
        const newContacts = contacts.filter(contact => contact.status === 'new').length;
        
        // Set notification counts
        setNotifications({
          comments: 0, // Will implement later
          bookings: newBookings,
          contacts: newContacts
        });
      } catch (error) {
        console.error('Error fetching notification counts:', error);
      }
    };
    
    if (status === 'authenticated') {
      fetchNotificationCounts();
      
      // Set up interval to refresh notification counts
      const interval = setInterval(fetchNotificationCounts, 60000); // Refresh every minute
      
      return () => clearInterval(interval);
    }
  }, [status]);
  
  useEffect(() => {
    if (status === "unauthenticated" && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [status, router, pathname]);

  if (pathname === "/admin/login") {
    return children;
  }

  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!session && pathname !== "/admin/login") {
    return null; // Will redirect in useEffect
  }
  
  const totalNotifications = notifications.comments + notifications.bookings + notifications.contacts;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="mt-6 space-y-1">
          <Link href="/admin/dashboard" className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === "/admin/dashboard" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <LayoutDashboard className="h-5 w-5 mr-3 text-gray-500" />
            Dashboard
          </Link>
          
          <Link href="/admin/blogs" className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === "/admin/blogs" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <FileText className="h-5 w-5 mr-3 text-gray-500" />
            Blogs
          </Link>
          
          <Link href="/admin/comments" className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === "/admin/comments" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <MessageSquare className="h-5 w-5 mr-3 text-gray-500" />
            Comments
            {notifications.comments > 0 && (
              <Badge className="ml-auto bg-red-500 text-white">
                {notifications.comments}
              </Badge>
            )}
          </Link>
          
          <Link href="/admin/contacts" className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === "/admin/contacts" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <Mail className="h-5 w-5 mr-3 text-gray-500" />
            Contact Forms
            {notifications.contacts > 0 && (
              <Badge className="ml-auto bg-red-500 text-white">
                {notifications.contacts}
              </Badge>
            )}
          </Link>
          
          <Link href="/admin/bookings" className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === "/admin/bookings" ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            <Car className="h-5 w-5 mr-3 text-gray-500" />
            Bookings
            {notifications.bookings > 0 && (
              <Badge className="ml-auto bg-red-500 text-white">
                {notifications.bookings}
              </Badge>
            )}
          </Link>
          
          <button
            onClick={() => router.push('/api/auth/signout')}
            className="flex w-full items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            <span>Log Out</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              {pathname === "/admin/dashboard" && "Dashboard"}
              {pathname === "/admin/blogs" && "Blog Management"}
              {pathname === "/admin/comments" && "Comments Management"}
              {pathname === "/admin/contacts" && "Contact Form Management"}
              {pathname === "/admin/bookings" && "Booking Management"}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
                {totalNotifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 flex items-center justify-center p-0 rounded-full">
                    {totalNotifications}
                  </Badge>
                )}
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  {session?.user?.name?.charAt(0) || 'A'}
                </div>
                <span className="ml-2 text-gray-700">{session?.user?.name || 'Admin'}</span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}