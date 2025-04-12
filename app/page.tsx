"use client"

import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { BookingForm } from "@/components/ui/bus-booking-form"
import { Button } from "@/components/ui/button"
import { MapPin, Shield, Users, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/hero-image.jpg"
            alt="Yashika Tour & Travels - Taxi service in Noida"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Largest Outstation & Local Taxi Services in Noida, Greater Noida & Ghaziabad
            </h1>

            <div className="mb-6">
              <p className="mb-2">
                We are Yashika Tour & Travels, the best taxi service provider in Noida, Greater Noida & Ghaziabad,
                providing customers with reliable and premium Local and Outstation taxi services.
              </p>
            </div>

            <Link href="/about">
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 px-6">
                About Us <span>→</span>
              </Button>
            </Link>
          </div>

          {/* Right Content - Booking Form */}
          <div className="w-full md:w-5/12">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">GPS Enabled Vehicles</h3>
              <p className="text-gray-600">
                All our vehicles are GPS enabled. In case there are any issues during the journey, we're just a call
                away. We take immense pride in being the leading taxi rental service provider in Noida, Greater Noida &
                Ghaziabad.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Billing</h3>
              <p className="text-gray-600">
                We believe in transparent billing. No hidden charges. What you see is what you pay. We provide detailed
                bills and receipts for all your journeys.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Drivers</h3>
              <p className="text-gray-600">
                Our drivers are well-trained, professional and courteous. They undergo regular training to ensure the
                highest standards of service and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-orange-500 font-medium">
              Best Taxi Service Provider in Noida | Greater Noida | Ghaziabad
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Why Choose Yashika Tour & Travels?</h2>
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
              <p className="text-gray-600">
                We strive to provide you best, reliable, and affordable taxi and bus rental service
                in Noida, Greater Noida, and Ghaziabad.
              </p>
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

      {/* What Sets Us Apart Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-orange-500 font-medium mb-2">Keep Calm & Travel With Us</h3>
              <h2 className="text-4xl font-bold mb-6">What sets Yashika Tour & Travels apart?</h2>
              <p className="text-gray-600 mb-4">
                <strong>Yashika Tour & Travels</strong> is a renowned and well-established
                <strong> taxi rental service company in Noida</strong>, specialized in
                car/taxi/bus/tempo-traveller/school & college transport/corporate car rental solutions. Our journey
                began in 1995; since then, our rental services have expanded more and more with thousands of happy
                customers. We believe in our customer's safety & they believe in us!
              </p>
              <p className="text-gray-600">
                If you're in Noida, Greater Noida or Ghaziabad and are searching for "tour ad travels near me", "taxi
                service near me", "tempo traveller near me", "bus hire near me", "corporate cab service near me", "taxi
                service in Noida", "local taxi near me", "travel agency in Noida", "travel agency in Greater Noida",
                "travel agency in Ghaziabad", "taxi booking near me", "cab service in Noida", "cab service in Greater
                Noida" or, "cab service in Ghaziabad", you'll surely find us on Google as we're one of the oldest tour
                and travel agency in Noida.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">
                    Multiple Fleet Options
                  </h3>
                  <h3 className="text-2xl font-bold">to Choose From</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Image
                      src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/taxi.jpg"
                      alt="Car"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/bus.jpg"
                      alt="Bus"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <Image
                      src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/tempo-traveller.jpg"
                      alt="Tempo Traveller"
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clean Cars</h3>
              <p className="text-gray-600">
                We take extra care to sanitize and air our cabs before and after every ride.
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Driver Expertise</h3>
              <p className="text-gray-600">
                Our drivers possess an intimate knowledge of routes, to make ride worth it.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Punctual Service</h3>
              <p className="text-gray-600">
                We have excellent track record of on-time taxi service. Our team stays in touch with you ensuring there
                are no delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Very good facility with a lot of other perks like then can also guide you for your travel and alos can
                help you in many other way. And also service is very cheap compare to market so I think that you can
                give it a chance.
              </p>
              <p className="font-bold text-gray-800 uppercase text-sm">VISHAL SINGH</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Best taxi service with professional drivers and on time services for corporate IT companies. Clean &
                Sanitized cars,buses & tempo travellers.
              </p>
              <p className="font-bold text-gray-800 uppercase text-sm">SUNIL DIXIT</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Driver Sh. Anoop Kumar is very professional...and he is very familiar with the routes Yashika Tour &
                Travel provides very good services at affordable prices. Overall rating from my side 5 out of 5...
              </p>
              <p className="font-bold text-gray-800 uppercase text-sm">RAKESH JOSHI</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                I just loved travelling with yashika tour and travels. I am really looking forward to travel again with
                the same agency and would recommend everyone. It's the best of course and you would really like their
                services and all. Taxi drivers are very humble. Really one should go for this service.
              </p>
              <p className="font-bold text-gray-800 uppercase text-sm">JAANVI SHARMA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-900 text-white">
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

      {/* Rating Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <h2 className="text-7xl font-bold text-gray-800 mr-4">4.8</h2>
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

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/cta-background.jpg"
            alt="Night Driving"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="flex items-center justify-start mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            No matter where you travel, we've got a ride for you.
          </h2>
          <p className="max-w-2xl mb-8">
            Be it a taxi rental service, tempo-traveller rental service, corporate taxi service, school/college
            transport service, or bus rental service, we've got everything covered. Whether it is your first time
            renting a taxi with us or the tenth, we look forward to your booking with the same enthusiasm.
          </p>
          <Link href="/destinations">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Book Your Ride Now!
            </Button>
          </Link>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-8">
        <div className="grid grid-cols-4 gap-0">
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/fleet-gallery-1.jpg"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/fleet-gallery-2.jpg"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/fleet-gallery-3.jpg"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/fleet-gallery-4.jpg"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/school-icon.png" alt="School" width={50} height={50} />
                <p className="text-center mt-2">Schools</p>
              </div>
            </div>
            <div className="border p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image src="https://yashikatourandtravel.com/wp-content/uploads/2024/02/college-icon.png" alt="College" width={50} height={50} />
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

      <Footer />
    </div>
  )
}

