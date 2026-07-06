"use client";

import { motion, MotionConfig } from "motion/react";

type Path = { d: string; strokeWidth: number; opacity?: number };

// Line-art brand marks draw themselves in when scrolled into view.
export default function Brandmark({
  className,
  paths,
}: {
  className: string;
  paths: Path[];
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.strokeWidth}
            opacity={p.opacity}
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              show: {
                pathLength: 1,
                opacity: p.opacity ?? 1,
                transition: { duration: 1.4, ease: "easeInOut", delay: 0.35 + i * 0.3 },
              },
            }}
          />
        ))}
      </motion.svg>
    </MotionConfig>
  );
}
