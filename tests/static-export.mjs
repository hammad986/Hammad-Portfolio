import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const root="out";
const projects=["dealflow-crm","smart-doc-ai","ai-proposal-writer","advanced-video-qa","nexus-ai-ops","image-toolkit-pro","invoice-gen-pro"];
for(const slug of projects){const html=fs.readFileSync(path.join(root,"projects",slug,"index.html"),"utf8");assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert(html.includes(`/projects/${slug}/`));}
assert(fs.existsSync(path.join(root,"assets/Muhammed_Hammad_S_Resume.pdf")));
const home=fs.readFileSync(path.join(root,"index.html"),"utf8");assert(home.includes("Portfolio FAQ"));assert(!home.includes("RAG Active"));assert(!home.includes("24+ Projects"));
assert(fs.readFileSync(path.join(root,"sitemap.xml"),"utf8").includes("/projects/advanced-video-qa/"));
console.log("Static export checks passed: seven project pages, single headings, resume, transparent FAQ and sitemap.");
