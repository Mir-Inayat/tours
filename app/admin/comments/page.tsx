"use client";

import { useState, useEffect } from "react";
import { Comment } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

interface BlogWithComments {
  id: string;
  title: string;
  comments: Comment[];
}

export default function AdminComments() {
  const [blogComments, setBlogComments] = useState<BlogWithComments[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchComments() {
      try {
        // Get all blogs
        const response = await fetch("/api/blogs");
        const blogs = await response.json();
        
        // Filter blogs with comments
        const blogsWithComments = blogs
          .map(blog => ({
            id: blog.id,
            title: blog.title,
            comments: blog.comments || []
          }))
          .filter(blog => blog.comments.length > 0);
        
        setBlogComments(blogsWithComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchComments();
  }, []);
  
  const handleApproveComment = async (blogId: string, commentId: string, approve: boolean) => {
    try {
      const response = await fetch(`/api/blogs/${blogId}/comments/${commentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ approved: approve }),
      });
      
      if (!response.ok) throw new Error("Failed to update comment");
      
      // Update local state
      setBlogComments(prev => 
        prev.map(blog => {
          if (blog.id === blogId) {
            return {
              ...blog,
              comments: blog.comments.map(comment => {
                if (comment.id === commentId) {
                  return { ...comment, approved: approve };
                }
                return comment;
              })
            };
          }
          return blog;
        })
      );
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };
  
  const handleDeleteComment = async (blogId: string, commentId: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    
    try {
      const response = await fetch(`/api/blogs/${blogId}/comments/${commentId}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete comment");
      
      // Update local state
      setBlogComments(prev => 
        prev.map(blog => {
          if (blog.id === blogId) {
            return {
              ...blog,
              comments: blog.comments.filter(comment => comment.id !== commentId)
            };
          }
          return blog;
        }).filter(blog => blog.comments.length > 0)
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading comments...</div>;
  }
  
  if (blogComments.length === 0) {
    return <div className="text-center py-12">No comments found across all blogs.</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Comments</h1>
      </div>

      {blogComments.map(blog => (
        <div key={blog.id} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Comments on: {blog.title}</h2>
          <div className="bg-white rounded-md shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blog.comments.map(comment => (
                  <tr key={comment.id} className={comment.approved ? "" : "bg-yellow-50"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{comment.name}</div>
                      <div className="text-xs text-gray-500">{comment.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-2">{comment.content}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${comment.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {comment.approved ? 'Approved' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {!comment.approved ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleApproveComment(blog.id, comment.id, true)}
                          className="mr-2 text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleApproveComment(blog.id, comment.id, false)}
                          className="mr-2 text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Unpublish
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleDeleteComment(blog.id, comment.id)}
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}