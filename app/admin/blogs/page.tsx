"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Eye, Trash2 } from "lucide-react";
import { Blog } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/blogs/${deleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      // Remove the deleted blog from state
      setBlogs(blogs.filter(blog => blog.id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog. Please try again.');
    }
  };

  // Handle null values safely by using optional chaining and providing fallback values
  const filteredBlogs = blogs.filter(blog => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (blog.title?.toLowerCase() || '').includes(searchLower) ||
      (blog.description?.toLowerCase() || '').includes(searchLower) ||
      (blog.categories?.some(cat => (cat.name?.toLowerCase() || '').includes(searchLower)) ?? false) ||
      (blog.tags?.some(tag => (typeof tag === 'string' && tag.toLowerCase().includes(searchLower))) ?? false)
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Link href="/admin/blogs/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Blog Post
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search blogs..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[350px]">Title</TableHead>
              <TableHead className="hidden md:table-cell">Categories</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="w-[150px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-gray-500">
                  Loading blogs...
                </TableCell>
              </TableRow>
            ) : filteredBlogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-gray-500">
                  {searchTerm ? "No blogs match your search" : "No blogs found"}
                </TableCell>
              </TableRow>
            ) : (
              filteredBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">
                    {blog.title || "Untitled Blog"}
                    {blog.isTrending && (
                      <Badge variant="outline" className="ml-2 bg-orange-50 text-orange-800">
                        Trending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {blog.categories?.map((category, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {formatDate(blog.publishedDate || blog.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Badge className={blog.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                      {blog.published ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                        title="View Blog"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => router.push(`/admin/blogs/edit/${blog.id}`)}
                        title="Edit Blog"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeleteId(blog.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        title="Delete Blog"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this blog post. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}