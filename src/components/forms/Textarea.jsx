"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Textarea = forwardRef(({ 
  className, 
  label, 
  error, 
  success, 
  helperText, 
  required = false,
  id,
  rows = 4,
  ...props 
}, ref) => {
  const stateStyles = error
    ? "border-error focus-visible:ring-error"
    : success
    ? "border-success focus-visible:ring-success"
    : "border-border focus-visible:ring-primary";

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <Label htmlFor={id} required={required}>{label}</Label>}
      
      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          className={cn(
            "flex w-full rounded-lg border bg-card px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm resize-y",
            stateStyles,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>

      {error && <p className="text-sm text-error font-medium">{error}</p>}
      {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
    </div>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
