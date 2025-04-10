import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800/90 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="border border-dashed border-blue-400 p-2">
            <div className="text-white font-bold text-2xl">YASHIKA</div>
            <div className="text-white text-xs">TOUR & TRAVELS</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-orange-400">
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
          <Link href="/blog" className="text-white hover:text-orange-400">
            Blogs
          </Link>
          <Link href="#" className="text-white hover:text-orange-400">
            Contact
          </Link>
        </nav>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">Call Us</Button>
      </div>
    </header>
  )
}