"use client";

import { sendGAEvent } from "@next/third-parties/google";

/**
 * Track GA4 events with error handling
 * @param name - Event name (e.g., 'generate_lead', 'page_view', 'click')
 * @param params - Optional event parameters
 */
export function track(name: string, params?: Record<string, any>) {
  try {
    sendGAEvent(name as any, params || {});
  } catch (error) {
    // Silently fail in development/production to prevent breaking the UI
    if (process.env.NODE_ENV === "development") {
      console.warn("GA4 tracking error:", error);
    }
  }
}
