"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { getIntroHold } from "./timing";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `nav__link${pathname === href ? " nav__link--active" : ""}`;

  return (
    <motion.header
      className={`nav${scrolled ? " nav--scrolled" : ""}`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
        delay: isHome ? getIntroHold() + 0.4 : 0.1,
      }}
    >
      <nav className="nav__inner">
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/" className="nav__logo">
          FUTURA
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}
