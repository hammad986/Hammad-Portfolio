"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet."
      });
      setLoading(false);
      return;
    }

    const formData = new FormData(form);
    const templateParams = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    if (!templateParams.name) {
      setStatus({ type: "error", message: "Name is required." });
      setLoading(false);
      return;
    }

    if (!templateParams.email) {
      setStatus({ type: "error", message: "Email is required." });
      setLoading(false);
      return;
    }

    if (!emailPattern.test(templateParams.email)) {
      setStatus({ type: "error", message: "Enter a valid email address." });
      setLoading(false);
      return;
    }

    if (!templateParams.subject) {
      setStatus({ type: "error", message: "Subject is required." });
      setLoading(false);
      return;
    }

    if (!templateParams.message) {
      setStatus({ type: "error", message: "Message is required." });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      form.reset();
      setStatus({
        type: "success",
        message:
          "Message sent successfully. I'll get back to you as soon as possible."
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 shadow-appleGlass backdrop-blur-3xl"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-xs font-medium text-slate-300">
          Your Name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Jane Doe"
            className="h-11 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-4 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-white/25 focus:bg-white/[0.04]"
          />
        </label>
        <label className="space-y-2 text-xs font-medium text-slate-300">
          Email Address
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className="h-11 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-4 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-white/25 focus:bg-white/[0.04]"
          />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-xs font-medium text-slate-300">
        Subject
        <input
          required
          name="subject"
          placeholder="AI Engineering Project / Collaboration"
          className="h-11 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-4 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-white/25 focus:bg-white/[0.04]"
        />
      </label>
      <label className="mt-4 block space-y-2 text-xs font-medium text-slate-300">
        Message
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Tell me about your project, timeline, or engineering goals..."
          className="w-full resize-none rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-white/25 focus:bg-white/[0.04]"
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={loading}
          className="bg-white text-black font-semibold hover:bg-slate-200 rounded-full px-6"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {loading ? "Sending..." : "Send Message"}
        </Button>
        <AnimatePresence mode="popLayout">
          {status.type !== "idle" ? (
            <motion.p
              key={status.message}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={
                status.type === "success"
                  ? "flex items-center gap-2 text-xs text-emerald-400 font-medium"
                  : "text-xs text-rose-400 font-medium"
              }
            >
              {status.type === "success" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : null}
              {status.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
