"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export function Counter({ 
  value, 
  duration = 2, 
  suffix = "", 
  className,
  suffixClassName
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });
  
  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div className="flex items-baseline justify-center" ref={ref}>
      <motion.span className={className}>
        {displayValue}
      </motion.span>
      {suffix && <span className={suffixClassName || className}>{suffix}</span>}
    </div>
  );
}
