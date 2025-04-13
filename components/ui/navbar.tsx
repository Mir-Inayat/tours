"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFleetOpen, setIsFleetOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const servicesRef = useRef(null)
  const fleetRef = useRef(null)

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className={`sticky top-0 z-50 ${isScrolled ? 'bg-gray-800/90 py-2 shadow-lg' : 'bg-gray-800 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={40} />
            </Link>
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
            <Link href="/" className="text-white hover:text-orange-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-orange-400 transition-colors duration-200">
              About
            </Link>
            <div className="relative group" ref={servicesRef}>
              <button 
                className="text-white hover:text-orange-400 flex items-center transition-colors duration-200"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <span className="ml-1 text-xs">▼</span>
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-200"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/destinations" className="text-white hover:text-orange-400 transition-colors duration-200">
              Popular Destinations
            </Link>
            <div className="relative group" ref={fleetRef}>
              <button 
                className="text-white hover:text-orange-400 flex items-center transition-colors duration-200"
                onClick={() => setIsFleetOpen(!isFleetOpen)}
              >
                Our Fleet <span className="ml-1 text-xs">▼</span>
              </button>
              {isFleetOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu">
                    {fleet.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-200"
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-white hover:text-orange-400 transition-colors duration-200">
              Blogs
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center gap-2">
              <Phone size={16} />
              <span>Call Us</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-400 flex items-center transition-colors duration-200"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services <span className="ml-1 text-xs">▼</span>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-white hover:text-orange-400 text-sm transition-colors duration-200"
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
                className="text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Popular Destinations
              </Link>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-400 flex items-center transition-colors duration-200"
                  onClick={() => setIsFleetOpen(!isFleetOpen)}
                >
                  Our Fleet <span className="ml-1 text-xs">▼</span>
                </button>
                {isFleetOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {fleet.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white hover:text-orange-400 text-sm transition-colors duration-200"
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
                className="text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full flex items-center justify-center gap-2">
                <Phone size={16} />
                <span>Call Us</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}