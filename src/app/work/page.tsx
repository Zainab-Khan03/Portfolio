import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Exhibits — Zainab Gull Khan",
};

export default function WorkIndexPage() {
  return (
    <div className="pt-32 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="font-script text-2xl text-rust mb-2">the gallery —</p>
        <h1 className="font-display italic text-5xl md:text-6xl text-charcoal mb-6">
          Exhibits
        </h1>
        <p className="text-cocoa max-w-xl mb-16 leading-relaxed">
          Two projects, two very different questions. One asks what a model
          can responsibly predict. The other asks how to keep the things we
          build safe once they&rsquo;re out in the world.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`group block bg-cream border border-charcoal/10 p-8 shadow-sm hover:shadow-lg transition-shadow ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0 duration-300`}
            >
              <p className="text-xs uppercase tracking-widest text-cocoa/70 mb-2">
                {p.year} · {p.role}
              </p>
              <p className="font-display italic text-3xl text-charcoal mb-3">
                {p.title}
              </p>
              <p className="text-sm text-cocoa leading-relaxed mb-6">
                {p.tagline}
              </p>
              <span className="text-sm text-rust group-hover:underline underline-offset-4">
                Open the exhibit →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
