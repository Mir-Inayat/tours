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
              Hire Volvo Buses & Coaches in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Deluxe Volvo Buses & Coaches in Noida. You can hire Volvo Buses in Noida for local travel, outstation travel, employee transport facilities, events, corporate cab rental, etc.
            </p>
            <p className="mb-6">
              Book Volvo Deluxe bus in Noida Now for
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

      {/* Why book Volvo Bus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/path/to/volvo-bus-image.jpg" alt="Volvo Bus" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why book Volvo Bus from Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides a safe, reliable Deluxe Volvo Bus & Coach booking service in Noida, Greater Noida and Ghaziabad. Our bus & cab drivers are highly experienced and have been appropriately trained.
            </p>
            <p className="text-gray-600 mb-6">
              We strive to provide you best, reliable, and affordable local cab rental service, outstation cab rental service, bus/deluxe coach rental service, tempo traveller rental service, minibus, corporate car rental service, School/College Transport service in Noida, Greater Noida and Ghaziabad. You can choose from 35, 41 & 45 seater Volvo buses and book Volvo bus in Noida for weddings, outstation trips, business trips, to hill-stations, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Best Deluxe Volvo Bus Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Deluxe Volvo Bus & Coaches rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our Deluxe Bus rental services have expanded more with our fleet in time and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
        </div>
      </section>

      {/* Why Volvo Bus is Best Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets our Deluxe Volvo Bus booking service in Noida apart?</h2>
          <p className="text-gray-600 mb-6">
            Volvo Buses are the best options for wedding transportation, employee transportation, school/college transportation, etc. for long-distance & short-distance travel specially for group travelling & employee transportation service because of its comfort and powerful engine. Hiring a Deluxe Volvo Bus & Coaches in Noida with a professional driver gives you the flexibility, leave for your trip on time, and hassle-free rides.
          </p>
          <p className="text-gray-600 mb-6">
            At Yashika Tour & Travels, you can book 35, 41 & 45 seater volvo buses & coaches in Noida as per your requirement. Booking Deluxe Volvo Buses in Noida, Greater Noida & Ghaziabad at Yashika Tour & Travels is very simple, you just have to fill up the bus booking form on our homepage or give us a call.
          </p>
          <p className="text-gray-600 mb-6">
            Volvo Bus is one of the most spacious, powerful and budget-friendly bus & coach option for outstation trips from Noida that promises comfort. Book Buses & Coaches in Noida, Greater Noida & Ghaziabad from Yashika Tour & Travels, at affordable and budget-friendly rates. Whether you are with your family, friends, or business clients, Volvo Buses promises comfort and a pleasant ride. Be assured to get courteous & professional bus drivers for your Deluxe Volvo Bus & Coaches.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Features of Volvo Deluxe Bus Hire</h2>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Head rest & neck rest</li>
            <li>Fully reclining/ pushback seats</li>
            <li>Specious and comfortable seats</li>
            <li>AC variant available</li>
            <li>Ample leg space</li>
            <li>Stereo system</li>
            <li>Mic System</li>
            <li>Icebox</li>
            <li>First Aid Box</li>
            <li>Ample space for luggage</li>
            <li>On top carrier</li>
            <li>Neat & clean seat covers and curtains</li>
            <li>Professional Bus Driver</li>
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
              <a href="/fleetertiga" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Ertiga
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/innova-image.jpg" alt="Innova" className="w-full h-auto mb-4" />
              <a href="/fleetnova" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Innova
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/innova-crysta-image.jpg" alt="Innova Crysta" className="w-full h-auto mb-4" />
              <a href="/fleetcrysta" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Innova Crysta
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/swift-dzire-image.jpg" alt="Swift Dzire" className="w-full h-auto mb-4" />
              <a href="/fleetswift" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Maruti Suzuki Swift Dzire
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/tata-sumo-image.jpg" alt="Tata Sumo Gold" className="w-full h-auto mb-4" />
              <a href="/fleetsumo" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Tata Sumo Gold
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/tempo-traveller-image.jpg" alt="Force Tempo Traveller" className="w-full h-auto mb-4" />
              <a href="/fleettempo" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Force Tempo Traveller
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/path/to/toyota-etios-image.jpg" alt="Toyota Etios" className="w-full h-auto mb-4" />
              <a href="/fleetetios" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Toyota Etios
              </a>
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
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Volvo Bus booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Volvo Bus Rental Service available?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">How to book Volvo Bus in Noida?</h3>
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