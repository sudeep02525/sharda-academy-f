"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Select = forwardRef(({ 
  className, 
  label, 
  options = [],
  error, 
  success, 
  helperText, 
  required = false,
  id,
  placeholder,
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
        <select
          id={id}
          className={cn(
            "flex h-11 w-full appearance-none rounded-lg border bg-card px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm cursor-pointer",
            stateStyles,
            className
          )}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom Caret */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>

      {error && <p className="text-sm text-error font-medium">{error}</p>}
      {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
    </div>
  );
});

Select.displayName = "Select";

export { Select };
