"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/content";

const categories = Object.entries(skills);

export default function SkillsGrid() {
  const [active, setActive] = useState<string | null>(categories[0][0]);

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-10">
      <div className="flex md:flex-col gap-2 flex-wrap">
        {categories.map(([name]) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`text-left px-4 py-2.5 text-sm rounded-full md:rounded-none transition-colors border ${
              active === name
                ? "bg-charcoal text-ivory border-charcoal"
                : "border-charcoal/15 text-cocoa hover:border-charcoal/40"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-cream border border-charcoal/10 p-8 min-h-[260px] torn-edge"
      >
        <p className="font-script text-rust text-lg mb-6">{active}</p>
        <div className="flex flex-wrap gap-3">
          {active &&
            skills[active as keyof typeof skills].map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="font-display italic text-lg text-charcoal border border-charcoal/15 rounded-full px-5 py-2 bg-ivory"
              >
                {tool}
              </motion.span>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
