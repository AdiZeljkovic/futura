"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { introAlreadyPlayed, markIntroPlayed } from "./timing";

const letters = "FUTURA".split("");

export default function Preloader() {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  // Plays once per session: skip immediately when returning to the homepage.
  useEffect(() => {
    if (introAlreadyPlayed()) setGone(true);
  }, []);

  if (gone) return null;

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="preloader"
        animate={exiting ? { opacity: 0, filter: "blur(10px)" } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (exiting) {
            markIntroPlayed();
            setGone(true);
          }
        }}
        aria-hidden="true"
      >
        <div className="preloader__word">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="preloader__track">
          <motion.div
            className="preloader__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.55, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={() => setExiting(true)}
          />
        </div>
      </motion.div>
    </MotionConfig>
  );
}
