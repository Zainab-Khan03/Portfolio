"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import Link from "next/dist/client/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* ambient floating paper scraps */}
      <motion.div
        aria-hidden
        className="absolute -top-10 right-[8%] w-40 h-52 bg-cream border border-charcoal/10 shadow-lg rotate-6"
        animate={{ y: [0, 14, 0], rotate: [6, 4, 6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-16 left-[6%] w-28 h-28 rounded-full bg-sage/30 blur-2xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-10 w-full grid md:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script text-2xl text-rust mb-3"
          >
            a working journal —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display italic text-[13vw] md:text-7xl leading-[0.95] text-charcoal"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-md text-cocoa text-lg leading-relaxed"
          >
            This isn&rsquo;t a résumé. It&rsquo;s a collection of chapters —
            the algorithms I learned to love, the systems I learned to
            secure, and the projects that taught me the difference between
            code that runs and code that&rsquo;s worth trusting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex items-center gap-5"
          >
            <Link
              href="/story"
              className="inline-flex items-center gap-2 bg-charcoal text-ivory rounded-full px-6 py-3 text-sm tracking-wide hover:bg-rust transition-colors"
            >
              Begin the story
            </Link>
            <Link
              href="/work"
              className="text-sm text-cocoa underline decoration-dusty-pink decoration-2 underline-offset-4 hover:text-charcoal"
            >
              Skip to the exhibits
            </Link>
          </motion.div>
        </div>

        {/* Signature element: pinned field-note card, the recurring "museum label" motif */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 30 }}
          animate={{ opacity: 1, rotate: -3, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="tape absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rotate-2 z-10" />
          <div className="w-64 md:w-72 bg-cream border border-charcoal/10 shadow-xl px-7 py-8 torn-edge">
            <p className="font-script text-rust text-lg">Fig. 01 — field notes</p>
            <p className="mt-3 font-display italic text-xl text-charcoal">
              {profile.role}
            </p>
            <p className="mt-1 text-sm text-cocoa">{profile.university}</p>
            <p className="text-sm text-cocoa">Minor in {profile.minor}</p>
            <div className="mt-5 pt-5 border-t border-charcoal/10 flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-widest text-cocoa/70">
                CGPA
              </span>
              <span className="font-display text-2xl text-charcoal">
                {profile.cgpa}
              </span>
            </div>
            <p className="mt-3 text-xs text-cocoa/70 leading-relaxed">
              Vice Rector&rsquo;s List — {profile.honors.join(" · ")}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cocoa/60 text-xs tracking-[0.3em] uppercase"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        scroll
      </motion.div>
    </section>
  );
}
