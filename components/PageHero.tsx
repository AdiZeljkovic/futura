"use client";

import { motion, MotionConfig, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Sub-page header: eyebrow, display title, optional lead paragraph.
export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" />
      <MotionConfig reducedMotion="user">
        <motion.div
          className="page-hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="page-hero__eyebrow" variants={item}>
            {eyebrow}
          </motion.p>
          <motion.h1 className="wordmark page-hero__title" variants={item}>
            {title}
          </motion.h1>
          {lead && (
            <motion.p className="page-hero__lead" variants={item}>
              {lead}
            </motion.p>
          )}
        </motion.div>
      </MotionConfig>
    </section>
  );
}
