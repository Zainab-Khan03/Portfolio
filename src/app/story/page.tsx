import type { Metadata } from "next";
import StoryTimeline from "@/components/story/StoryTimeline";
import { experience, education } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Story — Zainab Gull Khan",
};

export default function StoryPage() {
  return (
    <div className="pt-32 pb-10">
      <div className="mx-auto max-w-4xl px-6 md:px-10 mb-20 text-center">
        <p className="font-script text-2xl text-rust mb-2">chapter by chapter —</p>
        <h1 className="font-display italic text-5xl md:text-6xl text-charcoal leading-tight">
          The Story So Far
        </h1>
        <p className="mt-6 text-cocoa max-w-xl mx-auto leading-relaxed">
          Six chapters, roughly in order, from a first line of Python to a
          final year project meant to protect other people&rsquo;s software.
        </p>
      </div>

      <StoryTimeline />

      <div className="mx-auto max-w-4xl px-6 md:px-10 mt-28 grid md:grid-cols-2 gap-10">
        <div className="bg-cream border border-charcoal/10 p-8">
          <p className="font-script text-rust text-lg mb-3">the ledger — experience</p>
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role}>
                <p className="font-display italic text-xl text-charcoal">{e.role}</p>
                <p className="text-sm text-cocoa">{e.org} · {e.period}</p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa list-disc list-inside">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-cream border border-charcoal/10 p-8">
          <p className="font-script text-rust text-lg mb-3">the ledger — education</p>
          <p className="font-display italic text-xl text-charcoal">{education.degree}</p>
          <p className="text-sm text-cocoa mt-1">{education.school}</p>
          <p className="text-sm text-cocoa">CGPA: {education.cgpa}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-cocoa/70">
            Vice Rector&rsquo;s List
          </p>
          <p className="text-sm text-cocoa">{education.honors.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}
