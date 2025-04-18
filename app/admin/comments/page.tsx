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
  Calendar, 
  MessageSquare,
  Trash2,
  Check,
  X,
  User
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
import Link from "next/link";

interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  blogId: string;
  blogTitle: string;
  status: 'pending' | 'approved' | 'rejected' | 'spam';
  createdAt: string;
}

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/comments");
      
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      toast({
        title: "Error",
        description: "Failed to load comments.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleStatusChange = async (id: string, status: 'pending' | 'approved' | 'rejected' | 'spam') => {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === id ? { ...comment, status } : comment
        )
      );
      
      toast({
        title: "Success",
        description: `Comment ${status}`,
      });
      
      if (status === 'approved' || status === 'rejected') {
        setSelectedComment(null);
      }
    } catch (error) {
      console.error("Error updating comment status:", error);
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
      const response = await fetch(`/api/comments/${deleteId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      
      setComments((prev) => prev.filter((comment) => comment.id !== deleteId));
      
      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast({
        title: "Error",
        description: "Failed to delete comment.",
        variant: "destructive",
      });
    } finally {
      setDeleteId(null);
    }
  };

  const filteredComments = comments.filter(
    (comment) =>
      comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case "spam":
        return <Badge className="bg-gray-100 text-gray-800">Spam</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Comments Management</h1>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search comments..."
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
              <TableHead className="hidden md:table-cell">Comment</TableHead>
              <TableHead className="hidden sm:table-cell">Blog</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                  Loading comments...
                </TableCell>
              </TableRow>
            ) : filteredComments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                  {searchTerm ? "No comments match your search" : "No comments found"}
                </TableCell>
              </TableRow>
            ) : (
              filteredComments.map((comment) => (
                <TableRow key={comment.id} className={comment.status === 'pending' ? 'bg-yellow-50' : ''}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{comment.name}</span>
                    </div>
                    <div className="text-xs text-gray-500 sm:hidden mt-1">
                      On: {comment.blogTitle}
                    </div>
                    <div className="sm:hidden text-xs text-gray-500 mt-1 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(comment.createdAt)}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="truncate max-w-[200px]">
                      {comment.content.substring(0, 50)}
                      {comment.content.length > 50 ? "..." : ""}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="truncate max-w-[150px]">
                      <Link href={`/blog/${comment.blogId}`} className="hover:underline text-blue-600">
                        {comment.blogTitle}
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{formatDate(comment.createdAt)}</TableCell>
                  <TableCell>{getStatusBadge(comment.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center space-x-1">
                      {comment.status === 'pending' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-green-500 hover:text-green-600 hover:bg-green-50 p-0 w-8 h-8"
                          onClick={() => handleStatusChange(comment.id, 'approved')}
                          title="Approve"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-0 w-8 h-8"
                        onClick={() => setSelectedComment(comment)}
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-0 w-8 h-8"
                        onClick={() => setDeleteId(comment.id)}
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
      
      {/* Comment Details Sheet */}
      <Sheet open={!!selectedComment} onOpenChange={() => setSelectedComment(null)}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Comment Details</SheetTitle>
            <SheetDescription>
              Posted on {selectedComment && formatDate(selectedComment.createdAt)}
            </SheetDescription>
          </SheetHeader>
          
          {selectedComment && (
            <div className="py-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="font-medium">{selectedComment.name}</p>
                <p className="text-sm text-gray-500">{selectedComment.email}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Blog</h3>
                <Link href={`/blog/${selectedComment.blogId}`} className="text-blue-600 hover:underline">
                  {selectedComment.blogTitle}
                </Link>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Comment</h3>
                <div className="p-4 bg-gray-50 rounded-md text-gray-800 whitespace-pre-wrap">
                  {selectedComment.content}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(selectedComment.status)}
                </div>
              </div>
            </div>
          )}
          
          <SheetFooter className="flex-col sm:flex-row gap-2 pt-4 border-t">
            {selectedComment?.status !== 'approved' && (
              <Button
                variant="outline"
                className="text-green-500 border-green-200 hover:bg-green-50 hover:text-green-600"
                onClick={() => selectedComment && handleStatusChange(selectedComment.id, 'approved')}
              >
                <Check className="h-4 w-4 mr-1" />
                Approve
              </Button>
            )}
            
            {selectedComment?.status !== 'rejected' && (
              <Button
                variant="outline"
                className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                onClick={() => selectedComment && handleStatusChange(selectedComment.id, 'rejected')}
              >
                <X className="h-4 w-4 mr-1" />
                Reject
              </Button>
            )}
            
            {selectedComment?.status !== 'spam' && (
              <Button
                variant="outline"
                className="text-gray-500 border-gray-200 hover:bg-gray-50"
                onClick={() => selectedComment && handleStatusChange(selectedComment.id, 'spam')}
              >
                Mark as Spam
              </Button>
            )}
            
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
              This action cannot be undone. This will permanently delete the comment.
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