"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/content";

export default function FeaturedExhibit() {
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section className="py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-script text-2xl text-rust mb-1">the featured exhibit</p>
        <h2 className="font-display italic text-4xl md:text-5xl text-charcoal mb-14">
          {featured.title}
        </h2>

        <div className="grid md:grid-cols-[1fr_1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-cocoa leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full border border-charcoal/15 text-cocoa"
                >
                  {s}
                </span>
              ))}
            </div>
            <Link
              href={`/work/${featured.slug}`}
              className="inline-flex items-center gap-2 bg-charcoal text-ivory rounded-full px-6 py-3 text-sm tracking-wide hover:bg-rust transition-colors"
            >
              Step into the exhibit
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 3, y: 30 }}
            whileInView={{ opacity: 1, rotate: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="bg-cream border border-charcoal/10 shadow-xl p-8 torn-edge"
          >
            <p className="font-script text-rust text-lg mb-4">exhibit card</p>
            <dl className="space-y-4">
              {featured.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between border-b border-charcoal/10 pb-3">
                  <dt className="text-xs uppercase tracking-widest text-cocoa/70">
                    {m.label}
                  </dt>
                  <dd className="font-display italic text-lg text-charcoal">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-cocoa/70">
              {featured.role} · {featured.year}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
