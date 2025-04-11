import { BusBookingForm } from "@/components/ui/bus-booking-form"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Copyright } from "@/components/ui/copyright"

export default function SchoolTransport() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/school-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hire School/College Transport Service in Noida, Greater Noida & Ghaziabad
            </h1>
            <p className="text-lg mb-8">
              Yashika Tour & Travels is providing the best School/College Transport Service since 1995, with a 100% Customer Satisfaction Rate. We have the largest fleet of GPS-enabled Transport Vehicles.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Professional Drivers</h3>
              <p>Experienced and trained drivers for student safety</p>
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
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Student Safety</h3>
              <p>Priority on student safety and comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Transport Fleet</h2>
          <p className="text-center mb-12">
            Choose from our wide range of vehicles including 12-seater to 60-seater buses, all GPS-enabled and well-maintained.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["12 Seater", "20 Seater", "30 Seater", "40 Seater", "50 Seater", "60 Seater", "Tempo Traveller", "Mini Bus"].map((vehicle) => (
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
          <h2 className="text-3xl font-bold text-center mb-8">Our School & College Transport Services</h2>
          <div className="prose max-w-4xl mx-auto">
            <p className="mb-6">
              We provide reliable and affordable school & college transport services in Noida, Greater Noida & Ghaziabad. Our fleet includes various types of vehicles ranging from 12 seaters to 60 seaters, all equipped with safety features and GPS tracking.
            </p>
            <p className="mb-6">
              Perfect for schools and colleges looking for safe and reliable transportation solutions. All our vehicles are well-maintained, air-conditioned, and come with professional drivers who are trained in student safety.
            </p>
            <p>
              We offer flexible rental options - monthly or yearly contracts, with customizable routes and schedules to meet your institution's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Safety & Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">GPS Tracking</h3>
              <p>Real-time tracking of all vehicles for enhanced security</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Trained Drivers</h3>
              <p>Professional drivers with experience in student transportation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Regular Maintenance</h3>
              <p>Well-maintained fleet with regular safety checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Why choose Yashika Tour & Travels for school transport?</h3>
              <p>We provide safe, reliable, and affordable school transport services with GPS-enabled vehicles, professional drivers, and 24×7 customer support. Our focus is on student safety and comfort.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">What types of vehicles are available?</h3>
              <p>We offer a wide range of vehicles from 12 seaters to 60 seaters, including buses and tempo travellers. All vehicles are well-maintained, air-conditioned, and equipped with safety features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
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