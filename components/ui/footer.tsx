"use client"; // Add this at the top to make it a client component

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
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
              <Link href="https://www.facebook.com/yashikatravels7/" className="text-gray-600 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/yashikatravels_noida" className="text-gray-600 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/yashika-tour-travels" className="text-gray-600 hover:text-blue-700">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-500">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.159426084683!2d77.345363!3d28.59108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55e0e96a51d%3A0x9d4813590d56bd4d!2sYashika%20Tour%20%26%20Travels-%20Tempo%20Traveller%20Hire%20in%20Noida%2C%20wedding%20car%20booking%20Noida%2C%20Cab%20Service!5e0!3m2!1sen!2sus!4v1744437580476!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p>© {currentYear} Yashika Tour & Travels. All rights reserved.</p>
        </div>
      </div>
      <WhatsAppButton />
    </footer>
  )
}
  
function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919312244228", "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className="chaty-channel Whatsapp-channel-link single" 
        id="Whatsapp-0-channel" 
        data-id="Whatsapp-0" 
        data-widget="0" 
        data-channel="Whatsapp"
      >
        <a 
          href="javascript:;" 
          onClick={handleWhatsAppClick}
          rel="nofollow noopener" 
          aria-label="Whatsapp" 
          className="chaty-tooltip Whatsapp-channel chaty-link chaty-whatsapp-channel pos-left has-chaty-box chaty-whatsapp-btn-form has-on-hover"
        >
          <span className="chaty-icon channel-icon-Whatsapp">
            <span className="chaty-svg">
              <svg width="60" height="60" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle>
                <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path>
                <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2"></path>
              </svg>
            </span>
          </span>
          <span className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 bg-white text-gray-700 px-2 py-1 rounded shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}