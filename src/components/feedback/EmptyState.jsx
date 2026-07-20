"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Fade } from "@/components/animations/Fade";

export function EmptyState({ 
  title, 
  description, 
  icon: Icon, 
  actionLabel, 
  onAction,
  className 
}) {
  return (
    <Fade direction="up" className="w-full flex justify-center py-16">
      <div className={cn("flex flex-col items-center justify-center text-center max-w-md w-full p-8 rounded-2xl border border-dashed border-border bg-card/50", className)}>
        {Icon && (
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Icon className="w-8 h-8 opacity-80" />
          </div>
        )}
        <h3 className="text-xl font-bold text-heading mb-2">{title}</h3>
        <p className="text-paragraph text-sm mb-6">{description}</p>
        
        {actionLabel && onAction && (
          <Button onClick={onAction} variant="outline">
            {actionLabel}
          </Button>
        )}
      </div>
    </Fade>
  );
}
