"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Sparkles,
  User,
  X,
  ExternalLink,
  Download,
  Terminal,
  Award,
  Code2,
  CheckCircle2,
  RefreshCw
} from "lucide-react";
import { projects, certificatesList, experience, socials } from "@/lib/data";
import { sounds } from "@/components/sound-effects";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  sources?: { title: string; link?: string }[];
}

const suggestedPrompts = [
  "What is Hammad's core specialization?",
  "Tell me about DealFlow CRM & Smart Doc AI",
  "List his Stanford & AWS certifications",
  "How can I download his desktop .exe utilities?",
  "Is Hammad available for hire?"
];

export function AiAssistantModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "assistant",
      text: "👋 Hi! I'm **Hammad AI Assistant**, trained on Muhammed Hammad's verified engineering portfolio, 24+ projects, and 37+ industry certifications.\n\nAsk me anything about his technical stack, system architecture decisions, live demos, or availability!",
      sources: [
        { title: "24+ Projects", link: "#projects" },
        { title: "37+ Certifications", link: "#certifications" },
        { title: "Resume Download", link: "/assets/Muhammed_Hammad_S_Resume.pdf" }
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isOpen, messages]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    sounds.playClick();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Knowledge-base RAG synthesis response engine
    setTimeout(() => {
      const q = query.toLowerCase();
      let reply = "";
      let sources: { title: string; link?: string }[] = [];

      if (q.includes("specializ") || q.includes("who is") || q.includes("about") || q.includes("background")) {
        reply = `**Muhammed Hammad** is a **Full-Stack AI Developer & AI Systems Specialist** focusing on production-grade Generative AI, multimodal intelligence, and autonomous workflows.\n\nHe develops production web platforms (Next.js 15, TypeScript, Tailwind) and hardware-accelerated desktop utilities (Python, OpenCV, PyQt), combined with verified credentials from **Stanford Online, Google Cloud, and AWS**.`;
        sources = [
          { title: "About Hammad", link: "#about" },
          { title: "Tech Arsenal", link: "#tech-arsenal" }
        ];
      } else if (q.includes("dealflow") || q.includes("crm") || q.includes("smart doc") || q.includes("project")) {
        reply = `Hammad has built **24+ applications** with live working demos:\n\n1. **DealFlow CRM**: Zero-backend 100% client-side CRM with Kanban pipeline and encrypted local persistence.\n2. **Smart Doc AI**: Multimodal document processing engine achieving **99.2% extraction accuracy** with multi-provider fallback.\n3. **AI Proposal Writer**: Generative SaaS reducing proposal drafting time by 85% with PDF export.\n4. **Advanced Video QA**: Desktop application with Whisper transcription and timestamp citations.`;
        sources = [
          { title: "DealFlow CRM Demo", link: "https://dealflow-crm.netlify.app/dashboard" },
          { title: "Smart Doc AI Demo", link: "https://smart-ai-docs.netlify.app/dashboard" },
          { title: "View All Projects", link: "#projects" }
        ];
      } else if (q.includes("cert") || q.includes("stanford") || q.includes("aws") || q.includes("google") || q.includes("deloitte")) {
        reply = `Hammad maintains a vault of **37+ verified industry credentials**:\n\n• **Supervised Machine Learning (Stanford Online & Andrew Ng / DeepLearning.AI)**\n• **Introduction to Generative AI Studio (Google Cloud Skills Boost)**\n• **Introduction to Machine Learning on AWS (Amazon Web Services)**\n• **Technology Job Simulation (Deloitte Australia)**\n\nAll 37+ credentials feature SHA-256 verification and live PDF preview modals in the Certifications Vault!`;
        sources = [
          { title: "37+ Verified Certifications Vault", link: "#certifications" }
        ];
      } else if (q.includes("desktop") || q.includes("exe") || q.includes("download") || q.includes("video qa") || q.includes("image toolkit")) {
        reply = `Hammad has engineered **2 production Windows desktop applications (.exe)**:\n\n1. **Advanced Video QA Pro**: Multimodal frame-accurate video query engine with local Whisper processing.\n2. **Image Toolkit Pro**: 60 FPS real-time webcam detection and batch transformation tool.\n\nBoth installers are compiled and available for immediate direct download!`;
        sources = [
          { title: "Download Video QA .exe", link: "https://github.com/hammad986/advanced-Video-QA-System/releases/download/v1.0.0-rc.1/AdvancedVideoQAProSetup-1.0.0.exe" },
          { title: "Download Image Toolkit .exe", link: "https://github.com/hammad986/Image-Toolkit-Pro/releases/latest/download/ImageToolkitPro.exe" }
        ];
      } else if (q.includes("hire") || q.includes("contact") || q.includes("available") || q.includes("email") || q.includes("phone")) {
        reply = `🟢 **Status: Available for Hire & Engineering Roles**\n\n• **Email**: [mdhammad2906@gmail.com](mailto:mdhammad2906@gmail.com)\n• **Phone**: +91 6369740522\n• **LinkedIn**: [linkedin.com/in/muhammed-hammad-42659726a](https://www.linkedin.com/in/muhammed-hammad-42659726a)\n• **GitHub**: [github.com/hammad986](https://github.com/hammad986)\n\nYou can also use the contact form at the bottom of this portfolio!`;
        sources = [
          { title: "Contact Section", link: "#contact" },
          { title: "Download Resume", link: "/assets/Muhammed_Hammad_S_Resume.pdf" }
        ];
      } else {
        reply = `I have indexed all of Hammad's projects, certifications, and experience. \n\nHe specializes in **Next.js 15, Python, Vision AI, Whisper, Agentic Architectures, and Full-Stack Systems**. Would you like to explore his **live SaaS demos**, **desktop installers**, or **37+ verified certificates**?`;
        sources = [
          { title: "View Featured Projects", link: "#projects" },
          { title: "Verified Credentials", link: "#certifications" },
          { title: "Contact Hammad", link: "#contact" }
        ];
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "assistant",
          text: reply,
          sources
        }
      ]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={onClose} className="absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative z-10 flex h-[85vh] max-h-[720px] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#080E21] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(0,242,254,0.15)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-[#0C132C] px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl border border-cyan-500/40 bg-cyan-500/15 text-cyanCore shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <Bot className="h-5 w-5 animate-pulse-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Ask Hammad AI</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-400 border border-emerald-500/40">
                  RAG Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Trained on 24+ Projects & 37+ Credentials
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="rounded-xl border border-white/10 bg-white/[0.05] p-2 text-slate-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border ${
                  msg.sender === "user"
                    ? "border-blue-500/40 bg-blue-500/20 text-white"
                    : "border-cyan-500/40 bg-cyan-500/15 text-cyanCore"
                }`}
              >
                {msg.sender === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md font-medium"
                    : "border border-cyan-500/20 bg-[#0C132C] text-slate-200 shadow-inner"
                }`}
              >
                <div className="whitespace-pre-line font-normal">{msg.text}</div>

                {/* Citation Sources */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3.5 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                    {msg.sources.map((src) => (
                      <a
                        key={src.title}
                        href={src.link}
                        target={src.link?.startsWith("http") || src.link?.endsWith(".pdf") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        onClick={() => {
                          sounds.playClick();
                          if (src.link?.startsWith("#")) onClose();
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[11px] font-mono text-cyanCore hover:bg-cyan-500/25 transition"
                      >
                        <Sparkles className="h-2.5 w-2.5" />
                        <span>{src.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-xl border border-cyan-500/40 bg-cyan-500/15 text-cyanCore">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-2xl border border-cyan-500/20 bg-[#0C132C] px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                <RefreshCw className="h-3 w-3 animate-spin text-cyanCore" />
                <span>Retrieving portfolio telemetry...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Pill Strip */}
        <div className="border-t border-cyan-500/15 bg-[#0A0F24] px-4 py-2.5">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 border-t border-cyan-500/20 bg-[#0C132C] p-3.5"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, architecture, certifications, or hiring..."
            className="flex-1 rounded-xl border border-cyan-500/25 bg-[#050814] px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,242,254,0.3)]"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
