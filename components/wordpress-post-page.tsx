"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, ArrowLeft, Share2, BookOpen, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WordPressPost } from "@/lib/wordpress-api";
import { EnhancedWordPressContent } from "@/components/enhanced-wordpress-content";

interface WordPressPostPageProps {
  post: WordPressPost;
}

export function WordPressPostPage({ post }: WordPressPostPageProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  
  const author = post._embedded?.author?.[0];
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const tags = post._embedded?.["wp:term"]?.[1] || [];
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric",
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const sharePost = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title.rendered,
          text: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{
          scaleX: readingProgress / 100,
          transformOrigin: "0%",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: readingProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Header Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={sharePost}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="container py-8">
        <div className="mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-8 space-y-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 3).map((category) => (
                  <Badge key={category.id} variant="secondary" className="rounded-full">
                    {category.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 
              className="text-4xl font-bold tracking-tight lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* Excerpt */}
            {post.excerpt.rendered && (
              <div 
                className="text-xl text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {/* Author */}
              {author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>

              {/* Reading Time */}
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{estimateReadingTime(post.content.rendered)} min read</span>
              </div>

              {/* Word Count */}
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length} words</span>
              </div>
            </div>

            <Separator />
          </header>

          {/* Article Content - Enhanced WordPress formatting that preserves exact WordPress styling */}
          <div className="mb-8">
            <EnhancedWordPressContent 
              content={post.content.rendered}
              post={post}
              className="prose prose-lg max-w-none"
            />
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-8">
              <Separator className="mb-6" />
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag.id} variant="outline" className="rounded-full">
                      #{tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Author Bio */}
          {author && (
            <div className="border rounded-lg p-6 bg-muted/30 mb-8">
              <div className="flex items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{author.name}</h3>
                  <p className="text-muted-foreground">
                    Content creator and developer sharing insights about Flutter development and mobile app creation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Posts
                </Link>
              </Button>
              <Button onClick={sharePost}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
