"use client"

import React from "react"
import { MapPin, Shield, Users, Clock, Building2 } from "lucide-react"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function Corporate() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Corporate Travel Solutions in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides premium corporate travel services with dedicated account management, 
              flexible billing options, and a wide range of vehicles to meet your business transportation needs.
            </p>
          </div>

          {/* Booking Form */}
          <div className="md:w-1/2 md:pl-8">
            <BusBookingForm />
          </div>
        </div>
      </section>

      {/* Corporate Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Corporate Travel Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Dedicated Account Manager</h3>
              </div>
              <p className="text-gray-600">
                Personal account manager for seamless service coordination.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">Corporate Billing</h3>
              </div>
              <p className="text-gray-600">
                Flexible billing options with detailed monthly statements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-blue-500 mr-4" />
                <h3 className="text-xl font-semibold">24/7 Support</h3>
              </div>
              <p className="text-gray-600">
                Round-the-clock assistance for your business travel needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Corporate Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Airport Transfers</h3>
              <p className="text-gray-600">
                Reliable pickup and drop-off services for business travelers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Employee Transportation</h3>
              <p className="text-gray-600">
                Regular employee pickup and drop facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Event Transportation</h3>
              <p className="text-gray-600">
                Transportation for corporate events and conferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Travel</h3>
              <p className="text-gray-600">
                Comfortable vehicles for business meetings and client visits.
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