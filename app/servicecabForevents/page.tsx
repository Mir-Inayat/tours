"use client"

import React, { useState } from "react"
import { MapPin, Shield, Users, Clock, Calendar } from "lucide-react"
import { BusBookingForm } from "@/components/ui/bus-booking-form" // Updated import
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function EventTransport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Event Transportation Services in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Make your events memorable with our premium transportation services. From weddings to corporate 
              events, we provide reliable and comfortable transportation solutions for all occasions.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-white">Available vehicles for your events:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <a href="/fleetertiga" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Ertiga
              </a>
              <a href="/fleetnova" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Toyota Innova
              </a>
              <a href="/fleetcrysta" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Innova Crysta
              </a>
              <a href="/fleetswift" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Swift Dzire
              </a>
              <a href="/fleetsumo" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Sumo Gold
              </a>
              <a href="/fleettempo" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Tempo Traveller
              </a>
              <a href="/fleetvolvo" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Volvo Buses
              </a>
              <a href="/fleetetios" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Etios
              </a>
            </div>
          </div>

          {/* Integrated Form Component */}
          <div className="md:w-1/2 md:pl-8">
            <div className="max-w-sm mx-auto">
              <BusBookingForm />
            </div>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-xl font-semibold">
                  Why choose our cab service for events?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openFaq === 0 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Whether it is about dropping off your guests at an airport, booking a deluxe bus for wedding, or arranging pick-up & drop off facilities for your business events, school trips, graduation party, tours, etc. we make sure that you have your safety ensured that too within your budget.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-xl font-semibold">
                  What sets our event transportation apart?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openFaq === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Wherever you want to, it's not possible without professional drivers. Our drivers are well trained to handle your event transportation needs safely and courteously. With Yashika Tour & Travels, you do not have to worry about unqualified drivers as we hire only those who possess good knowledge of routes. We provide the best in customer service for you and your group so that you can relax and enjoy your event.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-xl font-semibold">
                  In which cities are Yashika Tour & Travel's Event Cab Booking Service available?
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openFaq === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    We are in the tour and travels business since 1995, and we proudly say that we are one of the best event transportation service providers in Noida, Greater Noida & Ghaziabad. As of now, we provide event cab rental services in Noida, Greater Noida & Ghaziabad.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  )
}