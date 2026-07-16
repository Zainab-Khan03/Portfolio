import Link from "next/link";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="texture-linen border-t border-charcoal/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display italic text-2xl text-charcoal">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-cocoa max-w-xs">
            Computer science graduate building at the intersection of
            intelligent systems, secure architecture, and careful design.
          </p>
        </div>
        <div className="text-sm text-cocoa col-span-3 md:col-span-1 md:ml-auto">
          <p className="font-script text-lg text-rust mb-2">Find the rest of the archive —</p>
          <ul className="space-y-1">
            <li><Link href="/story" className="hover:text-charcoal">The Story</Link></li>
            <li><Link href="/work" className="hover:text-charcoal">Exhibits</Link></li>
            <li><Link href="/skills" className="hover:text-charcoal">The Toolbox</Link></li>
            <li><Link href="/contact" className="hover:text-charcoal">Correspondence</Link></li>
          </ul>
        </div>
        
      </div>
      <div className="border-t border-charcoal/10 py-6 text-center text-xs text-cocoa/70">
        Handmade, chapter by chapter — © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
