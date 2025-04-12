"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const destinations = {
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
}

export default function DestinationsPage() {
  const [formData, setFormData] = useState({
    from: "",
    to: ""
  });
  
  // Function to handle destination card clicks
  const handleDestinationClick = (from, to, e) => {
    e.preventDefault(); // Prevent default link behavior
    
    // Set form data values
    setFormData({
      from: from,
      to: to
    });
    
    // Scroll to booking form
    document.getElementById('booking-form').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/destinations-hero-image.jpg"
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Popular Destinations</h1>
          <p className="text-gray-200 text-center max-w-3xl mx-auto">
            Book Cab/Taxi in Noida, Greater Noida & Ghaziabad To Your Popular Destinations. We provide the best taxi services with GPS-enabled vehicles and experienced drivers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col gap-16">
          {/* Booking Form */}
          <div id="booking-form" className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Book a ride to your favourite destination!</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
              <input 
                type="text" 
                placeholder="Pick-up Location" 
                value={formData.from} 
                onChange={(e) => setFormData({...formData, from: e.target.value})}
                className="p-3 border rounded-lg" 
              />
              <input 
                type="text" 
                placeholder="Drop-off Location" 
                value={formData.to} 
                onChange={(e) => setFormData({...formData, to: e.target.value})}
                className="p-3 border rounded-lg" 
              />
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="tripType" className="mr-2" defaultChecked />
                  One-Way Trip
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tripType" className="mr-2" />
                  Round Trip
                </label>
              </div>
              <select className="p-3 border rounded-lg">
                <option>Choose Your Ride</option>
                <option>Wagon R</option>
                <option>Swift Dzire</option>
                <option>Toyota Etios</option>
                <option>Ertiga</option>
                <option>Innova</option>
                <option>Innova Crysta</option>
                <option>Tata Sumo Gold</option>
                <option>Tempo Traveller</option>
                <option>Bus</option>
              </select>
              <select className="p-3 border rounded-lg">
                <option>No. of People</option>
                {[...Array(15)].map((_, i) => (
                  <option key={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                ))}
              </select>
              <input type="date" placeholder="Departure Date" className="p-3 border rounded-lg" />
              <input type="date" placeholder="Return Date" className="p-3 border rounded-lg" />
              <Button className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-medium">
                Book Now
              </Button>
            </form>
          </div>

          {/* Noida Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Noida to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.noida.map((dest) => (
                <a 
                  href="#"
                  key={dest}
                  onClick={(e) => handleDestinationClick('Noida', dest, e)}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between cursor-pointer"
                >
                  <span>Noida To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Greater Noida Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Greater Noida to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.greaterNoida.map((dest) => (
                <a 
                  href="#"
                  key={dest}
                  onClick={(e) => handleDestinationClick('Greater Noida', dest, e)}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between cursor-pointer"
                >
                  <span>Greater Noida To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ghaziabad Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Ghaziabad to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.ghaziabad.map((dest) => (
                <a 
                  href="#"
                  key={dest}
                  onClick={(e) => handleDestinationClick('Ghaziabad', dest, e)}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between cursor-pointer"
                >
                  <span>Ghaziabad To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
