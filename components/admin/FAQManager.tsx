"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BlogFAQ } from "@/types/blog";
import { X, Plus, ChevronUp, ChevronDown, GripVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface FAQManagerProps {
  faqs: BlogFAQ[];
  onChange: (faqs: BlogFAQ[]) => void;
}

export default function FAQManager({ faqs = [], onChange }: FAQManagerProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleAdd = () => {
    const newFAQs = [...faqs, { question: "", answer: "" }];
    onChange(newFAQs);
    // Auto expand the newly added FAQ
    setExpanded(newFAQs.length - 1);
  };

  const handleRemove = (index: number) => {
    const newFAQs = faqs.filter((_, i) => i !== index);
    onChange(newFAQs);
    // If the expanded item is removed or is after the removed item, adjust expanded index
    if (expanded !== null) {
      if (expanded === index) {
        setExpanded(null);
      } else if (expanded > index) {
        setExpanded(expanded - 1);
      }
    }
  };

  const handleChange = (index: number, field: keyof BlogFAQ, value: string) => {
    const newFAQs = [...faqs];
    newFAQs[index][field] = value;
    onChange(newFAQs);
  };

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(faqs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onChange(items);

    // If the expanded item was moved, update expanded state
    if (expanded === result.source.index) {
      setExpanded(result.destination.index);
    } else if (
      expanded !== null && 
      expanded >= result.source.index && 
      expanded < result.destination.index
    ) {
      setExpanded(expanded - 1);
    } else if (
      expanded !== null && 
      expanded <= result.source.index && 
      expanded > result.destination.index
    ) {
      setExpanded(expanded + 1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg">Frequently Asked Questions (FAQs)</h3>
        <Button
          type="button"
          size="sm"
          onClick={handleAdd}
          className="text-sm"
        >
          <Plus size={16} className="mr-1" /> Add FAQ
        </Button>
      </div>
      
      {faqs.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-8 bg-gray-50 rounded-md">
          No FAQs added yet. Click "Add FAQ" to create your first question and answer.
        </p>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="faqs">
            {(provided) => (
              <div
                className="space-y-3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {faqs.map((faq, index) => (
                  <Draggable key={index} draggableId={`faq-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="border rounded-md bg-white overflow-hidden"
                      >
                        <div className="flex items-center justify-between p-3 bg-gray-50">
                          <div className="flex items-center gap-2 flex-grow">
                            <div
                              {...provided.dragHandleProps}
                              className="cursor-grab hover:text-blue-600"
                            >
                              <GripVertical size={16} />
                            </div>
                            <span className="font-medium text-sm">Question {index + 1}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleToggle(index)}
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              {expanded === index ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemove(index)}
                              className="p-1 text-red-500 hover:bg-red-50 hover:text-red-700 rounded"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                        {expanded === index && (
                          <div className="p-3 space-y-3">
                            <div>
                              <Input
                                placeholder="Question"
                                value={faq.question}
                                onChange={(e) => handleChange(index, "question", e.target.value)}
                                className="mb-2"
                              />
                            </div>
                            <div>
                              <Textarea
                                placeholder="Answer"
                                value={faq.answer}
                                onChange={(e) => handleChange(index, "answer", e.target.value)}
                                rows={3}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}