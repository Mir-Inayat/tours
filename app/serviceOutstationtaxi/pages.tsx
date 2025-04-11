"use client"

import React from "react"
import { MapPin, Shield, Users, Clock, Star } from "lucide-react"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function OutstationTaxi() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Outstation Taxis in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best outstation taxi hiring service since 1995, 
              in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the 
              largest fleet of GPS enabled taxis. You can hire Ertiga, Toyota Innova, Innova Crysta, 
              Swift Dzire, Sumo Gold, Tempo Traveller, Volvo Buses, and Etios.
            </p>
          </div>

          {/* Booking Form */}
          <div className="md:w-1/2 md:pl-8">
            <BusBookingForm />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-center text-gray-800 font-semibold mb-4">Customer Reviews</h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={18} />
                  <span className="text-gray-700">Noida, Greater Noida & Ghaziabad</span>
                </div>
                <div className="flex">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-600">4.8/5 (131 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-orange-500 text-sm font-semibold mb-2">
                Best Outstation Taxi Booking Service Provider in Noida | Greater Noida | Ghaziabad
              </h2>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why choose our outstation taxi booking service?</h3>
              <p className="text-gray-600 mb-6">
                We have been in the tour and travels business for more than 20 years. We are uniquely placed 
                as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, 
                Greater Noida, and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) 
                on Google My Business and 4.6/5 on Just Dial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What sets Yashika Tour & Travels apart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced and well-trained drivers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24x7 Service</h3>
              <p className="text-gray-600">Available round the clock</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Guaranteed satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability & Security</h3>
              <p className="text-gray-600">Safe and secure travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Book outstation taxi in Noida, Greater Noida & Ghaziabad
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            Our Outstation cab rental booking service offers you several options for traveling to Agra, 
            Haridwar, Nainital, Mussoorie, Rishikesh, Jaipur, Chandigarh, Manali, Ajmer, Shimla, 
            Ambala, Dehradun, Patiala, Amritsar, McLeodganj, or Lansdowne.
          </p>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            Outstation Holidays or business & family trips must be fun and stress-free, you must spend 
            time with your dear ones. Online outstation taxi rental booking is easy to do with our 
            hassle-free booking process & transparent billings.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Why hire outstation cabs in Noida from Yashika Tour & Travels?
              </h3>
              <p className="text-gray-600 mt-2">
                When you hire a outstation cab from Yashika Tour & Travels, you get transparent billing, 
                low prices, and 24×7 customer support along with our pan India reach.
              </p>
            </div>
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                In which cities are Yashika Tour & Travel's outstation taxi/cab Booking Service available?
              </h3>
            </div>
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                How do I book an outstation taxi or cab in Noida?
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  )
} 