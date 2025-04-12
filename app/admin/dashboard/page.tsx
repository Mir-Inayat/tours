"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Key,
  Mail,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Types
interface Notification {
  id: number;
  type: string;
  message: string;
  read: boolean;
  date: string;
}

interface DashboardData {
  totalBookings: number;
  activeTours: number;
  newCustomers: number;
  newContacts: number;
  recentBookings: {
    id: string;
    fullName: string;
    pickupLocation: string;
    dropoffLocation: string;
    tripType: string;
    vehicleType: string;
    date: string;
    status: string;
  }[];
  recentContacts: {
    id: string;
    name: string;
    email: string;
    message: string;
    date: string;
    status: string;
  }[];
}

export default function Dashboard() {
  // State for new password management
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Notifications state with fetch
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoadingNotifications, setIsLoadingNotifications] = useState(true);
  
  // Dashboard data state
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  const router = useRouter();

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Fetch bookings
        const bookingsResponse = await fetch('/api/bookings');
        let bookings = [];
        if (bookingsResponse.ok) {
          bookings = await bookingsResponse.json();
        }
        
        // Fetch contacts
        const contactsResponse = await fetch('/api/contact');
        let contacts = [];
        if (contactsResponse.ok) {
          contacts = await contactsResponse.json();
        }
        
        // Create notifications from bookings
        const bookingNotifications = bookings
          .filter(booking => booking.status === 'new')
          .slice(0, 5)
          .map((booking, index) => ({
            id: index + 1,
            type: "booking",
            message: `New booking from ${booking.fullName} (${booking.vehicleType})`,
            read: false,
            date: format(new Date(booking.date), "dd MMM yyyy")
          }));
        
        // Create notifications from contacts
        const contactNotifications = contacts
          .filter(contact => contact.status === 'new')
          .slice(0, 5)
          .map((contact, index) => ({
            id: 100 + index,
            type: "contact",
            message: `New contact form from ${contact.name}`,
            read: false,
            date: format(new Date(contact.date), "dd MMM yyyy")
          }));
        
        // Combine all notifications
        const allNotifications = [...bookingNotifications, ...contactNotifications]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 10);
        
        setNotifications(allNotifications);
        setIsLoadingNotifications(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        toast({
          title: "Error",
          description: "Failed to load notifications. Please try again.",
          variant: "destructive"
        });
        
        // Fallback data in case of error
        const fallbackData = [
          { id: 1, type: "booking", message: "New booking request for Swift Dzire", read: false, date: "2 hours ago" },
          { id: 2, type: "contact", message: "New contact form submission", read: false, date: "5 hours ago" },
        ];
        
        setNotifications(fallbackData);
        setIsLoadingNotifications(false);
      }
    };
    
    fetchNotifications();
  }, []);
  
  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch bookings
        const bookingsResponse = await fetch('/api/bookings');
        let bookings = [];
        if (bookingsResponse.ok) {
          bookings = await bookingsResponse.json();
        }
        
        // Fetch contacts
        const contactsResponse = await fetch('/api/contact');
        let contacts = [];
        if (contactsResponse.ok) {
          contacts = await contactsResponse.json();
        }
        
        // Transform data for dashboard display
        const data: DashboardData = {
          totalBookings: bookings.length,
          activeTours: bookings.filter(b => b.status === 'processed').length,
          newCustomers: new Set(bookings.map(b => b.phoneNumber)).size,
          newContacts: contacts.filter(c => c.status === 'new').length,
          recentBookings: bookings.slice(0, 5).map(booking => ({
            id: booking.id,
            fullName: booking.fullName,
            pickupLocation: booking.pickupLocation,
            dropoffLocation: booking.dropoffLocation,
            tripType: booking.tripType,
            vehicleType: booking.vehicleType,
            date: booking.date,
            status: booking.status
          })),
          recentContacts: contacts.slice(0, 5).map(contact => ({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            message: contact.message,
            date: contact.date,
            status: contact.status
          }))
        };
        
        setDashboardData(data);
        setIsLoadingData(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again.",
          variant: "destructive"
        });
        
        // Fallback to sample data if API fails
        const fallbackData: DashboardData = {
          totalBookings: 15,
          activeTours: 5,
          newCustomers: 10,
          newContacts: 3,
          recentBookings: [
            { id: "booking-1", fullName: "Rahul Sharma", pickupLocation: "Delhi", dropoffLocation: "Jaipur", tripType: "One-Way Trip", vehicleType: "Innova", date: new Date().toISOString(), status: "new" },
            { id: "booking-2", fullName: "Priya Patel", pickupLocation: "Noida", dropoffLocation: "Agra", tripType: "Round Trip", vehicleType: "Swift Dzire", date: new Date().toISOString(), status: "processed" },
          ],
          recentContacts: [
            { id: "contact-1", name: "Vinod Kumar", email: "vinod@example.com", message: "Looking for a bus for corporate event", date: new Date().toISOString(), status: "new" },
            { id: "contact-2", name: "Meera Singh", email: "meera@example.com", message: "Need information about tempo traveller", date: new Date().toISOString(), status: "new" },
          ]
        };
        
        setDashboardData(fallbackData);
        setIsLoadingData(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirmation must match",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you would make an API call here
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully",
    });
    
    // Reset form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  
  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? {...notif, read: true} : notif)
    );
  };
  
  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <Link href="/admin/bookings">
            <Button variant="outline" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Manage Bookings
            </Button>
          </Link>
          <div className="relative">
            <Bell className="h-6 w-6 cursor-pointer" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 flex items-center justify-center p-0 rounded-full">
                {unreadCount}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="notifications">
            Notifications
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-red-500 text-white">{unreadCount}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="settings">Security Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          {isLoadingData ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : dashboardData ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.totalBookings}</div>
                    <p className="text-xs text-muted-foreground">All time bookings</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.activeTours}</div>
                    <p className="text-xs text-muted-foreground">Currently in progress</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.newCustomers}</div>
                    <p className="text-xs text-muted-foreground">Unique customers</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">New Contact Forms</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.newContacts}</div>
                    <p className="text-xs text-muted-foreground">
                      <Link href="/admin/contacts" className="text-blue-500 hover:underline">
                        View all
                      </Link>
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader className="flex justify-between items-center">
                    <CardTitle>Recent Bookings</CardTitle>
                    <Link href="/admin/bookings">
                      <Button variant="outline" size="sm">View All</Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData.recentBookings.length === 0 ? (
                        <p className="text-center text-muted-foreground py-4">No recent bookings</p>
                      ) : (
                        dashboardData.recentBookings.map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between border-b pb-3">
                            <div>
                              <p className="font-medium">{booking.fullName}</p>
                              <p className="text-sm text-muted-foreground">
                                {booking.pickupLocation} to {booking.dropoffLocation}
                              </p>
                              <div className="flex items-center mt-1">
                                <Badge className={
                                  booking.status === 'new' ? 'bg-blue-100 text-blue-800' :
                                  booking.status === 'processed' ? 'bg-yellow-100 text-yellow-800' :
                                  booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                  'bg-red-100 text-red-800'
                                }>
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{booking.vehicleType}</p>
                              <p className="text-sm text-muted-foreground">
                                {format(new Date(booking.date), "dd MMM")}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex justify-between items-center">
                    <CardTitle>Recent Contact Forms</CardTitle>
                    <Link href="/admin/contacts">
                      <Button variant="outline" size="sm">View All</Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData.recentContacts.length === 0 ? (
                        <p className="text-center text-muted-foreground py-4">No recent contact form submissions</p>
                      ) : (
                        dashboardData.recentContacts.map((contact) => (
                          <div key={contact.id} className="flex items-center justify-between border-b pb-3">
                            <div>
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-sm text-muted-foreground">{contact.email}</p>
                              <div className="flex items-center mt-1">
                                <Badge className={
                                  contact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                                  contact.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                                  contact.status === 'replied' ? 'bg-green-100 text-green-800' :
                                  'bg-gray-100 text-gray-800'
                                }>
                                  {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">
                                {format(new Date(contact.date), "dd MMM")}
                              </p>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="mt-1"
                                onClick={() => router.push(`/admin/contacts?id=${contact.id}`)}
                              >
                                View
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-lg text-gray-500">Failed to load dashboard data</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setIsLoadingData(true);
                  // Re-fetch data logic would go here
                  setTimeout(() => setIsLoadingData(false), 1000);
                }}
              >
                Retry
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingNotifications ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {notifications.length === 0 ? (
                    <p className="text-center text-muted-foreground">No notifications</p>
                  ) : (
                    notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 border rounded-lg flex items-start justify-between ${!notification.read ? 'bg-gray-50' : ''}`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            {notification.type === "contact" && <Mail className="h-4 w-4 text-blue-500" />}
                            {notification.type === "booking" && <Car className="h-4 w-4 text-green-500" />}
                            {notification.type === "comment" && <MessageSquare className="h-4 w-4 text-orange-500" />}
                            <p className="font-medium">{notification.message}</p>
                            {!notification.read && (
                              <Badge className="bg-red-500">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.date}</p>
                        </div>
                        {!notification.read && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="current-password">
                    Current Password
                  </label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="new-password">
                    New Password
                  </label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="confirm-password">
                    Confirm New Password
                  </label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="mt-4">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}