"use client";

import React, { useState } from "react";
import { BlogFAQ } from "@/types/blog";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BlogFAQsProps {
  faqs: BlogFAQ[];
}

const BlogFAQs: React.FC<BlogFAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border rounded-lg overflow-hidden bg-white"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-4 pt-0 border-t">
                <div 
                  className="prose max-w-none" 
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFAQs;