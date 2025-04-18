"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Subscription failed');
      }
      
      setSubmitted(true);
      setEmail("");
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-center mt-16">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Stay Updated</h2>
      <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm md:text-base">
        Subscribe to our newsletter to receive travel tips, exclusive deals, and the latest blog updates.
      </p>
      
      {submitted ? (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg max-w-md mx-auto">
          <p>Thank you for subscribing to our newsletter!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="flex-grow rounded-lg sm:rounded-r-none p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
}