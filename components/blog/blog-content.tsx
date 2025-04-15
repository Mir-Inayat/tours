"use client"

import { useEffect, useRef } from "react"

export function BlogContent({ content }: { content: string }) {
  const contentRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // If content is empty or ref is not available yet, return
    if (!content || !contentRef.current) return
    
    // Set the HTML content
    contentRef.current.innerHTML = content
    
    // Handle any image loading or other post-render effects
    const images = contentRef.current.querySelectorAll('img')
    images.forEach(img => {
      img.classList.add('rounded-md', 'my-4')
      // If image doesn't have alt text, add empty alt for accessibility
      if (!img.alt) img.alt = ""
    })
    
    // Make external links open in new tabs
    const links = contentRef.current.querySelectorAll('a')
    links.forEach(link => {
      if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank')
        link.setAttribute('rel', 'noopener noreferrer')
      }
    })
  }, [content])
  
  // If no content, show placeholder
  if (!content) {
    return <p className="text-gray-500 italic">No content available</p>
  }
  
  return <div ref={contentRef} className="blog-content" />
}