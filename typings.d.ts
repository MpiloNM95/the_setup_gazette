
type Article = {
  author: string | null;
  categroy: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limmit: Int;
  offset: Int;
  total: Int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";