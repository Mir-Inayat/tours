"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewBlog() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
    excerpt: "",
    coverImage: "/placeholder-blog.jpg",
    tags: [] as string[],
    published: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagValues = e.target.value.split(",").map(tag => tag.trim());
    setBlog(prev => ({ ...prev, tags: tagValues }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (!response.ok) throw new Error("Failed to create blog");
      router.push("/admin/blogs");
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create New Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
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
            placeholder="Brief summary of the blog post"
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
            placeholder="travel, adventure, tips"
          />
        </div>

        <div className="flex space-x-4">
          <Button type="submit" disabled={saving}>
            {saving ? "Creating..." : "Create Blog"}
          </Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}