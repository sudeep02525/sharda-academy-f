"use client";

import { cn } from "@/lib/utils";

export function LoadingSpinner({ className, size = "md", color = "primary" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const colors = {
    primary: "border-primary border-r-transparent",
    white: "border-white dark:border-border border-r-transparent",
    accent: "border-accent border-r-transparent",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full",
        sizes[size],
        colors[color],
        className
      )}
    />
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <LoadingSpinner size="lg" />
    </div>
  );
}

export function SectionLoader({ className }) {
  return (
    <div className={cn("w-full py-20 flex justify-center items-center", className)}>
      <LoadingSpinner size="md" />
    </div>
  );
}
