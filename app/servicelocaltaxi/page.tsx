import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function LocalTaxi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/taxi-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hire Local Taxis in Noida, Greater Noida & Ghaziabad
            </h1>
            <p className="text-lg mb-8">
              Yashika Tour & Travels is providing the best local taxi hiring service since 1995, with a 100% Customer Satisfaction Rate. We have the largest fleet of GPS-enabled taxis.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book Your Ride</h2>
              <BusBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Yashika Tour & Travels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Professional Drivers</h3>
              <p>Experienced and route-familiar drivers for your safety</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">24x7 Service</h3>
              <p>Available round the clock for your convenience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
              <p>Rated 4.8/5 on Google My Business</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reliability & Security</h3>
              <p>GPS-enabled fleet for enhanced security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
          <p className="text-center mb-12">
            Choose from our wide range of vehicles including Ertiga, Toyota Innova, Innova Crysta, Swift Dzire, Sumo Gold, Tempo Traveller, Volvo Buses, and Etios.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Ertiga", "Innova", "Innova Crysta", "Swift Dzire", "Sumo Gold", "Tempo Traveller", "Volvo Buses", "Etios"].map((vehicle) => (
              <div key={vehicle} className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="font-semibold">{vehicle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Local Taxi Services</h2>
          <div className="prose max-w-4xl mx-auto">
            <p className="mb-6">
              We strive to provide you best, reliable, and affordable local taxi rental & outstation taxi rental service in Noida, Greater Noida, and Ghaziabad. Our local cab rental booking service offers you several options for travelling in and around the city.
            </p>
            <p className="mb-6">
              Whether you want to visit local markets, wildlife sanctuaries, heritage sites, luxury resorts, or religious places, our service is designed to meet all your transportation needs.
            </p>
            <p>
              Online local taxi rental booking is easy with our hassle-free booking process & transparent billings. All you need to do is fill up the booking form or call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Why hire local cabs in Noida from Yashika Tour & Travels?</h3>
              <p>When you hire a local cab from Yashika Tour & Travels, you get transparent billing, professional drivers, low prices, and 24×7 customer support along with our pan India reach. You can rent local cabs for one-way as well as round trips.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">What types of vehicles are available?</h3>
              <p>We offer a wide range of vehicles from hatchbacks & sedans to SUVs. Our fleet includes popular models like Ertiga, Innova, Swift Dzire, and luxury options like Innova Crysta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="mb-4">B7, 153A, near Income Tax Office, Block B, Sector 22</p>
            <p className="mb-4">Noida, Uttar Pradesh 201301</p>
            <p className="mb-4">+91 9312244228, 8750333222, 0120-4261411</p>
            <p>contact@yashikatourandtravel.com</p>
          </div>
        </div>
      </section>

      <Footer />
      <Copyright />
    </div>
  )
}
