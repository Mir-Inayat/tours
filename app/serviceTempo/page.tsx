"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";

export default function Page() {
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
      <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hire Force Tempo Traveller in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Force Tempo Travellers in Noida. You can hire Force tempo traveller in Noida with 12, 16, 20, 25, etc. seating options available for local travel, outstation travel, employee transport facilities, event vehicle rental, corporate cab rental, etc.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Available Vehicles You can Also look for:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6">
              <a href="/fleetertiga" className="bg-emerald-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-emerald-600 transition-all shadow-sm">
                Ertiga
              </a>
              <a href="/fleetnova" className="bg-sky-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-sky-600 transition-all shadow-sm">
                Toyota Innova
              </a>
              <a href="/fleetcrysta" className="bg-violet-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-violet-600 transition-all shadow-sm">
                Innova Crysta
              </a>
              <a href="/fleetswift" className="bg-rose-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-rose-600 transition-all shadow-sm">
                Swift Dzire
              </a>
              <a href="/fleetsumo" className="bg-amber-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-amber-600 transition-all shadow-sm">
                Sumo Gold
              </a>
              <a href="/fleettempo" className="bg-indigo-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-indigo-600 transition-all shadow-sm">
                Tempo Traveller
              </a>
              <a href="/fleetvolvo" className="bg-fuchsia-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-fuchsia-600 transition-all shadow-sm">
                Volvo Buses
              </a>
              <a href="/fleetetios" className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm text-center hover:bg-orange-600 transition-all shadow-sm">
                Etios
              </a>
            </div>
            <p className="mb-6">
              Book Tempo Traveller in Noida Now
            </p>
          </div>

          {/* Integrated Form Component */}
          <div className="w-full md:w-1/2 px-4 md:pl-8">
            <div className="max-w-sm mx-auto lg:mr-0">
              <BusBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why book Tempo Traveller Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
            <img 
              src="https://www.trucksbuses.com/uploads/Force%20Tempo%20Traveler%203050.jpg" 
              alt="Force Tempo Traveller" 
              className="w-full max-w-lg mx-auto h-auto rounded-lg shadow-md object-cover"
              loading="lazy"
            />
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
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            Best Tempo Traveller Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Force Tempo Traveller rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our tempo traveller rental services have expanded more with our fleet in time and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
        </div>
      </section>

      {/* Why Tempo Traveller is Best Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">What sets our Tempo Traveller booking service in Noida apart?</h2>
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

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-xl font-semibold">
                  Why hire tempo traveller in Noida from Yashika Tour & Travels?
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
                    When you hire a tempo traveller from Yashik Tour & Travels, you get transparent billing, low prices, and 24×7 customer support along with our pan India reach. You can rent tempo traveller for one as well as round trips for local or outstation visits. If you have any special requirements like deluxe/luxury or AC tempo travellers you can always contact us. We provide you a variety of tempo travellers ranging from 9 seaters, 10 seaters, 11 seaters, 12 seaters, 13 seaters, 14 seaters, 15 seaters, 16 seaters, 17 seaters, 18 seaters, 19 seaters, 20 seaters, 22 seaters, 24 seaters, 26 seaters, 27 seaters Tempo Travellers on Hire in our fleet in Noida, Greater Noida & Ghaziabad.
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
                  In which cities are Yashika Tour & Travel's Tempo Traveller Rental Service available?
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
                    We are in the tour and travels business since 1995, and we proudly say that we are one of the best tempo traveller service providers in Noida, Greater Noida & Ghaziabad. As of now, we provide tempo traveller rental services in Noida, Greater Noida & Ghaziabad.
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
                  How do I book a tempo traveller in Noida?
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
                    You can book a tempo traveller in Noida by simply searching tempo traveller near me or through Yashika Tour & Travel's official website. Once you choose your pick-up & drop-off locations, and preferred tempo traveller booking services, you can pay by any of the following methods, via a credit card, debit card, wallets, net banking, and so on. Call us and we will do an online tempo traveller booking for you.
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