"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./input";
import { Button } from "./button";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Label } from "./label";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  pickupLocation: z.string().min(1, "Pickup location is required"),
  dropoffLocation: z.string().min(1, "Drop-off location is required"),
  rideType: z.enum(["One-Way Trip", "Round Trip"]),
  vehicleType: z.enum([
    "Wagon R",
    "Swift Dzire",
    "Toyota Etios",
    "Ertiga",
    "Innova",
    "Innova crysta",
    "Tata sumo gold",
    "Tempo traveller",
    "Bus"
  ], {
    required_error: "Please select a vehicle type"
  }),
  numberOfPeople: z.string().min(1, "Number of people is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  returnDate: z.string().optional(),
});

export function BusBookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rideType: "One-Way Trip",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-3xl p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book Your Ride</h2>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <div className="relative">
            <Input 
              placeholder="Full Name"
              {...form.register("fullName")}
              className="pl-10 w-full h-12 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <Input 
              placeholder="Phone Number"
              {...form.register("phoneNumber")}
              className="pl-10 w-full h-12 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <Input 
              placeholder="Pick-up Location"
              {...form.register("pickupLocation")}
              className="pl-10 w-full h-12 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
          </div>

          <div className="relative">
            <Input 
              placeholder="Drop-off Location"
              {...form.register("dropoffLocation")}
              className="pl-10 w-full h-12 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <RadioGroup
              defaultValue="One-Way Trip"
              onValueChange={(value) => form.setValue("rideType", value as "One-Way Trip" | "Round Trip")}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="One-Way Trip" id="one-way" />
                <Label htmlFor="one-way" className="text-gray-600">One-Way Trip</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Round Trip" id="round-trip" />
                <Label htmlFor="round-trip" className="text-gray-600">Round Trip</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="relative">
            <Select onValueChange={(value) => form.setValue("vehicleType", value)}>
              <SelectTrigger className="w-full h-12 rounded-lg border border-gray-200 bg-white text-gray-500">
                <SelectValue placeholder="Choose Your Ride" />
              </SelectTrigger>
              <SelectContent position="popper" className="w-full max-h-[300px] overflow-auto bg-white">
                <SelectItem value="Wagon R">Wagon R</SelectItem>
                <SelectItem value="Swift Dzire">Swift Dzire</SelectItem>
                <SelectItem value="Toyota Etios">Toyota Etios</SelectItem>
                <SelectItem value="Ertiga">Ertiga</SelectItem>
                <SelectItem value="Innova">Innova</SelectItem>
                <SelectItem value="Innova crysta">Innova crysta</SelectItem>
                <SelectItem value="Tata sumo gold">Tata sumo gold</SelectItem>
                <SelectItem value="Tempo traveller">Tempo traveller</SelectItem>
                <SelectItem value="Bus">Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Input 
              placeholder="No. of People"
              type="number"
              {...form.register("numberOfPeople")}
              className="w-full h-12 rounded-lg border border-gray-200"
            />
          </div>

          <div>
            <p className="text-gray-600 mb-2">Departure Date</p>
            <div className="relative">
              <Input 
                placeholder="dd-mm-yyyy"
                type="date"
                {...form.register("departureDate")}
                className="w-full h-12 rounded-lg border border-gray-200"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {form.watch("rideType") === "Round Trip" && (
            <div>
              <p className="text-gray-600 mb-2">Return Date</p>
              <div className="relative">
                <Input 
                  placeholder="dd-mm-yyyy"
                  type="date"
                  {...form.register("returnDate")}
                  className="w-full h-12 rounded-lg border border-gray-200"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium"
        >
          Book Now
        </Button>
      </form>
    </div>
  );
} 