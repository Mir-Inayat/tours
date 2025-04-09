"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { PlusIcon, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/blogs");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete blog");
      
      // Remove from state
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const togglePublish = async (blog: Blog) => {
    try {
      const response = await fetch(`/api/blogs/${blog.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ published: !blog.published }),
      });
      
      if (!response.ok) throw new Error("Failed to update blog");
      
      // Update in state
      setBlogs(blogs.map(b => b.id === blog.id ? { ...b, published: !b.published } : b));
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading blogs...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <Button onClick={() => router.push("/admin/blogs/new")}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add New Blog
        </Button>
      </div>

      <div className="bg-white rounded-md shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">No blogs found. Create your first blog post!</td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{blog.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button 
                      variant={blog.published ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => togglePublish(blog)}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </Button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm" onClick={() => router.push(`/admin/blogs/edit/${blog.id}`)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteBlog(blog.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}