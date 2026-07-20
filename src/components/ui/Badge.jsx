import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary/10 text-secondary border border-secondary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "bg-transparent border border-border text-foreground",
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    error: "bg-error/10 text-error border border-error/20",
  };
  
  return (
    <span className={cn("inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold transition-colors shadow-sm tracking-wide", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
