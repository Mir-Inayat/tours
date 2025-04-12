"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Eye, Search, Mail, User, Phone, Calendar } from "lucide-react";

// Types
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  fromDate?: string;
  toDate?: string;
  date: string;
  status: "new" | "read" | "replied" | "archived";
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter states
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Fetch contacts data
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contact');
        
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        
        const data = await response.json();
        setContacts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast({
          title: "Error",
          description: "Failed to load contact submissions. Please try again.",
          variant: "destructive"
        });
        setContacts([]);
        setIsLoading(false);
      }
    };
    
    fetchContacts();
  }, []);
  
  // Update contact status
  const updateStatus = async (id: string, newStatus: "new" | "read" | "replied" | "archived") => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update contact status');
      }
      
      // Optimistically update UI
      setContacts(prev => 
        prev.map(contact => contact.id === id ? {...contact, status: newStatus} : contact)
      );
      
      if (selectedContact && selectedContact.id === id) {
        setSelectedContact({...selectedContact, status: newStatus});
      }
      
      toast({
        title: "Status Updated",
        description: `Contact has been marked as ${newStatus}.`,
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
  
  // Filter contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesStatus = filterStatus ? contact.status === filterStatus : true;
    const matchesSearch = searchQuery 
      ? contact.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        contact.email?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        contact.phone?.includes(searchQuery) ||
        contact.message?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, phone"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
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
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
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
                <TableHead>Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No contact submissions found
                  </TableCell>
                </TableRow>
              ) : (
                filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      {format(new Date(contact.date), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{contact.name}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{contact.email}</div>
                      <div className="text-sm text-muted-foreground">{contact.phone}</div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate">{contact.message.substring(0, 60)}...</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        contact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                        contact.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                        contact.status === 'replied' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          setSelectedContact(contact);
                          setIsViewDialogOpen(true);
                          // If contact is new, mark as read when viewed
                          if (contact.status === 'new') {
                            updateStatus(contact.id, 'read');
                          }
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
      
      {/* View Contact Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Form Submission
            </DialogTitle>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Submission Date</p>
                  <p className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {format(new Date(selectedContact.date), "dd MMMM yyyy")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <div className="flex items-center gap-2">
                    <Badge className={
                      selectedContact.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      selectedContact.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                      selectedContact.status === 'replied' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }>
                      {selectedContact.status.charAt(0).toUpperCase() + selectedContact.status.slice(1)}
                    </Badge>
                    <Select 
                      defaultValue={selectedContact.status} 
                      onValueChange={(value) => updateStatus(
                        selectedContact.id, 
                        value as "new" | "read" | "replied" | "archived"
                      )}
                    >
                      <SelectTrigger className="w-[140px] h-7">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      {selectedContact.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      {selectedContact.phone}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">
                      {selectedContact.email}
                    </p>
                  </div>
                </div>
              </div>
              
              {selectedContact.service && (
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Service Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Service Required</p>
                      <p className="font-medium">{selectedContact.service}</p>
                    </div>
                    {selectedContact.fromDate && selectedContact.toDate && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">From Date</p>
                          <p className="font-medium">
                            {format(new Date(selectedContact.fromDate), "dd MMM yyyy")}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">To Date</p>
                          <p className="font-medium">
                            {format(new Date(selectedContact.toDate), "dd MMM yyyy")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Message</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>
              
              <div className="flex justify-between space-x-2 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => updateStatus(selectedContact.id, "archived")}
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Archive
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(`mailto:${selectedContact.email}`, '_blank')}
                  >
                    Reply via Email
                  </Button>
                  <Button 
                    onClick={() => {
                      updateStatus(selectedContact.id, "replied");
                      setIsViewDialogOpen(false);
                    }}
                  >
                    Mark as Replied
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