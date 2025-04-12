"use client"

import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import CountUp from "react-countup"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Car, Clock, CheckCircle, MapPin, CreditCard, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // State for parallax effect
  const [offset, setOffset] = useState(0);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida</title>
        <meta name="description" content="Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida." />
        {/* Other meta tags */}
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Hero Section with Enhanced Motion Effects */}
        <section className="relative py-16 min-h-[70vh] overflow-hidden">
          {/* Background Image with Motion Effect */}
          <div className="absolute inset-0 w-full h-full">
            <div 
              className="absolute inset-0 w-[140%] h-full transition-transform duration-1000 ease-out"
              style={{
                backgroundImage: 'url(https://yashikatourandtravel.com/wp-content/uploads/2023/10/7.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateX(-${36 + offset * 0.1}px)`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-start">
              {/* Left Column with Animation */}
              <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 pr-0 md:pr-8 animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Largest Outstation & Local Taxi Services in Noida, Greater Noida & Ghaziabad
                </h1>
                
                <div className="inline-block bg-orange-500 px-4 py-2 rounded-md mb-6 hover:bg-orange-600 transition-colors duration-300">
                  <h2 className="text-white font-medium">
                    <a href="tel:+919312244228">For Enquiry Call Now   +91 9312244228</a>
                  </h2>
                </div>
                
                <div className="mb-8">
                  <p className="mb-4">
                    We are <strong>Yashika Tour & Travels</strong>, the best <strong>local taxi rental</strong>/<strong>outstation taxi rental</strong>/<strong>bus rental</strong>/<strong>tempo-traveller rental</strong>/<strong>corporate car rental</strong> service provider in Noida, Greater Noida & Ghaziabad <strong>since 1995</strong>, providing customers with reliable and premium Local and Outstation <strong>transport rental services</strong>.
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <a 
                    href="/about-us" 
                    className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md inline-flex items-center transition duration-300 transform hover:translate-x-1"
                  >
                    <span className="mr-2">About Us</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="block md:hidden">
                  <a 
                    href="tel:7065492268" 
                    className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md inline-flex items-center transition duration-300"
                  >
                    <span className="mr-2">Call Us</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Right Column - Booking Form with Animation */}
              <div className="w-full md:w-1/2 md:pl-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="max-w-md mx-auto transform transition-all duration-500 hover:shadow-2xl">
                  <BusBookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Image Carousel Section */}
        <section className="w-full overflow-hidden">
          <div className="container mx-auto py-8">
            <div className="relative">
              {/* Auto-scrolling carousel */}
              <div className="flex carousel-container">
                <div className="carousel-track flex">
                  {/* First set of images */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="carousel-slide">
                      <Image 
                        src={`https://yashikatourandtravel.com/wp-content/uploads/2023/10/${num}.webp`}
                        alt={`Yashika Tour & Travels Vehicle ${num}`}
                        width={400}
                        height={300}
                        className="h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                  
                  {/* Duplicate set for seamless loop */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={`dup-${num}`} className="carousel-slide">
                      <Image 
                        src={`https://yashikatourandtravel.com/wp-content/uploads/2023/10/${num}.webp`}
                        alt={`Yashika Tour & Travels Vehicle ${num}`}
                        width={400}
                        height={300}
                        className="h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">Our Clients</h2>
              </div>
              <div className="w-full md:w-2/3 overflow-hidden">
                <div className="flex animate-carousel">
                  {/* Corporate Client 1 */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/6.png" 
                        alt="Corporate Transport Service" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* School */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/1.png" 
                        alt="Transport Service for Schools" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* College */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/2.png" 
                        alt="Transport Service for Colleges" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* IT Companies */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/3.png" 
                        alt="Transport Service for IT Companies" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Call Centers */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/4.png" 
                        alt="Transport Service for Call Centers" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* BPOs */}
                  <div className="flex-none w-1/2 md:w-1/4 px-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/5.png" 
                        alt="Transport Service for BPOs" 
                        width={120} 
                        height={80} 
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section - New Version */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <div className="flex flex-col">
                <section className="flex flex-col md:flex-row items-center mb-12">
                  <div className="w-full md:w-1/2 bg-white relative mb-10 md:mb-0">
                    <div className="transform transition-transform duration-100">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/07/Untitled-design-76.png" 
                        alt="Yashika Tour & Travels satisfied customer reviews" 
                        className="w-full max-w-md mx-auto"
                        width={520}
                        height={796}
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 md:pl-10">
                    <h3 className="text-orange-500 text-lg font-medium mb-2">
                      Best Taxi Service Provider in Noida | Greater Noida | Ghaziabad
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      Why Choose Yashika Tour & Travels?
                    </h2>
                    <div className="text-gray-600 space-y-4">
                      <p>
                        We have been in the tour and travels business for more than <strong>20 years</strong>. 
                        We are uniquely placed as <strong>the best & the largest chauffeur-driven taxi/bus/tempo-traveller 
                        rental company in Noida, Greater Noida and Ghaziabad</strong> in terms of geographical reach. 
                        We've been rated <strong>4.8/5 (131 Reviews) on </strong>
                        <a href="https://goo.gl/maps/26oN5USQn7cLxKSK6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          <strong>Google My Business</strong>
                        </a> 
                        <strong> and 4.6/5 on </strong>
                        <a href="https://www.justdial.com/Delhi/Yashika-Tour-Travels-Near-Noida-Stadium-Income-Tax-Office-Noida-Sector-22/011P250703_BZDET" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          <strong>Just Dial</strong>
                        </a>.
                      </p>
                      <p>
                        Yashika Tour & Travels provides safe, reliable local and outstation <strong>taxi service in Noida, Greater Noida & Ghaziabad</strong>. 
                        Our drivers are highly experienced and have been appropriately trained. We offer pick-up services in Noida, 
                        Greater Noida, Ghaziabad and from Airport, Railway Station, etc.
                      </p>
                      <p>
                        We strive to provide you best, reliable, and affordable 
                        <a href="/servicelocaltaxi" className="text-blue-600 hover:underline"><strong> local taxi rental service</strong></a>, 
                        <a href="/serviceout" className="text-blue-600 hover:underline"><strong> outstation taxi rental service</strong></a>, 
                        <a href="/servicebus" className="text-blue-600 hover:underline"><strong> bus rental service</strong></a>, 
                        <a href="/serviceTempo" className="text-blue-600 hover:underline"><strong> tempo traveller rental service</strong></a>, 
                        <a href="/serviceCorporateCab" className="text-blue-600 hover:underline"><strong> corporate car rental service</strong></a>, 
                        <a href="/serviceSchoolCollege" className="text-blue-600 hover:underline"><strong> School/College Transport service</strong></a> 
                        in Noida, Greater Noida, and Ghaziabad.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
                    <h3 className="text-orange-500 text-lg font-medium mb-2">
                      Keep Calm & Travel With Us
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      What sets Yashika Tour & Travels apart?
                    </h2>
                    <div className="text-gray-600 mb-6">
                      <p>
                        <strong>Yashika Tour & Travels</strong> is a renowned and well-established 
                        <strong> taxi rental service company in Noida</strong>, specialized in 
                        car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. 
                        Our journey began in 1995; since then, our rental services have expanded more and more with 
                        thousands of happy customers. We believe in our customer's safety & they believe in us!
                      </p>
                      <p className="mt-2">
                        If you're in Noida, Greater Noida or Ghaziabad and are searching for "<strong>tour ad travels near me</strong>", 
                        "<strong>taxi service near me</strong>", "<strong>tempo traveller near me</strong>", 
                        "<strong>bus hire near me</strong>", "<strong>corporate cab service near me</strong>", 
                        "<strong>taxi service in Noida</strong>", "<strong>local taxi near me</strong>", 
                        "<strong>travel agency in Noida</strong>", "<strong>travel agency in Greater Noida</strong>", 
                        "<strong>travel agency in Ghaziabad</strong>", "<strong>taxi booking near me</strong>", 
                        "<strong>cab service in Noida</strong>", "<strong>cab service in Greater Noida</strong>" or, 
                        "<strong>cab service in Ghaziabad</strong>", you'll surely find us on Google as we're one of the 
                        <strong> oldest tour and travel agency</strong> in Noida.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="bg-orange-100 p-2 rounded-full mr-3 text-orange-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 512" fill="currentColor">
                            <path d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1c-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86C176.8 69.17 126.7 136.2 124.6 139.1c-7.844 10.69-5.531 25.72 5.125 33.57c4.281 3.172 9.281 4.703 14.19 4.703c7.375 0 14.66-3.328 19.38-9.594c.4062-.5626 40.19-53.91 100.5-63.23c7.219-.9687 14.59 .8907 20.19 5.219c10.56 8.206 25.91 7.084 35.28-2.516c5.469-5.578 13.19-8.234 20.41-6.703c43.69 7.188 75.84 36.41 89.59 52.28c-42.22-11.06-128.3-24.5-219.4 31.53c-91.13 56.05-108.2 148.9-108.4 149.9c-2.594 12.16 5.469 24.03 17.66 26.62c1.563 .3438 3.125 .5 4.688 .5c10.44 0 19.79-7.313 21.94-17.93c.0313-.1563 11.7-65.34 80.56-109.7c20.94-13.44 42.03-21.13 62.23-25.12c-19.28 25.91-28.23 58.97-28.23 58.97c-2.594 12.16 5.469 24.03 17.66 26.62c1.594 .3438 3.156 .5 4.719 .5c10.44 0 19.75-7.313 21.94-17.97c.0313-.125 7.813-31.34 25.5-54.09c18.22-3.5 99.59-16.39 155.8 35.06c2.906 2.688 100.2 93.69 59.45 175.1c-37.47 75.84-117.9 88.97-120.6 89.28C289.8 510.1 279.4 511.8 267.1 511.9c-24.56 .8438-43.05-9.012-50.3-27.41c-16.69-42.16 5.984-111.2 7.125-114.9c3.906-12.11-2.578-25.13-14.62-29.05c-12.12-3.906-25.13 2.594-29.06 14.62c-.375 1.156-9.188 28.5-13.88 59.67c-4.531 30.25-4.906 62.64 4.438 93.34c15.44 50.43 54.09 79.59 102.8 77.7c18.11-.625 34.31-4.906 45.34-8.562c5.469-1.766 113.3-39.41 162.5-138.9c59.8-120.3-64.05-233.9-73.31-242.4c-25.5-23.39-57.19-36.34-87.47-43.25C322.4 169.8 316.2 183.6 314.8 184.3z"/>
                          </svg>
                        </span>
                        <span className="text-gray-800 font-medium">Reliability</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-orange-100 p-2 rounded-full mr-3 text-orange-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/>
                          </svg>
                        </span>
                        <span className="text-gray-800 font-medium">24x7 Service Availability</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-orange-100 p-2 rounded-full mr-3 text-orange-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-111 256-256S393.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"/>
                          </svg>
                        </span>
                        <span className="text-gray-800 font-medium">Guaranteed Customer Satisfaction</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-orange-100 p-2 rounded-full mr-3 text-orange-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                          </svg>
                        </span>
                        <span className="text-gray-800 font-medium">Reliability & Security</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 bg-white relative order-1 md:order-2">
                    <img 
                      src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/service-4.png" 
                      alt="Yashika Tour & Travels Service" 
                      className="w-full max-w-md mx-auto"
                      width={520}
                      height={796}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>


        {/* Enhanced Features Section with Tilt Divider */}
        <section className="relative py-16 bg-gray-50">
          {/* Top Shape Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="fill-white h-[70px] w-full">
              <path d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          
          {/* Container */}
          <div className="container mx-auto px-4 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="max-w-2xl mx-auto text-gray-600">We deliver exceptional travel experiences with reliable service, professional drivers, and competitive pricing.</p>
            </div>
            
            {/* First Row of Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Feature 1 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean Vehicles</h3>
                <p className="text-gray-600">
                  We take extra care to sanitize and maintain our vehicles before and after every ride.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Drivers</h3>
                <p className="text-gray-600">
                  Our professional drivers possess excellent knowledge of routes to make your ride safe and comfortable.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Punctual Service</h3>
                <p className="text-gray-600">
                  We have an excellent track record of on-time service. Our team stays in touch with you ensuring there are no delays.
                </p>
              </div>
            </div>
            
            {/* Second Row of Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 4 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">GPS Enabled Vehicles</h3>
                <p className="text-gray-600">
                  All our vehicles are GPS enabled for safety and efficiency. We're just a call away if you need assistance.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Billing</h3>
                <p className="text-gray-600">
                  Our invoices are clear and precise with no hidden costs. We handle all GST, toll fees, and interstate taxes for you.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-xl rounded-lg p-6 bg-white group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Diverse Fleet Options</h3>
                <p className="text-gray-600">
                  Choose from a variety of options ranging from taxis to buses and tempo travellers. We've got your travel needs covered!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Video Background Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <iframe 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: '140vw', height: '120vh', marginLeft: '-20vw' }}
            src="https://www.youtube.com/embed/fJJPET8HXCE?controls=0&rel=0&playsinline=1&mute=1&loop=1&autoplay=1&playlist=fJJPET8HXCE&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Background video"
          ></iframe>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="container mx-auto px-16 pt-24">
              <p className="text-white text-sm font-medium tracking-wider mb-5">100% CUSTOMER SATISFACTION</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
                No matter where you travel,
                <br />
                we've got a ride for you.
              </h1>
              <p className="text-white text-base max-w-3xl mb-10 leading-relaxed opacity-90">
                Be it a taxi rental service, tempo-traveller rental service, corporate taxi service,
                school/college transport service, or bus rental service, we've got everything covered.
                <br /><br />
                Whether it is your first time renting a taxi with us or the tenth, we look forward to your
                booking with the same enthusiasm.
              </p>
              <Button className="bg-[#FF4A17] hover:bg-[#FF5E33] text-white px-8 py-3 text-base font-medium rounded mb-16">
                Book Your Ride Now!
              </Button>
            </div>

            {/* Statistics Section */}
            <div className="w-full border-t border-white/10">
              <div className="container mx-auto px-16 py-6">
                <div className="grid grid-cols-4">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={150000} />
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">RIDES</p>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={52} duration={1500} />
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">CORPORATE CLIENTS</p>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={1000} duration={1800} />
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">HAPPY CLIENTS</p>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={131} duration={1200} />
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">REVIEWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

