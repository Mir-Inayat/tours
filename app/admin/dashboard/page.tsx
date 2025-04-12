"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  MapPin, 
  CreditCard, 
  Calendar, 
  FileText, 
  Bell, 
  Settings, 
  Key
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

// Types
interface Notification {
  id: number;
  type: string;
  message: string;
  read: boolean;
  date: string;
}

interface BookingData {
  totalBookings: number;
  activeTours: number;
  newCustomers: number;
  formSubmissions: number;
  recentBookings: {
    id: number;
    customer: string;
    destination: string;
    amount: number;
    date: string;
  }[];
  recentSubmissions: {
    id: number;
    name: string;
    type: string;
    email: string;
    date: string;
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
  const [dashboardData, setDashboardData] = useState<BookingData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // In a real app, you would fetch from an API endpoint
        // For now simulating with a timeout
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Sample data (in production, this would come from an API)
        const data = [
          { id: 1, type: "comment", message: "New comment on 'Delhi to Jaipur' blog", read: false, date: "2 hours ago" },
          { id: 2, type: "booking", message: "New booking request for Tempo Traveller", read: false, date: "5 hours ago" },
          { id: 3, type: "form", message: "New contact form submission", read: false, date: "1 day ago" },
        ];
        
        setNotifications(data);
        setIsLoadingNotifications(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        toast({
          title: "Error",
          description: "Failed to load notifications. Please try again.",
          variant: "destructive"
        });
        setIsLoadingNotifications(false);
      }
    };
    
    fetchNotifications();
  }, []);
  
  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, you would fetch from an API endpoint
        // For now simulating with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample data (in production, this would come from an API)
        const data: BookingData = {
          totalBookings: 120,
          activeTours: 24,
          newCustomers: 45,
          formSubmissions: 38,
          recentBookings: [
            { id: 1, customer: "Rahul Sharma", destination: "Delhi to Jaipur", amount: 1550, date: "2 days ago" },
            { id: 2, customer: "Priya Patel", destination: "Noida to Agra", amount: 1800, date: "3 days ago" },
            { id: 3, customer: "Amit Kumar", destination: "Ghaziabad to Dehradun", amount: 2200, date: "4 days ago" },
            { id: 4, customer: "Neha Gupta", destination: "Noida to Chandigarh", amount: 2500, date: "5 days ago" },
            { id: 5, customer: "Vikram Singh", destination: "Delhi to Manali", amount: 3500, date: "6 days ago" }
          ],
          recentSubmissions: [
            { id: 1, name: "Rahul Singh", type: "Contact Form", email: "rahul@example.com", date: "1 day ago" },
            { id: 2, name: "Priya Sharma", type: "Booking Form", email: "priya@example.com", date: "2 days ago" },
            { id: 3, name: "Amit Kumar", type: "Quote Request", email: "amit@example.com", date: "3 days ago" },
            { id: 4, name: "Neha Gupta", type: "Corporate Inquiry", email: "neha@example.com", date: "4 days ago" },
            { id: 5, name: "Vikram Patel", type: "Contact Form", email: "vikram@example.com", date: "5 days ago" }
          ]
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
                    <p className="text-xs text-muted-foreground">+10% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.activeTours}</div>
                    <p className="text-xs text-muted-foreground">+2 since last week</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.newCustomers}</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Form Submissions</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.formSubmissions}</div>
                    <p className="text-xs text-muted-foreground">7 new this week</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData.recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{booking.customer}</p>
                            <p className="text-sm text-muted-foreground">{booking.destination}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{booking.amount}</p>
                            <p className="text-sm text-muted-foreground">{booking.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Form Submissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData.recentSubmissions.map((submission) => (
                        <div key={submission.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{submission.name}</p>
                            <p className="text-sm text-muted-foreground">{submission.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">{submission.email}</p>
                            <p className="text-xs text-muted-foreground">{submission.date}</p>
                          </div>
                        </div>
                      ))}
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
                            {notification.type === "comment" && <FileText className="h-4 w-4 text-blue-500" />}
                            {notification.type === "booking" && <Calendar className="h-4 w-4 text-green-500" />}
                            {notification.type === "form" && <FileText className="h-4 w-4 text-orange-500" />}
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