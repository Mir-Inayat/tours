"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { BlogCategory } from "@/types/blog";
import { X, Loader2, Plus } from "lucide-react";

interface CategoryManagerProps {
  onClose: () => void;
  onCategoryAdded: (category: BlogCategory) => void;
}

export default function CategoryManager({ onClose, onCategoryAdded }: CategoryManagerProps) {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/blog-categories");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to load categories",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.name.trim()) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/blog-categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      if (!response.ok) throw new Error("Failed to create category");
      const createdCategory = await response.json();
      
      setCategories([...categories, createdCategory]);
      onCategoryAdded(createdCategory);
      
      setNewCategory({
        name: "",
        description: "",
      });
      
      toast({
        title: "Success",
        description: "Category created successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to create category",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      const response = await fetch(`/api/blog-categories/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete category");
      
      setCategories(categories.filter(cat => cat.id !== id));
      toast({
        title: "Success",
        description: "Category deleted successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete category",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Manage Categories</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Category Name</Label>
              <Input
                id="name"
                name="name"
                value={newCategory.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                name="description"
                value={newCategory.description}
                onChange={handleInputChange}
                rows={2}
              />
            </div>

            <Button type="submit" disabled={saving} className="w-full">
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
              Add Category
            </Button>
          </div>
        </form>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium mb-2">Existing Categories</h3>
          {loading ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
            </div>
          ) : categories.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">No categories found</p>
          ) : (
            <ul className="space-y-2 max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <li key={category.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">{category.name}</p>
                    {category.description && (
                      <p className="text-xs text-gray-500">{category.description}</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}