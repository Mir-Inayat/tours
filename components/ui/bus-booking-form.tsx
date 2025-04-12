"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast" // Import toast if you have it, or we can use a simple alert

export function BusBookingForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pickupLocation: "",
    dropoffLocation: "",
    tripType: "One-Way Trip",
    vehicleType: "",
    numberOfPeople: "",
    departureDate: "",
    returnDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Basic validation
      if (!formData.fullName || !formData.phoneNumber || !formData.pickupLocation || 
          !formData.dropoffLocation || !formData.vehicleType || !formData.numberOfPeople || 
          !formData.departureDate || (formData.tripType === "Round Trip" && !formData.returnDate)) {
        throw new Error("Please fill all required fields");
      }

      // In a real app, we would send this to the backend
      console.log("Form submitted:", formData);
      
      // Submit to API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
          status: "new"
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }
      
      // Show success message
      if (typeof toast !== 'undefined') {
        toast({
          title: "Booking Received!",
          description: "We'll contact you shortly to confirm your booking details.",
        });
      } else {
        alert("Booking request received! We'll contact you soon.");
      }
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        phoneNumber: "",
        pickupLocation: "",
        dropoffLocation: "",
        tripType: "One-Way Trip",
        vehicleType: "",
        numberOfPeople: "",
        departureDate: "",
        returnDate: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      if (typeof toast !== 'undefined') {
        toast({
          title: "Error",
          description: error.message || "There was an error submitting your booking. Please try again.",
          variant: "destructive"
        });
      } else {
        alert(error.message || "There was an error submitting your booking. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Your Ride</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input 
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
            required
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
        </div>

        <div className="relative">
          <input 
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
            required
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
        </div>

        <div className="relative">
          <input 
            type="text"
            name="pickupLocation"
            placeholder="Pick-up Location"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
            required
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
        </div>

        <div className="relative">
          <input 
            type="text"
            name="dropoffLocation"
            placeholder="Drop-off Location"
            value={formData.dropoffLocation}
            onChange={handleChange}
            className="pl-9 w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
            required
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
        </div>

        <div className="flex gap-4">
          <label className="flex items-center space-x-1.5">
            <input 
              type="radio" 
              name="tripType" 
              value="One-Way Trip"
              checked={formData.tripType === "One-Way Trip"} 
              onChange={handleChange}
              className="accent-orange-500"
            />
            <span className="text-sm text-gray-600">One-Way Trip</span>
          </label>
          <label className="flex items-center space-x-1.5">
            <input 
              type="radio" 
              name="tripType" 
              value="Round Trip"
              checked={formData.tripType === "Round Trip"} 
              onChange={handleChange}
              className="accent-orange-500"
            />
            <span className="text-sm text-gray-600">Round Trip</span>
          </label>
        </div>

        <select 
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-gray-300 bg-white text-gray-500 p-2"
          required
        >
          <option value="">Choose Your Ride</option>
          <option value="Wagon R">Wagon R</option>
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Toyota Etios">Toyota Etios</option>
          <option value="Ertiga">Ertiga</option>
          <option value="Innova">Innova</option>
          <option value="Innova Crysta">Innova Crysta</option>
          <option value="Tata Sumo Gold">Tata Sumo Gold</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
          <option value="Bus">Bus</option>
        </select>

        <input 
          type="number"
          name="numberOfPeople"
          placeholder="No. of People"
          min="1"
          value={formData.numberOfPeople}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
          required
        />

        <div className="relative">
          <input 
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
            required
          />
          <label className="absolute text-xs text-gray-500 -top-2 left-2 bg-white px-1">
            Departure Date (dd-mm-yyyy)
          </label>
        </div>

        {formData.tripType === "Round Trip" && (
          <div className="relative">
            <input 
              type="date"
              name="returnDate"
              placeholder="Return Date"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white"
              required={formData.tripType === "Round Trip"}
            />
            <label className="absolute text-xs text-gray-500 -top-2 left-2 bg-white px-1">
              Return Date (dd-mm-yyyy)
            </label>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Book Now"}
        </Button>
      </form>
    </div>
  );
}