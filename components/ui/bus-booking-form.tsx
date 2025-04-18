"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { CalendarIcon, MapPin, Users, User, Phone } from "lucide-react";

interface BusBookingFormProps {
  compact?: boolean;
  className?: string;
}

export function BusBookingForm({ compact = false, className = "" }: BusBookingFormProps) {
  const pathname = usePathname();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pickupLocation: "",
    dropoffLocation: "",
    departureDate: "",
    returnDate: "",
    numberOfPeople: "",
    vehicleType: "",
    tripType: "One-Way Trip",
    message: "",
    sourcePage: pathname,
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
        body: JSON.stringify({
          ...formData,
          name: formData.fullName,
          phone: formData.phoneNumber,
          from: formData.pickupLocation,
          to: formData.dropoffLocation,
          date: formData.departureDate,
          passengers: formData.numberOfPeople
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
      
      setFormData({
        fullName: "",
        phoneNumber: "",
        pickupLocation: "",
        dropoffLocation: "",
        departureDate: "",
        returnDate: "",
        numberOfPeople: "",
        vehicleType: "",
        tripType: "One-Way Trip",
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

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book Your Ride</h2>
      
      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">
          Thank you! Your booking request has been submitted successfully. We'll contact you shortly.
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>
        
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text"
            name="pickupLocation"
            placeholder="Pick-up Location"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text"
            name="dropoffLocation"
            placeholder="Drop-off Location"
            value={formData.dropoffLocation}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="tripType"
              value="One-Way Trip"
              checked={formData.tripType === "One-Way Trip"}
              onChange={handleChange}
              className="accent-orange-500"
              autoComplete="off"
            />
            One-Way Trip
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="tripType"
              value="Round Trip"
              checked={formData.tripType === "Round Trip"}
              onChange={handleChange}
              className="accent-orange-500"
              autoComplete="off"
            />
            Round Trip
          </label>
        </div>

        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
          required
          autoComplete="off"
        >
          <option value="">Select Vehicle Type</option>
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Toyota Innova">Toyota Innova</option>
          <option value="Tempo Traveller">Tempo Traveller (12 Seater)</option>
          <option value="Mini Bus">Mini Bus (18-20 Seater)</option>
          <option value="Big Bus">Big Bus (35-40 Seater)</option>
          <option value="Luxury Bus">Luxury Bus (35-40 Seater)</option>
        </select>

        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="number"
            name="numberOfPeople"
            placeholder="No. of People"
            min="1"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
          <label className="text-xs text-gray-500 absolute -top-5 left-0">Departure Date</label>
        </div>

        {formData.tripType === "Round Trip" && (
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
              required={formData.tripType === "Round Trip"}
              autoComplete="off"
            />
            <label className="text-xs text-gray-500 absolute -top-5 left-0">Return Date</label>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting, you agree to our terms and conditions.
      </p>
    </div>
  );
}