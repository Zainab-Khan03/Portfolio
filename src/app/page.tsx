import Hero from "@/components/story/Hero";
import ChapterStrip from "@/components/story/ChapterStrip";
import FeaturedExhibit from "@/components/story/FeaturedExhibit";
import ClosingCta from "@/components/story/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChapterStrip />
      <FeaturedExhibit />
      <ClosingCta />
    </>
  );
}
