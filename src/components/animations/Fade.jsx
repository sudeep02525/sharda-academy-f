"use client";

import { cn } from "@/lib/utils";

export function Fade({
  children,
  className,
}) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
}
