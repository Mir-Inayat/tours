"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Local Taxis in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best local taxi hiring service since 1995, in Noida, Greater Noida and Ghaziabad with a 100% Customer Satisfaction Rate. We have the largest fleet of GPS-enabled taxis. You can hire Ertiga, Toyota Innova, Innova Crysta, Swift Dzire, Sumo Gold, Tempo Traveller, Volvo Buses, and Etios.
            </p>
            <p className="mb-6">
              Hire Taxi in Noida Now
            </p>
          </div>

          {/* Integrated Form Component */}
          <div className="md:w-1/2 md:pl-8">
            <div className="max-w-sm mx-auto">
              <BusBookingForm />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Skip to content
              Yashika Tour and Travels logo - taxi, tempo traveller booking company in noida, greater noida, Ghaziabad
              Home
              About
              Services
              Popular Destinations
              Our Fleet
              Blogs
              Contact
              Call us
            </p>
            <img src="/path/to/local-taxi-image.jpg" alt="Local Taxi" className="mt-4 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Why Choose Yashika Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/path/to/local-taxi-image.jpg" alt="Local Taxi" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida, and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable local taxi booking service in Noida, Greater Noida & Ghaziabad. Our drivers are highly experienced and very well familiar with the routes.
            </p>
            <p className="text-gray-600 mb-6">
              We strive to provide you best, reliable, and affordable local taxi rental & outstation taxi rental service, bus/deluxe coach rental service, tempo traveller rental service, corporate car rental service, School/College Transport service in Noida, Greater Noida, and Ghaziabad.
            </p>
          </div>
        </div>
      </section>

      {/* What sets us apart Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets Yashika Tour & Travels apart?</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established taxi rental service company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our local rental services have expanded more and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Drivers</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24x7 Service Availability</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guaranteed Customer Satisfaction</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability & Security</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Book local taxi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book local taxi in Noida, Greater Noida & Ghaziabad</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels has a huge fleet of cars, tempo travellers, buses, deluxe coaches to choose from. Try booking a taxi for local cab rental in Noida at Yashika Tour & Travels to get the best experience of travelling to different destinations at affordable costs and 24*7 customer support. Intercity or Local cab booking will fit right in your budget, but you cannot guarantee the same thing about buses, deluxe coaches, tempo travellers, etc. if booked elsewhere. Try cab booking for outstation trips at Yashika Tour & Travels to enjoy exclusive benefits.
          </p>
          <p className="text-gray-600 mb-6">
            Our Local cab rental booking service offers you several options for travelling in and around Noida, Greater Noida or Ghaziabad. Suppose you want to visit the local markets, wildlife sanctuaries, heritage visits, to luxury resorts, or religious places. In that case, you can try outstation cab rental in Noida, Greater Noida & Ghaziabad. If you want to visit to Agra, Haridwar, Nainital, Mussoorie, Rishikesh, Jaipur, Chandigarh, Manali, Ajmer, Shimla, Ambala, Dehradun, Patiala, Amritsar, McLeodganj, or Lansdowne, our outstation cab rental booking service is just what you need to make your next trip the best.
          </p>
          <p className="text-gray-600 mb-6">
            Local Trips, Holidays or business & family trips must be fun and stress-free, you must spend time with your dear ones. Online local taxi rental booking is easy to do with our hassle-free booking process & transparent billings. All you need do is visit our website & fill-up the booking form or call us directly. We will resolve all your issues in no time.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">Why hire local cabs in Noida from Yashika Tour & Travels?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travel's local taxi/cab Booking Service available?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">How do I book a local taxi or cab in Noida?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  );
}