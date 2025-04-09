import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yashika Tour & Travels - Taxi Services in Noida",
  description: "Largest Outstation & Local Taxi Services in Noida, Greater Noida & Ghaziabad",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="__className_d65c78" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}