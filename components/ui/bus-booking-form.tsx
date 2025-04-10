"use client";

import React from "react";
import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Button } from "./button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  pickupLocation: z.string().min(1, "Please enter pickup location"),
  dropoffLocation: z.string().min(1, "Please enter dropoff location"),
  journeyDate: z.string().min(1, "Please select journey date"),
  returnDate: z.string().optional(),
  departureTime: z.string().min(1, "Please select departure time"),
  returnTime: z.string().optional(),
  rideType: z.enum(["One Way", "Round Trip"]),
  vehicleType: z.enum(["Ertiga", "Innova", "Tempo Traveller", "Mini Bus", "Deluxe Coach"]),
  numberOfPeople: z.string().min(1, "Please enter number of people"),
});

type FormValues = z.infer<typeof formSchema>;

export function BusBookingForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rideType: "One Way",
      vehicleType: "Ertiga",
    },
  });

  const rideType = form.watch("rideType");

  const onSubmit = (data: FormValues) => {
    console.log("Booking submitted:", data);
    alert("Booking request submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Book Your Bus Now</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <User className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <Phone className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Location</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <MapPin className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input placeholder="Pickup Location" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dropoffLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dropoff Location</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <MapPin className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input placeholder="Dropoff Location" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="journeyDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Journey Date</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <Calendar className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {rideType === "Round Trip" && (
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Date</FormLabel>
                  <div className="flex items-center border rounded-lg p-2">
                    <Calendar className="text-gray-500 mr-2" size={20} />
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="departureTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departure Time</FormLabel>
                <div className="flex items-center border rounded-lg p-2">
                  <Clock className="text-gray-500 mr-2" size={20} />
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {rideType === "Round Trip" && (
            <FormField
              control={form.control}
              name="returnTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Time</FormLabel>
                  <div className="flex items-center border rounded-lg p-2">
                    <Clock className="text-gray-500 mr-2" size={20} />
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="rideType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ride Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ride type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="One Way">One Way</SelectItem>
                    <SelectItem value="Round Trip">Round Trip</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicleType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vehicle Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Ertiga">Ertiga</SelectItem>
                    <SelectItem value="Innova">Innova</SelectItem>
                    <SelectItem value="Tempo Traveller">Tempo Traveller</SelectItem>
                    <SelectItem value="Mini Bus">Mini Bus</SelectItem>
                    <SelectItem value="Deluxe Coach">Deluxe Coach</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of People</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Number of people" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            Book Now
          </Button>
        </form>
      </Form>
    </div>
  );
} 