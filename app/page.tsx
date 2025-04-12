"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Shield, Users, Clock } from "lucide-react"
import { BusBookingForm } from "@/components/ui/bus-booking-form"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida</title>
        <meta name="description" content="Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida." />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://yashikatourandtravel.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida" />
        <meta property="og:description" content="Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida." />
        <meta property="og:url" content="https://yashikatourandtravel.com/" />
        <meta property="og:site_name" content="Yashika Your & Travels" />
        <meta property="og:updated_time" content="2024-08-31T18:58:53+05:30" />
        <meta property="og:image" content="https://yashikatourandtravel.com/wp-content/uploads/2024/02/Yashika-Tour-Travels.png" />
        <meta property="og:image:secure_url" content="https://yashikatourandtravel.com/wp-content/uploads/2024/02/Yashika-Tour-Travels.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt" content="Yashika Tour & Travels - Taxi service in noida" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida" />
        <meta name="twitter:description" content="Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida." />
        <meta name="twitter:image" content="https://yashikatourandtravel.com/wp-content/uploads/2024/02/Yashika-Tour-Travels.png" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="dixit.sakshamdixit" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="5 minutes" />
        <meta name="google-site-verification" content="1ibCMejMn_9cnqmKOpbpdLB26sbIMuwTzdUH12zv2WA" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section with Shape Divider */}
        <section className="relative bg-blue-600"></section>
          <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Largest Outstation & Local Taxi Services in Noida, Greater Noida & Ghaziabad
          </h1>
          <div className="mb-6">
            <p className="mb-4">
          We are Yashika Tour & Travels, the best taxi service provider in Noida, Greater Noida & Ghaziabad,
          providing customers with reliable and premium Local and Outstation taxi services.
            </p>
            <p>
          Since 1995, we have been providing luxury car, tempo traveller, and bus rental services for local and outstation.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 px-6 py-3">
          Book Now <span>→</span>
            </Button>
            <Link href="/contact-us">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3">
            Contact Us
          </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/hero-car.png"
            alt="Yashika Tour & Travels Taxi Service"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
          </div>

          {/* Shape Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,6V0h1000v100L0,6z" className="fill-white"></path>
        </svg>
          </div>

        {/* Image Carousel Section */}
        <section className="w-full">
          <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex overflow-x-hidden">
            <div className="flex animate-slide">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <div key={num} className="flex-none w-1/3 px-2">
              <a href={`https://yashikatourandtravel.com/wp-content/uploads/2023/10/${num}.webp`} className="block">
            <figure>
              <Image
                src={`https://yashikatourandtravel.com/wp-content/uploads/2023/10/${num}.webp`}
                alt={`Slide ${num}`}
                width={400}
                height={300}
                className="w-full"
              />
            </figure>
              </a>
            </div>
          ))}
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <BusBookingForm />
        </div>
          </div>
        </section>

        {/* Clients Carousel Section */}
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
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S393.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"/>
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

        {/* Features Section with Tilt Divider */}
        <section className="relative py-16 bg-gray-50">
          {/* Top Shape Divider */}
          <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="fill-white h-[70px] w-full">
              <path d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          
          {/* Container */}
          <div className="container mx-auto px-4 pt-16">
            {/* First Row of Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Clean Cars</h3>
                <p className="text-gray-600">
                  We take extra care to sanitize and air our cabs before and after every ride.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Driver Expertise</h3>
                <p className="text-gray-600">
                  Our drivers possess an intimate knowledge of routes, to make ride worth it.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Punctual Service</h3>
                <p className="text-gray-600">
                  We have excellent track record of on-time taxi service. Our team stays in touch with you ensuring there are no delays.
                </p>
              </div>
            </div>
            
            {/* Second Row of Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 4 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">GPS Enabled Vehicles</h3>
                <p className="text-gray-600">
                  All our vehicles are GPS enabled. In case there are any issues during the journey, we're just a call away. We take immense pride in being the leading taxi rental service provider in Noida, Greater Noida & Ghaziabad.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 384c0-35.3-28.7-64-64-64v64h64zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Billing</h3>
                <p className="text-gray-600">
                  We know GST, toll fees and inter-state tax are confusing and that's why our invoices are clear and precise. There are no hidden costs and charges.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M216 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v33.3C119.6 157.2 32 252.4 32 368H480c0-115.6-87.6-210.8-200-222.7V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24H256 216zM24 400c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Multiple Options to choose from</h3>
                <p className="text-gray-600">
                  We have a variety of options ranging from taxis, to bus and tempo travellers. Don't worry we've got your ride covered!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section - New Design */}
        <section className="py-16 bg-gray-800 text-white relative">
          <div className="absolute inset-0 bg-opacity-70 bg-gray-900"></div>
          <div className="container mx-auto px-4 relative z-10">
            {/* Rating Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="md:w-2/3 flex items-center mb-6 md:mb-0">
                <div className="text-6xl font-bold text-white mr-6">4.8</div>
                <div className="flex flex-col">
                  <div className="flex mb-1">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="partialFill">
                          <stop offset="80%" stopColor="currentColor" />
                          <stop offset="80%" stopColor="rgba(255,255,255,0.3)" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#partialFill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <a 
                    href="https://goo.gl/maps/vb15kqVV22gqUdoD8" 
                    target="_blank"
                    rel="nofollow noopener"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Based on 131 reviews on Google My Business
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial Grid - First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  Driver Sh. Anoop Kumar is very professional...and he is very familiar with the routes.
                  Yashika Tour & Travel provides very good services at affordable prices.
                  Overall rating from my side 5 out of 5...
                </p>
                <a 
                  href="https://goo.gl/maps/fkCzcGheFKYQNWBD7" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Rakesh Joshi
                </a>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  I just loved travelling with yashika tour and travels. I am really looking forward to travel again with the same agency and would recommend everyone. It's the best of course and you would really like their services and all. Taxi drivers are very humble. Really one should go for this service.
                </p>
                <a 
                  href="https://goo.gl/maps/Gp4oNwqxrPXe3qqR8" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Jaanvi Sharma
                </a>
              </div>
            </div>

            {/* Testimonial Grid - Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Testimonial 3 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  Best in town when it comes to providing commuting services. large variety of options available, you name it they have it.
                  A very professional staff and assist throughout your choice of service. Customer satisfaction and safety is their priority.
                </p>
                <a 
                  href="https://goo.gl/maps/xCUhqDrrS25XQubX6" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Shreyash Singh
                </a>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  Don't tell me how educated you are, tell me how much you have travelled. I have great experience to Travel with Yashika Tour and Travels. I think everyone should go with this travel agency.
                </p>
                <a 
                  href="https://goo.gl/maps/GdZnTrwoa3TJvr8h7" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Vikram Rai
                </a>
              </div>
            </div>

            {/* Testimonial Grid - Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 5 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  Very good facility with a lot of other perks like they can also guide you for your travel and also can help you in many other ways. And also service is very cheap compared to market so I think that you can give it a chance.
                </p>
                <a 
                  href="https://goo.gl/maps/SuKeVYaZUibPGsEF9" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Vishal Singh
                </a>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">
                  Best taxi service with professional drivers and on time services for corporate IT companies. Clean & Sanitized cars, buses & tempo travellers.
                </p>
                <a 
                  href="https://goo.gl/maps/J5ZnoYEmKwWSuxJb9" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="font-medium text-white hover:text-yellow-300"
                >
                  Sunil Dixit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">150000+</h3>
                <p className="uppercase text-sm">RIDES</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">52+</h3>
                <p className="uppercase text-sm">CORPORATE CLIENTS</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">1000+</h3>
                <p className="uppercase text-sm">HAPPY CLIENTS</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">131+</h3>
                <p className="uppercase text-sm">REVIEWS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="relative py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/cta-background.jpg"
              alt="Book Your Ride"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                No matter where you travel, we've got a ride for you.
              </h2>
              <p className="mb-8">
                Be it a taxi rental service, tempo-traveller rental service, corporate taxi service, school/college
                transport service, or bus rental service, we've got everything covered. Whether it is your first time
                renting a taxi with us or the tenth, we look forward to your booking with the same enthusiasm.
              </p>
              <Link href="/contact-us">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  Book Your Ride Now!
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We provide services to a wide range of clients including schools, colleges, and corporate organizations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border p-4 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/school-icon.png" alt="Schools" width={50} height={50} />
                  <p className="text-center mt-2">Schools</p>
                </div>
              </div>
              <div className="border p-4 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/college-icon.png" alt="Colleges" width={50} height={50} />
                  <p className="text-center mt-2">Colleges</p>
                </div>
              </div>
              <div className="border p-4 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/it-firms-icon.png" alt="IT Firms" width={50} height={50} />
                  <p className="text-center mt-2">IT Firms</p>
                </div>
              </div>
              <div className="border p-4 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/call-centers-icon.png" alt="Call Centers" width={50} height={50} />
                  <p className="text-center mt-2">Call Centers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <h2 className="text-6xl font-bold text-gray-800 mr-4">4.8</h2>
                <div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on 131+ reviews</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/google-reviews.png" 
                  alt="Google Reviews" 
                  width={120} 
                  height={60} 
                />
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/justdial-reviews.png" 
                  alt="JustDial Reviews" 
                  width={120} 
                  height={60} 
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

