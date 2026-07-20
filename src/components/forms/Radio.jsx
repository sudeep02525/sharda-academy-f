"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Radio = forwardRef(({ 
  className, 
  label, 
  error, 
  id,
  required,
  ...props 
}, ref) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        id={id}
        type="radio"
        className={cn(
          "peer h-5 w-5 appearance-none rounded-full border border-border bg-card checked:border-4 checked:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm cursor-pointer",
          error && "border-error",
          className
        )}
        ref={ref}
        {...props}
      />
      {label && (
        <Label htmlFor={id} required={required} className="cursor-pointer font-medium">
          {label}
        </Label>
      )}
    </div>
  );
});

Radio.displayName = "Radio";

export { Radio };
