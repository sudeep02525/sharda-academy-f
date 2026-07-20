import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Card = forwardRef(({ className, variant = "default", isHoverable = false, isLoading = false, isDisabled = false, children, ...props }, ref) => {
  const baseStyles = "rounded-lg overflow-hidden transition-all duration-300";
  
  const variants = {
    default: "bg-card text-foreground border border-border-color/30 shadow-sm",
    elevated: "bg-card text-foreground border border-white/60 dark:border-border/60 shadow-lg shadow-primary-deep/5",
    outline: "bg-transparent text-foreground border border-border-color",
    glass: "bg-white/60 dark:bg-surface/60 backdrop-blur-2xl text-foreground border border-white/50 dark:border-border/50 shadow-md",
    gradientAccent: "bg-card text-foreground shadow-sm relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-primary before:to-accent",
  };

  const hoverStyles = isHoverable && !isDisabled && !isLoading ? "hover:-translate-y-1 hover:shadow-lg" : "";
  const disabledStyles = isDisabled ? "opacity-50 pointer-events-none" : "";
  const loadingStyles = isLoading ? "animate-pulse" : "";

  return (
    <div 
      ref={ref} 
      className={cn(baseStyles, variants[variant], hoverStyles, disabledStyles, loadingStyles, className)} 
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-xl font-bold leading-none tracking-tight text-heading", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-paragraph", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
