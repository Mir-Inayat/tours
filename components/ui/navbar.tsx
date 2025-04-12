"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFleetOpen, setIsFleetOpen] = useState(false)
  
  const servicesRef = useRef(null)
  const fleetRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
      if (fleetRef.current && !fleetRef.current.contains(event.target)) {
        setIsFleetOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const services = [
    { name: "Cab Services for events", href: "/servicecabForevents" },
    { name: "Bus Hire", href: "/servicebus" },
    { name: "Outstation Taxi", href: "/serviceout" },
    { name: "Local Taxi", href: "/servicelocaltaxi" },
    { name: "Corporate Travel", href: "/serviceCorporateCab" },
    { name: "Tempo Traveller", href: "/serviceTempo" },
    { name: "School/College Transport", href: "/serviceSchoolCollege" },
  ]

  const fleet = [
    { name: "Maruti Suzuki Ertiga", href: "/fleetertiga" },
    { name: "Toyota Innova", href: "/fleetnova" },
    { name: "Toyota Innova Crysta", href: "/fleetcrysta" },
    { name: "Maruti Suzuki Swift Dzire", href: "/fleetswift" },
    { name: "Tata Sumo Gold", href: "/fleetsumo" },
    { name: "Force Tempo Traveller", href: "/fleettempo" },
    { name: "Toyota Etios", href: "/fleetetios" },
    { name: "Volvo Deluxe Buses and Coaches", href: "/fleetvolvo" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-800/90 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="border border-dashed border-blue-400 p-2">
              <div className="text-white font-bold text-2xl">YASHIKA</div>
              <div className="text-white text-xs">TOUR & TRAVELS</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-orange-400">
              About
            </Link>
            <div className="relative group" ref={servicesRef}>
              <button 
                className="text-white hover:text-orange-400 flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <span className="ml-1">▼</span>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/destinations" className="text-white hover:text-orange-400">
              Popular Destinations
            </Link>
            <div className="relative group" ref={fleetRef}>
              <button 
                className="text-white hover:text-orange-400 flex items-center"
                onClick={() => setIsFleetOpen(!isFleetOpen)}
              >
                Our Fleet <span className="ml-1">▼</span>
              </button>
              {isFleetOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {fleet.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-white hover:text-orange-400">
              Blogs
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400">
              Contact
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">
              Call Us
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - unchanged */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-400 flex items-center"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services <span className="ml-1">▼</span>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-white hover:text-orange-400 text-sm"
                        onClick={() => {
                          setIsServicesOpen(false)
                          setIsOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/destinations"
                className="text-white hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Popular Destinations
              </Link>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-400 flex items-center"
                  onClick={() => setIsFleetOpen(!isFleetOpen)}
                >
                  Our Fleet <span className="ml-1">▼</span>
                </button>
                {isFleetOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {fleet.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white hover:text-orange-400 text-sm"
                        onClick={() => {
                          setIsFleetOpen(false)
                          setIsOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className="text-white hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full">
                Call Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}