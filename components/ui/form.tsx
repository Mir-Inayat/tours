"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  useForm,
} from "react-hook-form"
import { Calendar } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Label } from "./label"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// Form Schema
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
})

// Form Components
const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2 text-gray-900", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-red-500", "text-gray-700", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      className="text-gray-900"
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-red-500", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

// Bus Booking Form Component
export function BusBookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rideType: "One-Way Trip",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className="bg-white rounded-3xl p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book Your Ride</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Full Name"
                      {...field}
                      className="pl-10 w-full h-12 rounded-lg border border-gray-200"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                  </div>
                </FormControl>
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
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Phone Number"
                      {...field}
                      className="pl-10 w-full h-12 rounded-lg border border-gray-200"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pick-up Location</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Pick-up Location"
                      {...field}
                      className="pl-10 w-full h-12 rounded-lg border border-gray-200"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dropoffLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Drop-off Location</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Drop-off Location"
                      {...field}
                      className="pl-10 w-full h-12 rounded-lg border border-gray-200"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rideType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
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
                </FormControl>
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
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                </FormControl>
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
                  <Input 
                    type="number"
                    placeholder="No. of People"
                    {...field}
                    className="w-full h-12 rounded-lg border border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departure Date</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="date"
                      placeholder="dd-mm-yyyy"
                      {...field}
                      className="w-full h-12 rounded-lg border border-gray-200"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("rideType") === "Round Trip" && (
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type="date"
                        placeholder="dd-mm-yyyy"
                        {...field}
                        className="w-full h-12 rounded-lg border border-gray-200"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <button 
            type="submit" 
            className="w-full h-12 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Book Now
          </button>
        </form>
      </Form>
    </div>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
