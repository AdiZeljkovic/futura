"use client";

import { motion, MotionConfig, type Variants } from "motion/react";
import { getIntroHold } from "./timing";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const wordmark: Variants = {
  hidden: { opacity: 0, letterSpacing: "0.6em", filter: "blur(10px)" },
  show: {
    opacity: 1,
    letterSpacing: "0.35em",
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

const separator: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  show: { opacity: 1, scaleX: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function HeroIntro() {
  // Waits for the preloader on first visit; starts immediately afterwards.
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.22, delayChildren: getIntroHold() + 0.2 } },
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="panel__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="wordmark wordmark--hero" variants={wordmark}>
          FUTURA
        </motion.h1>
        <motion.p className="tagline" variants={item}>
          We&rsquo;re building the future.
        </motion.p>
        <motion.span className="separator" variants={separator} aria-hidden="true" />
        <motion.p className="desc" id="about" variants={item}>
          Parent company behind digital brands in
          <br />
          software, media and technology.
        </motion.p>
      </motion.div>
    </MotionConfig>
  );
}
