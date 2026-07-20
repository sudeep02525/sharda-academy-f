"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";

const Switch = forwardRef(({ 
  className, 
  label, 
  id,
  ...props 
}, ref) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative flex items-center">
        <input
          id={id}
          type="checkbox"
          className={cn(
            "peer h-6 w-11 appearance-none rounded-full border-2 border-transparent bg-muted transition-colors checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white dark:bg-surface shadow-sm ring-0 transition-transform peer-checked:translate-x-5 pointer-events-none" />
      </div>
      {label && (
        <Label htmlFor={id} className="cursor-pointer font-medium">
          {label}
        </Label>
      )}
    </div>
  );
});

Switch.displayName = "Switch";

export { Switch };
