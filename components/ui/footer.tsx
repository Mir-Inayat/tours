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
                <Link href="/gallery" className="text-gray-600 hover:text-orange-500">
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
        <button 
          className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
          onClick={handleWhatsAppClick}
        >
          <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-6 w-6" />
        </button>
      )
    }