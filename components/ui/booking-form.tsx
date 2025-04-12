"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { bookingFormSchema, type BookingFormData } from "@/lib/booking-schema"
import { Input } from "@/components/ui/input"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tripType: "One-Way Trip",
    },
  })

  async function onSubmit(data: BookingFormData) {
    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Submission failed')
      
      alert('Booking submitted successfully!')
      form.reset()
    } catch (error) {
      alert('Failed to submit booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book Your Ride</h2>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Input
          {...form.register("fullName")}
          placeholder="Full Name"
          className="w-full px-4 py-3"
        />

        <Input
          {...form.register("phoneNumber")}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3"
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            {...form.register("pickupLocation")}
            placeholder="Pick-up Location"
            className="w-full px-4 py-3"
          />

          <Input
            {...form.register("dropoffLocation")}
            placeholder="Drop-off Location" 
            className="w-full px-4 py-3"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="flex items-center">
            <input
              {...form.register("tripType")}
              type="radio"
              value="One-Way Trip"
              className="mr-2"
            />
            <span>One-Way Trip</span>
          </label>

          <label className="flex items-center">
            <input
              {...form.register("tripType")}
              type="radio"
              value="Round Trip"
              className="mr-2"
            />
            <span>Round Trip</span>
          </label>
        </div>

        <select
          {...form.register("vehicleType")}
          className="w-full px-4 py-3 rounded border border-gray-300"
        >
          <option value="">Choose Your Ride</option>
          <option value="Wagon R">Wagon R</option>
          <option value="Swift Dzire">Swift Dzire</option>
          <option value="Toyota Etios">Toyota Etios</option>
          <option value="Ertiga">Ertiga</option>
          <option value="Innova">Innova</option>
          <option value="Innova Crysta">Innova Crysta</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
          <option value="Bus">Bus</option>
        </select>

        <Input
          {...form.register("numberOfPeople")}
          type="number"
          placeholder="No. of People"
          className="w-full px-4 py-3"
        />

        <Input
          {...form.register("departureDate")}
          type="date"
          className="w-full px-4 py-3"
        />

        {form.watch("tripType") === "Round Trip" && (
          <Input
            {...form.register("returnDate")}
            type="date"
            className="w-full px-4 py-3"
          />
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded transition-colors duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </form>
    </div>
  )
}
