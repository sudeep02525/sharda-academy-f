"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Label = forwardRef(({ className, children, required = false, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-heading",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-accent ml-1">*</span>}
    </label>
  );
});

Label.displayName = "Label";

export { Label };
