import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { profile } from "@/lib/content";
import Link from "next/dist/client/link";

export const metadata: Metadata = {
  title: "Correspondence — Zainab Gull Khan",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-4xl grid md:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <p className="font-script text-2xl text-rust mb-2">correspondence —</p>
          <h1 className="font-display italic text-5xl text-charcoal leading-tight mb-6">
            Write to me
          </h1>
          <p className="text-cocoa leading-relaxed mb-8">
            Whether it&rsquo;s about a project, a role, or just a question
            about something you read in the story — I read everything that
            comes through here myself.
          </p>
          <div className="space-y-3 text-sm text-cocoa">
            <p>
              <span className="text-cocoa/60">Email — </span>
              <Link href={`mailto:zainabkhan21033@gmail.com`} className="text-charcoal hover:text-rust underline decoration-dusty-pink underline-offset-4">
                zainabkhan21033@gmail.com
              </Link>
            </p>
            <p>
              <span className="text-cocoa/60">LinkedIn — </span>
              <Link href="https://www.linkedin.com/in/zainab-k-349349407" target="_blank" rel="noreferrer" className="text-charcoal hover:text-rust underline decoration-dusty-pink underline-offset-4">
                zainabgullkhan
              </Link>
            </p>
            
          
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
