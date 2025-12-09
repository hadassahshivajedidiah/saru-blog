"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6 pt-20 md:px-20">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-accent mb-6 font-mono text-xs font-medium tracking-widest uppercase sm:text-sm md:text-base">
            Chapter 1: The Introduction
          </h2>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
          className="mb-8 -ml-1 py-4 font-serif text-4xl leading-none font-bold tracking-tight text-balance sm:text-6xl md:text-8xl lg:text-9xl"
        >
          {/* Split text for animation - Added py-4 to container above to prevent clipping */}
          {"I craft digital".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="from-foreground to-foreground/70 mr-3 inline-block bg-linear-to-r bg-clip-text pb-4 text-transparent md:mr-6"
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            variants={{
              hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
              visible: {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            className="text-accent inline-block pb-2 font-serif italic"
          >
            stories.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="text-muted-foreground max-w-3xl text-lg leading-relaxed md:text-3xl md:leading-normal"
        >
          Four years of exploring the frontiers of the web.
          <span className="hidden md:inline">
            {" "}
            One year of silence to find the signal.
          </span>
          <br className="my-4 block md:hidden" />
          Now, I build bridges between the{" "}
          <span className="text-foreground font-medium">abstract</span> and the{" "}
          <span className="text-foreground font-medium">functional</span>.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 flex items-center gap-4 md:left-20"
      >
        <div className="bg-muted-foreground/30 h-px w-12 md:w-24" />
        <span className="text-muted-foreground/50 font-mono text-xs tracking-widest uppercase">
          Scroll to Begin
        </span>
      </motion.div>
    </section>
  );
}
