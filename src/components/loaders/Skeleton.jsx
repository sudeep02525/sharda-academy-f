"use client";

import { cn } from "@/lib/utils";

// Base Skeleton Primitive
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-muted/60 dark:bg-muted", className)}
      {...props}
    />
  );
}

// Complex Skeletons
export function CardSkeleton({ className }) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6 shadow-sm w-full", className)}>
      <Skeleton className="h-40 w-full mb-6 rounded-md" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="mt-6 flex gap-3">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export function NavbarSkeleton() {
  return (
    <div className="w-full h-16 border-b border-border bg-background flex items-center justify-between px-4 sm:px-8">
      <Skeleton className="h-8 w-32" />
      <div className="hidden md:flex gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-8 py-20">
      <div className="w-full lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start">
        <Skeleton className="h-8 w-40 rounded-full" />
        <Skeleton className="h-14 w-full max-w-md lg:max-w-xl" />
        <Skeleton className="h-14 w-3/4 max-w-sm lg:max-w-lg" />
        <Skeleton className="h-24 w-full max-w-lg mt-4" />
        <div className="flex gap-4 w-full justify-center lg:justify-start mt-6">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Skeleton className="h-[400px] w-full max-w-md rounded-2xl" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="w-full rounded-lg border border-border overflow-hidden">
      <div className="h-12 bg-muted/30 border-b border-border flex items-center px-4 gap-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-16 border-b border-border flex items-center px-4 gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-24 ml-auto" />
        </div>
      ))}
    </div>
  );
}
