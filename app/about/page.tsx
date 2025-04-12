"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Shield, Star, Clock, Check, Award } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"
import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
}

function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start < end) {
        setCount(Math.floor(start))
      } else {
        setCount(end)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, []) // Empty dependency array means it only runs once when mounted

  return <span>{count}+</span>
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}

      <section className="relative bg-[#2563EB] py-24">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#FF4A17] clip-path-curve"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Meet the best taxi rental service in Noida, Greater Noida & Ghaziabad!
              </h1>
              <p className="text-xl mb-8">
                Yashika Tour & Travels, since 1995, is the best and the most reliable
              </p>
              {/* Service Links */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link 
                  href="/servicelocaltaxi" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Local Taxi Rental
                </Link>
                <Link 
                  href="/serviceout" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Outstation Taxi Rental
                </Link>
                <Link 
                  href="/serviceTempo" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Tempo-Traveller Rental
                </Link>
                <Link 
                  href="/servicebus" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Bus Rental
                </Link>
                <Link 
                  href="/serviceCorporateCab" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Corporate Car Rental
                </Link>
                <Link 
                  href="/serviceSchoolCollege" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  School/College Transport
                </Link>
                <Link 
                  href="/servicecabForevents" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  Wedding Transport
                </Link>
              </div>
              <p className="text-lg">
                Company in Noida, Greater Noida & Ghaziabad, with 24*7 availability.
              </p>
              <Link href="/servicelocaltaxi" passHref>
              <Button className="mt-8 bg-white text-[#2563EB] hover:bg-gray-100 px-8 py-3">
                Book Taxi Now
              </Button>
            </Link>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image1.jpg"
                  alt="Yashika Tour & Travels Fleet and Drivers"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority // Add this to prioritize loading this hero image
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
                  src="/image2.jpg"
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
                  src="/image3.jpg"
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
      <Link href="/servicelocaltaxi" passHref>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
          Book Now
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-3 text-lg">
          Contact Us
        </Button>
      </Link>
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
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0  0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

