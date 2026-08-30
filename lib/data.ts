import {
  Award,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileCode,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Layers,
  LayoutDashboard,
  MonitorDown,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectAction =
  | {
      type: "live";
      label: string;
      href: string;
    }
  | {
      type: "github";
      label: string;
      href: string;
    }
  | {
      type: "download";
      label: string;
      href: string;
    }
  | {
      type: "case-study";
      label: string;
      href: string;
    };

export type ProjectCategory = "all" | "ai" | "saas" | "desktop" | "vision";

export type Project = {
  id: string;
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  problem?: string;
  solution?: string;
  impactMetrics?: string[];
  architectureSvg?: string;
  image: string;
  gallery: string[];
  tech: string[];
  tags?: string[];
  badge?: string;
  actions: ProjectAction[];
  highlights: string[];
  architecture?: string;
};

export type CertificateCategory =
  | "All"
  | "AI & Machine Learning"
  | "Data Science & Analytics"
  | "Cloud & Infrastructure"
  | "Internships & Experience"
  | "Development & Programming"
  | "Professional Programs";

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  date: string;
  filePath: string;
  fileType: "pdf" | "image";
  description: string;
  skills: string[];
  featured?: boolean;
  credentialBadge: string;
};

export const socials = {
  github: "https://github.com/hammad986",
  linkedin: "https://www.linkedin.com/in/muhammed-hammad-42659726a",
  instagram: "https://www.instagram.com/mud_.hammad",
  email: "mailto:mdhammad2906@gmail.com",
  rawEmail: "mdhammad2906@gmail.com",
  phone: "+91 6369740522",
  portfolio: "https://hammad.dpdns.org"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const metrics = [
  { value: "24+", label: "Production & AI Projects", icon: Code2, suffix: "+" },
  { value: "37+", label: "Verified Credentials", icon: Award, suffix: "+" },
  { value: "5", label: "Industry Internships", icon: BriefcaseBusiness, suffix: " Co." },
  { value: "2", label: "Windows Desktop Apps", icon: MonitorDown, suffix: " .exe" },
  { value: "GenAI", label: "Specialized Engineering", icon: Brain, suffix: " / LLMs" }
];

export const focusAreas = [
  {
    title: "Currently Building",
    icon: Workflow,
    color: "from-blue-500/20 to-cyan-500/20",
    items: [
      "Aetherion AI Autonomous Agents",
      "Advanced Multimodal Video QA System",
      "Enterprise AI Workflow Automations"
    ]
  },
  {
    title: "Core Specialization",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/20",
    items: [
      "Agentic AI Architecture (LangGraph/CrewAI)",
      "Retrieval Augmented Generation (Advanced RAG)",
      "Autonomous Multi-Agent Collaboration"
    ]
  },
  {
    title: "Next-Gen Explorations",
    icon: Sparkles,
    color: "from-emerald-500/20 to-teal-500/20",
    items: [
      "Local LLM Optimization (Ollama/LM Studio)",
      "Autonomous Multi-Step Reasoning",
      "Production Computer Vision & Desktop ML"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "dealflow-crm",
    title: "DealFlow CRM",
    type: "CRM Pipeline Application",
    category: "saas",
    description:
      "Full-cycle deal pipeline and client management system. Features drag-and-drop Kanban boards, encrypted local persistence, and real-time revenue analytics.",
    longDescription:
      "DealFlow CRM is a full-featured client relationship and deal management system built for high-performance agencies and freelancers. It delivers a 100% client-side, zero-backend architecture with encrypted local persistence, drag-and-drop kanban boards, real-time revenue projection graphs, interactive calendar scheduling, and automated follow-up telemetry.",
    problem: "Freelancers and boutique agencies struggle with complex, expensive CRMs that lock data behind monthly subscriptions and slow multi-second cloud API calls.",
    solution: "Built a zero-latency, 100% client-side CRM with reactive Zustand state management, hardware-accelerated drag-and-drop (dnd-kit), and encrypted browser storage.",
    impactMetrics: [
      "0ms backend latency with local encrypted persistence",
      "5 Kanban deal stages with instant drag-and-drop state sync",
      "100% client privacy with zero third-party tracking"
    ],
    architectureSvg: "/assets/svg/dealflow_crm_architecture.svg",
    image: "/assets/dealflow-CRM/dashboard.webp",
    gallery: [
      "/assets/dealflow-CRM/dashboard.webp",
      "/assets/dealflow-CRM/pipeline.webp",
      "/assets/dealflow-CRM/clients.webp",
      "/assets/dealflow-CRM/analytics.webp",
      "/assets/dealflow-CRM/calender.webp"
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "dnd-kit", "Zustand", "Recharts", "Lucide"],
    highlights: [
      "Dynamic Drag-and-Drop Deal Stage Pipeline with instant state synchronization",
      "Zero-latency client-side analytics with Recharts visual telemetry",
      "Automated follow-up reminders, client directory, and appointment calendar",
      "100% private: zero backend requirement with encrypted browser storage"
    ],
    architecture: "Next.js 15 App Router + Zustand Reactive State + Web Storage + dnd-kit Drag Engine",
    actions: [
      {
        type: "github",
        label: "Source Code",
        href: "https://github.com/hammad986/dealflow-crm.git"
      },
      {
        type: "live",
        label: "Live Application",
        href: "https://dealflow-crm.netlify.app/dashboard"
      }
    ]
  },
  {
    id: "smart-doc-ai",
    title: "Smart Doc AI",
    type: "AI Document Intelligence",
    category: "ai",
    description:
      "Enterprise document processing engine that extracts, normalizes, and structures unstructured PDFs, invoices, and contracts using multimodal AI with fallback redundancy.",
    longDescription:
      "Smart Doc AI is an intelligent document processing engine engineered to parse unstructured PDFs, invoices, and contracts into normalized JSON and tabular datasets. Designed with multi-model redundancy (Google Gemini, OpenAI, Claude fallback), document history indexing, OCR vision processing, and instant structured PDF/Excel export.",
    problem: "Manual document data entry from irregular PDFs, invoices, and contracts causes costly errors and takes upwards of 15 minutes per document.",
    solution: "Engineered an automated multimodal vision-LLM pipeline that performs high-speed OCR, schema extraction, and JSON validation with zero-latency export.",
    impactMetrics: [
      "99.2% structured extraction accuracy across irregular invoices",
      "< 3.2s end-to-end processing per multi-page document",
      "Multi-provider fallback eliminating API rate limit downtime"
    ],
    architectureSvg: "/assets/svg/smart_doc_ai_architecture.svg",
    image: "/assets/smart-ai-dashboard-images/dashboard.webp",
    gallery: [
      "/assets/smart-ai-dashboard-images/dashboard.webp",
      "/assets/smart-ai-dashboard-images/document-uploading-page.webp",
      "/assets/smart-ai-dashboard-images/document-history.webp",
      "/assets/smart-ai-dashboard-images/setting.webp"
    ],
    tech: ["Next.js", "Google Gemini Flash", "Vision AI", "Tailwind CSS", "TypeScript", "PDF.js"],
    highlights: [
      "Multimodal document OCR and schema extraction across complex tables",
      "Intelligent provider fallback preventing API downtime or rate limits",
      "Historical document cache and searchable semantic archive",
      "Instant export to structured formats (JSON, CSV, Clean PDF)"
    ],
    architecture: "Next.js SSR/CSR + Gemini Multimodal Vision API + Structured JSON Schema Validator",
    actions: [
      {
        type: "live",
        label: "Live Application",
        href: "https://smart-ai-docs.netlify.app/dashboard"
      }
    ]
  },
  {
    id: "ai-proposal-writer",
    title: "AI Proposal Writer",
    type: "Generative AI SaaS",
    category: "ai",
    description:
      "Generative AI SaaS enabling freelancers and agency teams to generate high-converting, tailored project proposals with inline editing and instant PDF rendering.",
    longDescription:
      "AI Proposal Writer automates the creation of high-converting client proposals. By taking client briefs, scope parameters, and budget constraints, it leverages customized generative prompt engineering to draft detailed scope-of-work documents, milestone breakdowns, pricing tiers, and executive summaries with live in-browser editing and instant PDF generation.",
    problem: "Drafting winning client proposals requires hours of manual copywriting and scope estimation, leading to delayed pitches and lost deals.",
    solution: "Built a prompt-engineered Generative AI pipeline tailored for client psychology that generates structured scope breakdowns, pricing tiers, and branded PDFs.",
    impactMetrics: [
      "85% reduction in proposal drafting time from 2 hours to 5 minutes",
      "Automated milestone breakdown and timeline estimation logic",
      "Instant client-ready PDF generation with corporate styling"
    ],
    architectureSvg: "/assets/svg/ai_proposal_writer_architecture.svg",
    image: "/assets/ai-proposal-writer-images/homepage.webp",
    gallery: [
      "/assets/ai-proposal-writer-images/homepage.webp",
      "/assets/ai-proposal-writer-images/proposal-forms.webp"
    ],
    tech: ["Next.js", "Gemini 1.5 Pro", "Tailwind CSS", "Framer Motion", "PDF Generation", "Netlify"],
    highlights: [
      "Dynamic multi-step proposal questionnaire tailored for client psychology",
      "AI-driven scope of work, timeline estimations, and milestone calculators",
      "Interactive rich text inline editor with live markdown preview",
      "One-click professional PDF exporter with corporate branding"
    ],
    architecture: "Next.js + Generative AI Stream Processing + jsPDF Client Generator",
    actions: [
      {
        type: "live",
        label: "Live Application",
        href: "https://ai-proposal-writer-aetherion-labs.netlify.app/proposals"
      }
    ]
  },
  {
    id: "advanced-video-qa",
    title: "Advanced Video QA System",
    type: "Windows Desktop Application",
    category: "desktop",
    description:
      "Desktop AI video question-answering application with multimodal audio-visual indexing, exact timestamp citations, and a standalone Windows installer.",
    longDescription:
      "An advanced AI desktop software built to ingest long-form video files, extract visual and audio semantic streams, and provide interactive question-answering with exact timestamp citation evidence. Features local processing proofing, multi-provider analysis, video playback synchronization, and a certified Windows desktop installer workflow.",
    problem: "Finding specific moments or verifying statements across hours of video lectures, webinars, or surveillance footage requires tedious manual scrubbing.",
    solution: "Developed a desktop application integrating Whisper audio transcription and multimodal vision sampling with synchronized timestamp playback and citation proof.",
    impactMetrics: [
      "Exact timestamp jump accuracy to relevant video frames",
      "Offline-first desktop architecture with local multiprocessing",
      "Standalone Windows installer (.exe setup release)"
    ],
    architectureSvg: "/assets/svg/advanced_video_qa_architecture.svg",
    image: "/assets/advanced_video_qa_pro_image/advanced-video-qa-pro-shell.webp",
    gallery: [
      "/assets/advanced_video_qa_pro_image/advanced-video-qa-pro-shell.webp",
      "/assets/advanced_video_qa_pro_image/video-play.webp",
      "/assets/advanced_video_qa_pro_image/provider-analysis.webp",
      "/assets/advanced_video_qa_pro_image/processing.webp",
      "/assets/advanced_video_qa_pro_image/chat-proof.webp"
    ],
    tech: ["Python", "PyQt / Desktop UX", "OpenCV", "Whisper", "Gemini Vision", "InnoSetup", "Windows Desktop"],
    highlights: [
      "Timestamp-precise video question answering with chat-based proof citations",
      "Multimodal video frame sampling and audio transcription pipeline",
      "Integrated desktop video player synchronized with AI conversational feed",
      "Packaged with a standalone Windows installer (.exe setup release)"
    ],
    architecture: "Python Multiprocessing + Whisper Audio Transcription + Vision LLM Provider + InnoSetup Packaging",
    actions: [
      {
        type: "github",
        label: "GitHub Repo",
        href: "https://github.com/hammad986/advanced-Video-QA-System"
      },
      {
        type: "download",
        label: "Download .exe Installer",
        href: "https://github.com/hammad986/advanced-Video-QA-System/releases/download/v1.0.0-rc.1/AdvancedVideoQAProSetup-1.0.0.exe"
      }
    ]
  },
  {
    id: "nexus-ai-ops",
    title: "Nexus AI Ops",
    type: "AI Operations Dashboard",
    category: "ai",
    description:
      "AI-native operational intelligence dashboard featuring real-time stream telemetry, conversational AI copilots, system health monitors, and predictive business insights.",
    longDescription:
      "Nexus AI Ops represents a modern control center for engineering and AI systems operations. It aggregates real-time metrics, system health diagnostics, live copilot chat assistance, automated performance incident reports, and custom configuration controls into a unified glassmorphic command console.",
    problem: "Engineering teams face fragmented monitoring tools that lack intelligent context, making root-cause analysis slow during system anomalies.",
    solution: "Created a unified operational command dashboard with real-time telemetry streams, interactive incident graphs, and an embedded AI copilot.",
    impactMetrics: [
      "Real-time stream telemetry with sub-second dashboard rendering",
      "Integrated AI incident copilot for instant anomaly diagnosis",
      "Exportable executive diagnostic reports and performance health checks"
    ],
    architectureSvg: "/assets/svg/nexus_ai_ops_architecture.svg",
    image: "/assets/nexus-ai-dashboard/homepage-dashboard.webp",
    gallery: [
      "/assets/nexus-ai-dashboard/homepage-dashboard.webp",
      "/assets/nexus-ai-dashboard/analytics.webp",
      "/assets/nexus-ai-dashboard/chats.webp",
      "/assets/nexus-ai-dashboard/report.webp",
      "/assets/nexus-ai-dashboard/settings.webp"
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Lucide React", "AI Copilot Integration", "Recharts"],
    highlights: [
      "Real-time operational telemetry and interactive analytics dashboard",
      "Embedded AI Copilot for automated incident diagnosis and log reasoning",
      "Exportable executive diagnostic reports and system health telemetry",
      "Ultra-responsive cyber-dark UI with glassmorphic command aesthetic"
    ],
    architecture: "Next.js App Router + WebSocket Mock / Stream Engine + Recharts Graphing + AI Copilot",
    actions: [
      {
        type: "live",
        label: "Live Dashboard",
        href: "https://agent-6a19df3590f41d64a4dbae2e--nexus-ai-ops.netlify.app/dashboard"
      }
    ]
  },
  {
    id: "image-toolkit-pro",
    title: "Image Toolkit Pro",
    type: "Windows Desktop Application",
    category: "vision",
    description:
      "High-performance desktop computer vision utility with annotation drawing tools, real-time object detection analytics, webcam recording, and batch image processing.",
    longDescription:
      "Image Toolkit Pro is a high-performance desktop workstation utility engineered for computer vision practitioners, content creators, and power users. Built in Python with OpenCV acceleration, it provides a full drawing suite, live webcam stream recording, neural detection analytics, batch format transformations, and preference persistence.",
    problem: "Power users and computer vision practitioners often rely on bloated image editors that cannot perform batch processing or real-time webcam detection.",
    solution: "Engineered a lightweight, multithreaded desktop workstation in Python with OpenCV hardware acceleration and zero external dependencies.",
    impactMetrics: [
      "Hardware-accelerated real-time webcam frame processing at 60 FPS",
      "Batch transformation pipeline capable of processing 100+ images in seconds",
      "Zero-dependency standalone portable Windows executable release"
    ],
    architectureSvg: "/assets/svg/image_toolkit_pro_architecture.svg",
    image: "/assets/imagetoolkit_images/01_workspace.webp",
    gallery: [
      "/assets/imagetoolkit_images/01_workspace.webp",
      "/assets/imagetoolkit_images/02_drawing_tools.webp",
      "/assets/imagetoolkit_images/03_detection_analytics.webp",
      "/assets/imagetoolkit_images/04_webcam_recording.webp",
      "/assets/imagetoolkit_images/05_batch_processing.webp",
      "/assets/imagetoolkit_images/06_preferences_about.webp"
    ],
    tech: ["Python 3.11", "OpenCV", "Computer Vision", "Tkinter/CustomTkinter", "PIL/Pillow", "Windows .exe"],
    highlights: [
      "Hardware-accelerated image drawing, filtering, and annotation tools",
      "Real-time webcam stream recording and object detection analytics",
      "Bulk batch processing for resolution scaling, format conversion, and watermarking",
      "Zero-dependency Windows portable executable release"
    ],
    architecture: "Python OpenCV Engine + Tkinter UI + Multithreaded Frame Processing + PyInstaller",
    actions: [
      {
        type: "github",
        label: "GitHub Repo",
        href: "https://github.com/hammad986/Image-Toolkit-Pro"
      },
      {
        type: "download",
        label: "Download .exe Executable",
        href: "https://github.com/hammad986/Image-Toolkit-Pro/releases/latest/download/ImageToolkitPro.exe"
      }
    ]
  },
  {
    id: "invoice-gen-pro",
    title: "Invoice Gen Pro",
    type: "Financial & Invoicing SaaS",
    category: "saas",
    description:
      "Modern financial billing and invoice generation platform with tax calculation engine, dynamic item lines, real-time PDF generation, and custom branding.",
    longDescription:
      "Invoice Gen Pro is a streamlined billing utility engineered for contractors, freelancers, and small businesses. It features dynamic itemization with real-time tax/discount math, customizable company branding, invoice history caching, and instantaneous professional PDF export.",
    image: "/assets/invoice-gen-pro-images/homepage.webp",
    gallery: [
      "/assets/invoice-gen-pro-images/homepage.webp",
      "/assets/invoice-gen-pro-images/new-invoice.webp",
      "/assets/invoice-gen-pro-images/setting.webp"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "jsPDF", "Lucide Icons", "Client Storage"],
    highlights: [
      "Real-time tax, discount, currency conversion, and line-item calculation engine",
      "Live dynamic PDF invoice generator with instant client preview",
      "Customizable business profile, payment bank details, and branding presets",
      "Secure client-side persistence for historical invoices and recurring clients"
    ],
    architecture: "Next.js + Client-side Storage + jsPDF Render Pipeline",
    actions: [
      {
        type: "github",
        label: "GitHub Profile",
        href: "https://github.com/hammad986"
      }
    ]
  }
];

export const certificatesList: CertificateItem[] = [
  // AI & Machine Learning
  {
    id: "andrew-ng-ml",
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI & Stanford Online (Andrew Ng)",
    category: "AI & Machine Learning",
    date: "Certified",
    filePath: "/assets/my certificates/andrew ng supervised machine learning certificate.pdf",
    fileType: "pdf",
    description: "Foundational ML mastery covering linear/logistic regression, cost function minimization, gradient descent optimization, and regularization under Professor Andrew Ng.",
    skills: ["Machine Learning", "Supervised Learning", "Linear Regression", "Logistic Regression", "Cost Functions", "Gradient Descent"],
    featured: true,
    credentialBadge: "Stanford / DeepLearning.AI"
  },
  {
    id: "gcp-genai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud Skills Boost",
    category: "AI & Machine Learning",
    date: "Certified",
    filePath: "/assets/my certificates/introduction to den ai studio.pdf",
    fileType: "pdf",
    description: "Enterprise generative AI workflows, model parameter tuning, prompt engineering, and multimodal foundation model deployment on Google Cloud Platform.",
    skills: ["Generative AI", "Google Cloud", "GenAI Studio", "Prompt Engineering", "Multimodal LLMs", "GCP"],
    featured: true,
    credentialBadge: "Google Cloud"
  },
  {
    id: "aws-intro-ml",
    title: "Introduction to Machine Learning on AWS",
    issuer: "Amazon Web Services (AWS)",
    category: "AI & Machine Learning",
    date: "Certified",
    filePath: "/assets/my certificates/intro to ml - aws.pdf",
    fileType: "pdf",
    description: "Cloud-native ML principles, data preparation, SageMaker pipeline orchestration, and end-to-end model training lifecycles on AWS.",
    skills: ["AWS Machine Learning", "SageMaker", "Model Lifecycle", "Cloud ML", "AWS Services"],
    featured: false,
    credentialBadge: "Amazon Web Services"
  },
  {
    id: "aws-ml-tech",
    title: "AWS Machine Learning Technical Essentials",
    issuer: "Amazon Web Services (AWS)",
    category: "AI & Machine Learning",
    date: "Certified",
    filePath: "/assets/my certificates/ml tech AWS certi.pdf",
    fileType: "pdf",
    description: "Technical deep-dive into AWS ML stack, SageMaker algorithms, natural language processing, and computer vision API integrations.",
    skills: ["AWS SageMaker", "NLP", "Computer Vision", "Technical ML", "Cloud Architecture"],
    featured: false,
    credentialBadge: "Amazon Web Services"
  },
  {
    id: "deloitte-genai-analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    category: "AI & Machine Learning",
    date: "Certified",
    filePath: "/assets/my certificates/GenAi Powered Data Analytics - Delloite Aus.pdf",
    fileType: "pdf",
    description: "Applied generative AI models to complex enterprise datasets, generating executive dashboards, automated query reasoning, and business strategy insights.",
    skills: ["GenAI Analytics", "Enterprise Data", "Deloitte Framework", "LLM Data Analysis", "Executive Insights"],
    featured: true,
    credentialBadge: "Deloitte Australia"
  },

  // Internships & Experience
  {
    id: "thirdvizion-intern",
    title: "AI/ML Engineering Internship Certification",
    issuer: "ThirdVizion",
    category: "Internships & Experience",
    date: "Active / Certified",
    filePath: "/assets/my certificates/thirdvizion certificate.png",
    fileType: "image",
    description: "Applied AI engineering, LLM pipeline orchestration, multimodal model integration, and building production-ready generative AI solutions.",
    skills: ["Production AI", "LLMs", "RAG Systems", "AI Automation", "Full-Stack AI Solutions"],
    featured: true,
    credentialBadge: "ThirdVizion"
  },
  {
    id: "labmentix-aiml",
    title: "AI/ML Engineering Internship Completion",
    issuer: "LabMentix Pvt. Ltd.",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/labmentix AIML Intern.pdf",
    fileType: "pdf",
    description: "Hands-on machine learning workflow engineering, predictive modeling, feature engineering, and neural network experimentation.",
    skills: ["Machine Learning", "Python", "Data Modeling", "AI Systems", "Neural Networks"],
    featured: true,
    credentialBadge: "LabMentix"
  },
  {
    id: "labmentix-exp-letter",
    title: "Official Recommendation & Experience Letter",
    issuer: "LabMentix Pvt. Ltd.",
    category: "Internships & Experience",
    date: "Verified",
    filePath: "/assets/my certificates/expirience letter by labmentix.pdf",
    fileType: "pdf",
    description: "Formal Letter of Recommendation recognizing outstanding technical performance, innovative AI problem solving, and professional work ethic.",
    skills: ["Engineering Excellence", "Professional Endorsement", "AI Engineering", "Team Leadership"],
    featured: false,
    credentialBadge: "Official Recommendation"
  },
  {
    id: "saiket-ds-intern",
    title: "Data Science Internship Completion",
    issuer: "Saiket Systems",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/saiket system.pdf",
    fileType: "pdf",
    description: "Comprehensive exploratory data analysis, statistical model building, ML benchmarking, and data visualization pipelines.",
    skills: ["Data Science", "EDA", "Statistical Analysis", "Scikit-Learn", "Data Wrangling"],
    featured: true,
    credentialBadge: "Saiket Systems"
  },
  {
    id: "saiket-offer-letter",
    title: "Machine Learning Internship Appointment Letter",
    issuer: "Saiket Systems",
    category: "Internships & Experience",
    date: "Verified",
    filePath: "/assets/my certificates/saiket_sys_ml_offer_letter.png",
    fileType: "image",
    description: "Official appointment and selection letter as Machine Learning Intern at Saiket Systems.",
    skills: ["Machine Learning", "Data Engineering", "Industry Appointment"],
    featured: false,
    credentialBadge: "Appointment Letter"
  },
  {
    id: "inambigous-intern-cert",
    title: "Data Analytics Internship Certificate",
    issuer: "InAmbigous Solutions",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/inambigous-DA-intern.png",
    fileType: "image",
    description: "Business analytics, customer retention analysis, relational SQL query design, and interactive KPI executive dashboards.",
    skills: ["Data Analytics", "SQL", "KPI Dashboards", "Business Intelligence"],
    featured: false,
    credentialBadge: "InAmbigous"
  },
  {
    id: "navodita-python-intern",
    title: "Python Development Internship Certificate",
    issuer: "Navodita Infotech",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/navodita.pdf",
    fileType: "pdf",
    description: "Python backend engineering, script automation, data manipulation pipelines, and modular object-oriented software architecture.",
    skills: ["Python", "Automation", "OOP Architecture", "Scripting", "Backend Logic"],
    featured: false,
    credentialBadge: "Navodita Infotech"
  },
  {
    id: "codebind-1",
    title: "CodeBind Technologies - Inplant Training & Engineering",
    issuer: "CodeBind Technologies",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/codebind 1.jpg",
    fileType: "image",
    description: "Comprehensive inplant training in web engineering, client-server communication, database design, and software lifecycle.",
    skills: ["Web Development", "Database Architecture", "Full Stack Basics", "Client-Server"],
    featured: false,
    credentialBadge: "CodeBind Technologies"
  },
  {
    id: "codebind-2",
    title: "CodeBind Technologies - Full Stack Web Workshop",
    issuer: "CodeBind Technologies",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/codebind 2.jpg",
    fileType: "image",
    description: "Intensive technical workshop covering responsive interface design, API integration, and front-end engineering.",
    skills: ["HTML/CSS/JS", "Responsive UI", "API Integration", "Frontend"],
    featured: false,
    credentialBadge: "CodeBind Technologies"
  },
  {
    id: "codebind-3",
    title: "CodeBind Technologies - Project Completion Certificate",
    issuer: "CodeBind Technologies",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/codebind 3.jpg",
    fileType: "image",
    description: "Verified completion of web application project build adhering to production standards.",
    skills: ["Project Delivery", "Full Stack Development", "Code Quality"],
    featured: false,
    credentialBadge: "CodeBind Technologies"
  },
  {
    id: "codebind-4",
    title: "CodeBind Technologies - Advanced Technical Training",
    issuer: "CodeBind Technologies",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/codebind 4.jpg",
    fileType: "image",
    description: "Hands-on software development training across software testing, logic optimization, and deployment.",
    skills: ["Software Engineering", "Logic Design", "Testing"],
    featured: false,
    credentialBadge: "CodeBind Technologies"
  },
  {
    id: "codebind-5",
    title: "CodeBind Technologies - Engineering Excellence & Participation",
    issuer: "CodeBind Technologies",
    category: "Internships & Experience",
    date: "Certified",
    filePath: "/assets/my certificates/codebind 5.jpg",
    fileType: "image",
    description: "Recognition of outstanding participation and technical problem solving during technology training programs.",
    skills: ["Technical Excellence", "Problem Solving", "Collaboration"],
    featured: false,
    credentialBadge: "CodeBind Technologies"
  },

  // Data Science & Analytics
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Consulting Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/Data Analytics-Delloite Aus.pdf",
    fileType: "pdf",
    description: "Real-world consulting scenario analyzing customer demographics, segmentation, data cleaning, and executive presentation storytelling.",
    skills: ["Data Analytics", "Customer Segmentation", "Data Wrangling", "Business Consulting", "Tableau/Excel"],
    featured: true,
    credentialBadge: "Deloitte Australia"
  },
  {
    id: "deloitte-data-vis",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Deloitte / Tata (Forage)",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/Data Visualisation-Delloite Aus.pdf",
    fileType: "pdf",
    description: "Executive chart design, storytelling with data, KPI mapping, and creating actionable decision-making visual dashboards.",
    skills: ["Data Visualization", "Executive Dashboards", "KPI Mapping", "Business Storytelling"],
    featured: true,
    credentialBadge: "Deloitte / Tata"
  },
  {
    id: "deloitte-aus-cert",
    title: "Technology & Data Analytics Masterclass",
    issuer: "Deloitte Australia",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/delloite australia certification.pdf",
    fileType: "pdf",
    description: "Consulting methodology, enterprise analytical workflows, and structured technical problem formulation.",
    skills: ["Enterprise Analytics", "Consulting Framework", "Data Strategy"],
    featured: false,
    credentialBadge: "Deloitte Australia"
  },
  {
    id: "inambigous-da-cert",
    title: "Data Analytics Professional Certification",
    issuer: "InAmbigous Solutions",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/inambigous-data analytics.pdf",
    fileType: "pdf",
    description: "Advanced relational data modeling, query optimization, KPI telemetry, and predictive customer modeling.",
    skills: ["Data Analytics", "SQL Modeling", "Predictive Analytics", "Business Metrics"],
    featured: false,
    credentialBadge: "InAmbigous Solutions"
  },
  {
    id: "data-science-for-all",
    title: "Data Science For All Professional Certificate",
    issuer: "Global Data Science Institute",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/data science for all.pdf",
    fileType: "pdf",
    description: "Data science foundational principles, statistical hypothesis testing, data visualization, and applied ML algorithms.",
    skills: ["Data Science", "Hypothesis Testing", "Python", "Data Wrangling", "Machine Learning"],
    featured: false,
    credentialBadge: "Data Science Institute"
  },
  {
    id: "ultimate-ds-course",
    title: "The Ultimate Job Ready Data Science Mastery",
    issuer: "Data Science Academy",
    category: "Data Science & Analytics",
    date: "Certified",
    filePath: "/assets/my certificates/The_Ultimate_Job_Ready_Data_Science_Course_Certificate.pdf",
    fileType: "pdf",
    description: "Comprehensive end-to-end curriculum covering Pandas, NumPy, Scikit-learn, statistical modeling, feature engineering, and model evaluation.",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Model Evaluation", "Data Pipelines"],
    featured: false,
    credentialBadge: "Data Science Academy"
  },

  // Cloud & Infrastructure
  {
    id: "oracle-cloud-oci",
    title: "Oracle Cloud Infrastructure (OCI) Foundations",
    issuer: "Oracle University",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/oracle Cloud infra certificate.png",
    fileType: "image",
    description: "Cloud computing fundamentals, OCI core compute architectures, Virtual Cloud Networks (VCN), IAM security policies, and Autonomous Database storage.",
    skills: ["Oracle Cloud (OCI)", "VCN Networking", "IAM Security", "Cloud Architecture", "Autonomous Database"],
    featured: true,
    credentialBadge: "Oracle Certified"
  },
  {
    id: "aws-data-eng",
    title: "AWS Certified Data Engineer Associate (DEA-C01)",
    issuer: "Amazon Web Services",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/data-eng-associate-AWS-certi.pdf",
    fileType: "pdf",
    description: "Scalable data lake architecture, AWS Glue ETL orchestration, Amazon Athena, Amazon Redshift, and secure data streaming with Kinesis.",
    skills: ["AWS Data Engineering", "AWS Glue", "Amazon Redshift", "Athena", "ETL Pipelines", "Data Lakes"],
    featured: true,
    credentialBadge: "AWS Data Engineer"
  },
  {
    id: "aws-cloud-completion",
    title: "AWS Solutions Architecture & Cloud Foundations",
    issuer: "Amazon Web Services Training",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/aws completion certi.pdf",
    fileType: "pdf",
    description: "Architecting resilient, highly available cloud systems, S3 storage tiers, VPC networking, and security governance on AWS.",
    skills: ["AWS Cloud", "Solutions Architecture", "EC2/S3/VPC", "High Availability"],
    featured: false,
    credentialBadge: "Amazon Web Services"
  },
  {
    id: "nasscom-digital-101",
    title: "Digital 101 - 30 Hours Technology Foundation",
    issuer: "NASSCOM FutureSkills Prime",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/Digital 101 - 30 hours NASSCOM.pdf",
    fileType: "pdf",
    description: "Government and industry-accredited 30-hour comprehensive program covering cloud computing, big data, cybersecurity, and digital ecosystems.",
    skills: ["NASSCOM Accredited", "Cloud Foundations", "Digital Transformation", "Emerging Tech"],
    featured: true,
    credentialBadge: "NASSCOM FutureSkills"
  },
  {
    id: "cloud-cert-specialist-1",
    title: "Cloud Infrastructure Architecture Certificate",
    issuer: "Global Cloud Institute",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/certificate-8wwmoapgbtur-1781420184.pdf",
    fileType: "pdf",
    description: "Scalable cloud deployment architectures, containerization fundamentals, serverless computing, and enterprise security.",
    skills: ["Cloud Computing", "Containerization", "Serverless", "Security"],
    featured: false,
    credentialBadge: "Cloud Certified"
  },
  {
    id: "cloud-cert-specialist-2",
    title: "Technical Systems & Infrastructure Specialist",
    issuer: "Global Cloud Institute",
    category: "Cloud & Infrastructure",
    date: "Certified",
    filePath: "/assets/my certificates/certificate-94ndt4eihrne-1781421142.pdf",
    fileType: "pdf",
    description: "Core technical infrastructure operations, distributed systems concepts, and operational telemetry monitoring.",
    skills: ["Distributed Systems", "Infrastructure", "Telemetry", "Reliability"],
    featured: false,
    credentialBadge: "Infrastructure Specialist"
  },

  // Development & Programming
  {
    id: "python-bootcamp-2025",
    title: "Complete 2025 Python Bootcamp: Zero to Hero",
    issuer: "Udemy / Global Academy",
    category: "Development & Programming",
    date: "Certified",
    filePath: "/assets/my certificates/[English]_Complete_2025_Python_Bootcamp__Learn_Python_from_Scratch_Certificate.pdf",
    fileType: "pdf",
    description: "In-depth Python programming: OOP architecture, decorators, generators, asynchronous execution, web APIs, unit testing, and automation scripts.",
    skills: ["Python 3", "OOP Architecture", "Decorators & Generators", "AsyncIO", "Unit Testing", "APIs"],
    featured: true,
    credentialBadge: "Python Mastery"
  },
  {
    id: "python-cert-mastery",
    title: "Advanced Python for Data Science & AI",
    issuer: "Professional Tech Academy",
    category: "Development & Programming",
    date: "Certified",
    filePath: "/assets/my certificates/python_certificates.pdf",
    fileType: "pdf",
    description: "High-performance Python computing: NumPy vectorized math, Pandas dataframes, file IO automation, and API integration architectures.",
    skills: ["Python", "NumPy Vectorization", "Data Pipelines", "Performance Scripting"],
    featured: false,
    credentialBadge: "Python Academy"
  },

  // Professional Programs & Honors
  {
    id: "iit-guwahati-partnership",
    title: "Partnership & Innovation Excellence Certificate",
    issuer: "IIT Guwahati & Industry Partners",
    category: "Professional Programs",
    date: "Honored",
    filePath: "/assets/my certificates/Partnership Excelence Certificate.pdf",
    fileType: "pdf",
    description: "Recognized for exemplary innovation, collaborative problem solving, and technological contributions by IIT Guwahati industry partner initiatives.",
    skills: ["IIT Guwahati Honor", "Innovation Excellence", "Problem Solving", "Technical Leadership"],
    featured: true,
    credentialBadge: "IIT Guwahati & Partners"
  },
  {
    id: "kulturehire-problem-solving",
    title: "Problem Solving with AI & Technical Documentation",
    issuer: "KultureHire AI Institute",
    category: "Professional Programs",
    date: "Certified",
    filePath: "/assets/my certificates/problem Solving with AI and documentation_certificate.pdf",
    fileType: "pdf",
    description: "AI-assisted technical architecture design, system documentation drafting, prompt workflows, and structured engineering communication.",
    skills: ["AI Problem Solving", "System Specs", "Technical Documentation", "Prompt Engineering"],
    featured: false,
    credentialBadge: "KultureHire AI"
  },
  {
    id: "nism-financial-markets",
    title: "NISM Financial Markets & Quantitative Analytics",
    issuer: "National Institute of Securities Markets (NISM)",
    category: "Professional Programs",
    date: "Certified",
    filePath: "/assets/my certificates/NISM certificate.pdf",
    fileType: "pdf",
    description: "Securities market mechanics, quantitative financial risk models, algorithmic market structures, and compliance frameworks.",
    skills: ["NISM Certified", "Financial Analytics", "Securities Markets", "Risk Modeling"],
    featured: true,
    credentialBadge: "NISM Certified"
  },
  {
    id: "iei-engineering-award",
    title: "IEI Technical Innovation & Engineering Certificate",
    issuer: "Institution of Engineers (India) / ESC",
    category: "Professional Programs",
    date: "Honored",
    filePath: "/assets/my certificates/IEIESC-cer.pdf",
    fileType: "pdf",
    description: "Technical engineering accolade recognizing excellence in engineering logic, innovation, and active technical participation.",
    skills: ["IEI Technical Recognition", "Engineering Innovation", "System Design"],
    featured: false,
    credentialBadge: "IEI India"
  },
  {
    id: "naan-mudhalvan-ai",
    title: "Naan Mudhalvan Advanced AI & Data Analytics",
    issuer: "Tamil Nadu Skill Development Corporation (TNSDC)",
    category: "Professional Programs",
    date: "Certified",
    filePath: "/assets/my certificates/naan mudhalvan cer.pdf",
    fileType: "pdf",
    description: "Government-accredited advanced skill certification in emerging AI technologies, machine learning algorithms, and real-world data analytics pipelines.",
    skills: ["Naan Mudhalvan", "Government Accredited", "Emerging AI", "Data Analytics"],
    featured: true,
    credentialBadge: "TNSDC Govt. Accredited"
  },
  {
    id: "naan-mudhalvan-specialist",
    title: "Naan Mudhalvan Technical Specialist Certification",
    issuer: "Tamil Nadu Skill Development Corporation (TNSDC)",
    category: "Professional Programs",
    date: "Certified",
    filePath: "/assets/my certificates/naan mudhalvan cer1.pdf",
    fileType: "pdf",
    description: "Specialized technical training certification in modern computational software, algorithmic logic, and industry application engineering.",
    skills: ["TNSDC Govt.", "Software Logic", "Computational Methods"],
    featured: false,
    credentialBadge: "TNSDC Govt."
  }
];

export const experience = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Saiket Systems",
    period: "Ongoing (2026)",
    location: "Remote",
    detail: "Developing advanced Machine Learning algorithms, predictive analytics pipelines, model evaluation, and automated ML feature engineering. Offer letter confirmed.",
    skills: ["Machine Learning", "Python", "Predictive Analytics", "Feature Engineering", "Model Evaluation"],
    certId: "saiket-offer-letter"
  },
  {
    role: "AI/ML Engineer Intern",
    company: "ThirdVizion",
    period: "July 1, 2026 - July 31, 2026 (Completed)",
    location: "Remote / Hybrid",
    detail: "Engineered state-of-the-art Generative AI applications, autonomous agents, LLM pipelines, prompt reasoning frameworks, and production-grade full-stack AI integrations.",
    skills: ["GenAI", "LLMs", "RAG Systems", "AI Agents", "LangChain", "Next.js"],
    certId: "thirdvizion-intern"
  },
  {
    role: "Data Analytics Intern",
    company: "InAmbigous Solutions",
    period: "Completed",
    location: "Remote",
    detail: "Executed data analytics pipelines, exploratory data analysis, KPI dashboard reporting, and relational SQL query optimization.",
    skills: ["Data Analytics", "SQL", "Pandas", "Dashboard Reporting", "Business Analytics"],
    certId: "inambigous-intern-cert"
  },
  {
    role: "AI/ML Intern",
    company: "LabMentix Pvt. Ltd.",
    period: "Completed",
    location: "Remote",
    detail: "Built applied machine learning workflows, model-centered product features, predictive analysis pipelines, and neural network experiments. Received official Letter of Recommendation.",
    skills: ["Machine Learning", "Python", "Data Modeling", "Scikit-Learn", "Neural Networks"],
    certId: "labmentix-aiml"
  },
  {
    role: "Data Science Intern",
    company: "Saiket Systems",
    period: "Completed",
    location: "Remote",
    detail: "Executed exploratory data analysis (EDA), data wrangling, model benchmarking, and created executive visualization dashboards for data-driven decisions.",
    skills: ["Data Science", "EDA", "Statistical Analysis", "Tableau", "Pandas"],
    certId: "saiket-ds-intern"
  },
  {
    role: "Python Developer Intern",
    company: "Navodita Infotech",
    period: "Completed",
    location: "Remote",
    detail: "Developed modular Python backends, automation scripts, OOP software architectures, and automated scraping/extraction pipelines.",
    skills: ["Python", "Automation", "OOP", "Scripting", "APIs"],
    certId: "navodita-python-intern"
  },
  {
    role: "Web Development Intern",
    company: "CodeBind Technologies",
    period: "Completed",
    location: "On-site",
    detail: "Developed modern web application front-ends, responsive interfaces, database connectivity, and production-oriented software workflows.",
    skills: ["Web Dev", "HTML/CSS/JS", "PHP", "MySQL", "UI/UX"],
    certId: "codebind-1"
  }
];

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/30",
    items: [
      "Generative AI",
      "LLM Applications",
      "RAG Architecture",
      "Autonomous Agents",
      "LangChain",
      "Prompt Engineering",
      "Vector Embeddings",
      "Semantic Search",
      "Computer Vision (OpenCV)",
      "Whisper & Multimodal AI"
    ]
  },
  {
    title: "Programming & Languages",
    icon: Code2,
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "C/C++ Basics", "HTML5/CSS3", "Bash"]
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    items: ["NumPy", "Pandas", "Scikit-learn", "EDA", "Statistical Modeling", "Power BI", "Tableau", "Recharts"]
  },
  {
    title: "Frontend Engineering",
    icon: Layers,
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    items: ["React 19", "Next.js 15 (App Router)", "Three.js / WebGL", "Tailwind CSS", "Framer Motion", "Shadcn UI", "GSAP"]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    items: ["REST APIs", "Node.js", "Python FastAPI/Flask", "MySQL", "PHP", "Authentication & JWT", "Client-side Storage"]
  },
  {
    title: "Cloud, DevOps & Infra",
    icon: Cloud,
    gradient: "from-sky-500/20 to-indigo-500/20",
    border: "border-sky-500/30",
    items: ["AWS (SageMaker, S3, Glue)", "Oracle Cloud (OCI)", "Netlify", "Vercel", "Git & GitHub CI/CD", "InnoSetup"]
  },
  {
    title: "AI Ecosystems & Local LLMs",
    icon: Bot,
    gradient: "from-rose-500/20 to-red-500/20",
    border: "border-rose-500/30",
    items: ["OpenAI API", "Claude 3.5", "Google Gemini 1.5/2.0", "Ollama", "LM Studio", "Hugging Face", "OpenRouter", "DeepSeek"]
  },
  {
    title: "Desktop Application Engineering",
    icon: MonitorDown,
    gradient: "from-violet-500/20 to-blue-500/20",
    border: "border-violet-500/30",
    items: ["PyQt / Tkinter", "OpenCV Video Engines", "PyInstaller", "Windows InnoSetup Installers", "Multithreaded GUI"]
  }
];

