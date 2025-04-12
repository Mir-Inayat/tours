"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              This privacy policy sets out how Yashika Tour & Travels uses and protects any information that you give Yashika Tour & Travels when you use this website.
            </p>

            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used according to this privacy statement.
            </p>

            <p className="text-gray-600 mb-6">
              Yashika Tour & Travels may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect the following information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Name and job title</li>
              <li>Contact information, including email address</li>
              <li>Demographic information such as postcode, preferences, and interests</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <p className="text-gray-600 mb-6">
              In addition to any protected information or other information that you choose to submit to us, we collect certain information whenever you visit or interact with the services ("usage information"). This usage information may include the browser you are using, the URL that referred you to our services, the areas within our services you visit, and the time of day, among other information. In addition, we collect your device identifier for your device.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mobile Device Information</h2>
            <p className="text-gray-600 mb-6">
              When you use any of our mobile applications, the mobile application may automatically collect and store some or all of the following information from your mobile device ("mobile device information"), including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Your preferred language and country site (if applicable)</li>
              <li>The manufacturer and model of your mobile device</li>
              <li>Your mobile operating system</li>
              <li>The type of mobile internet browsers you are using</li>
              <li>Your geolocation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Internal record keeping</li>
              <li>Improving our products and services</li>
              <li>Sending promotional emails about new products, special offers, or other information</li>
              <li>Market research purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
            <p className="text-gray-600 mb-6">
              We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              A cookie is a small file that asks permission to be placed on your computer's hard drive. Cookies allow web applications to respond to you as an individual. We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Links to Other Websites</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third Parties</h2>
            <p className="text-gray-600 mb-6">
              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If there are any questions regarding this privacy policy, you may contact us using the information on the Contact Us page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
} 