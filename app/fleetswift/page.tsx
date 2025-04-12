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
              Hire Swift Dzire in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with a 100% Customer Satisfaction Rate. We have the largest fleet of GPS-enabled Swift Dzire in Noida. You can hire Maruti Suzuki Swift Dzire in Noida for local travel, outstation travel, employee transport facilities, events, corporate cab rental, etc.
            </p>
            <p className="mb-6">
              Book Swift Dzire in Noida Now for
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

      {/* Why book Swift Dzire Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/swift.jpeg" alt="Swift Dzire" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why book Swift Dzire from Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable Swift Dzire booking service in Noida, Greater Noida and Ghaziabad. Our cab drivers are highly experienced and have been appropriately trained.
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
            Best Swift Dzire Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            If you're in Noida, Greater Noida or Ghaziabad and are searching for "Swift Dzire on rent", "swift dzire on hire", "book tour taxi swift dzire", "book swift dzire on rent near me", "hire swift dzire", "5 seater swift dzire hire", "hire swift dzire for employee transportation", "hire swift dzire for wedding", "swift dzire service near me", "swift dzire near me", "swift dzire hire near me", "hire swift dzire in Noida", "hire swift dzire in Greater Noida", "hire swift dzire in Ghaziabad", "swift dzire booking near me", "swift dzire booking Noida", "swift dzire booking Greater Noida", "swift dzire booking Ghaziabad", "rent swift dzire in Noida", "rent swift dzire in Greater Noida" or, "rent swift dzire in Ghaziabad", you'll surely find us on Google as we're one of the oldest tour and travel agency in Noida.
          </p>
        </div>
      </section>

      {/* Why Swift Dzire is Best Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets our Swift Dzire booking service in Noida apart?</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Maruti Swift Dzire rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our Swift Dzire rental services have expanded with our fleet in time and with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
          <p className="text-gray-600 mb-6">
            Swift Dzire Cab has always been the favourite 5 seater Sedan car among the people planning for a long outstation trip with friends, corporate employees, business meetings, wedding car rental, etc. Swift Dzire is the best stylish and sturdy Sedan car by Maruti Suzuki for long-distance & short-distance travel, especially for group travelling & employee transportation service, because of its comfort, powerful engine and boot space.
          </p>
          <p className="text-gray-600 mb-6">
            Since its introduction in 2008, Swift Dzire has undergone various modifications, and today it is India's most favourite compact sedan with a luxurious interior and next-generation design. Initially, Swift Dzire, with its design and the manual gear system, failed to attract Indian Roads and drivers, but when the car got AMT (Automated Manual Transmission), Swift Dezire got importance to appeal to the mass. Today Maruti Suzuki Swift Dezire is the most preferred car by corporate, travellers, tourists, family, etc.
          </p>
          <p className="text-gray-600 mb-6">
            Following our clients' demand in the Tour & Travel market for an economical sedan like Maruti Swift Dzire, we have added the luxurious 5 seater sedan car to our fleet. Yashika Tour & Travels is the place where your search for 5 seater Swift Dzire car hire in Noida would come to an end.
          </p>
        </div>
      </section>

      {/* Other Cabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Other Cabs available for booking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/ertiga.jpg" alt="Ertiga" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetertiga" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Ertiga
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/ennova.jpeg" alt="Innova" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetnova" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Innova
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/crysta.jpeg" alt="Innova Crysta" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetcrysta" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Innova Crysta
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/tatasumo.jpg" alt="Tata Sumo Gold" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetsumo" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Tata Sumo Gold
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/tempo.jpg" alt="Force Tempo Traveller" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleettempo" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Force Tempo Traveller
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/etois.jpeg" alt="Toyota Etios" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetetios" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Toyota Etios
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/volvo.jpeg" alt="Volvo Buses" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetvolvo" className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Volvo Buses
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
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Maruti Suzuki Dzire booking service?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Swift Dzire Rental Service available?</h3>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="mb-6 border-b pb-4">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-semibold text-gray-800">How to book Swift Dzire in Noida?</h3>
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