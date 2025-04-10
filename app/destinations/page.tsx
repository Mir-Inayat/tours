import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const destinations = {
  noida: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ],
  greaterNoida: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ],
  ghaziabad: [
    "Agra", "Haridwar", "Nainital", "Mussoorie", "Rishikesh", "Jaipur",
    "Chandigarh", "Manali", "Ajmer", "Shimla", "Ambala", "Dehradun",
    "Patiala", "Amritsar", "Mcleodganj", "Lansdowne"
  ]
}

export default function DestinationsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Popular Destinations</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Book Cab/Taxi in Noida, Greater Noida & Ghaziabad To Your Popular Destinations. We provide the best taxi services with GPS-enabled vehicles and experienced drivers.
        </p>

        <div className="flex flex-col gap-16">
          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Book a ride to your favourite destination!</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
              <input type="text" placeholder="Pick-up Location" className="p-3 border rounded-lg" />
              <input type="text" placeholder="Drop-off Location" className="p-3 border rounded-lg" />
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="tripType" className="mr-2" />
                  One-Way Trip
                </label>
                <label className="flex items-center">
                  <input type="radio" name="tripType" className="mr-2" />
                  Round Trip
                </label>
              </div>
              <select className="p-3 border rounded-lg">
                <option>Choose Your Ride</option>
                <option>Ertiga</option>
                <option>Innova</option>
                <option>Innova Crysta</option>
                <option>Swift Dzire</option>
                <option>Tempo Traveller</option>
              </select>
              <select className="p-3 border rounded-lg">
                <option>No. of People</option>
                {[...Array(15)].map((_, i) => (
                  <option key={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                ))}
              </select>
              <input type="date" placeholder="Departure Date" className="p-3 border rounded-lg" />
              <input type="date" placeholder="Return Date" className="p-3 border rounded-lg" />
              <Button className="md:col-span-2 bg-orange-500 hover:bg-orange-600">
                Book Now
              </Button>
            </form>
          </div>

          {/* Noida Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Noida to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.noida.map((dest) => (
                <Link 
                  href={`/book?from=noida&to=${dest.toLowerCase()}`}
                  key={dest}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
                >
                  <span>Noida To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Greater Noida Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Greater Noida to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.greaterNoida.map((dest) => (
                <Link 
                  href={`/book?from=greater-noida&to=${dest.toLowerCase()}`}
                  key={dest}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
                >
                  <span>Greater Noida To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Ghaziabad Destinations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Hire Taxi/Cab from Ghaziabad to your favourite destinations!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.ghaziabad.map((dest) => (
                <Link 
                  href={`/book?from=ghaziabad&to=${dest.toLowerCase()}`}
                  key={dest}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
                >
                  <span>Ghaziabad To {dest} Taxi</span>
                  <span className="text-orange-500">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
