"use client";

import { motion } from "framer-motion";
import { storyChapters } from "@/lib/content";

export default function StoryTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl px-6 md:px-10">
      {/* spine */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-charcoal/15 md:-translate-x-1/2" />

      <div className="space-y-16">
        {storyChapters.map((chapter, i) => {
          const alignRight = i % 2 === 1;
          return (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-14"
            >
              {/* node */}
              <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-rust ring-4 ring-ivory" />

              <div
                className={
                  alignRight
                    ? "md:col-start-2 md:pl-4"
                    : "md:col-start-1 md:pr-4 md:text-right"
                }
              >
                <div
                  className={`inline-block bg-cream border border-charcoal/10 shadow-sm p-7 max-w-md ${
                    alignRight ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <p className="font-script text-rust text-lg mb-1">
                    Chapter {chapter.number}
                  </p>
                  <p className="font-display italic text-2xl text-charcoal mb-3">
                    {chapter.title}
                  </p>
                  <p className="text-sm text-cocoa leading-relaxed text-left">
                    {chapter.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
