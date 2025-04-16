"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { CalendarIcon, MapPin, Users } from "lucide-react";

interface BusBookingFormProps {
  compact?: boolean;
  className?: string;
}

export function BusBookingForm({ compact = false, className = "" }: BusBookingFormProps) {
  const pathname = usePathname(); // Get the current path
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    passengers: "",
    vehicleType: "",
    message: "",
    sourcePage: pathname, // Store the page path where the form was filled
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        from: "",
        to: "",
        date: "",
        passengers: "",
        vehicleType: "",
        message: "",
        sourcePage: pathname,
      });
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same
  // ...
}