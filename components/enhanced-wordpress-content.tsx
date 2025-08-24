"use client";

import { useEffect } from "react";
import { WordPressPost } from "@/lib/wordpress-api";
import { CustomCSSHandler } from "./custom-css-handler";

interface EnhancedWordPressContentProps {
  content: string;
  post?: WordPressPost;
  className?: string;
}

export function EnhancedWordPressContent({ 
  content, 
  post, 
  className = "" 
}: EnhancedWordPressContentProps) {
  const containerClass = "enhanced-wordpress-content";
  const postId = post?.id || 0;

  useEffect(() => {
    // Enhanced WordPress content processing
    const processWordPressContent = () => {
      const container = document.querySelector(`.${containerClass}[data-post-id="${postId}"]`);
      if (!container) return;

      // Process tables with WordPress styling - Make tables properly formatted
      const tables = container.querySelectorAll('table');
      tables.forEach((table) => {
        // Wrap table in responsive container
        if (!table.parentElement?.classList.contains('table-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'table-wrapper overflow-x-auto my-8 border border-gray-200 rounded-lg shadow-sm bg-white';
          table.parentNode?.insertBefore(wrapper, table);
          wrapper.appendChild(table);
        }

        // Apply WordPress table styles
        table.className = 'w-full border-collapse bg-white text-sm';
        table.style.borderSpacing = '0';
        
        // Style headers with WordPress-like appearance
        const headers = table.querySelectorAll('th');
        headers.forEach(th => {
          th.className = 'bg-gray-50 border-b-2 border-gray-200 px-6 py-4 text-left font-semibold text-gray-900 uppercase text-xs tracking-wider';
          th.style.fontWeight = '600';
        });
        
        // Style cells with proper spacing and borders
        const cells = table.querySelectorAll('td');
        cells.forEach(td => {
          td.className = 'border-b border-gray-200 px-6 py-4 text-gray-700 whitespace-nowrap';
        });
        
        // Add hover effects to rows
        const rows = table.querySelectorAll('tbody tr, tr');
        rows.forEach((row, rowIndex) => {
          const rowElement = row as HTMLTableRowElement;
          if (rowElement.querySelector('td')) {
            rowElement.className = 'hover:bg-gray-50 transition-colors duration-150';
            // Alternate row colors for better readability
            if (rowIndex % 2 === 0) {
              rowElement.style.backgroundColor = '#fafafa';
            }
          }
        });
      });

      // Process headings with proper WordPress styling
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach(heading => {
        const level = heading.tagName.toLowerCase();
        const hasCustomStyle = heading.getAttribute('style') || post?.meta?.custom_styles?.[level as keyof typeof post.meta.custom_styles];
        
        if (!hasCustomStyle) {
          const baseClasses = 'font-bold text-gray-900 leading-tight';
          
          switch (level) {
            case 'h1':
              heading.className = `${baseClasses} text-3xl lg:text-4xl mt-12 mb-6 border-b-2 border-blue-200 pb-3`;
              break;
            case 'h2':
              heading.className = `${baseClasses} text-2xl lg:text-3xl mt-10 mb-5 text-blue-800`;
              break;
            case 'h3':
              heading.className = `${baseClasses} text-xl lg:text-2xl mt-8 mb-4 text-gray-800`;
              break;
            case 'h4':
              heading.className = `${baseClasses} text-lg lg:text-xl mt-6 mb-3 text-gray-700`;
              break;
            case 'h5':
              heading.className = `${baseClasses} text-base lg:text-lg mt-6 mb-3 text-gray-700`;
              break;
            case 'h6':
              heading.className = `${baseClasses} text-sm lg:text-base mt-4 mb-2 text-gray-600`;
              break;
          }
        }
      });

      // Process paragraphs with proper spacing and typography
      const paragraphs = container.querySelectorAll('p');
      paragraphs.forEach(p => {
        if (!p.getAttribute('style') && !post?.meta?.custom_styles?.p) {
          p.className = 'text-gray-700 leading-relaxed mb-6 text-base';
        }
      });

      // Process links with WordPress-style highlighting
      const links = container.querySelectorAll('a');
      links.forEach(link => {
        const linkEl = link as HTMLAnchorElement;
        
        if (!linkEl.getAttribute('style') && !post?.meta?.custom_styles?.a) {
          linkEl.className = 'text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200';
        }
        
        // Add external link indicator
        if (linkEl.hostname && linkEl.hostname !== window.location.hostname) {
          if (!linkEl.querySelector('.external-icon')) {
            const icon = document.createElement('span');
            icon.className = 'external-icon ml-1 text-xs opacity-70';
            icon.innerHTML = '↗';
            linkEl.appendChild(icon);
          }
        }
      });

      // Process images with WordPress-style presentation
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        const imageEl = img as HTMLImageElement;
        
        if (!imageEl.getAttribute('style') && !post?.meta?.custom_styles?.img) {
          imageEl.className = 'rounded-lg shadow-md my-8 max-w-full h-auto block mx-auto';
        }
      });

      // Process lists with proper WordPress formatting
      const lists = container.querySelectorAll('ul, ol');
      lists.forEach(list => {
        if (!list.getAttribute('style')) {
          if (list.tagName === 'UL' && !post?.meta?.custom_styles?.ul) {
            list.className = 'my-6 pl-6 space-y-2';
            // Add custom bullet points
            const items = list.querySelectorAll('li');
            items.forEach(item => {
              if (!item.getAttribute('style')) {
                item.className = 'text-gray-700 leading-relaxed relative';
                item.style.listStyleType = 'disc';
              }
            });
          } else if (list.tagName === 'OL' && !post?.meta?.custom_styles?.ol) {
            list.className = 'my-6 pl-6 space-y-2 list-decimal';
            const items = list.querySelectorAll('li');
            items.forEach(item => {
              if (!item.getAttribute('style')) {
                item.className = 'text-gray-700 leading-relaxed';
              }
            });
          }
        }
      });

      // Process blockquotes with WordPress styling
      const quotes = container.querySelectorAll('blockquote, .wp-block-quote');
      quotes.forEach(quote => {
        if (!quote.getAttribute('style') && !post?.meta?.custom_styles?.blockquote) {
          quote.className = 'border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 my-8 italic text-gray-700 rounded-r-lg';
        }
      });

      // Process code blocks
      const preBlocks = container.querySelectorAll('pre');
      preBlocks.forEach(pre => {
        if (!pre.getAttribute('style') && !post?.meta?.custom_styles?.pre) {
          pre.className = 'bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto my-6 text-sm';
        }
        const code = pre.querySelector('code');
        if (code && !code.getAttribute('style') && !post?.meta?.custom_styles?.code) {
          code.className = 'font-mono';
        }
      });

      // Process inline code
      const inlineCodes = container.querySelectorAll('code');
      inlineCodes.forEach(code => {
        if (!code.closest('pre') && !code.getAttribute('style') && !post?.meta?.custom_styles?.code) {
          code.className = 'bg-gray-100 border border-gray-300 px-2 py-1 rounded text-sm font-mono text-gray-800';
        }
      });

      // Process WordPress-specific elements
      
      // Process strong/bold text
      const strongElements = container.querySelectorAll('strong, b');
      strongElements.forEach(strong => {
        if (!strong.getAttribute('style')) {
          strong.className = 'font-semibold text-gray-900';
        }
      });

      // Process em/italic text
      const emElements = container.querySelectorAll('em, i');
      emElements.forEach(em => {
        if (!em.getAttribute('style')) {
          em.className = 'italic text-gray-700';
        }
      });

      // Add spacing between sections
      const allElements = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, table, pre, hr');
      allElements.forEach((element, index) => {
        if (index > 0) {
          const prevElement = allElements[index - 1];
          const currentTag = element.tagName.toLowerCase();
          const prevTag = prevElement.tagName.toLowerCase();
          
          // Add extra spacing between different element types
          if (currentTag.startsWith('h') && !prevTag.startsWith('h')) {
            (element as HTMLElement).style.marginTop = '2rem';
          }
        }
      });
    };

    // Run processing after content is rendered
    const timer = setTimeout(processWordPressContent, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, [content, postId, post?.meta]);

  return (
    <>
      {/* Custom CSS Handler for WordPress meta styles */}
      {post && <CustomCSSHandler post={post} containerClass={containerClass} />}
      
      <div 
        className={`${containerClass} prose prose-lg max-w-none ${className}`}
        data-post-id={postId}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          lineHeight: '1.7',
          fontSize: '16px',
          color: '#374151'
        }}
      />
    </>
  );
}
