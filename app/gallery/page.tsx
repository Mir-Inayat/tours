"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";
import { BusBookingForm } from "@/components/ui/bus-booking-form";
import Image from "next/image";

// Define the gallery images
const galleryImages = [
  { src: "/image1.jpg", alt: "Fleet of taxis" },
  { src: "/image2.jpg", alt: "Bus fleet" },
  { src: "/image3.jpg", alt: "Tempo traveller lineup" },
  { src: "/blogs/image4.jpg", alt: "Luxury buses" },
  { src: "/blogs/image5.jpg", alt: "Mini buses" },
  { src: "/blogs/image6.jpg", alt: "Corporate fleet" },
  { src: "/blogs/image7.jpg", alt: "Tempo traveller interior" },
  { src: "/blogs/image8.jpg", alt: "Taxi service" },
  { src: "/blogs/image9.jpg", alt: "Transport fleet" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Gallery
            </h2>
            <p className="mb-6">
              We are Yashika Tour & Travels, the best local taxi rental/outstation taxi rental/bus rental/tempo-traveller rental/corporate car rental service provider in Noida, Greater Noida & Ghaziabad since 1995, providing customers with reliable and premium Local and Outstation transport rental services.
            </p>
            <a 
              href="/destinations" 
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition-colors"
            >
              Book Taxi in Noida Now
            </a>
          </div>

          {/* Booking Form */}
          <div className="md:w-1/2 md:pl-8">
            <div className="max-w-sm mx-auto">
              <BusBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-[4/3] group overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
      <Copyright />
    </>
  );
} 