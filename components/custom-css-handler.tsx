"use client";

import { useEffect } from "react";
import { WordPressPost } from "@/lib/wordpress-api";

interface CustomCSSHandlerProps {
  post: WordPressPost;
  containerClass?: string;
}

export function CustomCSSHandler({ post, containerClass = "wordpress-custom-content" }: CustomCSSHandlerProps) {
  useEffect(() => {
    // Remove any existing custom styles for this post
    const existingStyle = document.querySelector(`#custom-css-${post.id}`);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create custom CSS from WordPress meta data
    let customCSS = "";

    // Add custom CSS from meta field
    if (post.meta?.custom_css) {
      customCSS += post.meta.custom_css;
    }

    // Add custom styles for specific elements
    if (post.meta?.custom_styles) {
      const styles = post.meta.custom_styles;
      const postSelector = `.${containerClass}[data-post-id="${post.id}"]`;

      if (styles.h1) {
        customCSS += `${postSelector} h1 { ${styles.h1} }\n`;
      }
      if (styles.h2) {
        customCSS += `${postSelector} h2 { ${styles.h2} }\n`;
      }
      if (styles.h3) {
        customCSS += `${postSelector} h3 { ${styles.h3} }\n`;
      }
      if (styles.h4) {
        customCSS += `${postSelector} h4 { ${styles.h4} }\n`;
      }
      if (styles.h5) {
        customCSS += `${postSelector} h5 { ${styles.h5} }\n`;
      }
      if (styles.h6) {
        customCSS += `${postSelector} h6 { ${styles.h6} }\n`;
      }
      if (styles.p) {
        customCSS += `${postSelector} p { ${styles.p} }\n`;
      }
      if (styles.a) {
        customCSS += `${postSelector} a { ${styles.a} }\n`;
      }
      if (styles.blockquote) {
        customCSS += `${postSelector} blockquote { ${styles.blockquote} }\n`;
      }
      if (styles.table) {
        customCSS += `${postSelector} table { ${styles.table} }\n`;
      }
      if (styles.img) {
        customCSS += `${postSelector} img { ${styles.img} }\n`;
      }
      if (styles.code) {
        customCSS += `${postSelector} code { ${styles.code} }\n`;
      }
      if (styles.pre) {
        customCSS += `${postSelector} pre { ${styles.pre} }\n`;
      }
      if (styles.ul) {
        customCSS += `${postSelector} ul { ${styles.ul} }\n`;
      }
      if (styles.ol) {
        customCSS += `${postSelector} ol { ${styles.ol} }\n`;
      }
      if (styles.li) {
        customCSS += `${postSelector} li { ${styles.li} }\n`;
      }
    }

    // Add theme colors as CSS variables
    if (post.meta?.theme_colors) {
      const colors = post.meta.theme_colors;
      const postSelector = `.${containerClass}[data-post-id="${post.id}"]`;
      
      let colorVars = "";
      if (colors.primary) colorVars += `--post-primary: ${colors.primary}; `;
      if (colors.secondary) colorVars += `--post-secondary: ${colors.secondary}; `;
      if (colors.accent) colorVars += `--post-accent: ${colors.accent}; `;
      if (colors.background) colorVars += `--post-background: ${colors.background}; `;
      if (colors.text) colorVars += `--post-text: ${colors.text}; `;
      
      if (colorVars) {
        customCSS += `${postSelector} { ${colorVars} }\n`;
      }
    }

    // Extract and apply inline styles from content
    const extractInlineStyles = () => {
      const container = document.querySelector(`.${containerClass}[data-post-id="${post.id}"]`);
      if (!container) return;

      // Process elements with style attributes
      const styledElements = container.querySelectorAll('[style]');
      styledElements.forEach((element, index) => {
        const styles = (element as HTMLElement).getAttribute('style');
        if (styles) {
          // Create a unique class for this styled element
          const uniqueClass = `wp-custom-style-${post.id}-${index}`;
          element.classList.add(uniqueClass);
          
          // Add the styles to our custom CSS
          customCSS += `.${uniqueClass} { ${styles} }\n`;
          
          // Remove the inline style to avoid conflicts
          (element as HTMLElement).removeAttribute('style');
        }
      });

      // Process WordPress custom classes
      const classElements = container.querySelectorAll('[class*="wp-"], [class*="has-"]');
      classElements.forEach(element => {
        const classes = element.classList;
        classes.forEach(className => {
          if (className.startsWith('has-') && className.includes('color')) {
            // Handle WordPress color classes
            if (className.includes('background-color')) {
              const colorName = className.replace('has-', '').replace('-background-color', '');
              customCSS += `.${containerClass}[data-post-id="${post.id}"] .${className} { background-color: var(--wp-${colorName}, inherit); }\n`;
            } else if (className.includes('color')) {
              const colorName = className.replace('has-', '').replace('-color', '');
              customCSS += `.${containerClass}[data-post-id="${post.id}"] .${className} { color: var(--wp-${colorName}, inherit); }\n`;
            }
          }
          
          if (className.startsWith('has-') && className.includes('font-size')) {
            // Handle WordPress font size classes
            const sizeMap: { [key: string]: string } = {
              'has-small-font-size': '0.875rem',
              'has-medium-font-size': '1.125rem',
              'has-large-font-size': '1.5rem',
              'has-x-large-font-size': '2rem',
              'has-huge-font-size': '2.5rem'
            };
            
            if (sizeMap[className]) {
              customCSS += `.${containerClass}[data-post-id="${post.id}"] .${className} { font-size: ${sizeMap[className]}; }\n`;
            }
          }
        });
      });
    };

    // Apply custom CSS if we have any
    if (customCSS.trim()) {
      const styleElement = document.createElement('style');
      styleElement.id = `custom-css-${post.id}`;
      styleElement.textContent = customCSS;
      document.head.appendChild(styleElement);
    }

    // Extract inline styles after a short delay to ensure content is rendered
    const timer = setTimeout(extractInlineStyles, 200);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      const styleElement = document.querySelector(`#custom-css-${post.id}`);
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [post.id, post.meta, containerClass]);

  return null; // This is a utility component that doesn't render anything
}

// Utility function to extract custom styles from WordPress content
export function extractWordPressStyles(content: string): {
  customCSS: string;
  cleanContent: string;
} {
  let customCSS = "";
  let cleanContent = content;

  // Extract <style> tags from content
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  
  while ((match = styleRegex.exec(content)) !== null) {
    customCSS += match[1] + "\n";
    cleanContent = cleanContent.replace(match[0], "");
  }

  // Extract CSS from WordPress blocks data attributes
  const blockRegex = /data-style="([^"]+)"/gi;
  while ((match = blockRegex.exec(content)) !== null) {
    // Decode the style attribute
    const decodedStyle = decodeURIComponent(match[1]);
    customCSS += decodedStyle + "\n";
  }

  return {
    customCSS: customCSS.trim(),
    cleanContent: cleanContent.trim()
  };
}

// Utility function to apply WordPress color palette
export function applyWordPressColorPalette(postId: number, colors: { [key: string]: string }) {
  let colorCSS = "";
  const rootSelector = `.wordpress-custom-content[data-post-id="${postId}"]`;
  
  Object.entries(colors).forEach(([name, value]) => {
    colorCSS += `${rootSelector} { --wp-${name}: ${value}; }\n`;
  });
  
  return colorCSS;
}
