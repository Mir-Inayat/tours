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
                    href="/about" 
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

        {/* Full Viewport Image Carousel Section */}
        <section className="relative h-[25vh] w-full overflow-hidden">
          <div className="flex h-full">
            {/* Carousel container - triples the width to show 3 images at once */}
            <div className="flex w-[300%] h-full animate-slideshow">
              {/* First set of three images */}
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/1.webp"
              alt="Tour vehicle 1"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
              </div>
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/2.webp"
              alt="Tour vehicle 2"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
              </div>
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/3.webp"
              alt="Tour vehicle 3"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/1.webp"
              alt="Tour vehicle 1"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
              </div>
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/2.webp"
              alt="Tour vehicle 2"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
              </div>
              <div className="w-1/3 h-full flex-shrink-0">
          <div className="relative h-full">
            <Image 
              src="https://yashikatourandtravel.com/wp-content/uploads/2023/10/3.webp"
              alt="Tour vehicle 3"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Our Clients Section - Enhanced with larger images */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">Our Clients</h2>
              </div>
              <div className="w-full md:w-2/3 overflow-hidden">
                <div className="flex animate-carousel">
                  {/* Corporate Client 1 */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/6.png" 
                        alt="Corporate Transport Service" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                  
                  {/* School */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/1.png" 
                        alt="Transport Service for Schools" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                  
                  {/* College */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/2.png" 
                        alt="Transport Service for Colleges" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                  
                  {/* IT Companies */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/3.png" 
                        alt="Transport Service for IT Companies" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                  
                  {/* Call Centers */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/4.png" 
                        alt="Transport Service for Call Centers" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                  
                  {/* BPOs */}
                  <div className="flex-none w-1/2 md:w-1/4 px-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm h-40 flex items-center justify-center">
                      <img 
                        src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/5.png" 
                        alt="Transport Service for BPOs" 
                        className="w-full h-full object-contain max-h-36"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Why Choose Us Section with Phone UI Mockups */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="w-full">
              <div className="flex flex-col">
                {/* First Row */}
                <section className="flex flex-col md:flex-row items-center mb-12 md:mb-20">
                  {/* Left Column with Parallax Image */}
                  <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
                    <div className="relative mx-auto" style={{ maxWidth: '520px' }}>
                      {/* Background decoration elements */}
                      <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-blue-500 rounded-l-[40px] -z-10 hidden md:block"></div>
                      <div className="absolute right-0 bottom-0 h-2/3 w-2/3 bg-red-50 rounded-tr-3xl -z-10 hidden md:block"></div>
            
                      {/* Phone Mockup 1 - Customer Satisfaction with Parallax */}
                      <div 
                        className="rounded-[40px] shadow-2xl overflow-hidden relative mx-auto"
                        style={{
                          transform: `translateY(${offset * 0.05}px)`,
                          transition: 'transform 0.1s ease-out',
                        }}
                      >
                        <img 
                          fetchPriority="high"
                          decoding="async"
                          src="https://yashikatourandtravel.com/wp-content/uploads/2021/07/Untitled-design-76.png" 
                          alt="Yashika Tour & Travels satisfied customer reviews" 
                          className="w-full rounded-t-3xl relative z-10"
                          width={520}
                          height={796}
                          sizes="(max-width: 520px) 100vw, 520px"
                          srcSet="https://yashikatourandtravel.com/wp-content/uploads/2021/07/Untitled-design-76.png 520w, https://yashikatourandtravel.com/wp-content/uploads/2021/07/Untitled-design-76-196x300.png 196w"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Content */}
                  <div className="w-full md:w-1/2 md:pl-10 order-1 md:order-2 mb-8 md:mb-0">
                    <h3 className="text-orange-500 text-lg font-medium mb-2">
                      Keep Calm & Travel With Us
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      What sets Yashika Tour & Travels apart?
                    </h2>
                    <div className="text-gray-600 mb-6">
                      {/* Your existing content */}
                    </div>
                  </div>
                </section>

                {/* Second Row */}
                <section className="flex flex-col md:flex-row items-center mt-12 md:mt-0">
                  {/* Left Column - Content */}
                  <div className="w-full md:w-1/2 mb-10 md:mb-0 order-1">
                    <h3 className="text-orange-500 text-lg font-medium mb-2">
                      Keep Calm & Travel With Us
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      What sets Yashika Tour & Travels apart?
                    </h2>
                    <div className="text-gray-600 mb-6">
                      {/* Your existing content */}
                    </div>
                  </div>
                  
                  {/* Right Column with Phone UI Mockup */}
                  <div className="w-full md:w-1/2 order-2">
                    <div className="relative mx-auto" style={{ maxWidth: '520px' }}>
                      {/* Background decoration elements - reversed colors from first mockup */}
                      <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-red-50 rounded-l-[40px] -z-10 hidden md:block"></div>
                      <div className="absolute right-0 bottom-0 h-2/3 w-2/3 bg-blue-500 rounded-tr-3xl -z-10 hidden md:block"></div>
            
                      {/* Phone Mockup 2 - Multiple Options with Parallax */}
                      <div 
                        className="rounded-[40px] shadow-2xl overflow-hidden relative mx-auto"
                        style={{
                          transform: `translateY(${offset * 0.05}px)`,
                          transition: 'transform 0.1s ease-out',
                        }}
                      >
                        <img 
                          decoding="async"
                          src="https://yashikatourandtravel.com/wp-content/uploads/2021/08/service-4.png" 
                          alt="Yashika Tour & Travels Service Options"
                          className="w-full rounded-t-3xl relative z-10"
                          width={520}
                          height={796}
                          sizes="(max-width: 520px) 100vw, 520px"
                          srcSet="https://yashikatourandtravel.com/wp-content/uploads/2021/08/service-4.png 520w, https://yashikatourandtravel.com/wp-content/uploads/2021/08/service-4-196x300.png 196w"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                We deliver exceptional travel experiences with reliable service, professional drivers, and competitive pricing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clean Vehicles</h3>
                <p className="text-gray-600">
                  We take extra care to sanitize and maintain our vehicles before and after every ride.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Drivers</h3>
                <p className="text-gray-600">
                  Our professional drivers possess excellent knowledge of routes to make your ride safe and comfortable.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Punctual Service</h3>
                <p className="text-gray-600">
                  We value your time and ensure our services are always punctual and reliable.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">GPS Enabled</h3>
                <p className="text-gray-600">
                  All our vehicles are GPS enabled for your safety and efficient route planning.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden charges. We provide clear and upfront pricing for all our services.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Fleet</h3>
                <p className="text-gray-600">
                  Choose from our wide range of vehicles to suit your travel needs.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Video Background Section with Tilt Effect */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* SVG Tilt Shape at Top */}
          <div className="absolute top-0 left-0 right-0 w-full z-10 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[100px]">
              <path className="fill-gray-50" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          
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
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-4 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-white text-sm font-medium tracking-wider mb-5 text-center">100% CUSTOMER SATISFACTION</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight text-center">
                No matter where you travel,
                <br />
                we've got a ride for you.
              </h1>
              <p className="text-white text-base max-w-3xl mx-auto mb-10 leading-relaxed opacity-90 text-center">
                Be it a taxi rental service, tempo-traveller rental service, corporate taxi service,
                school/college transport service, or bus rental service, we've got everything covered.
                <br /><br />
                Whether it is your first time renting a taxi with us or the tenth, we look forward to your
                booking with the same enthusiasm.
              </p>
              <div className="flex justify-center mb-16">
                <Button className="bg-[#FF4A17] hover:bg-[#FF5E33] text-white px-8 py-3 text-base font-medium rounded">
                  Book Your Ride Now!
                </Button>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="w-full border-t border-white/10">
              <div className="container mx-auto px-16 py-6">
                <div className="grid grid-cols-4">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={150000} />+
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">RIDES</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={52} />+
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">CORPORATE CLIENTS</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={1000} />+
                    </h3>
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">HAPPY CLIENTS</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <CountUp end={131} />+
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

