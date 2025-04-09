"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar as CalendarIcon, Clock, Facebook, Instagram, Linkedin, MapPin, Shield, Star, Users } from "lucide-react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'

export default function Home() {
  const [tripType, setTripType] = useState("one-way")
  const [departureDate, setDepartureDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date())
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false)
  const [showReturnCalendar, setShowReturnCalendar] = useState(false)

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-gray-800/90 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="border border-dashed border-blue-400 p-2">
              <div className="text-white font-bold text-2xl">YASHIKA</div>
              <div className="text-white text-xs">TOUR & TRAVELS</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-white hover:text-orange-400">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-orange-400">
              About
            </Link>
            <div className="relative group">
              <Link href="#" className="text-white hover:text-orange-400 flex items-center">
                Services <span className="ml-1">▼</span>
              </Link>
            </div>
            <Link href="#" className="text-white hover:text-orange-400">
              Popular Destinations
            </Link>
            <div className="relative group">
              <Link href="#" className="text-white hover:text-orange-400 flex items-center">
                Our Fleet <span className="ml-1">▼</span>
              </Link>
            </div>
            <Link href="#" className="text-white hover:text-orange-400">
              Blogs
            </Link>
            <Link href="#" className="text-white hover:text-orange-400">
              Contact
            </Link>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">Call Us</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Background"
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

            <div className="bg-orange-500 inline-block px-6 py-3 rounded-md text-white font-semibold mb-6">
              For Enquiry Call Now +91 9312244228
            </div>

            <div className="mb-6">
              <p className="mb-2">
                We are <span className="font-bold">Yashika Tour & Travels</span>, the best{" "}
                <span className="font-bold">
                  local taxi rental/outstation taxi rental/bus rental/tempo-traveller rental/corporate car rental
                </span>{" "}
                service provider in Noida, Greater Noida & Ghaziabad <span className="font-bold">since 1995</span>,
                providing customers with reliable and premium Local and Outstation{" "}
                <span className="font-bold">transport rental services</span>.
              </p>
            </div>

            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 flex items-center gap-2 px-6">
              About Us <span>→</span>
            </Button>
          </div>

          {/* Right Content - Booking Form */}
          <div className="w-full md:w-5/12">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Ride</h2>

              <form className="space-y-4">
                <Input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />

                <Input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-md" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Pick-up Location" className="w-full p-3 border rounded-md" />
                  <Input type="text" placeholder="Drop-off Location" className="w-full p-3 border rounded-md" />
                </div>

                <RadioGroup
                  defaultValue="one-way"
                  className="flex space-x-6"
                  value={tripType}
                  onValueChange={setTripType}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-way" id="one-way" />
                    <Label htmlFor="one-way">One-Way Trip</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="round" id="round" />
                    <Label htmlFor="round">Round Trip</Label>
                  </div>
                </RadioGroup>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose Your Ride" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="tempo">Tempo Traveller</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                  </SelectContent>
                </Select>

                <Input type="number" placeholder="No. of People" className="w-full p-3 border rounded-md" />

                {/* Departure Date Calendar */}
                <div className="relative">
                  <div 
                    className="w-full p-3 border rounded-md flex justify-between items-center cursor-pointer"
                    onClick={() => setShowDepartureCalendar(!showDepartureCalendar)}
                  >
                    <span>{formatDate(departureDate)}</span>
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  {showDepartureCalendar && (
                    <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md">
                      <Calendar 
                        onChange={(date) => {
                          setDepartureDate(date)
                          setShowDepartureCalendar(false)
                        }}
                        value={departureDate}
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>

                {/* Return Date Calendar (for round trips) */}
                {tripType === "round" && (
                  <div className="relative">
                    <div 
                      className="w-full p-3 border rounded-md flex justify-between items-center cursor-pointer"
                      onClick={() => setShowReturnCalendar(!showReturnCalendar)}
                    >
                      <span>{formatDate(returnDate)}</span>
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    {showReturnCalendar && (
                      <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md">
                        <Calendar 
                          onChange={(date) => {
                            setReturnDate(date)
                            setShowReturnCalendar(false)
                          }}
                          value={returnDate}
                          minDate={departureDate}
                        />
                      </div>
                    )}
                  </div>
                )}

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">Book Now</Button>
              </form>
            </div>
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
                We know GST, toll fees and inter-state tax are confusing and that's why our invoices are clear and
                precise. There are no hidden costs and charges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-lg mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multiple Options to choose from</h3>
              <p className="text-gray-600">
                We have a variety of options ranging from taxis, to bus and tempo travellers. Don't worry we've got your
                ride covered!
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
                We have been in the tour and travels business for more than <strong>20 years</strong>. We are uniquely
                placed as{" "}
                <strong>
                  the best & the largest chauffeur-driven taxi/bus/tempo-traveller rental company in Noida, Greater
                  Noida and Ghaziabad
                </strong>{" "}
                in terms of geographical reach. We've been rated <strong>4.8/5 (131 Reviews)</strong> on Google My
                Business and <strong>4.6/5</strong> on Just Dial.
              </p>
              <p className="text-gray-600 mb-4">
                Yashika Tour & Travels provides safe, reliable local and outstation
                <strong> taxi service in Noida, Greater Noida & Ghaziabad</strong>. Our drivers are highly experienced
                and have been appropriately trained. We offer pick-up services in Noida, Greater Noida, Ghaziabad and
                from Airport, Railway Station, etc.
              </p>
              <p className="text-gray-600">
                We strive to provide you best, reliable, and affordable
                <strong>
                  {" "}
                  local taxi rental service, outstation taxi rental service, bus rental service, tempo traveller rental
                  service, corporate car rental service, School/College Transport service
                </strong>
                in Noida, Greater Noida, and Ghaziabad.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-blue-500 rounded-lg p-8 relative">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold">Customer</h3>
                  <h3 className="text-2xl font-bold text-orange-500">Satisfaction</h3>
                  <h3 className="text-2xl font-bold">Rate</h3>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="text-6xl font-bold text-orange-500 text-center">100%</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Google"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=40&width=40" alt="JustDial" width={40} height={40} />
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg?height=40&width=40" alt="TripAdvisor" width={40} height={40} />
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="bg-blue-500 rounded-lg p-8 relative">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-400">←</div>
                    <div className="text-center">
                      <Image src="/placeholder.svg?height=60&width=120" alt="Yashika Logo" width={120} height={60} />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold">
                      Multiple <span className="text-orange-500">Options</span>
                    </h3>
                    <h3 className="text-2xl font-bold">to Choose From</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Image
                        src="/placeholder.svg?height=100&width=200"
                        alt="Car"
                        width={200}
                        height={100}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=100&width=200"
                        alt="Bus"
                        width={200}
                        height={100}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div>
                      <Image
                        src="/placeholder.svg?height=100&width=200"
                        alt="Tempo Traveller"
                        width={200}
                        height={100}
                        className="rounded-lg"
                      />
                    </div>
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
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Based on 131 reviews on
                  <br />
                  Google My Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Book Your Ride Now!
          </Button>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-8">
        <div className="grid grid-cols-4 gap-0">
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="/placeholder.svg?height=200&width=400"
            alt="Fleet"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
          <Image
            src="/placeholder.svg?height=200&width=400"
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
                <Image src="/placeholder.svg?height=50&width=50" alt="School" width={50} height={50} />
                <span className="mt-2 font-bold">SCHOOL</span>
              </div>
            </div>
            <div className="border p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=50&width=50" alt="College" width={50} height={50} />
                <span className="mt-2 font-bold">COLLEGE</span>
              </div>
            </div>
            <div className="border p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=50&width=50" alt="IT Firms" width={50} height={50} />
                <span className="mt-2 font-bold">IT FIRMS</span>
              </div>
            </div>
            <div className="border p-4 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=50&width=50" alt="Call Centers" width={50} height={50} />
                <span className="mt-2 font-bold">CALL CNTERS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <p className="mb-2">B7, 153A, near Income Tax Office, Block B, Sector 22</p>
              <p className="mb-2">Noida, Uttar Pradesh 201301</p>
              <p className="mb-2">+91 9312244228, 8750333222, 0120-4261411</p>
              <p className="mb-4">contact@yashikatourandtravel.com</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-pink-500">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-700">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    Our Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-500">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Location</h3>
              <div className="h-64 bg-gray-200 rounded-lg relative">
                <Image src="/placeholder.svg?height=300&width=400" alt="Map" fill className="object-cover rounded-lg" />
                <div className="absolute bottom-2 left-2 text-xs text-gray-600">Use ctrl + scroll to zoom the map</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gray-100 border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright © 1995 - 2025 Yashika Tour and Travels. All rights reserved
            </p>
            <p className="text-gray-600 text-sm">Designed & Developed by Magnus Corps</p>
          </div>
        </div>
      </div>

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

