"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { BusBookingForm } from "@/components/ui/bus-booking-form"

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

// Destination Section Component
const DestinationSection = ({ city, destinations }: DestinationSectionProps) => {
  const handleDestinationClick = (from: string, to: string, e: React.MouseEvent) => {
    e.preventDefault();
    const bookingForm = document.getElementById('booking-form');
    
    // Update form inputs if possible
    if (typeof window !== 'undefined') {
      // Set from and to in URL parameters to be picked up
      const url = new URL(window.location.href);
      url.searchParams.set('from', from);
      url.searchParams.set('to', to);
      window.history.replaceState({}, '', url);
    }
    
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
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section with Form */}
      <div className="relative py-12 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image2.jpg"
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Destinations
              </h1>
              <p className="text-gray-200 max-w-xl mx-auto lg:mx-0">
                Book Cab/Taxi in Noida, Greater Noida & Ghaziabad To Your Popular Destinations. 
                We provide the best taxi services with GPS-enabled vehicles and experienced drivers.
              </p>
            </div>
            
            {/* Right Side - Booking Form */}
            <div id="booking-form" className="w-full lg:w-1/2 max-w-md mx-auto">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-xl">
                <BusBookingForm className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col gap-16">
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
