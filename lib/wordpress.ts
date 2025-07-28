// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`

import type {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
  WordPressAPIError as WordPressAPIErrorType,
} from "./wordpress.d";

const WORDPRESS_API_URL =
  process.env.WORDPRESS_URL || "https://your-wordpress-site.com/wp-json/wp/v2";

class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "WordPressAPIError";
  }
}

const defaultFetchOptions = {
  next: {
    tags: ["wordpress"],
    revalidate: 3600, // 1 hour cache
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function fetchAPI<T>(endpoint: string, options = {}): Promise<T> {
  // If endpoint is a full URL, use it directly
  let url: string;
  if (/^https?:\/\//.test(endpoint)) {
    url = endpoint;
  } else {
    // Ensure no double slashes
    url = `${WORDPRESS_API_URL.replace(/\/$/, "")}${
      endpoint.startsWith("/") ? endpoint : `/${endpoint}`
    }`;
  }
  const response = await fetch(url, {
    ...defaultFetchOptions,
    ...options,
  });

  if (!response.ok) {
    throw new WordPressAPIError(
      `WordPress API Error: ${response.statusText}`,
      response.status,
      endpoint
    );
  }

  return response.json();
}

// Posts
export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
  search?: string;
  page?: number;
  per_page?: number;
}): Promise<Post[]> {
  const params = new URLSearchParams();
  if (filterParams?.author) params.append("author", filterParams.author);
  if (filterParams?.tag) params.append("tags", filterParams.tag);
  if (filterParams?.category)
    params.append("categories", filterParams.category);
  if (filterParams?.search) params.append("search", filterParams.search);
  if (filterParams?.page) params.append("page", filterParams.page.toString());
  if (filterParams?.per_page)
    params.append("per_page", filterParams.per_page.toString());

  params.append("_embed", "1");

  return fetchAPI<Post[]>(`/posts?${params.toString()}`);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const posts = await fetchAPI<Post[]>(`/posts?slug=${slug}&_embed=1`);
  if (!posts.length) {
    throw new WordPressAPIError(
      `Post not found: ${slug}`,
      404,
      `/posts?slug=${slug}`
    );
  }
  return posts[0];
}

export async function getPostById(id: number): Promise<Post> {
  return fetchAPI<Post>(`/posts/${id}?_embed=1`);
}

// Categories
export async function getAllCategories(): Promise<Category[]> {
  return fetchAPI<Category[]>("/categories");
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const categories = await fetchAPI<Category[]>(`/categories?slug=${slug}`);
  if (!categories.length) {
    throw new WordPressAPIError(
      `Category not found: ${slug}`,
      404,
      `/categories?slug=${slug}`
    );
  }
  return categories[0];
}

export async function getCategoryById(id: number): Promise<Category> {
  return fetchAPI<Category>(`/categories/${id}`);
}

// Tags
export async function getAllTags(): Promise<Tag[]> {
  return fetchAPI<Tag[]>("/tags");
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const tags = await fetchAPI<Tag[]>(`/tags?slug=${slug}`);
  if (!tags.length) {
    throw new WordPressAPIError(
      `Tag not found: ${slug}`,
      404,
      `/tags?slug=${slug}`
    );
  }
  return tags[0];
}

export async function getTagById(id: number): Promise<Tag> {
  return fetchAPI<Tag>(`/tags/${id}`);
}

// Authors
export async function getAllAuthors(): Promise<Author[]> {
  return fetchAPI<Author[]>("/users");
}

export async function getAuthorById(id: number): Promise<Author> {
  return fetchAPI<Author>(`/users/${id}`);
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const authors = await fetchAPI<Author[]>(`/users?slug=${slug}`);
  if (!authors.length) {
    throw new WordPressAPIError(
      `Author not found: ${slug}`,
      404,
      `/users?slug=${slug}`
    );
  }
  return authors[0];
}

// Media
export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  return fetchAPI<FeaturedMedia>(`/media/${id}`);
}

// Pages
export async function getAllPages(): Promise<Page[]> {
  return fetchAPI<Page[]>("/pages?_embed=1");
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const pages = await fetchAPI<Page[]>(`/pages?slug=${slug}&_embed=1`);
  if (!pages.length) {
    throw new WordPressAPIError(
      `Page not found: ${slug}`,
      404,
      `/pages?slug=${slug}`
    );
  }
  return pages[0];
}

export async function getPageById(id: number): Promise<Page> {
  return fetchAPI<Page>(`/pages/${id}?_embed=1`);
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { categories: categoryId });
  return fetchAPI<Post[]>(`/posts?categories=${categoryId}`);
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tagId });
  return fetchAPI<Post[]>(`/posts?tags=${tagId}`);
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags", { post: postId });
  return fetchAPI<Tag[]>(`/tags?post=${postId}`);
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { author: authorId });
  return fetchAPI<Post[]>(`/posts?author=${authorId}`);
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { author: author.id });
  return fetchAPI<Post[]>(`/posts?author=${author.id}`);
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  const url = getUrl("/wp-json/wp/v2/posts", { categories: category.id });
  return fetchAPI<Post[]>(`/posts?categories=${category.id}`);
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tag.id });
  return fetchAPI<Post[]>(`/posts?tags=${tag.id}`);
}

export async function searchCategories(query: string): Promise<Category[]> {
  const url = getUrl("/wp-json/wp/v2/categories", {
    search: query,
    per_page: 100,
  });
  return fetchAPI<Category[]>(`/categories?search=${query}`);
}

export async function searchTags(query: string): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags", {
    search: query,
    per_page: 100,
  });
  return fetchAPI<Tag[]>(`/tags?search=${query}`);
}

export async function searchAuthors(query: string): Promise<Author[]> {
  const url = getUrl("/wp-json/wp/v2/users", {
    search: query,
    per_page: 100,
  });
  return fetchAPI<Author[]>(`/users?search=${query}`);
}

export { WordPressAPIError };

function getUrl(endpoint: string, params: Record<string, any>): string {
  // Create URL parameters from the params object
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  // Build the full URL
  // If endpoint is a full URL, use it directly
  const baseUrl = /^https?:\/\//.test(endpoint)
    ? endpoint
    : `${WORDPRESS_API_URL.replace(/\/$/, "")}${
        endpoint.startsWith("/") ? endpoint : `/${endpoint}`
      }`;

  const queryString = queryParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
