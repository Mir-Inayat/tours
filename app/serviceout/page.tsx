"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";

export default function Serviceout() {
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
              Hire Outstation Taxis in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best outstation taxi hiring service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled taxis.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-white">You can hire our vehicles:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
              Book Outstation Taxi Now
            </p>
          </div>

          {/* Booking Form */}
          <div className="md:w-1/2 md:pl-8">
            <BusBookingForm />
          </div>
        </div>
      </section>

      {/* Why choose our service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://droptaxiinoneway.com/gleensic/2024/02/Outstation-Cab-Booking-1024x1024.jpg" 
              alt="Outstation Taxi" 
              className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why choose our outstation taxi booking service?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business for more than 20 years. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida, and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable outstation taxi service in Noida, Greater Noida & Ghaziabad. Our drivers are highly experienced and very well familiar with the routes.
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
            Yashika Tour & Travels is a renowned and well-established taxi rental service company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental services. Our journey began in 1995; since then, our outstation taxi rental services have expanded more and more with thousands of happy customers across Noida, Greater Noida & Ghaziabad. We believe in our customer's safety & they believe in us!
          </p>
          <p className="text-gray-600 mb-6">
            You can just call us for online tempo traveller booking, intercity car booking, car rental for outstation, taxi service in Noida, taxi service in Greater Noida, taxi service in Ghaziabad, traveller bus booking, luxury car rental in Noida/Greater Noida/Ghaziabad, outstation cabs, Volvo bus hire for outstation or online outstation cab in cheap price in Noida.
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

      {/* Book outstation taxi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book outstation taxi in Noida, Greater Noida & Ghaziabad</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels has a huge fleet of cars, tempo travellers, buses, deluxe coaches to choose from. Try booking a taxi for outstation cab rental in Noida at Yashika Tour & Travels to get the best experience of travelling to different destinations at affordable costs and 24*7 customer support. Intercity or outstation cab booking will fit right in your budget, but you cannot guarantee the same thing about buses, deluxe coaches, tempo travellers, etc., if booked elsewhere. Try cab booking for outstation trips at Yashika Tour & Travels to enjoy exclusive benefits.
          </p>
          <p className="text-gray-600 mb-6">
            Our Outstation cab rental booking service offers you several options for traveling to Agra, Haridwar, Nainital, Mussoorie, Rishikesh, Jaipur, Chandigarh, Manali, Ajmer, Shimla, Ambala, Dehradun, Patiala, Amritsar, McLeodganj, or Lansdowne. Suppose you want to visit the wildlife sanctuaries, heritage visits, to luxury resorts, or religious places. In that case, you can try outstation cab rental in Noida, Greater Noida & Ghaziabad. Our outstation cab rental booking service is just what you need to make your next trip the best.
          </p>
          <p className="text-gray-600 mb-6">
            Outstation Holidays or business & family trips must be fun and stress-free, you must spend time with your dear ones. Online outstation taxi rental booking is easy to do with our hassle-free booking process & transparent billings. All you need do is visit our website & fill-up the booking form or call us directly. We will resolve all your issues in no time.
          </p>
          <p className="text-gray-600 mb-6">
            If you want to explore the in & out of Noida, Greater Noida or Ghaziabad, you can try our Local Taxi Rental Service.
          </p>
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
                  Why hire outstation cabs in Noida from Yashika Tour & Travels?
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
                    When you hire a outstation cab from Yashik Tour & Travels, you get transparent billing, low prices, and 24×7 customer support along with our pan India reach. You can rent outastation cabs for one-way as well as round trips. If you have any special requirements like deluxe/luxury or AC cabs you can always contact us. We provide you a variety of outstation taxis ranging from hatchbacks & sedans to SUVs on Hire in our fleet in Noida, Greater Noida & Ghaziabad.
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
                  In which cities are Yashika Tour & Travel's outstation taxi/cab Booking Service available?
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
                    We are in the tour and travels business since 1995, and we proudly say that we are one of the best outstation taxi & cab booking service providers in Noida, Greater Noida & Ghaziabad. As of now, we provide outstation car rental services in Noida, Greater Noida & Ghaziabad.
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
                  How do I book an outstation taxi or cab in Noida?
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
                    You can book a outstation taxi/cab in Noida through Yashika Tour & Travel's official website. Once you choose your pick-up & drop-off locations, and preferred outstation cab booking services, you can pay by any of the following methods, via a credit card, debit card, wallets, net banking, and so on. Call us and we will do an online outstation car rental booking for you.
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