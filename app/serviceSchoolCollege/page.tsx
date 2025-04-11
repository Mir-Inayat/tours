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
              Hire School/College Transport Service in Noida, Greater Noida & Ghaziabad
            </h2>
            <p className="mb-6">
              Yashika Tour & Travels is providing the best School/College Transport Service since 1995, in Noida, Greater Noida and Ghaziabad with 100% Customer Satisfaction Rate. We have the largest fleet of GPS enabled Transport Vehicles. You can hire Ertiga, Toyota Innova, Innova Crysta, Swift Dzire, Sumo Gold, Tempo Traveller, Volvo Buses, and Etios.
            </p>
            <p className="mb-6">
              Connect With Us Now
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
            <img src="/path/to/school-transport-image.jpg" alt="School/College Transport" className="mt-4 w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Why Choose Yashika Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/path/to/school-transport-image.jpg" alt="School/College Transport" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Yashika Tour & Travels?
            </h2>
            <p className="text-gray-600 mb-6">
              We have been in the tour and travels business for more than 20 years. We are uniquely placed as the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental/school & college transportation service provider in Noida, Greater Noida & Ghaziabad in terms of geographical reach. We've been rated 4.8/5 (131 Reviews) on Google My Business and 4.6/5 on Just Dial.
            </p>
            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels provides safe, reliable school & college transport service in Noida, Greater Noida & Ghaziabad. Our drivers are highly experienced and have been appropriately trained.
            </p>
            <p className="text-gray-600 mb-6">
              We strive to provide you best, reliable, and affordable school & college cab/bus rental service in Noida, Greater Noida, and Ghaziabad.
            </p>
          </div>
        </div>
      </section>

      {/* What sets us apart Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What sets Yashika Tour & Travels apart?</h2>
          <p className="text-gray-600 mb-6">
            Yashika Tour & Travels is a renowned and well-established School & college Transport rental service company in Noida, specialized in outstation taxi rental/ local taxi rental/bus rental/tempo-traveller rental/school & college transport rental/corporate car rental solutions. Our journey began in 1995; since then, our rental services have expanded more and more with thousands of happy customers. We believe in our customer's safety & they believe in us!
          </p>
          <p className="text-gray-600 mb-6">
            If you're in Noida, Greater Noida or Ghaziabad and are searching for "School Bus on rent", "School Bus on hire", "book school bus in Noida", "book School Bus on rent near me", "hire school bus", "College Bus on rent", "College Bus on hire", "book college bus in Noida", "book College Bus on rent near me", "hire college bus", "Tempo Traveller hire", "hire school bus for transportation", "transportation services in greater noida", "transportation services in noida", "transportation services in Ghaziabad", "school bus service near me", "college bus service near me", "rent school bus in Noida", "rent school bus in Greater Noida" or, "rent school bus in Ghaziabad", you'll surely find us on Google as we're one of the oldest tour and travel agency in Noida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
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
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ensuring safety & security of the students</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Ensuring safety & security of the students</h2>
          <p className="text-gray-600 mb-6">
            Having been in the industry for 20+ years, we have established a desirable reputation for ourselves, as we emphasize the safety of the students first. Aside from emphasizing students' safety, we are very well known for our credibility for serving our customers with pocket-friendly services. Our prices are budget-friendly, so you don't have to think twice when using our school or college bus in Noida – your only source for making your students reach the destination safe and secure.
          </p>
          <p className="text-gray-600 mb-6">
            Should your school/college management desires, it can contract or hire vehicles according to the number of students and staff travel. We can offer you buses from 12 seaters to 60 seaters. It is entirely on you whether you want to use our school bus prices monthly or yearly. Some reasons for hiring our school/college bus with drivers are:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
            <li>We have a large fleet of vehicles to meet your diverse school/college transport needs.</li>
            <li>We have experienced, professional and reliable drivers who are aware of all the routes. They don't violate traffic rules.</li>
            <li>We are reliable.</li>
            <li>Our buses come with superior comfort, maximum safety features, GPS enabled, and an ergonomically designed area for the driver.</li>
            <li>We stand behind our quality school & college bus rental services.</li>
            <li>We have maintained our fleet of buses & force tempo travellers in the best possible way.</li>
          </ul>
        </div>
      </section>

      <Footer />
      <Copyright />
    </>
  );
}