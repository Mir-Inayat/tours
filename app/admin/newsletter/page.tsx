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
  Calendar,
  Trash2,
  CheckCircle,
  XCircle,
  Download
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
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

interface NewsletterSubscription {
  id: string;
  email: string;
  date: string;
  active: boolean;
}

export default function NewsletterPage() {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchSubscriptions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/newsletter");
      
      if (!response.ok) {
        throw new Error("Failed to fetch subscriptions");
      }
      
      const data = await response.json();
      setSubscriptions(data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      toast({
        title: "Error",
        description: "Failed to load newsletter subscriptions.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleStatusChange = async (id: string, active: boolean) => {
    try {
      const response = await fetch(`/api/newsletter/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      
      setSubscriptions((prev) =>
        prev.map((subscription) =>
          subscription.id === id ? { ...subscription, active } : subscription
        )
      );
      
      toast({
        title: "Success",
        description: `Subscription ${active ? 'activated' : 'deactivated'}`,
      });
    } catch (error) {
      console.error("Error updating subscription status:", error);
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
      const response = await fetch(`/api/newsletter/${deleteId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete subscription");
      }
      
      setSubscriptions((prev) => prev.filter((subscription) => subscription.id !== deleteId));
      
      toast({
        title: "Success",
        description: "Subscription deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting subscription:", error);
      toast({
        title: "Error",
        description: "Failed to delete subscription.",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };
  
  const downloadSubscriptions = () => {
    const activeSubscriptions = subscriptions
      .filter(sub => sub.active)
      .map(sub => sub.email)
      .join('\n');
    
    const blob = new Blob([activeSubscriptions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      subscription.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalActive = subscriptions.filter(sub => sub.active).length;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
          <p className="text-gray-500">Manage your newsletter subscriptions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-100 text-green-800">
            {totalActive} Active Subscribers
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={downloadSubscriptions}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            Export List
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search subscriptions..."
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
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Date Subscribed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-gray-500">
                  Loading subscriptions...
                </TableCell>
              </TableRow>
            ) : filteredSubscriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-gray-500">
                  {searchTerm ? "No subscriptions match your search" : "No subscriptions found"}
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="truncate max-w-[250px]">{subscription.email}</span>
                    </div>
                    <div className="md:hidden text-xs text-gray-500 mt-1 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(subscription.date)}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(subscription.date)}</TableCell>
                  <TableCell>
                    <Badge className={subscription.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                      {subscription.active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-1">
                      {subscription.active ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 p-0 w-8 h-8"
                          onClick={() => handleStatusChange(subscription.id, false)}
                          title="Deactivate subscription"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-green-500 hover:text-green-600 hover:bg-green-50 p-0 w-8 h-8"
                          onClick={() => handleStatusChange(subscription.id, true)}
                          title="Activate subscription"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-0 w-8 h-8"
                        onClick={() => setDeleteId(subscription.id)}
                        title="Delete subscription"
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
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this newsletter subscription from our system.
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