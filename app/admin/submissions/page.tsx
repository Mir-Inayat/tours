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
import { Calendar, Search, Eye, FileText } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

// Types
interface FormSubmission {
  id: number;
  type: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  fromDate?: string;
  toDate?: string;
  date: string;
  status: string;
}

export default function FormSubmissions() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch submissions data
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        // In a real app, you would fetch from an API endpoint
        // For now simulating with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample data (in production, this would come from an API)
        const data: FormSubmission[] = [
          {
            id: 1,
            type: "contact",
            name: "Rahul Singh",
            email: "rahul@example.com",
            phone: "+91 9876543210",
            message: "I want to book a taxi for a corporate event next month.",
            date: "2023-11-15T10:30:00Z",
            status: "new"
          },
          {
            id: 2,
            type: "booking",
            name: "Priya Sharma",
            email: "priya@example.com",
            phone: "+91 8765432109",
            message: "Looking for a Tempo Traveller for a family trip to Jaipur.",
            service: "Tempo Traveller",
            fromDate: "2023-12-05T00:00:00Z",
            toDate: "2023-12-08T00:00:00Z",
            date: "2023-11-14T14:45:00Z",
            status: "processed"
          },
          {
            id: 3,
            type: "quote",
            name: "Amit Kumar",
            email: "amit@example.com",
            phone: "+91 7654321098",
            message: "Need a quote for a corporate bus service for 30 people.",
            service: "Bus Service",
            date: "2023-11-13T09:15:00Z",
            status: "new"
          },
          {
            id: 4,
            type: "contact",
            name: "Neha Gupta",
            email: "neha@example.com",
            phone: "+91 6543210987",
            message: "Interested in your school transport services. Please share details.",
            date: "2023-11-12T16:20:00Z",
            status: "processed"
          },
          {
            id: 5,
            type: "booking",
            name: "Vikram Patel",
            email: "vikram@example.com",
            phone: "+91 5432109876",
            message: "Need an Innova for Delhi to Agra trip.",
            service: "Innova",
            fromDate: "2023-11-25T00:00:00Z",
            toDate: "2023-11-26T00:00:00Z",
            date: "2023-11-11T11:10:00Z",
            status: "new"
          }
        ];
        
        setSubmissions(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching submissions:", error);
        toast({
          title: "Error",
          description: "Failed to load form submissions. Please try again.",
          variant: "destructive"
        });
        setIsLoading(false);
      }
    };
    
    fetchSubmissions();
  }, []);
  
  // Update submission status
  const updateStatus = async (id: number, newStatus: string) => {
    try {
      // In a real app, you would call an API endpoint
      // For now simulating with a timeout
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSubmissions(prev => 
        prev.map(sub => sub.id === id ? {...sub, status: newStatus} : sub)
      );
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({...selectedSubmission, status: newStatus});
      }
      
      toast({
        title: "Status Updated",
        description: `Submission has been marked as ${newStatus}.`,
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
  
  // Filter submissions
  const filteredSubmissions = submissions.filter(sub => {
    const matchesType = filterType ? sub.type === filterType : true;
    const matchesStatus = filterStatus ? sub.status === filterStatus : true;
    const matchesSearch = searchQuery 
      ? sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.message.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Form Submissions</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email or message"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Form Type</label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="contact">Contact</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="quote">Quote</SelectItem>
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
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No submissions found
                  </TableCell>
                </TableRow>
              ) : (
                filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      {format(new Date(submission.date), "dd MMM yyyy, HH:mm")}
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        submission.type === 'contact' ? 'bg-blue-100 text-blue-800' :
                        submission.type === 'booking' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }>
                        {submission.type.charAt(0).toUpperCase() + submission.type.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>
                      <Badge className={
                        submission.status === 'new' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                      }>
                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          setSelectedSubmission(submission);
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
      
      {/* View Submission Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {selectedSubmission ? (
                `${selectedSubmission.type.charAt(0).toUpperCase() + selectedSubmission.type.slice(1)} Form Submission`
              ) : (
                "Form Submission Details"
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Submission Date</p>
                  <p className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {format(new Date(selectedSubmission.date), "dd MMMM yyyy, HH:mm")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <div className="flex items-center gap-2">
                    <Badge className={
                      selectedSubmission.status === 'new' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }>
                      {selectedSubmission.status.charAt(0).toUpperCase() + selectedSubmission.status.slice(1)}
                    </Badge>
                    <Select 
                      value={selectedSubmission.status} 
                      onValueChange={(value) => updateStatus(selectedSubmission.id, value)}
                    >
                      <SelectTrigger className="w-[140px] h-7">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="processed">Processed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedSubmission.phone}</p>
                  </div>
                </div>
              </div>
              
              {selectedSubmission.type === 'booking' && selectedSubmission.service && (
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Booking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-medium">{selectedSubmission.service}</p>
                    </div>
                    {selectedSubmission.fromDate && (
                      <div>
                        <p className="text-sm text-gray-500">From Date</p>
                        <p className="font-medium">
                          {format(new Date(selectedSubmission.fromDate), "dd MMM yyyy")}
                        </p>
                      </div>
                    )}
                    {selectedSubmission.toDate && (
                      <div>
                        <p className="text-sm text-gray-500">To Date</p>
                        <p className="font-medium">
                          {format(new Date(selectedSubmission.toDate), "dd MMM yyyy")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {selectedSubmission.type === 'quote' && selectedSubmission.service && (
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Quote Details</h3>
                  <div>
                    <p className="text-sm text-gray-500">Service</p>
                    <p className="font-medium">{selectedSubmission.service}</p>
                  </div>
                </div>
              )}
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Message</h3>
                <p className="p-3 bg-gray-50 rounded-md">
                  {selectedSubmission.message}
                </p>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}