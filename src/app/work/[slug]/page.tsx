import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Zainab Gull Khan` : "Exhibit not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="pt-32 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/work" className="text-sm text-cocoa hover:text-charcoal underline decoration-dusty-pink underline-offset-4">
          ← Back to the gallery
        </Link>

        <p className="font-script text-2xl text-rust mt-8 mb-2">exhibit</p>
        <h1 className="font-display italic text-5xl md:text-6xl text-charcoal leading-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-cocoa">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-6 mb-12">
          {project.stack.map((s) => (
            <span key={s} className="text-xs px-3 py-1 rounded-full border border-charcoal/15 text-cocoa">
              {s}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-cream border border-charcoal/10 p-5 text-center">
              <p className="text-xs uppercase tracking-widest text-cocoa/70 mb-1">{m.label}</p>
              <p className="font-display italic text-xl text-charcoal">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {project.body.map((para, i) => (
            <p key={i} className="text-cocoa leading-relaxed text-[1.05rem]">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-charcoal/10 flex items-center justify-between text-sm text-cocoa">
          <span>{project.role} · {project.year}</span>
          <Link href="/contact" className="text-rust hover:underline underline-offset-4">
            Ask about this project →
          </Link>
        </div>
      </div>
    </div>
  );
}
