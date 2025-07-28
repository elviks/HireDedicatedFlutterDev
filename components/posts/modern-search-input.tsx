"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/use-debounce";

interface ModernSearchInputProps {
  defaultValue?: string;
  placeholder?: string;
}

export function ModernSearchInput({
  defaultValue = "",
  placeholder = "Search articles...",
}: ModernSearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearchTerm) {
      params.set("search", debouncedSearchTerm);
    } else {
      params.delete("search");
    }

    // Reset page when searching
    params.delete("page");

    const newUrl = params.toString() ? `?${params.toString()}` : "";
    router.push(`/blog${newUrl}`);
  }, [debouncedSearchTerm, router, searchParams]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md"
    >
      {/* Search Container */}
      <div className="relative">
        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 pl-12 pr-10 rounded-xl bg-dark-surface/50 border backdrop-blur-sm text-white placeholder-slate-400 transition-all duration-300 focus:outline-none ${
              isFocused
                ? "border-glow-primary/50 shadow-glow-sm"
                : "border-white/10 hover:border-white/20"
            }`}
          />

          {/* Search Icon */}
          <motion.div
            animate={{
              scale: isFocused ? 1.1 : 1,
              color: isFocused ? "#38bdf8" : "#94a3b8",
            }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <Search className="w-5 h-5" />
          </motion.div>

          {/* Clear Button */}
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-glow-primary/20 via-glow-primary/10 to-glow-primary/20 blur-xl pointer-events-none"
        />
      </div>

      {/* Search Suggestions/Results Count */}
      {searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute top-full left-0 right-0 mt-2 p-3 rounded-lg bg-dark-surface/80 backdrop-blur-sm border border-white/10 text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span>Searching for "{searchTerm}"</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
