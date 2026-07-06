"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Content drifts slower than the fixed-speed video behind it → depth
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -70]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div ref={ref} style={{ y }} className="panel__content">
        <motion.div
          className="panel__content-inner"
          initial={{ opacity: 0, y: 64, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
