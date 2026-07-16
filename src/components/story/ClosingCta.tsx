"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className="py-32 px-6 md:px-10 text-center relative">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-script text-2xl text-rust mb-2"
      >
        the last page, for now —
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display italic text-4xl md:text-6xl text-charcoal max-w-3xl mx-auto leading-tight"
      >
        If something here made you curious, I&rsquo;d like to hear about it.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-10"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-charcoal text-ivory rounded-full px-8 py-4 text-sm tracking-wide hover:bg-rust transition-colors"
        >
          Write to me
        </Link>
      </motion.div>
    </section>
  );
}
