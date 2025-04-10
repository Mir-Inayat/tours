import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
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
  )
}
