"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/story", label: "The Story" },
  { href: "/work", label: "Exhibits" },
  { href: "/skills", label: "The Toolbox" },
  { href: "/contact", label: "Correspondence" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-sm shadow-[0_1px_0_rgba(42,35,28,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-display italic text-lg md:text-xl tracking-tight text-charcoal"
        >
          Zainab Gull Khan
          <span className="block font-script text-sm text-rust leading-none -mt-1">
            a working journal
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm tracking-wide text-cocoa hover:text-charcoal transition-colors group"
            >
              <span className="text-rust/70 font-display italic mr-1 text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-rust transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-charcoal/30 rounded-full px-4 py-1.5 hover:bg-charcoal hover:text-ivory transition-colors"
        >
          Say hello
        </Link>
      </div>
    </header>
  );
}
