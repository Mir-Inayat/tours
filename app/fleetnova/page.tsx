"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";
import { Carousel } from "@/components/ui/carousel";

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
              Hire Innova Cab in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels provides the best Cab Booking Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Innova cabs in Noida. You can hire Innova in Noida for local travel, outstation travel, employee transport facilities, event transportation rental, etc.
            </p>
            <p className="mb-6">
              Book Innova in Noida Now for
            </p>

            {/* Service Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
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

      {/* Why book Innova Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/ennova.jpeg" 
              alt="Innova" 
              className="w-4/5 mx-auto h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              width={400}
              height={267}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why book Innova from Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable Innova cab booking service in Noida, Greater Noida and Ghaziabad. Our cab drivers are highly experienced and have been appropriately trained.
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
            Best Innova Cab Booking Service Provider in Noida | Greater Noida | Ghaziabad
          </h2>
          <p className="text-gray-600 mb-6">
            We have been in the tour and travels business since 1995. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater Noida and Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
          </p>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels provides safe, reliable Innova cab booking service in Noida, Greater Noida and Ghaziabad. Our cab drivers are highly experienced and have been appropriately trained.
          </p>
          <p className="text-gray-600 mb-6">
            We strive to provide you best, reliable, and affordable local cab rental service, outstation cab rental service, bus/deluxe coach rental service, tempo traveller rental service, minibus, corporate car rental service, School/College Transport service in Noida, Greater Noida and Ghaziabad.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto"> {/* Increased max width */}
            <Carousel
              images={[
                {
                  src: "/image1.jpg",
                  alt: "Innova Exterior View"
                },
                {
                  src: "/image2.jpg",
                  alt: "Innova Interior View"
                },
                {
                  src: "/image3.jpg",
                  alt: "Innova Side View"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Innova is Best Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets our Innova booking service in Noida apart?</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established Innova Cab rental provider company in Noida, specialized in car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey began in 1995; since then, our Innova Cab Booking service in Noida have expanded more and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
          <p className="text-gray-600 mb-6">
            Innova has always been the favourite car among the travellers for a long trip with friends, corporate employees, or relatives. Toyota Innova Cabs are the best SUV/MUV for long-distance & short-distance travel because of their comfort and boot space. Hiring a Innova cab with a professional driver gives you the flexibility, leave for your trip on time, and hassle-free rides. At Yashika Tour & Travels, you can book AC or Non-AC Innova cabs in Noida as per your requirement. Booking Innova car rental in Noida at Yashika Tour & Travels is very simple, you just have to fill up the cab booking form on our homepage or give us a call. Innova is one of the most stylish and classy cars that promises comfort and performance. Book Innova Cab in Noida, Greater Noida & Ghaziabad from Yashika Tour & Travels, at affordable and budget-friendly rates. Whether you are with your family, friends, or business clients, Innova promises comfort and a pleasant ride. Be assured to get courteous & professional drivers for your Innova cab.
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6">
            <li>Professional & Well-mannered drivers</li>
            <li>24x7 Service Availibility</li>
            <li>Clean & Sanitized Innova Cabs</li>
            <li>Reliability & Security</li>
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
                <img src="/tempo.jpg" alt="Force Tempo Traveller" className="w-full h-48 object-cover rounded" />
              </div>
              <a href="/fleettempo" className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Book Force Tempo Traveller
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
                <h3 className="text-lg font-semibold text-gray-800">Why choose our Innova booking service?</h3>
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
                  Yashika Tour & Travels is in this business since 1995 and is one of the best Innova cab booking provider in Noida. Whether it's a business trips or event, employee transportation service, family tour, etc. we have got a ride for everything! All our innova cabs are GPS enabled so you don't have to worry about security. 
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-lg font-semibold text-gray-800">In which cities are Yashika Tour & Travels' Innova Rental Service available?</h3>
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
                  We are in the tour and travels business since 1995, and we proudly say that we are one of the best Innova booking service providers in Noida, Greater Noida & Ghaziabad.
                  As of now, we provide Innova booking services in Noida, Greater Noida & Ghaziabad.
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-lg font-semibold text-gray-800">How to book Toyota Innova cab in Noida?</h3>
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
                  You can easily book Innova in Noida by filling the form on the homepage of our website, Yashika Tour & Travels or you can call us 24*7 for booking Innova cab in Noida for local and outstation travels or for any other purpose.
                  </p>
                </div>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
                onClick={() => toggleFaq(3)}
              >
                <h3 className="text-lg font-semibold text-gray-800">Is Innova a 7 seater MUV?</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === 3 && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">
                  Yes, Toyota Innova is a 7 seater MUV. Innova is widely used as cabs in metro cities like Noida because of its comfort and it's 7 seater capacity.
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