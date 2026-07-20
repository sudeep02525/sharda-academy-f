"use client";

import { cn } from "@/lib/utils";

export function Alert({ 
  title, 
  description, 
  type = "info", // success, error, warning, info
  className,
  icon: Icon
}) {
  const variants = {
    success: "bg-success/10 border-success/20 text-success",
    error: "bg-error/10 border-error/20 text-error",
    warning: "bg-warning/10 border-warning/20 text-warning",
    info: "bg-info/10 border-info/20 text-info",
  };

  const DefaultIcons = {
    success: <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>,
    error: <svg className="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
    warning: <svg className="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
    info: <svg className="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  };

  const DisplayIcon = Icon ? <Icon className={cn("w-5 h-5", `text-${type}-600`)} /> : DefaultIcons[type];

  return (
    <div className={cn("flex w-full items-start gap-4 rounded-lg border p-4 transition-colors", variants[type], className)} role="alert">
      {DisplayIcon && <div className="mt-0.5 shrink-0">{DisplayIcon}</div>}
      <div className="flex-1 space-y-1">
        {title && <h5 className="font-semibold leading-none tracking-tight mb-2">{title}</h5>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
    </div>
  );
}
