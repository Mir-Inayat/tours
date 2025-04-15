"use client";

import { useState } from "react";
import { User, Phone, MapPin, Calendar, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export function BusBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    pickupLocation: "",
    dropoffLocation: "",
    tripType: "One-Way Trip",
    vehicleType: "Swift Dzire",
    numberOfPeople: "",
    departureDate: "",
    returnDate: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you shortly to confirm your booking.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        pickupLocation: "",
        dropoffLocation: "",
        tripType: "One-Way Trip",
        vehicleType: "Swift Dzire",
        numberOfPeople: "",
        departureDate: "",
        returnDate: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Book Your Ride</h2>
      
      {/* Add autoComplete="off" to the form */}
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
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Toyota Innova">Toyota Innova</option>
          <option value="Tempo Traveller">Tempo Traveller (12 Seater)</option>
          <option value="Mini Bus">Mini Bus (18-20 Seater)</option>
          <option value="Big Bus">Big Bus (35-40 Seater)</option>
          <option value="Luxury Bus">Luxury Bus (35-40 Seater)</option>
        </select>

        <div className="relative">
          <input
            type="number"
            name="numberOfPeople"
            placeholder="No. of People"
            min="1"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        <div className="relative">
          <label className="text-sm text-gray-600">Departure Date:</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
            required
            autoComplete="off"
          />
        </div>

        {formData.tripType === "Round Trip" && (
          <div className="relative">
            <label className="text-sm text-gray-600">Return Date:</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-gray-300 p-2 bg-white text-gray-800"
              required={formData.tripType === "Round Trip"}
              autoComplete="off"
            />
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
    </div>
  );
}