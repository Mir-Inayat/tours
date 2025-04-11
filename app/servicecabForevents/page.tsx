"use client"

import React from "react"
import { MapPin, Shield, Users, Clock, Calendar } from "lucide-react"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"
export default function EventTransport() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event Transportation Services in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Make your events memorable with our premium transportation services. From weddings to corporate 
              events, we provide reliable and comfortable transportation solutions for all occasions.
            </p>
          </div>

          {/* Booking Form */}
          <div className="md:w-1/2 md:pl-8">
            <BusBookingForm />
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Events We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Weddings</h3>
              </div>
              <p className="text-gray-600">
                Luxury transportation for your special day and related ceremonies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Corporate Events</h3>
              </div>
              <p className="text-gray-600">
                Professional transportation for conferences and business meetings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Special Occasions</h3>
              </div>
              <p className="text-gray-600">
                Reliable transport for parties, tours, and special gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Vehicles for Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Luxury Cars</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Innova Crysta</li>
                <li>Toyota Fortuner</li>
                <li>Honda City</li>
                <li>Maruti Suzuki Ciaz</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Group Transport</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Tempo Traveller (12-26 Seater)</li>
                <li>Mini Buses</li>
                <li>Luxury Coaches</li>
                <li>Volvo Buses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Us for Events?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Dedicated Coordinators</h3>
              <p className="text-gray-600">
                Personal event coordinator to manage all transportation needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flexible Packages</h3>
              <p className="text-gray-600">
                Customized solutions to match your event requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <p className="text-gray-600">
                Well-trained staff and drivers for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  )
} 