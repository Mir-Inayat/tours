"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { BusBookingForm } from "@/components/ui/bus-booking-form";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Bus & Deluxe Coaches in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best buses and deluxe coaches booking service (AC/Non-AC) in
              Noida, Greater Noida, and Ghaziabad for weddings, parties, business events, etc. with a 100% customer
              satisfaction rate. We have the largest fleet of buses and deluxe coaches at affordable rates.
            </p>
          </div>

          {/* Integrated Form Component */}
          <div className="md:w-1/2 md:pl-8">
            <BusBookingForm />
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-center text-gray-800 font-semibold mb-4">Customer Satisfaction Rate</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full border-8 border-blue-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-blue-600">
                  100%
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={18} />
                  <span className="text-gray-700">Noida, Greater Noida & Ghaziabad</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-orange-500 text-sm font-semibold mb-2">
                Best Bus/Deluxe Coach Booking Service Provider in Noida | Greater Noida | Ghaziabad
              </h2>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Why hire bus from Yashika Tour & Travels?</h3>
              <p className="text-gray-600 mb-6">
                We have been in the tour and travel business for more than 20 years. We are uniquely placed as the best
                & the largest bus/deluxe coach rental service provider in Noida, Greater Noida and Ghaziabad at lowest
                of prices. We have received 4.8/5 (173) Reviews on Google My Business and 4.9/5 on Just Dial.
              </p>
              <p className="text-gray-600 mb-6">
                Yashika Tour & Travels provides the best and reliable coach/deluxe coach booking service in Noida,
                Greater Noida, and Ghaziabad. Our bus fleet are highly experienced and have been appropriately trained.
                We offer pick-up services in Noida, Greater Noida, Ghaziabad and Delhi/NCR regions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional & Well-mannered drivers</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Buses are well maintained</h4>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Guaranteed Customer Satisfaction</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What sets our buses & deluxe coaches booking service apart?
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            Yashika Tour & Travels is a renowned and well-established bus, deluxe coach, and minibus rental service
            company in Noida, specialized in various bus/coach rental/modified & college transport companies car rental
            solutions. Our journey began in 1995, since then, we have and deluxe coach rental service expertise and
            trust with thousands of happy customers. We believe in our customer's safety & their comfort.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Mini Bus, Deluxe Coaches & Bus in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
              Yashika Tour & Travels is the most trusted bus rental service provider in Noida, Greater Noida and
              Ghaziabad. We offer luxury buses, Mini Buses and Volvo buses in different seating capacity, which is from
              9 seater to 45 seater, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Start your wedding journey with our bus rental service!
          </h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-center">
            The journey from engagement to the wedding is full of visits & downs and involves careful steps. While you
            shoulder the responsibilities of the wedding preparations, we take care of your transportation needs.
            Yashika Tour & Travels is the most trusted bus rental service provider luxury coach on hire for wedding in
            Noida, Greater Noida & Ghaziabad to ensure that you, your friends, and your guests enjoy all the comfort
            they deserve. We end the confusion over buses, deluxe coaches & mini buses in Noida, Greater Noida & Ghaziabad!
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
                <h3 className="text-lg font-semibold text-gray-800">Why choose our bus booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  What are the types of buses offered for booking in Noida?
                </h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  In which cities are Yashika Tour & Travels Bus Hire Service available?
                </h3>
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
