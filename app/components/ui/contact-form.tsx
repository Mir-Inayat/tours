"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";

interface ContactFormProps {
  formType?: "contact" | "booking" | "quote";
  showServiceField?: boolean;
  showDateFields?: boolean;
}

export function ContactForm({
  formType = "contact",
  showServiceField = false,
  showDateFields = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    fromDate: "",
    toDate: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, this would be an API call
      // For now we'll just simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Submit the form data including the type
      const submission = {
        ...formData,
        type: formType,
        date: new Date().toISOString(),
        status: "new"
      };
      
      console.log("Form submission:", submission);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        fromDate: "",
        toDate: "",
      });
      
      toast.success("Your form has been submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      {showServiceField && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">
            Service Required
          </label>
          <Input
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="e.g., Taxi, Tempo Traveller, Bus"
          />
        </div>
      )}
      
      {showDateFields && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="fromDate" className="block text-sm font-medium mb-1">
              From Date
            </label>
            <Input
              id="fromDate"
              name="fromDate"
              type="date"
              value={formData.fromDate}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium mb-1">
              To Date
            </label>
            <Input
              id="toDate"
              name="toDate"
              type="date"
              value={formData.toDate}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}