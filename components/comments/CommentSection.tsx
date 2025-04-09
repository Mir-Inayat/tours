"use client";

import { useState } from "react";
import { Comment } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ThumbsUp, Flag } from "lucide-react";

interface CommentSectionProps {
  blogId: string;
  comments: Comment[];
}

export default function CommentSection({ blogId, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.filter(comment => comment.approved)
  );
  
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    content: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name || !newComment.email || !newComment.content) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/blogs/${blogId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      
      if (!response.ok) throw new Error("Failed to submit comment");
      
      setNewComment({
        name: "",
        email: "",
        content: ""
      });
      
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold flex items-center">
        <MessageCircle className="mr-2 h-6 w-6" />
        Comments ({comments.length})
      </h2>
      
      {/* Comments list */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{comment.name}</h3>
                <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-4">{comment.content}</p>
              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Like
                </button>
                <button className="flex items-center text-gray-500 hover:text-red-600">
                  <Flag className="h-4 w-4 mr-1" />
                  Report
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Comment form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold mb-6">Leave a Comment</h3>
        
        {showSuccessMessage && (
          <div className="bg-green-50 text-green-800 p-4 mb-4 rounded-md">
            Your comment was submitted successfully and is awaiting moderation.
          </div>
        )}
        
        <form onSubmit={submitComment} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={newComment.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={newComment.email}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Will not be published</p>
            </div>
          </div>
          
          <div>
            <Label htmlFor="content">Comment</Label>
            <Textarea
              id="content"
              name="content"
              value={newComment.content}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Post Comment"}
          </Button>
        </form>
      </div>
    </div>
  );
}