"use client";

import { motion, type Variants } from "motion/react";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay }}>{children}</motion.div>;
}

export function MagneticMark() {
  return <motion.div className="mark" animate={{ rotate: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true"><span /></motion.div>;
}
