"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Checkbox = forwardRef(({ 
  className, 
  label, 
  error, 
  helperText, 
  required = false,
  id,
  ...props 
}, ref) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center justify-center">
          <input
            id={id}
            type="checkbox"
            className={cn(
              "peer h-5 w-5 appearance-none rounded border border-border bg-card checked:bg-primary checked:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm cursor-pointer",
              error && "border-error",
              className
            )}
            ref={ref}
            {...props}
          />
          <svg
            className="absolute h-3.5 w-3.5 pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        {label && (
          <Label htmlFor={id} required={required} className="cursor-pointer font-medium">
            {label}
          </Label>
        )}
      </div>
      
      {error && <p className="text-sm text-error font-medium ml-8">{error}</p>}
      {helperText && !error && <p className="text-sm text-muted-foreground ml-8">{helperText}</p>}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
