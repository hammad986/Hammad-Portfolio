"use client";
import { useState } from "react";
import Link from "next/link";
import { X, Search } from "lucide-react";
import { portfolioCounts, projects, socials } from "@/lib/data";
import { useDialog } from "./use-dialog";
export function AiAssistantModal({isOpen,onClose}:{isOpen:boolean;onClose:()=>void}) {
 const [query,setQuery] = useState("");
 const dialogRef = useDialog(isOpen,onClose);
 const entries = [
  {question:"What does Hammad work on?",answer:"AI/ML and generative AI applications, Python, retrieval workflows and full-stack web development.",href:"/about/",label:"About and skills"},
  {question:"Where can I explore his projects?",answer:`${portfolioCounts.projects} featured projects, including ${portfolioCounts.windowsApps} Windows applications. Availability and source links are listed on each project page.`,href:"/projects/",label:"All projects"},
  ...projects.map(p=>({question:p.title,answer:p.description,href:`/projects/${p.id}/`,label:"Project details"})),
  {question:"Where are his credentials?",answer:`${portfolioCounts.credentials} credential documents are listed. Issuer verification links are shown where available; a hosted document is not independent verification.`,href:"/certifications/",label:"Credentials"},
  {question:"How can I contact Hammad?",answer:`Email ${socials.rawEmail} about roles or collaboration.`,href:"/contact/",label:"Contact"},
  {question:"Where can I download his resume?",answer:"The existing resume PDF is available below.",href:"/assets/Muhammed_Hammad_S_Resume.pdf",label:"Resume PDF"}
 ];
 if(!isOpen)return null;
 const results=entries.filter(e=>(e.question+e.answer).toLowerCase().includes(query.toLowerCase()));
 return <div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="faq-title" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md">
  <div onClick={onClose} className="absolute inset-0" aria-hidden="true"/>
  <div className="relative w-full max-w-2xl max-h-[85dvh] overflow-y-auto rounded-2xl border border-cyan-500/30 bg-[#080E21] p-5">
   <div className="flex justify-between gap-4"><h2 id="faq-title" className="text-xl font-bold">Portfolio FAQ</h2><button aria-label="Close FAQ" onClick={onClose} className="p-2"><X/></button></div>
   <p className="my-3 text-sm text-slate-300">A searchable, local guide to this portfolio. No AI model, training or live retrieval is involved. Searches stay in your browser.</p>
   <label className="flex gap-2 rounded-lg border border-cyan-500/30 p-3"><Search aria-hidden="true" className="h-5 w-5"/><span className="sr-only">Search questions</span><input className="w-full min-w-0 bg-transparent" placeholder="Projects, skills, credentials, contact..." value={query} onChange={e=>setQuery(e.target.value)}/></label>
   <div className="mt-4 space-y-3" aria-live="polite">{results.map(e=><section key={e.question} className="rounded-xl border border-white/10 p-4"><h3 className="font-semibold">{e.question}</h3><p className="my-2 text-sm text-slate-300">{e.answer}</p><Link className="text-sm text-cyanCore underline" href={e.href} onClick={onClose}>{e.label}</Link></section>)}{!results.length&&<p>No matching questions. Try another term or visit Contact.</p>}</div>
  </div>
 </div>;
}
