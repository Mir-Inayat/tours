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
              Hire Force Tempo Traveller in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Force Tempo Travellers in Noida. You can hire Force tempo traveller in Noida with 12, 16, 20, 25, etc. seating options available for local travel, outstation travel, employee transport facilities, event vehicle rental, corporate cab rental, etc.
            </p>
            <p className="mb-6">
              Book Tempo Traveller in Noida Now
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
            <img src="/path/to/tempo-traveller-image.jpg" alt="Force Tempo Traveller" className="mt-4 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Why book Tempo Traveller Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/path/to/tempo-traveller-image.jpg" alt="Force Tempo Traveller" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why book Tempo Traveller from Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable 12, 16, 20, 25 seater tempo traveller booking service in Noida, Greater Noida and Ghaziabad. Our drivers are highly experienced and have been appropriately trained.
            </p>
            <p className="text-gray-600 mb-6">
              We strive to provide you best, reliable, and affordable local cab rental service, outstation cab rental service, bus/deluxe coach rental service, tempo traveller rental service, minibus, corporate car rental service, School/College Transport service in Noida, Greater Noida and Ghaziabad.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Best Tempo Traveller Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Force Tempo Traveller rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our tempo traveller rental services have expanded more with our fleet in time and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
        </div>
      </section>

      {/* Why Tempo Traveller is Best Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets our Tempo Traveller booking service in Noida apart?</h2>
          <p className="text-gray-600 mb-6">
            Force Tempo Traveller has always been the favourite mini-bus among the people for a long trip with friends, corporate employees, school/college transportation, etc. Force Tempo Travellers are the best mini bus for long-distance & short-distance travel specially for group travelling because of their comfort and boot space.
          </p>
          <p className="text-gray-600 mb-6">
            Apart from comfort, and affordability, many other reasons make our luxury tempo travellers in Noida, Greater Noida & Ghaziabad the right choice when traveling with 7 or 8+ passengers. Some of the other advantages of booking a force tempo traveller in Noida on rent are:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Sufficient luggage space</li>
            <li>A dedicated luggage compartment in the boot of the minibus or tempo traveller</li>
            <li>Ample leg space for the young and the elderly</li>
            <li>Liberty to add more stops and pick up points without extra charges</li>
            <li>Premium audio systems and Television screens</li>
            <li>Unmatched variety of AC and Non-AC vehicles</li>
            <li>Sufficient aisle space and comfortable seating arrangement</li>
            <li>24-hour support service</li>
            <li>Punctual, courteous, and verified drivers, aka tour guides</li>
            <li>Well-maintained tempo travellers</li>
            <li>Transparent billing with no hidden charges</li>
            <li>Superior engine from Benz, Force Tempo Travellers, Mahindra that keep the vehicle steady</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Our available Tempo traveller models in Noida are:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>12 seater tempo traveller</li>
            <li>16 seater tempo traveller</li>
            <li>20 seater Maharaja tempo traveller (all sofa seat)</li>
            <li>25 seater tempo traveller</li>
          </ul>
        </div>
      </section>

      {/* Other Cabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Other Cabs available for booking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/ertiga-image.jpg" alt="Ertiga" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Ertiga</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/innova-image.jpg" alt="Innova" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Innova</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/innova-crysta-image.jpg" alt="Innova Crysta" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Innova Crysta</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/swift-dzire-image.jpg" alt="Swift Dzire" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Maruti Suzuki Swift Dzire</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/tata-sumo-image.jpg" alt="Tata Sumo Gold" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Tata Sumo Gold</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/toyota-etios-image.jpg" alt="Toyota Etios" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Toyota Etios</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/volvo-bus-image.jpg" alt="Volvo Buses" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Volvo Buses</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Force Tempo Travellers booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Tempo Traveller Rental Service available?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">How to book Force Tempo Traveller in Noida?</h3>
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