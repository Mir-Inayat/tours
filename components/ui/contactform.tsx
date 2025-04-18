"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  query: z.string().min(10, {
    message: "Query must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      query: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Map form field names to match your API expectations
      const formData = {
        name: values.fullName,
        email: values.emailAddress,
        phone: values.phoneNumber,
        message: values.query,
        formType: "contact"
      };
      
      // Submit to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // Show success message
      alert("Form submitted successfully! We'll get back to you soon.");
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-md shadow p-4">
      <h2 className="text-lg font-semibold text-center mb-3">Contact Us</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Full Name" 
                    {...field}
                    className="w-full h-9 rounded-md border border-gray-200 text-sm"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Phone Number" 
                    type="tel"
                    {...field}
                    className="w-full h-9 rounded-md border border-gray-200 text-sm"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    {...field}
                    className="w-full h-9 rounded-md border border-gray-200 text-sm"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Query" 
                    {...field}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[70px] resize-none text-sm"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Replaced reCAPTCHA with simple checkbox */}
          <div className="flex items-center my-2">
            <input 
              type="checkbox" 
              id="not-robot" 
              className="mr-2"
              required
            />
            <label htmlFor="not-robot" className="text-sm text-gray-600">
              I'm not a robot
            </label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 px-4 rounded-md text-sm transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  )
}