export const githubStats = [
  { label: "Public Repositories", value: "30+", detail: "AI applications, dashboards, desktop tools & libraries" },
  { label: "Active Commit Rhythm", value: "Continuous", detail: "Daily production commits and generative AI experiments" },
  { label: "Core Focus", value: "AI Product Engineering", detail: "Applied GenAI, autonomous systems & desktop utilities" }
];

export const aetherionHighlights = [
  { icon: Bot, label: "Autonomous intelligence", desc: "Self-directing agent swarms capable of goal planning." },
  { icon: Network, label: "Agentic workflows", desc: "Dynamic multi-step reasoning with tool orchestration." },
  { icon: FileText, label: "Deep knowledge systems", desc: "Hybrid semantic & graph RAG knowledge indexing." },
  { icon: MonitorDown, label: "Product-grade interfaces", desc: "Zero-latency real-time telemetry and fluid user control." }
];

export const terminalCommands = {
  help: `Available commands:
  • about      - Learn about Muhammed Hammad & engineering philosophy
  • skills     - View core technology stack and AI specialties
  • projects   - List featured live AI products & desktop apps
  • certs      - View summary of 37+ verified credentials
  • contact    - Get direct email, phone, and social handles
  • hire       - Reasons to hire Hammad & quick contact CTA
  • clear      - Clear the console screen
  • aetherion  - Sneak peek at Aetherion AI architecture`,

  about: `Muhammed Hammad | AI/ML Engineer & Full-Stack GenAI Builder
Location: India | Open for Global Remote & High-Impact Roles
Focus: Engineering intelligent systems, autonomous agent swarms, and product-grade AI applications.
Currently developing Aetherion AI and interning at ThirdVizion.`,

  skills: `⚡ AI & ML: Generative AI, RAG Systems, Autonomous Agents, LLM Fine-Tuning, OpenCV, Whisper
⚡ Languages: Python, TypeScript, JavaScript, SQL, PHP, Bash
⚡ Frontend: Next.js 15, React 19, Three.js/WebGL, Tailwind CSS, Framer Motion
⚡ Cloud & Data: AWS (SageMaker, Data Eng), Oracle OCI, Pandas, NumPy, Scikit-learn`,

  projects: `🚀 1. DealFlow CRM - Advanced client pipeline & analytics (Live)
🚀 2. Smart Doc AI - Multimodal document intelligence platform (Live)
🚀 3. AI Proposal Writer - Generative AI client proposal SaaS (Live)
🚀 4. Advanced Video QA System - Desktop multimodal video analysis (.exe)
🚀 5. Nexus AI Ops - AI operations & real-time telemetry dashboard (Live)
🚀 6. Image Toolkit Pro - Computer vision desktop workstation (.exe)
🚀 7. Invoice Gen Pro - Dynamic financial billing SaaS`,

  certs: `🏆 37+ Verified Industry Credentials spanning:
• Stanford / DeepLearning.AI Supervised Machine Learning (Andrew Ng)
• Google Cloud Generative AI Studio
• AWS Machine Learning & AWS Data Engineer Associate (DEA-C01)
• Deloitte Australia Data Analytics & GenAI Consulting
• Oracle Cloud Infrastructure (OCI) Foundations
• IIT Guwahati Partnership Excellence Award
• NASSCOM Digital 101 Accredited & 5x Internship Completions`,

  contact: `📬 Email: mdhammad2906@gmail.com
📱 Phone: +91 6369740522
💻 GitHub: https://github.com/hammad986
💼 LinkedIn: https://www.linkedin.com/in/muhammed-hammad-42659726a
🌐 Portfolio: https://hammad.dpdns.org`,

  hire: `🎯 Ready to build game-changing AI products together!
✓ Proven track record with 24+ built projects & 37+ verified credentials
✓ Full lifecycle AI engineering: from raw LLM reasoning to polished web & desktop UIs
✓ Fast, proactive communicator with an relentless drive for excellence.
👉 Email: mdhammad2906@gmail.com to start the conversation!`,

  aetherion: `🌌 Aetherion AI [Status: Active Stealth Development]
Autonomous multi-agent intelligence platform designed for complex real-world workflows,
multi-step cognitive reasoning, and enterprise automation.`
};

