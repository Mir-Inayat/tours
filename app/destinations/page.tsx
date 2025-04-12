"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

// Move these types to a separate types.ts file if needed
type FormData = {
  fullName: string;
  phone: string;
  from: string;
  to: string;
  tripType: "one-way" | "round";
  vehicle: string;
  passengers: string;
  departureDate: string;
  returnDate: string;
}

type DestinationSectionProps = {
  city: string;
  destinations: string[];
}

// Constants
const DESTINATIONS = {
  noida: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ],
  greaterNoida: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ],
  ghaziabad: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ]
} as const;

const VEHICLE_OPTIONS = [
  "Choose Your Ride",
  "Wagon R",
  "Swift Dzire", 
  "Toyota Etios",
  "Ertiga",
  "Innova",
  "Innova Crysta",
  "Tata Sumo Gold",
  "Tempo Traveller",
  "Bus"
] as const;

// Destination Section Component
const DestinationSection = ({ city, destinations }: DestinationSectionProps) => {
  const handleDestinationClick = (from: string, to: string, e: React.MouseEvent) => {
    e.preventDefault();
    const bookingForm = document.getElementById('booking-form');
    bookingForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Hire Taxi/Cab from {city} to your favourite destinations!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {destinations.map((dest) => (
          <a 
            href="#booking-form"
            key={dest}
            onClick={(e) => handleDestinationClick(city, dest, e)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between cursor-pointer"
          >
            <span>{city} To {dest} Taxi</span>
            <span className="text-orange-500">→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

// Main Page Component
export default function DestinationsPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    from: "",
    to: "",
    tripType: "one-way",
    vehicle: "",
    passengers: "",
    departureDate: "",
    returnDate: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image2.jpg"
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Popular Destinations
          </h1>
          <p className="text-gray-200 text-center max-w-3xl mx-auto">
            Book Cab/Taxi in Noida, Greater Noida & Ghaziabad To Your Popular Destinations. 
            We provide the best taxi services with GPS-enabled vehicles and experienced drivers.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col gap-16">
          {/* Booking Form */}
          <div id="booking-form" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Book a ride to your favourite destination!</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="p-3 border rounded-lg"
                required 
              />
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number" 
                className="p-3 border rounded-lg"
                required 
              />
              <input 
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Pick-up Location" 
                className="p-3 border rounded-lg"
                required 
              />
              <input 
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="Drop-off Location" 
                className="p-3 border rounded-lg"
                required 
              />
              
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="tripType"
                    value="one-way"
                    checked={formData.tripType === "one-way"}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  One-Way Trip
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="tripType"
                    value="round"
                    checked={formData.tripType === "round"}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  Round Trip
                </label>
              </div>

              <select 
                name="vehicle"
                value={formData.vehicle}
                onChange={handleInputChange}
                className="p-3 border rounded-lg"
                required
              >
                {VEHICLE_OPTIONS.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                className="p-3 border rounded-lg"
                required
              >
                <option value="">No. of People</option>
                {[...Array(15)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? 'person' : 'people'}
                  </option>
                ))}
              </select>

              <input 
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                className="p-3 border rounded-lg"
                required 
              />
              
              {formData.tripType === "round" && (
                <input 
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg"
                  required 
                />
              )}

              <Button 
                type="submit"
                className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-medium"
              >
                Book Now
              </Button>
            </form>
          </div>

          {/* Destination Sections */}
          {Object.entries(DESTINATIONS).map(([city, destinations]) => (
            <DestinationSection 
              key={city} 
              city={city.charAt(0).toUpperCase() + city.slice(1)} 
              destinations={destinations} 
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
