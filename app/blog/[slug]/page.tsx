import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ModernBlogPostWrapper } from "@/components/modern-blog-post-wrapper";
import { getPostBySlug } from "@/lib/wordpress";

interface BlogPostPageProps {
     params: Promise<{
          slug: string;
     }>;
}

// This would typically come from your CMS or database
type BlogPost = {
     slug: string;
     title: string;
     description: string;
     content: string;
     publishedAt: string;
     author: string;
     image: string;
     tags: string[];
     category?: string;
     readingTime?: number;
};

// Fetch blog post data from WordPress API
async function getBlogPost(slug: string): Promise<BlogPost | null> {
     console.log(`Attempting to fetch blog post with slug: "${slug}"`);

     try {
          const normalizedSlug = slug.trim().toLowerCase();
          console.log(`Normalized slug: "${normalizedSlug}"`);

          const post = await getPostBySlug(normalizedSlug);
          console.log(
               `Successfully retrieved post data for slug "${normalizedSlug}"`
          );

          const featuredImageUrl =
               post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
          console.log(`Featured image URL: ${featuredImageUrl}`);

          const authorName =
               post._embedded?.["author"]?.[0]?.name || "Unknown Author";
          console.log(`Author name: ${authorName}`);

          const tags =
               post._embedded?.["wp:term"]?.[1]?.map((tag: any) => tag.name) ||
               [];
          console.log(`Tags: ${tags.join(", ")}`);

          const category =
               post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";
          console.log(`Category: ${category}`);

          const readingTime = Math.ceil(
               post.content.rendered.replace(/<[^>]*>/g, "").split(" ").length /
               200
          );

          return {
               slug: post.slug,
               title: post.title.rendered,
               description:
                    post.excerpt.rendered.replace(/<[^>]*>/g, "").trim() ||
                    post.title.rendered,
               content: post.content.rendered,
               publishedAt: post.date,
               author: authorName,
               image: featuredImageUrl,
               tags: tags,
               category: category,
               readingTime: readingTime,
          };
     } catch (error) {
          console.error(`Error fetching blog post with slug "${slug}":`, error);

          if (error instanceof Error) {
               console.error(`Error name: ${error.name}`);
               console.error(`Error message: ${error.message}`);
               console.error(`Error stack: ${error.stack}`);

               if (error.name === "WordPressAPIError") {
                    console.error(
                         `WordPress API Error - status: ${(error as any).status
                         }, endpoint: ${(error as any).endpoint}`
                    );
               }
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

     return {
          title: `${post.title} | Expert Flutter Development Insights`,
          description: post.description,
          keywords: [
               ...post.tags,
               "Flutter",
               "Dart",
               "cross-platform development",
               "mobile development",
               "app development",
               "UI frameworks",
          ],
          openGraph: {
               title: post.title,
               description: post.description,
               type: "article",
               publishedTime: post.publishedAt,
               authors: [post.author],
               tags: post.tags,
               images: [
                    {
                         url: post.image,
                         width: 1200,
                         height: 630,
                         alt: post.title,
                    },
               ],
               siteName: "Hire Flutter Developers",
               locale: "en_US",
          },
          twitter: {
               card: "summary_large_image",
               title: post.title,
               description: post.description,
               images: [post.image],
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

     return <ModernBlogPostWrapper post={post} />;
}
