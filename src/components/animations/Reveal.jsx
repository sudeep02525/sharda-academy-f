"use client";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  width = "fit-content",
}) {
  return (
    <div className={cn("relative", className)} style={{ width }}>
      {children}
    </div>
  );
}
