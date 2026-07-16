"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="relative bg-cream border border-charcoal/10 shadow-xl p-8 torn-edge">
      <div className="tape absolute -top-3 left-10 w-16 h-6 -rotate-3" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10 text-center"
          >
            <p className="font-script text-3xl text-rust mb-3">Sent —</p>
            <p className="text-cocoa">
              Thank you for writing. I&rsquo;ll reply as soon as I can.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* honeypot, hidden from real visitors */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-cocoa/70 mb-1.5">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={120}
                className="w-full bg-transparent border-b border-charcoal/25 focus:border-rust outline-none py-2 font-display italic text-lg text-charcoal placeholder:text-cocoa/40"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-cocoa/70 mb-1.5">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-charcoal/25 focus:border-rust outline-none py-2 font-display italic text-lg text-charcoal placeholder:text-cocoa/40"
                placeholder="jane@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-cocoa/70 mb-1.5">
                Subject (optional)
              </label>
              <input
                id="subject"
                name="subject"
                maxLength={160}
                className="w-full bg-transparent border-b border-charcoal/25 focus:border-rust outline-none py-2 font-display italic text-lg text-charcoal placeholder:text-cocoa/40"
                placeholder="A project, a question, a hello"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-cocoa/70 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="w-full bg-transparent border-b border-charcoal/25 focus:border-rust outline-none py-2 text-charcoal placeholder:text-cocoa/40 resize-none"
                placeholder="Write as much or as little as you like."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-rust">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 bg-charcoal text-ivory rounded-full px-6 py-3 text-sm tracking-wide hover:bg-rust transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
