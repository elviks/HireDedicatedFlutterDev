// WordPress API utility functions
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      slug: string;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

const API_BASE_URL = process.env.WORDPRESS_API_URL || 'https://hirededicatedflutterdeveloper.com/cms/wp-json/wp/v2';

class WordPressAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async fetchAPI(endpoint: string, params: Record<string, string> = {}): Promise<any> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    // Add parameters to URL
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    try {
      const response = await fetch(url.toString(), {
        next: { revalidate: 60 }, // Cache for 1 minute
      });

      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('WordPress API fetch error:', error);
      throw error;
    }
  }

  // Get all posts
  async getPosts(params: {
    per_page?: number;
    page?: number;
    categories?: string;
    tags?: string;
    search?: string;
    orderby?: 'date' | 'title' | 'menu_order';
    order?: 'asc' | 'desc';
  } = {}): Promise<WordPressPost[]> {
    const defaultParams = {
      per_page: '10',
      _embed: 'true',
      ...params,
    };

    // Convert all values to strings
    const stringParams: Record<string, string> = {};
    Object.entries(defaultParams).forEach(([key, value]) => {
      stringParams[key] = String(value);
    });

    return this.fetchAPI('/posts', stringParams);
  }

  // Get single post by slug
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const posts = await this.fetchAPI('/posts', {
        slug,
        _embed: 'true',
      });

      return posts.length > 0 ? posts[0] : null;
    } catch (error) {
      console.error(`Error fetching post with slug ${slug}:`, error);
      return null;
    }
  }

  // Get post by ID
  async getPostById(id: number): Promise<WordPressPost | null> {
    try {
      return await this.fetchAPI(`/posts/${id}`, {
        _embed: 'true',
      });
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
      return null;
    }
  }

  // Get categories
  async getCategories(): Promise<WordPressCategory[]> {
    return this.fetchAPI('/categories', {
      per_page: '100',
      hide_empty: 'true',
    });
  }

  // Get category by slug
  async getCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
    try {
      const categories = await this.fetchAPI('/categories', {
        slug,
      });

      return categories.length > 0 ? categories[0] : null;
    } catch (error) {
      console.error(`Error fetching category with slug ${slug}:`, error);
      return null;
    }
  }

  // Get posts by category
  async getPostsByCategory(categoryId: number, params: {
    per_page?: number;
    page?: number;
  } = {}): Promise<WordPressPost[]> {
    return this.getPosts({
      ...params,
      categories: categoryId.toString(),
    });
  }

  // Search posts
  async searchPosts(query: string, params: {
    per_page?: number;
    page?: number;
  } = {}): Promise<WordPressPost[]> {
    return this.getPosts({
      ...params,
      search: query,
    });
  }

  // Get featured posts (you can customize this based on your needs)
  async getFeaturedPosts(limit: number = 5): Promise<WordPressPost[]> {
    return this.getPosts({
      per_page: limit,
      orderby: 'date',
      order: 'desc',
    });
  }
}

// Create a singleton instance
const wordpressAPI = new WordPressAPI();

export default wordpressAPI;

// Helper functions for common operations
export const getAllPosts = (params?: Parameters<typeof wordpressAPI.getPosts>[0]) => 
  wordpressAPI.getPosts(params);

export const getPostBySlug = (slug: string) => 
  wordpressAPI.getPostBySlug(slug);

export const getPostById = (id: number) => 
  wordpressAPI.getPostById(id);

export const getCategories = () => 
  wordpressAPI.getCategories();

export const getCategoryBySlug = (slug: string) => 
  wordpressAPI.getCategoryBySlug(slug);

export const getPostsByCategory = (categoryId: number, params?: Parameters<typeof wordpressAPI.getPostsByCategory>[1]) => 
  wordpressAPI.getPostsByCategory(categoryId, params);

export const searchPosts = (query: string, params?: Parameters<typeof wordpressAPI.searchPosts>[1]) => 
  wordpressAPI.searchPosts(query, params);

export const getFeaturedPosts = (limit?: number) => 
  wordpressAPI.getFeaturedPosts(limit);
