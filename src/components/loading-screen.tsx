"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading after 1.5 seconds (reduced from 2s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
    >
      {/* Static background gradient - NO animation for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-2xl" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo/text - Simplified animation - Fixed text clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent pb-2"
          style={{ lineHeight: '1.2' }}
        >
          Phung&apos;s Portfolio
        </motion.h1>

        {/* Simple dots loader - Reduced animation complexity */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          ))}
        </div>

        {/* Progress bar - Faster animation */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          />
        </div>

        {/* Loading text - Simplified */}
        <p className="text-gray-400 text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </motion.div>
  );
}
