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
  Mail,
  Menu,
  X,
  Loader2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider session={null} refetchInterval={5 * 60} refetchOnWindowFocus={false}>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  
  // State for notifications
  const [notifications, setNotifications] = useState({
    comments: 0,
    bookings: 0,
    contacts: 0
  });
  
  useEffect(() => {
    // Only redirect if auth check is complete and user is not authenticated
    if (status === "unauthenticated" && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else if (status !== "loading") {
      // Auth check complete, no longer loading
      setLoadingAuth(false);
    }
  }, [status, router, pathname]);

  // Fetch notification counts
  useEffect(() => {
    const fetchNotificationCounts = async () => {
      if (status !== "authenticated") return;
      
      try {
        // Fetch bookings
        const bookingsResponse = await fetch('/api/bookings');
        if (bookingsResponse.ok) {
          const bookings = await bookingsResponse.json();
          const newBookings = bookings.filter(booking => booking.status === 'pending').length;
          setNotifications(prev => ({ ...prev, bookings: newBookings }));
        }
        
        // Fetch contacts - wrapped in try/catch to avoid breaking if API fails
        try {
          const contactsResponse = await fetch('/api/contact');
          if (contactsResponse.ok) {
            const contacts = await contactsResponse.json();
            const newContacts = contacts.filter(contact => contact.status === 'new').length;
            setNotifications(prev => ({ ...prev, contacts: newContacts }));
          }
        } catch (error) {
          console.log("Contact API not available or errored");
        }
        
        // Similar for comments
      } catch (error) {
        console.error('Error fetching notification counts:', error);
      }
    };
    
    fetchNotificationCounts();
    
    // Set up interval to refresh notification counts, less frequently
    const interval = setInterval(fetchNotificationCounts, 5 * 60 * 1000); // Every 5 minutes
    
    return () => clearInterval(interval);
  }, [status]);

  // Close sidebar on path change for mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  if (pathname === "/admin/login") {
    return children;
  }

  // Show loading state during initial auth check
  if (loadingAuth) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          <p className="text-gray-500">Loading authentication...</p>
        </div>
      </div>
    );
  }

  if (!session && pathname !== "/admin/login") {
    return null; // Will redirect in useEffect
  }
  
  const totalNotifications = notifications.comments + notifications.bookings + notifications.contacts;

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-800 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button 
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-6 space-y-1 px-2">
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
            onClick={() => router.push('/api/auth/signout?callbackUrl=/admin/login')}
            className="flex w-full items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            <span>Log Out</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white shadow">
          <div className="px-4 md:px-6 py-4 flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <h1 className="text-xl font-semibold text-gray-800 ml-2 md:ml-0">
              {pathname === "/admin/dashboard" && "Dashboard"}
              {pathname === "/admin/blogs" && "Blog Management"}
              {pathname === "/admin/comments" && "Comments Management"}
              {pathname === "/admin/contacts" && "Contact Form Management"}
              {pathname === "/admin/bookings" && "Booking Management"}
              {pathname.startsWith("/admin/bookings/") && "Booking Details"}
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
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}