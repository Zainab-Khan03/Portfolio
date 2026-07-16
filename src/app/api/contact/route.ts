import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email address"),
  subject: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10, "Message is a little short").max(5000),
  // honeypot field - real users never fill this in
  company: z.string().max(0).optional().default(""),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    await connectToDatabase();
    await ContactMessage.create({ name, email, subject, message });
  } catch (err) {
    console.error("Failed to save contact message:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your message. Please try again." },
      { status: 500 }
    );
  }

  // Email delivery is optional - only attempted if credentials are configured.
  if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } catch (err) {
      // Message is already saved to the database, so this is not fatal.
      console.error("Failed to send notification email:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
