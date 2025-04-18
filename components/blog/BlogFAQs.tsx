"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BlogFAQ } from '@/types/blog';

interface BlogFAQsProps {
  faqs: BlogFAQ[];
}

const BlogFAQs: React.FC<BlogFAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full text-left p-4 bg-white hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
              type="button"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-gray-500">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t">
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