import { notFound } from "next/navigation";
import { Metadata } from "next";
import { WordPressPostPage } from "@/components/wordpress-post-page";
import { getPostBySlug, type WordPressPost } from "@/lib/wordpress-api";

interface BlogPostPageProps {
     params: Promise<{
          slug: string;
     }>;
}

// Fetch blog post data from WordPress API
async function getBlogPost(slug: string): Promise<WordPressPost | null> {
     console.log(`Attempting to fetch blog post with slug: "${slug}"`);

     try {
          const normalizedSlug = slug.trim().toLowerCase();
          console.log(`Normalized slug: "${normalizedSlug}"`);

          const post = await getPostBySlug(normalizedSlug);
          
          if (!post) {
               console.log(`No post found for slug "${normalizedSlug}"`);
               return null;
          }

          console.log(`Successfully retrieved post data for slug "${normalizedSlug}"`);
          return post;
     } catch (error) {
          console.error(`Error fetching blog post with slug "${slug}":`, error);

          if (error instanceof Error) {
               console.error(`Error name: ${error.name}`);
               console.error(`Error message: ${error.message}`);
               console.error(`Error stack: ${error.stack}`);
          }

          return null;
     }
}

export async function generateMetadata({
     params,
}: BlogPostPageProps): Promise<Metadata> {
     const resolvedParams = await params;
     const post = await getBlogPost(resolvedParams.slug);

     if (!post) {
          return {
               title: "Blog Post Not Found",
               description: "The requested blog post could not be found.",
          };
     }

     const cleanDescription = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim() || 
                              post.title.rendered;
     const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || '';

     return {
          title: `${post.title.rendered} | Expert Flutter Development Insights`,
          description: cleanDescription,
          keywords: [
               "Flutter",
               "Dart", 
               "cross-platform development",
               "mobile development",
               "app development",
               "UI frameworks",
          ],
          openGraph: {
               title: post.title.rendered,
               description: cleanDescription,
               type: "article",
               publishedTime: post.date,
               authors: [post._embedded?.author?.[0]?.name || "Unknown Author"],
               images: featuredImage ? [
                    {
                         url: featuredImage,
                         width: 1200,
                         height: 630,
                         alt: post.title.rendered,
                    },
               ] : [],
               siteName: "Hire Flutter Developers",
               locale: "en_US",
          },
          twitter: {
               card: "summary_large_image",
               title: post.title.rendered,
               description: cleanDescription,
               images: featuredImage ? [featuredImage] : [],
          },
          alternates: {
               canonical: `https://www.hireflutterdeveloper.dev/blog/${post.slug}`,
          },
     };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
     const resolvedParams = await params;
     const post = await getBlogPost(resolvedParams.slug);

     if (!post) {
          notFound();
     }

     return <WordPressPostPage post={post} />;
}
