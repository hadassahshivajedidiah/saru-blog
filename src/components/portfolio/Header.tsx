"use client";

import { useState } from "react";

import Link from "next/link";

import { Flower, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    if (diff > 10 && latest > 50) {
      setHidden(true);
      setMobileMenuOpen(false); // Close menu on scroll down
    } else if (diff < -10) {
      setHidden(false);
    }
    setLastY(latest);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 right-0 left-0 z-50 flex justify-center px-4"
    >
      <nav className="bg-background/40 group relative flex w-full max-w-2xl items-center justify-between overflow-hidden rounded-full border border-white/20 px-6 py-3 shadow-lg backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03]" />

        <Link
          href="/"
          className="text-foreground relative z-10 flex items-center gap-2 font-semibold tracking-tight transition-transform hover:scale-105"
        >
          <div className="bg-accent/10 rounded-lg p-1.5">
            <Flower className="text-accent h-5 w-5" />
          </div>
          <span>hadassah.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="text-muted-foreground relative z-10 hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-foreground transition-colors">
            Story
          </Link>
          <Link
            href="#collection"
            className="hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-muted-foreground relative z-10 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <Link
                href="/"
                className="text-foreground hover:text-primary font-serif text-5xl font-bold tracking-tight transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Story
              </Link>
              <Link
                href="#collection"
                className="text-foreground hover:text-primary font-serif text-5xl font-bold tracking-tight transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary font-serif text-5xl font-bold tracking-tight transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className="text-muted-foreground absolute bottom-10 flex gap-6">
              <span className="text-sm tracking-widest uppercase">Twitter</span>
              <span className="text-sm tracking-widest uppercase">
                LinkedIn
              </span>
              <span className="text-sm tracking-widest uppercase">GitHub</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
