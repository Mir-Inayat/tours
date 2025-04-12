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
              Hire Toyota Etios in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with a 100% Customer Satisfaction Rate. We have the largest fleet of GPS-enabled Toyota Etios in Noida. You can hire Toyota Etios 5 seater Sedan in Noida for local travel, outstation travel, employee transport facilities, events, corporate cab rental, etc.
            </p>
            <p className="mb-6">
              Book Toyota Etios in Noida Now for
            </p>

            {/* Service Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              <a href="/servicelocaltaxi" className="text-sm bg-emerald-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-emerald-500 transition-all duration-300 text-center font-medium shadow-sm">
                Local Travel
              </a>
              <a href="/serviceout" className="text-sm bg-sky-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-sky-500 transition-all duration-300 text-center font-medium shadow-sm">
                Outstation Travel
              </a>
              <a href="/serviceCorporateCab" className="text-sm bg-violet-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-violet-500 transition-all duration-300 text-center font-medium shadow-sm">
                Employee Transport
              </a>
              <a href="/servicecabForevents" className="text-sm bg-rose-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-rose-500 transition-all duration-300 text-center font-medium shadow-sm">
                Event Transport
              </a>
              <a href="/serviceCorporateCab" className="text-sm bg-amber-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-amber-500 transition-all duration-300 text-center font-medium shadow-sm">
                Corporate Rental
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

      {/* Why book Toyota Etios Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/path/to/toyota-etios-image.jpg" alt="Toyota Etios" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why book Toyota Etios from Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable Toyota Etios cab booking service in Noida, Greater Noida, and Ghaziabad. Our taxi drivers are highly experienced and have been appropriately trained.
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
            Best Toyota Etios Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Toyota Etios Sedan rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our Toyota Etios rental services have expanded more with our fleet in time and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
        </div>
      </section>

      {/* Why Toyota Etios is Best Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets our Toyota Etios booking service in Noida apart?</h2>
          <p className="text-gray-600 mb-6">
            Toyota Etios is the best sedan for wedding transportation, employee transportation, local & outstation travel, etc. for long-distance & short-distance travel specially for group travelling & employee transportation service because of its comfort and powerful engine. Hiring a Toyota Etios in Noida with a professional driver gives you the flexibility, leave for your trip on time, and hassle-free rides.
          </p>
          <p className="text-gray-600 mb-6">
            Booking Toyota Etios at Yashika Tour & Travels In Noida assures a comfortable, safe, quick, and trouble-free journey to destinations in and around Noida. Our Toyota Etios cabs rental services in Noida are most trustworthy and affordable, ensuring the best quality services.
          </p>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is one of the well-known tour and travels agency that helps you get confirmed bookings of Toyota Etios taxi and cab services in Noida in no time. Apart from the Toyota Etios cab service in Noida, Yashika Tour & Travels has many other sedans, Tempo Travellers, Volvo Buses, and Hatchbacks with its fleet operators.
          </p>
          <p className="text-gray-600 mb-6">
            Toyota Etios accounts for the best vehicle choice for long travel outside Noida, Greater Noida, or Ghaziabad, as it's spacious, sturdy, and comfortable. It is a 5 seater sedan and is ideal for families. Yashika Tour & Travels has many well-maintained Noida Toyota Etios taxis, which are timely available.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Features of Toyota Etios</h2>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Leather fabric upholstery</li>
            <li>Head rest & neck rest</li>
            <li>4+1 Fully reclining seats</li>
            <li>Specious and comfortable seats</li>
            <li>Both AC & Non AC variants available</li>
            <li>Ample leg space</li>
            <li>Stereo system</li>
            <li>First Aid Box</li>
            <li>Ample boot space for luggage</li>
            <li>Neat & clean seat covers and curtains</li>
            <li>Properly sanitized cars</li>
          </ul>
        </div>
      </section>

      {/* Other Cabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Other Vehicles available for booking</h2>
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
              <img src="/path/to/tempo-traveller-image.jpg" alt="Force Tempo Traveller" className="w-full h-auto mb-4" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Book Force Tempo Traveller</button>
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
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Toyota Etios booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Toyota Etios Rental Service available?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">What is the seating capacity of Toyota Etios?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">How to book Toyota Etios in Noida?</h3>
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