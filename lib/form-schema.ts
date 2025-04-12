import * as z from "zod"

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  phoneNumber: z.string().min(10, { message: "Valid phone number is required" }),
  pickupLocation: z.string().min(2, { message: "Pickup location is required" }),
  dropoffLocation: z.string().min(2, { message: "Drop-off location is required" }),
  tripType: z.enum(["One-Way Trip", "Round Trip"]),
  vehicleType: z.string().min(1, { message: "Please select a vehicle" }),
  numberOfPeople: z.string().min(1, { message: "Number of people is required" }),
  departureDate: z.string().min(1, { message: "Departure date is required" }),
  returnDate: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
