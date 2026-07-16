import type { Metadata } from "next";
import SkillsGrid from "@/components/skills/SkillsGrid";

export const metadata: Metadata = {
  title: "The Toolbox — Zainab Gull Khan",
};

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="font-script text-2xl text-rust mb-2">laid out on the table —</p>
        <h1 className="font-display italic text-5xl md:text-6xl text-charcoal mb-6">
          The Toolbox
        </h1>
        <p className="text-cocoa max-w-xl mb-16 leading-relaxed">
          Not a set of percentages — a set of tools I reach for, grouped the
          way they actually sit together on my desk.
        </p>
        <SkillsGrid />
      </div>
    </div>
  );
}
