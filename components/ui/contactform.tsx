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
import Script from "next/script"
import { useEffect, useRef } from "react"

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
  const recaptchaRef = useRef<HTMLDivElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      query: "",
    },
  })

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const recaptchaValue = (window as any).grecaptcha?.getResponse()
    
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification")
      return
    }

    try {
      // Add your form submission logic here
      console.log({ ...values, recaptchaValue })
      
      // Reset form and reCAPTCHA after successful submission
      form.reset()
      ;(window as any).grecaptcha?.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
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

          {/* reCAPTCHA */}
          <div className="flex justify-center my-2">
            <div 
              ref={recaptchaRef}
              className="g-recaptcha transform scale-75 origin-left" 
              data-sitekey="6LcPHGopAAAAAFKRrc8hXRqGwWnGxQvLXv4hZA-e"
            ></div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 px-4 rounded-md text-sm transition duration-200"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
} 