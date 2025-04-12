import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida",
  description: "Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida.",
  keywords: "taxi service noida, cabs in noida, tempo traveller noida, bus rental noida, cab booking greater noida, taxi service ghaziabad",
  openGraph: {
    title: "Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida",
    description: "Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida.",
    url: "https://yashikatourandtravel.com/",
    siteName: "Yashika Tour & Travels",
    images: [
      {
        url: "/images/yashika-tour-travels.png",
        width: 1200,
        height: 628,
        alt: "Yashika Tour & Travels - Taxi service in noida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashika Tour & Travels - Taxi, Tempo Traveller, Bus rental service provider in Noida",
    description: "Yashika Tour & Travels is the largest Taxi, Tempo Traveller, Deluxe Bus & cab booking Services in Noida, Greater Noida & Ghaziabad. Since, 1995 we are the #1 tour and travel company in Noida.",
    images: ["/images/yashika-tour-travels.png"],
  },
  verification: {
    google: "1ibCMejMn_9cnqmKOpbpdLB26sbIMuwTzdUH12zv2WA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}