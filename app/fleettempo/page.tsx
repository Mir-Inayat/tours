"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Force Tempo Traveller in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Force Tempo Travellers in Noida. You can hire Force tempo traveller in Noida with 12, 16, 20, 25, etc. seating options available for local travel, outstation travel, employee transport facilities, event vehicle rental, corporate cab rental, etc.
            </p>
            <p className="mb-6">
              Book Tempo Traveller in Noida Now for
            </p>

            {/* Service Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              <a href="/servicelocaltaxi" className="text-sm bg-orange-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-orange-500 transition-all duration-300 text-center font-medium shadow-sm">
                Local Travel
              </a>
              <a href="/serviceout" className="text-sm bg-orange-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-orange-500 transition-all duration-300 text-center font-medium shadow-sm">
                Outstation Travel
              </a>
              <a href="/serviceCorporateCab" className="text-sm bg-orange-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-orange-500 transition-all duration-300 text-center font-medium shadow-sm">
                Employee Transport
              </a>
              <a href="/servicecabForevents" className="text-sm bg-orange-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-orange-500 transition-all duration-300 text-center font-medium shadow-sm">
                Event Transport
              </a>
              <a href="/serviceCorporateCab" className="text-sm bg-orange-500 text-white py-1.5 px-3 rounded hover:bg-white hover:text-orange-500 transition-all duration-300 text-center font-medium shadow-sm">
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

      {/* Why book Tempo Traveller Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/tempo.jpg" alt="Force Tempo Traveller" className="w-full h-auto rounded-lg shadow-md" />
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
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/ertiga.jpg" alt="Ertiga" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetertiga" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Ertiga
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/ennova.jpeg" alt="Innova" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetnova" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Innova
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/crysta.jpeg" alt="Innova Crysta" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetcrysta" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Innova Crysta
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/swift.jpeg" alt="Swift Dzire" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetswift" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Maruti Suzuki Swift Dzire
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/tatasumo.jpg" alt="Tata Sumo Gold" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetsumo" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Tata Sumo Gold
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/etois.jpeg" alt="Toyota Etios" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetetios" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Toyota Etios
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img src="/volvo.jpeg" alt="Volvo Buses" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleetvolvo" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
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
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Force Tempo Travellers booking service?</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 0 && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                  Yashika Tour & Travels is in this business since 1995 and is one of the best Tempo Traveller booking provider in Noida. Whether it's a business trips or event, employee transportation service, family tour, etc. we have got a ride for everything! All our force tempo travellers are GPS enabled so you don't have to worry about security.
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Tempo Traveller Rental Service available?</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 1 && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                    We are in the tour and travels business since 1995, and we proudly say that we are one of the best Tempo Traveller booking service providers in Noida, Greater Noida & Ghaziabad.
                    As of now, we provide Tempo Traveller booking services in Noida, Greater Noida & Ghaziabad.
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-lg font-semibold text-gray-800">How to book Force Tempo Traveller in Noida?</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 2 && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                  You can easily book Force Tempo Traveller in Noida by filling the form on the homepage of our website, Yashika Tour & Travels or you can call us 24*7 for booking Tempo Traveller in Noida for local and outstation travels or for any other purpose. 
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
  );
}