"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { use } from "react";  // Import use from React

// Interface for props with proper typing
interface EditBlogProps {
  params: {
    id: string;
  };
}

export default function EditBlog(props: EditBlogProps) {
  // Properly unwrap the params object using React.use
  const params = use(props.params);
  const id = params.id;
  
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog(prev => prev ? { ...prev, [name]: value } : null);
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagValues = e.target.value.split(",").map(tag => tag.trim());
    setBlog(prev => prev ? { ...prev, tags: tagValues } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog) return;
    
    setSaving(true);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) throw new Error("Failed to update blog");
      router.push("/admin/blogs");
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center">Blog not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Edit Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Form fields remain the same */}
        <div className="space-y-2">
          <Label htmlFor="title">Blog Title</Label>
          <Input
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            name="coverImage"
            value={blog.coverImage}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={blog.excerpt}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            rows={10}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            id="tags"
            name="tags"
            value={blog.tags.join(", ")}
            onChange={handleTagsChange}
          />
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="isTrending"
            name="isTrending"
            checked={blog.isTrending || false}
            onChange={(e) => setBlog(prev => prev ? { ...prev, isTrending: e.target.checked } : null)}
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <Label htmlFor="isTrending">Mark as trending post</Label>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Blog"}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}