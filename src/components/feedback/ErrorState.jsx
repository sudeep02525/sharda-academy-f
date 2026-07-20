"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Fade } from "@/components/animations/Fade";

export function ErrorState({ 
  title = "Something went wrong", 
  description = "We encountered an unexpected error. Please try again later.",
  errorCode, 
  onRetry,
  className 
}) {
  return (
    <Fade direction="up" className="w-full flex justify-center py-16">
      <div className={cn("flex flex-col items-center justify-center text-center max-w-md w-full p-8 rounded-2xl border border-error/20 bg-error/5", className)}>
        <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center text-error mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        
        {errorCode && (
          <span className="text-xs font-bold text-error uppercase tracking-wider mb-2">Error {errorCode}</span>
        )}
        <h3 className="text-xl font-bold text-error mb-2">{title}</h3>
        <p className="text-error/80 text-sm mb-6">{description}</p>
        
        {onRetry && (
          <Button onClick={onRetry} className="bg-error hover:bg-error/90 text-white">
            Try Again
          </Button>
        )}
      </div>
    </Fade>
  );
}
