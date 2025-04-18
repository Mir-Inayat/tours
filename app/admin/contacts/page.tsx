"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare,
  Trash2,
  Check,
  X 
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
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

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'spam';
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact");
      
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast({
        title: "Error",
        description: "Failed to load contact messages.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleStatusChange = async (id: string, status: 'new' | 'read' | 'replied' | 'spam') => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === id ? { ...contact, status } : contact
        )
      );
      
      toast({
        title: "Success",
        description: `Status updated to ${status}`,
      });
    } catch (error) {
      console.error("Error updating contact status:", error);
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    
    try {
      const response = await fetch(`/api/contact/${deleteId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
      
      setContacts((prev) => prev.filter((contact) => contact.id !== deleteId));
      
      toast({
        title: "Success",
        description: "Contact message deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast({
        title: "Error",
        description: "Failed to delete contact message.",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800">New</Badge>;
      case "read":
        return <Badge className="bg-gray-100 text-gray-800">Read</Badge>;
      case "replied":
        return <Badge className="bg-green-100 text-green-800">Replied</Badge>;
      case "spam":
        return <Badge className="bg-red-100 text-red-800">Spam</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contact Form Messages</h1>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search messages..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Message</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                  Loading messages...
                </TableCell>
              </TableRow>
            ) : filteredContacts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                  {searchTerm ? "No messages match your search" : "No messages found"}
                </TableCell>
              </TableRow>
            ) : (
              filteredContacts.map((contact) => (
                <TableRow key={contact.id} className={contact.status === 'new' ? 'bg-blue-50' : ''}>
                  <TableCell className="font-medium">
                    <div>{contact.name}</div>
                    <div className="sm:hidden text-xs text-gray-500">{contact.email}</div>
                    <div className="sm:hidden text-xs text-gray-500 mt-1 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(contact.createdAt)}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="truncate max-w-[200px]">{contact.email}</div>
                    {contact.phone && (
                      <div className="truncate max-w-[200px] text-xs text-gray-500 flex items-center mt-1">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.phone}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="truncate max-w-[250px]">
                      {contact.message.substring(0, 50)}
                      {contact.message.length > 50 ? "..." : ""}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{formatDate(contact.createdAt)}</TableCell>
                  <TableCell>{getStatusBadge(contact.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-0 w-8 h-8"
                        onClick={() => setSelectedContact(contact)}
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-0 w-8 h-8"
                        onClick={() => setDeleteId(contact.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Contact Details Sheet */}
      <Sheet open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Contact Message</SheetTitle>
            <SheetDescription>
              Received on {selectedContact && formatDate(selectedContact.createdAt)}
            </SheetDescription>
          </SheetHeader>
          
          {selectedContact && (
            <div className="py-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">From</h3>
                <p className="font-medium">{selectedContact.name}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <p>{selectedContact.email}</p>
                </div>
              </div>
              
              {selectedContact.phone && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <p>{selectedContact.phone}</p>
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Message</h3>
                <div className="p-4 bg-gray-50 rounded-md text-gray-800 whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(selectedContact.status)}
                </div>
              </div>
            </div>
          )}
          
          <SheetFooter className="flex-col sm:flex-row gap-2 pt-4 border-t">
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => selectedContact && handleStatusChange(selectedContact.id, "read")}
              >
                <Check className="h-4 w-4 mr-1" />
                Mark as Read
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => selectedContact && handleStatusChange(selectedContact.id, "replied")}
              >
                <Mail className="h-4 w-4 mr-1" />
                Mark as Replied
              </Button>
            </div>
            
            <Button
              size="sm"
              variant="outline"
              className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
              onClick={() => selectedContact && handleStatusChange(selectedContact.id, "spam")}
            >
              <X className="h-4 w-4 mr-1" />
              Mark as Spam
            </Button>
            
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the contact message.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}