import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export function SectionHeading({ title, subtitle, centered = false, className }) {
  return (
    <FadeIn className={cn("mb-12", centered && "text-center", className)}>
      {subtitle && (
        <span className="text-secondary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-primary rounded-full", centered && "mx-auto")} />
    </FadeIn>
  );
}
