"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function BusBookingForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    console.log("Form submitted:", formData);
    alert("Booking request received! We'll contact you soon.");
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
            className="pl-9 w-full h-10 rounded-md border border-gray-200 p-2"
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
            className="pl-9 w-full h-10 rounded-md border border-gray-200 p-2"
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
            className="pl-9 w-full h-10 rounded-md border border-gray-200 p-2"
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
            className="pl-9 w-full h-10 rounded-md border border-gray-200 p-2"
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
            />
            <span className="text-sm text-gray-600">Round Trip</span>
          </label>
        </div>

        <select 
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-gray-200 bg-white text-gray-500 p-2"
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
          value={formData.numberOfPeople}
          onChange={handleChange}
          className="w-full h-10 rounded-md border border-gray-200 p-2"
        />

        <div className="relative">
          <input 
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full h-10 rounded-md border border-gray-200 p-2"
          />
        </div>

        {formData.tripType === "Round Trip" && (
          <div className="relative">
            <input 
              type="date"
              name="returnDate"
              placeholder="Return Date"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full h-10 rounded-md border border-gray-200 p-2"
            />
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium"
        >
          Book Now
        </Button>
      </form>
    </div>
  );
}