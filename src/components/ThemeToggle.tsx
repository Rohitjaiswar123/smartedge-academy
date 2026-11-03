"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  size?: "sm" | "md";
  className?: string;
}

export default function ThemeToggle({ size = "md", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = theme === "dark";

  // Prevent layout shift during SSR / hydration
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-label="Theme toggle loading"
        className={`rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/60 opacity-60 transition ${
          size === "sm" ? "w-9 h-9 p-2" : "w-10 h-10 p-2.5"
        } ${className}`}
      >
        <span className="sr-only">Toggle theme</span>
        <div className="w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-label={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      className={`relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 ${
        isDark
          ? "bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-amber-400 hover:text-amber-300 hover:border-amber-400/40 shadow-sm"
          : "bg-slate-100 hover:bg-slate-200/90 border border-slate-300/90 text-indigo-600 hover:text-indigo-700 hover:border-indigo-300 shadow-sm"
      } ${size === "sm" ? "w-9 h-9 p-2" : "w-10 h-10 p-2.5"} ${className}`}
    >
      <span className="sr-only">
        {isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      </span>

      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
