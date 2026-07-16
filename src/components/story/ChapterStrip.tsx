"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { storyChapters } from "@/lib/content";

export default function ChapterStrip() {
  const preview = storyChapters.slice(0, 3);

  return (
    <section className="texture-linen py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="font-script text-2xl text-rust mb-1">chapter index</p>
            <h2 className="font-display italic text-4xl md:text-5xl text-charcoal">
              How the story unfolds
            </h2>
          </div>
          <Link
            href="/story"
            className="text-sm text-cocoa underline decoration-dusty-pink decoration-2 underline-offset-4 hover:text-charcoal"
          >
            Read all six chapters →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {preview.map((chapter, i) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-ivory border border-charcoal/10 shadow-sm p-8 relative"
            >
              <span className="font-display italic text-5xl text-dusty-pink absolute top-4 right-6">
                {chapter.number}
              </span>
              <p className="font-display italic text-2xl text-charcoal mb-3 pr-10">
                {chapter.title}
              </p>
              <p className="text-sm text-cocoa leading-relaxed">
                {chapter.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
