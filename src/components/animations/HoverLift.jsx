"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPRING_TRANSITION } from "@/constants/animations";

export function HoverLift({
  children,
  className,
  y = -5, // Default lift amount
  scale = 1.02,
}) {
  return (
    <motion.div
      whileHover={{ y, scale }}
      transition={SPRING_TRANSITION}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
