"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Shield, Star, Clock, Check, Award } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-blue-500 py-16">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-orange-500 clip-path-curve"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Meet the best taxi rental service in Noida, Greater Noida & Ghaziabad!
              </h1>
              <p className="mb-6">
                Yashika Tour & Travels, since 1995, is the best and the most reliable
              </p>
              {/* Service Links */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Link 
                  href="/servicelocaltaxi" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Local Taxi Rental
                </Link>
                <Link 
                  href="/serviceout" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Outstation Taxi Rental
                </Link>
                <Link 
                  href="/serviceTempo" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Tempo-Traveller Rental
                </Link>
                <Link 
                  href="/servicebus" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Bus Rental
                </Link>
                <Link 
                  href="/serviceCorporateCab" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Corporate Car Rental
                </Link>
                <Link 
                  href="/serviceSchoolCollege" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  School/College Transport
                </Link>
                <Link 
                  href="/servicecabForevents" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Wedding Transport
                </Link>
              </div>
              <p className="text-lg">
                Company in Noida, Greater Noida & Ghaziabad, with 24*7 availability.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-03%20214621-hzrjUDbk1mH0WyzstwxKA6wHsbvQTO.png"
                  alt="Yashika Tour & Travels Fleet"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-03%20214631-8PdXAgtAv8zwl3aYQqa6iNfvKFr6BE.png"
                  alt="Yashika Tour & Travels Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-orange-500 font-medium mb-2">WELCOME TO</h3>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Yashika Tour & Travels</h2>
              <p className="text-gray-600 mb-4">
                For the past <span className="font-bold">25 years</span>, we were and are still proud of being the most
                reliable and the best{" "}
                <span className="font-bold">Transport Rental Service in Noida, Greater Noida & Ghaziabad</span>. Yashika
                Tour & Travels is one of the most renowned names in the tour & travel market and we have continuously
                improved our customer experience by providing them safe & secure rides, no-matter where they want to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-orange-500">•</span>
                  <p className="text-gray-600">
                    We aspire to be a performance-driven tour & travel agency that serves and supports the client's
                    operations.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-orange-500">•</span>
                  <p className="text-gray-600">
                    Our company vows to provide enhanced customer satisfaction and service environment to our client,
                    while still maintaining the cost-effectiveness and the reliability of our company.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-orange-500">•</span>
                  <p className="text-gray-600">
                    We aim to be the first choice for transportation needs in Noida, Greater Noida, and Ghaziabad by
                    providing exceptional service and maintaining the highest standards of safety and comfort.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-03%20214638-xV2voCehrBYvMfD2qWyMBOajtZmpDt.png"
                  alt="Yashika Tour & Travels Fleet"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Safety First</h3>
              <p className="text-gray-600">
                The safety of our customers is our top priority. All our vehicles undergo regular maintenance checks and
                our drivers are trained in safe driving practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Punctuality</h3>
              <p className="text-gray-600">
                We understand the value of time. Our services are designed to ensure that you reach your destination on
                time, every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Reliability</h3>
              <p className="text-gray-600">
                With 25 years of experience, we have built a reputation for reliability. You can count on us for all
                your transportation needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our vehicles to the professionalism of
                our staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">1995</h3>
                  <p className="text-gray-600">
                    Yashika Tour & Travels was founded with just 2 taxis, serving the local community in Noida.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                  <div className="h-0 md:h-auto"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 md:order-1 order-2">
                  <div className="h-0 md:h-auto"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg order-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 md:text-left order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">2005</h3>
                  <p className="text-gray-600">
                    Expanded our services to include outstation trips and added tempo travelers and buses to our fleet.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">2010</h3>
                  <p className="text-gray-600">
                    Started corporate transport services and school/college transport services, becoming a comprehensive
                    transport solution provider.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                  <div className="h-0 md:h-auto"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 md:order-1 order-2">
                  <div className="h-0 md:h-auto"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg order-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 md:text-left order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">2020</h3>
                  <p className="text-gray-600">
                    Modernized our fleet with GPS-enabled vehicles and implemented digital booking systems for enhanced
                    customer experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Today</h3>
                  <p className="text-gray-600">
                    Operating with a fleet of over 100 vehicles, serving thousands of customers with a 4.8/5 rating on
                    Google My Business.
                  </p>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg">
                  <span className="text-white font-bold">5</span>
                </div>
                <div className="w-full md:w-1/2 md:pl-12 md:text-left">
                  <div className="h-0 md:h-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Rajesh Kumar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Rajesh Kumar</h3>
                <p className="text-orange-500 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  Founded Yashika Tour & Travels in 1995 with a vision to provide reliable transportation services in
                  Noida.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Priya Sharma" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Priya Sharma</h3>
                <p className="text-orange-500 font-medium mb-3">Operations Manager</p>
                <p className="text-gray-600 mb-4">
                  With 15 years of experience, Priya ensures smooth operations and exceptional service quality.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Amit Patel" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Amit Patel</h3>
                <p className="text-orange-500 font-medium mb-3">Fleet Manager</p>
                <p className="text-gray-600 mb-4">
                  Responsible for maintaining our fleet of vehicles and ensuring they meet our high standards of safety
                  and comfort.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Neha Gupta" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Neha Gupta</h3>
                <p className="text-orange-500 font-medium mb-3">Customer Relations</p>
                <p className="text-gray-600 mb-4">
                  Dedicated to ensuring customer satisfaction and handling feedback to continuously improve our
                  services.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Client ${item}`}
                  alt={`Client ${item}`}
                  width={120}
                  height={80}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Very good facility with a lot of other perks like then can also guide you for your travel and also can
                help you in many other way. And also service is very cheap compare to market so I think that you can
                give it a chance."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Vishal Singh"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Vishal Singh</h4>
                  <p className="text-gray-500 text-sm">Regular Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Best taxi service with professional drivers and on time services for corporate IT companies. Clean &
                Sanitized cars, buses & tempo travellers. Highly recommended for corporate travel needs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Sunil Dixit"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sunil Dixit</h4>
                  <p className="text-gray-500 text-sm">Corporate Client</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I just loved travelling with Yashika tour and travels. I am really looking forward to travel again with
                the same agency and would recommend everyone. It's the best of course and you would really like their
                services and all."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Jaanvi Sharma"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Jaanvi Sharma</h4>
                  <p className="text-gray-500 text-sm">Tourist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a ride with us today and experience the best taxi service in Noida, Greater Noida & Ghaziabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Book Now</Button>
            <Button className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-3 text-lg">Contact Us</Button>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

