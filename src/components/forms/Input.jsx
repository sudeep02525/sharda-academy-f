"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Input = forwardRef(({ 
  className, 
  type = "text", 
  label, 
  error, 
  success, 
  helperText, 
  prefixIcon, 
  suffixIcon,
  required = false,
  id,
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
        {prefixIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {prefixIcon}
          </div>
        )}
        
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border bg-card px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm",
            prefixIcon && "pl-10",
            suffixIcon && "pr-10",
            stateStyles,
            className
          )}
          ref={ref}
          {...props}
        />

        {suffixIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {suffixIcon}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-error font-medium">{error}</p>}
      {helperText && !error && <p className="text-sm text-muted-foreground">{helperText}</p>}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
