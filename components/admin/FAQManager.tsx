"use client";

import React, { useState } from "react";
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, X, GripVertical, ChevronDown, ChevronUp } from "lucide-react";

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

interface FAQManagerProps {
  faqs?: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}

// Helper to generate a unique ID
const generateId = () => `faq-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Sortable FAQ Item Component
const SortableFAQItem = ({ faq, index, openFAQs, toggleFAQ, removeFAQ, handleChange }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: faq.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className="border rounded-md overflow-hidden"
    >
      <div className="flex items-center bg-gray-50 p-3">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab mr-2 text-gray-500"
        >
          <GripVertical className="h-4 w-4" />
        </div>
        
        <div className="flex-1 flex justify-between items-center">
          <button
            type="button"
            onClick={() => toggleFAQ(faq.id)}
            className="flex-1 text-left font-medium text-sm truncate"
          >
            {faq.question || 'New FAQ Question'}
          </button>
          
          <div className="flex items-center gap-2">
            <button 
              type="button"
              onClick={() => toggleFAQ(faq.id)} 
              className="p-1 hover:bg-gray-200 rounded"
            >
              {openFAQs[faq.id] ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <button 
              type="button"
              onClick={() => removeFAQ(index)}
              className="p-1 text-red-500 hover:bg-red-50 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {openFAQs[faq.id] && (
        <div className="p-3 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Question
            </label>
            <Input
              value={faq.question}
              onChange={(e) => handleChange(index, "question", e.target.value)}
              placeholder="Enter question"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Answer
            </label>
            <Textarea
              value={faq.answer}
              onChange={(e) => handleChange(index, "answer", e.target.value)}
              rows={3}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function FAQManager({ faqs = [], onChange }: FAQManagerProps) {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addNewFAQ = (e: React.MouseEvent) => {
    // Prevent the default action (which might be submitting a form)
    e.preventDefault();
    
    const newFAQ: FAQ = {
      id: generateId(),
      question: "",
      answer: "",
    };

    onChange([...faqs, newFAQ]);

    // Auto-open the newly created FAQ
    setOpenFAQs((prev) => ({
      ...prev,
      [newFAQ.id]: true,
    }));
  };

  const removeFAQ = (index: number) => {
    const updatedFAQs = [...faqs];
    updatedFAQs.splice(index, 1);
    onChange(updatedFAQs);
  };

  const handleChange = (index: number, field: "question" | "answer", value: string) => {
    const updatedFAQs = [...faqs];
    updatedFAQs[index] = {
      ...updatedFAQs[index],
      [field]: value,
    };
    onChange(updatedFAQs);
  };

  const toggleFAQ = (id: string) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over?.id) {
      const oldIndex = faqs.findIndex((faq) => faq.id === active.id);
      const newIndex = faqs.findIndex((faq) => faq.id === over.id);
      
      onChange(arrayMove(faqs, oldIndex, newIndex));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Frequently Asked Questions</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={addNewFAQ}
          className="flex items-center gap-1"
          type="button" // Explicitly set button type to prevent form submission
        >
          <PlusCircle className="h-4 w-4" />
          <span>Add FAQ</span>
        </Button>
      </div>

      {faqs.length === 0 ? (
        <div className="text-center py-8 border border-dashed rounded-md">
          <p className="text-gray-500">No FAQs added yet. Add your first FAQ.</p>
        </div>
      ) : (
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={faqs.map(faq => faq.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <SortableFAQItem
                  key={faq.id}
                  faq={faq}
                  index={index}
                  openFAQs={openFAQs}
                  toggleFAQ={toggleFAQ}
                  removeFAQ={removeFAQ}
                  handleChange={handleChange}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}