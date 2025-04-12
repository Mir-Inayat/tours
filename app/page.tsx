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
        <section className="relative bg-blue-600">
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
        </section>

        {/* Booking Form Section */}
        <section className="py-16">
          <BusBookingForm />
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We provide a wide range of reliable and affordable travel services that cater to all your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local taxi service</h3>
                <p className="text-gray-600">
                  Travel comfortably within the city at affordable rates. Our local taxi service is perfect for daily commutes.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Outstation Taxi Service</h3>
                <p className="text-gray-600">
                  Explore beyond city limits with our outstation taxi service. Perfect for weekend getaways and vacations.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate Cab Service</h3>
                <p className="text-gray-600">
                  Professional transportation solutions for your business needs with corporate accounts and billing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="text-orange-500 font-medium mb-2">BEST CAB SERVICE IN NOIDA</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Yashika Tour & Travels?</h2>
                <p className="text-gray-600 mb-4">
                  We have been in the tour and travels business for more than 28 years. We are uniquely
                  placed as one of the oldest taxi rental service companies in Noida & Greater Noida
                  in terms of geographical reach. We've been rated 4.8 stars on Google My
                  Business and 4.9 on Just Dial.
                </p>
                <p className="text-gray-600 mb-4">
                  Yashika Tour & Travels provides safe, reliable local and outstation taxi service. Our drivers are highly experienced
                  and have been appropriately trained. We offer pick-up services in Noida, Greater Noida, Ghaziabad and
                  from Airport, Railway Station, etc.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-1.5 rounded-full mr-3">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800">Professional Drivers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-1.5 rounded-full mr-3">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800">Sanitized Vehicles</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-1.5 rounded-full mr-3">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-1.5 rounded-full mr-3">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-800">Transparent Billing</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/why-choose-us.jpg"
                  alt="Why Choose Yashika Tour & Travels"
                  width={600} 
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Options Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Fleet</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We have a wide range of vehicles to meet all your travel needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fleet 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/taxi.jpg"
                  alt="Taxi Service"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Taxi Service</h3>
                  <p className="text-gray-600 mb-4">
                    Our taxi fleet includes comfortable sedans and SUVs for your local and outstation travel needs.
                  </p>
                  <Link href="/taxi-service">
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Fleet 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/tempo-traveller.jpg"
                  alt="Tempo Traveller"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Tempo Traveller</h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for group travel, our tempo travellers can accommodate 9 to 17 passengers comfortably.
                  </p>
                  <Link href="/tempo-traveller">
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Fleet 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/bus.jpg"
                  alt="Bus Rental"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Bus Rental</h3>
                  <p className="text-gray-600 mb-4">
                    Our luxury buses are ideal for large groups, corporate events, and school/college trips.
                  </p>
                  <Link href="/bus-rental">
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                We take pride in delivering exceptional service to our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Very good facility with a lot of other perks like they can also guide you for your travel and also can
                  help you in many other ways. And also service is very cheap compared to market so I think that you can
                  give it a chance."
                </p>
                <p className="font-bold text-gray-800">VISHAL SINGH</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Driver Sh. Anoop Kumar is very professional...and he is very familiar with the routes. Yashika Tour & Travel provides very good services at affordable prices.
                  Overall rating from my side 5 out of 5..."
                </p>
                <p className="font-bold text-gray-800">RAKESH JOSHI</p>
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

