export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  published: boolean;
  isTrending: boolean; // New field for trending status
  tags: string[];
  comments: Comment[]; // Add comments array
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
}