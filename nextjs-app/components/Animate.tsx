"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

// Faster animations for snappy feel
const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 24 },
    show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  left: {
    hidden: { opacity: 0, x: -24 },
    show: (d: number) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  right: {
    hidden: { opacity: 0, x: 24 },
    show: (d: number) => ({ opacity: 1, x: 0, transition: { duration: 0.4, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  none: {
    hidden: { opacity: 0 },
    show: (d: number) => ({ opacity: 1, transition: { duration: 0.3, delay: d, ease: "easeOut" } }),
  },
};

export default function Animate({ children, className, style, delay = 0, direction = "up", once = true }: Props) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const v      = variants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={v}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
