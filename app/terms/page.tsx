"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Copyright } from "@/components/ui/copyright";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Terms and Conditions</h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6">
              Welcome to Yashika Tour & Travels. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern yashika tours and travel's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>

            <p className="text-gray-600 mb-6">
              The term 'Yashika Tour and Travels' or 'us' or 'we' refers to the Yashika Tour and Travels whose registered office is 'B7, 153A, near Income Tax Office, Block B, Sector 22, Noida, Uttar Pradesh 201301, India' The term 'you' refers to the user or viewer of our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terms of Use</h2>
            <p className="text-gray-600 mb-4">The use of this website is subject to the following terms of use:</p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-3">
              <li>
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </li>
              <li>
                This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: IP Address, Location
              </li>
              <li>
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </li>
              <li>
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </li>
              <li>
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </li>
              <li>
                All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
              </li>
              <li>
                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
              </li>
              <li>
                From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
              </li>
              <li>
                Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
              </li>
              <li>
                Specific offers will have might have additional Terms & Conditions which the user has to comply with in case he chooses to avail that offer.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refunds and Cancellation</h2>
            <p className="text-gray-600 mb-6">
              If you are eligible for refunds based on the "Cancellation and Returns" policy above, then the refund will be remitted back to you in 5-7 working days. In case of any issues, write to us at{" "}
              <a href="mailto:contact@yashikatourandtravel.com" className="text-orange-500 hover:text-orange-700">
                contact@yashikatourandtravel.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:9312244228" className="text-orange-500 hover:text-orange-700">
                9312244228
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
} 