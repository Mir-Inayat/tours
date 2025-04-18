// Update the BlogFAQ type to match the FAQ type from FAQManager
export interface BlogFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Blog {
  id?: string;
  title: string;
  slug?: string;
  author: string;
  content: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  categories?: string[];
  published: boolean;
  publishDate?: string;
  isTrending?: boolean;
  isVideo?: boolean;
  allowComments?: boolean;
  showOnHome?: boolean;
  metaTitle?: string;
  metaUrl?: string;
  metaKeywords?: string;
  metaDescription?: string;
  faqs?: {
    id: string;
    question: string;
    answer: string;
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt?: string;
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
}