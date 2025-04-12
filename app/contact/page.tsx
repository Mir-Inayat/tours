"use client"

import { ContactForm } from "@/components/ui/contactform"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-16 bg-blue-600 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Don't worry, we have got<br />
                your ride insured.
              </h1>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 text-xl">✓</span>
                  <p className="text-lg">E-mail us at contact@yashikatourandtravel.com</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 text-xl">✓</span>
                  <p className="text-lg">Call us at +91 - 9312244228<br />8750333222, 0120-4261411</p>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-400 mr-3 text-xl">✓</span>
                  <p className="text-lg">Reach Us at: B7, 153A, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
                </div>
              </div>

              <div className="flex gap-6">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  <Link href="/servicelocaltaxi">Book Now!</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 group border-2 border-orange-500 hover:border-orange-600"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More 
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="md:mt-0 mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Copyright />
    </div>
  )
} 