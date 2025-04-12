"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Trash2, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Sample blog and comments data
const initialBlogs = [
  {
    id: 1,
    title: "Top 10 Tourist Destinations Near Noida",
    comments: [
      {
        id: 1,
        author: "Rahul Singh",
        content: "Great list! I especially love Agra and Jaipur.",
        date: "2023-10-15",
        approved: true,
        isNew: false
      },
      {
        id: 2,
        author: "Priya Sharma",
        content: "You should add Rishikesh to this list.",
        date: "2023-10-16",
        approved: false,
        isNew: true
      }
    ]
  },
  {
    id: 2,
    title: "Why Choose Tempo Traveller for Group Travel",
    comments: [
      {
        id: 1,
        author: "Amit Kumar",
        content: "We hired a tempo traveller for our family trip and it was amazing!",
        date: "2023-10-14",
        approved: true,
        isNew: false
      },
      {
        id: 2,
        author: "Neha Gupta",
        content: "What's the seating capacity of your largest tempo traveller?",
        date: "2023-10-17",
        approved: false,
        isNew: true
      },
      {
        id: 3,
        author: "Vijay Patel",
        content: "Do you provide tempo travellers with push-back seats?",
        date: "2023-10-18",
        approved: false,
        isNew: true
      }
    ]
  }
];

export default function AdminComments() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [filter, setFilter] = useState("all"); // all, approved, pending, new
  
  // Count new comments
  const newCommentsCount = blogs.reduce((count, blog) => {
    return count + blog.comments.filter(comment => comment.isNew).length;
  }, 0);
  
  // Handle approving/unapproving comments
  const handleApproveComment = (blogId, commentId, approve) => {
    setBlogs(prevBlogs => 
      prevBlogs.map(blog => {
        if (blog.id === blogId) {
          return {
            ...blog,
            comments: blog.comments.map(comment => {
              if (comment.id === commentId) {
                return { 
                  ...comment, 
                  approved: approve,
                  isNew: false // Mark as seen
                };
              }
              return comment;
            })
          };
        }
        return blog;
      })
    );
    
    toast({
      title: approve ? "Comment Approved" : "Comment Unapproved",
      description: `The comment has been ${approve ? 'approved' : 'unpublished'} successfully.`
    });
  };
  
  // Handle deleting comments
  const handleDeleteComment = (blogId, commentId) => {
    setBlogs(prevBlogs => 
      prevBlogs.map(blog => {
        if (blog.id === blogId) {
          return {
            ...blog,
            comments: blog.comments.filter(comment => comment.id !== commentId)
          };
        }
        return blog;
      })
    );
    
    toast({
      title: "Comment Deleted",
      description: "The comment has been deleted successfully."
    });
  };
  
  // Filter comments based on current filter
  const filteredBlogs = blogs.map(blog => ({
    ...blog,
    comments: blog.comments.filter(comment => {
      if (filter === "all") return true;
      if (filter === "approved") return comment.approved;
      if (filter === "pending") return !comment.approved;
      if (filter === "new") return comment.isNew;
      return true;
    })
  })).filter(blog => blog.comments.length > 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Comments Management</h1>
        
        <div className="flex items-center gap-2">
          {newCommentsCount > 0 && (
            <Badge className="bg-red-500">
              {newCommentsCount} new
            </Badge>
          )}
          <div className="flex bg-gray-100 rounded-lg">
            <Button 
              variant={filter === "all" ? "default" : "ghost"}
              className={filter === "all" ? "rounded-l-lg" : "rounded-l-lg bg-gray-100 text-gray-900 hover:bg-gray-200"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button 
              variant={filter === "approved" ? "default" : "ghost"}
              className={filter === "approved" ? "" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}
              onClick={() => setFilter("approved")}
            >
              Approved
            </Button>
            <Button 
              variant={filter === "pending" ? "default" : "ghost"}
              className={filter === "pending" ? "" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}
              onClick={() => setFilter("pending")}
            >
              Pending
            </Button>
            <Button 
              variant={filter === "new" ? "default" : "ghost"}
              className={filter === "new" ? "rounded-r-lg" : "rounded-r-lg bg-gray-100 text-gray-900 hover:bg-gray-200"}
              onClick={() => setFilter("new")}
            >
              New
              {newCommentsCount > 0 && (
                <Badge className="ml-2 bg-red-500">
                  {newCommentsCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {filteredBlogs.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No comments found</h3>
          <p className="text-gray-500">
            There are no comments matching your current filter.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {blog.comments.map(comment => (
                  <div key={comment.id} className={`p-6 flex flex-col md:flex-row ${comment.isNew ? 'bg-blue-50' : ''}`}>
                    <div className="flex-grow mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="font-medium text-gray-900">{comment.author}</h3>
                        {comment.isNew && (
                          <Badge className="ml-2 bg-blue-500">New</Badge>
                        )}
                        <span className="ml-2 text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-600">{comment.content}</p>
                    </div>
                    
                    <div className="flex md:flex-col gap-2 md:w-40 md:items-end justify-end">
                      {comment.approved ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleApproveComment(blog.id, comment.id, false)}
                          className="mr-2 text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Unpublish
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleApproveComment(blog.id, comment.id, true)}
                          className="mr-2 text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDeleteComment(blog.id, comment.id)}
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}