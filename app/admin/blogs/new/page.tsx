"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import TiptapEditor from "@/components/TiptapEditor";
import CategoryManager from "@/components/admin/CategoryManager";
import FAQManager from "@/components/admin/FAQManager";
import FileUpload from "@/components/admin/FileUpload";
import { BlogCategory, BlogFAQ } from "@/types/blog";
import { PlusCircle, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function NewBlog() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    author: "",
    content: "",
    excerpt: "",
    coverImage: "/placeholder-blog.jpg",
    tags: [] as string[],
    categories: [] as string[],
    faqs: [] as BlogFAQ[],
    published: false,
    publishDate: format(new Date(), "yyyy-MM-dd"),
    isVideo: false,
    allowComments: true,
    showOnHome: false,
    metaTitle: "",
    metaUrl: "",
    metaKeywords: "",
    metaDescription: ""
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagValues = e.target.value.split(",").map(tag => tag.trim());
    setBlog(prev => ({ ...prev, tags: tagValues }));
  };

  const handleContentChange = (newContent: string) => {
    setBlog(prev => ({ ...prev, content: newContent }));
  };

  const handleFAQsChange = (faqs: BlogFAQ[]) => {
    setBlog(prev => ({ ...prev, faqs }));
  };

  const handleCoverImageChange = (url: string) => {
    setBlog(prev => ({ ...prev, coverImage: url }));
  };

  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    setBlog(prev => ({ ...prev, [field]: checked }));
  };

  const handleCategoryChange = (categoryId: string) => (checked: boolean) => {
    setBlog(prev => ({
      ...prev,
      categories: checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter(id => id !== categoryId)
    }));
  };

  const handleCategoryAdded = (category: BlogCategory) => {
    setCategories(prev => [...prev, category]);
  };

  const generateSlug = () => {
    const slug = blog.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    setBlog(prev => ({ ...prev, slug }));
    
    // Also set meta URL and title if empty
    if (!blog.metaUrl) {
      setBlog(prev => ({ ...prev, metaUrl: slug }));
    }
    
    if (!blog.metaTitle) {
      setBlog(prev => ({ ...prev, metaTitle: blog.title }));
    }
  };

  const handleSlugBlur = () => {
    if (!blog.slug && blog.title) {
      generateSlug();
    }
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
      
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      
      router.push("/admin/blogs");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Create New Blog</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content - Left Column */}
            <div className="flex-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Blog Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={blog.title}
                    onChange={handleChange}
                    onBlur={handleSlugBlur}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <div className="flex gap-2">
                    <Input
                      id="slug"
                      name="slug"
                      value={blog.slug}
                      onChange={handleChange}
                      placeholder="blog-post-url"
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={generateSlug}
                      className="whitespace-nowrap"
                    >
                      Generate Slug
                    </Button>
                  </div>
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
                  <TiptapEditor 
                    content={blog.content} 
                    onChange={handleContentChange} 
                    placeholder="Start writing your amazing blog post..."
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
              </div>

              {/* FAQs Section */}
              <div className="bg-white p-6 rounded-lg shadow">
                <FAQManager 
                  faqs={blog.faqs || []} 
                  onChange={handleFAQsChange} 
                />
              </div>

              {/* SEO Section */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-medium text-lg mb-4">SEO Metadata</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <Input
                        id="metaTitle"
                        name="metaTitle"
                        value={blog.metaTitle}
                        onChange={handleChange}
                        placeholder="SEO Title"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metaUrl">Meta URL</Label>
                      <Input
                        id="metaUrl"
                        name="metaUrl"
                        value={blog.metaUrl}
                        onChange={handleChange}
                        placeholder="SEO URL path"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaKeywords">Meta Keywords</Label>
                    <Input
                      id="metaKeywords"
                      name="metaKeywords"
                      value={blog.metaKeywords}
                      onChange={handleChange}
                      placeholder="SEO Keywords"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      name="metaDescription"
                      value={blog.metaDescription}
                      onChange={handleChange}
                      rows={3}
                      placeholder="SEO Description"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Settings - Right Column */}
            <div className="lg:w-80 space-y-6">
              {/* Cover Image Card */}
              <div className="bg-white p-4 rounded-lg shadow space-y-4">
                <h3 className="font-medium text-lg">Cover Image</h3>
                <FileUpload
                  onFileUploaded={handleCoverImageChange}
                  existingImage={blog.coverImage}
                  className="space-y-2"
                />
              </div>

              {/* Categories Card */}
              <div className="bg-white p-4 rounded-lg shadow space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg">Categories</h3>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowCategoryManager(true)}
                  >
                    <PlusCircle size={16} className="mr-2" />
                    New
                  </Button>
                </div>
                
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {loading ? (
                    <p className="text-sm text-gray-500">Loading categories...</p>
                  ) : categories.length === 0 ? (
                    <p className="text-sm text-gray-500">No categories found. Create one!</p>
                  ) : (
                    categories.map(category => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category.id}`}
                          checked={blog.categories.includes(category.id)}
                          onCheckedChange={handleCategoryChange(category.id)}
                        />
                        <Label 
                          htmlFor={`category-${category.id}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Publishing Options Card */}
              <div className="bg-white p-4 rounded-lg shadow space-y-4">
                <h3 className="font-medium text-lg">Publishing Options</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="published"
                      checked={blog.published}
                      onCheckedChange={handleCheckboxChange('published')}
                    />
                    <Label 
                      htmlFor="published"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Publish this blog
                    </Label>
                  </div>
                  
                  {blog.published && (
                    <div className="flex items-center space-x-2 pl-6">
                      <Calendar size={16} className="text-gray-500" />
                      <Input
                        type="date"
                        name="publishDate"
                        value={blog.publishDate}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isVideo"
                      checked={blog.isVideo}
                      onCheckedChange={handleCheckboxChange('isVideo')}
                    />
                    <Label 
                      htmlFor="isVideo"
                      className="text-sm font-normal cursor-pointer"
                    >
                      This is a video blog
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="allowComments"
                      checked={blog.allowComments}
                      onCheckedChange={handleCheckboxChange('allowComments')}
                    />
                    <Label 
                      htmlFor="allowComments"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Allow comments
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="showOnHome"
                      checked={blog.showOnHome}
                      onCheckedChange={handleCheckboxChange('showOnHome')}
                    />
                    <Label 
                      htmlFor="showOnHome"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Show on homepage
                    </Label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button type="submit" disabled={saving} className="flex-1">
                  {saving ? "Creating..." : "Create Blog"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => router.push("/admin/blogs")}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {showCategoryManager && (
        <CategoryManager 
          onClose={() => setShowCategoryManager(false)} 
          onCategoryAdded={handleCategoryAdded} 
        />
      )}
    </>
  );
}