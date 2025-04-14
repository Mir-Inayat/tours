"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Blog, BlogCategory, BlogFAQ } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { use } from "react";
import TiptapEditor from "@/components/TiptapEditor";
import CategoryManager from "@/components/admin/CategoryManager";
import FAQManager from "@/components/admin/FAQManager";
import FileUpload from "@/components/admin/FileUpload";
import { PlusCircle, Calendar } from "lucide-react";
import { format } from "date-fns";

interface EditBlogProps {
  params: {
    id: string;
  };
}

export default function EditBlog(props: EditBlogProps) {
  const params = use(props.params);
  const id = params.id;

  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch blog post
        const blogResponse = await fetch(`/api/blogs/${id}`);
        if (!blogResponse.ok) throw new Error("Failed to fetch blog");
        const blogData = await blogResponse.json();

        // Ensure categories is an array
        if (!blogData.categories) {
          blogData.categories = [];
        }

        // Ensure FAQs is an array
        if (!blogData.faqs) {
          blogData.faqs = [];
        }

        // Ensure we have a publish date
        if (!blogData.publishDate) {
          blogData.publishDate = format(new Date(), "yyyy-MM-dd");
        }

        setBlog(blogData);

        // Fetch categories
        const categoriesResponse = await fetch("/api/blog-categories");
        if (!categoriesResponse.ok) throw new Error("Failed to fetch categories");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to load data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
        setLoadingCategories(false);
      }
    }

    if (id) {
      fetchData();
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

  const handleContentChange = (newContent: string) => {
    setBlog(prev => prev ? { ...prev, content: newContent } : null);
  };

  const handleFAQsChange = (faqs: BlogFAQ[]) => {
    setBlog(prev => prev ? { ...prev, faqs } : null);
  };

  const handleCoverImageChange = (url: string) => {
    setBlog(prev => prev ? { ...prev, coverImage: url } : null);
  };

  const handleCheckboxChange = (field: string) => (checked: boolean) => {
    setBlog(prev => prev ? { ...prev, [field]: checked } : null);
  };

  const handleCategoryChange = (categoryId: string) => (checked: boolean) => {
    setBlog(prev => {
      if (!prev) return null;

      const categories = prev.categories || [];
      return {
        ...prev,
        categories: checked
          ? [...categories, categoryId]
          : categories.filter(id => id !== categoryId)
      };
    });
  };

  const handleCategoryAdded = (category: BlogCategory) => {
    setCategories(prev => [...prev, category]);
  };

  const generateSlug = () => {
    if (!blog || !blog.title) return;

    const slug = blog.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');

    setBlog({ ...blog, slug });

    // Also set meta URL and title if empty
    if (!blog.metaUrl) {
      setBlog({ ...blog, metaUrl: slug });
    }

    if (!blog.metaTitle) {
      setBlog({ ...blog, metaTitle: blog.title });
    }
  };

  const handleSlugBlur = () => {
    if (blog && !blog.slug && blog.title) {
      generateSlug();
    }
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

      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });

      router.push("/admin/blogs");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update blog post",
        variant: "destructive",
      });
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
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Edit Blog</h1>
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
                      value={blog.slug || ""}
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
                    placeholder="Edit your blog content..."
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
                        value={blog.metaTitle || ""}
                        onChange={handleChange}
                        placeholder="SEO Title"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metaUrl">Meta URL</Label>
                      <Input
                        id="metaUrl"
                        name="metaUrl"
                        value={blog.metaUrl || ""}
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
                      value={blog.metaKeywords || ""}
                      onChange={handleChange}
                      placeholder="SEO Keywords"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      name="metaDescription"
                      value={blog.metaDescription || ""}
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
                  {loadingCategories ? (
                    <p className="text-sm text-gray-500">Loading categories...</p>
                  ) : categories.length === 0 ? (
                    <p className="text-sm text-gray-500">No categories found. Create one!</p>
                  ) : (
                    categories.map(category => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category.id}`}
                          checked={(blog.categories || []).includes(category.id)}
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
                        value={blog.publishDate || format(new Date(), "yyyy-MM-dd")}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isVideo"
                      checked={blog.isVideo || false}
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
                      checked={blog.allowComments !== false} // Default to true if undefined
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
                      checked={blog.showOnHome || false}
                      onCheckedChange={handleCheckboxChange('showOnHome')}
                    />
                    <Label
                      htmlFor="showOnHome"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Show on homepage
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isTrending"
                      checked={blog.isTrending || false}
                      onCheckedChange={handleCheckboxChange('isTrending')}
                    />
                    <Label
                      htmlFor="isTrending"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Mark as trending
                    </Label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button type="submit" disabled={saving} className="flex-1">
                  {saving ? "Saving..." : "Save Blog"}
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