"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TRANSITION_DEFAULT } from "@/constants/animations";

export function Scale({
  children,
  delay = 0,
  duration = TRANSITION_DEFAULT.duration,
  className,
  once = true,
  amount = 0.2,
  initialScale = 0.8,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ 
        duration, 
        delay, 
        ease: TRANSITION_DEFAULT.ease 
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
