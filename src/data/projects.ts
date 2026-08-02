export type ProjectCategory =
  | "AI & Machine Learning"
  | "Backend & Infrastructure"
  | "Developer Tools"
  | "Full-Stack"
  | "Automation";

export type ProjectStatus = "Active Development" | "MVP" | "Prototype";

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  categories: ProjectCategory[];
  year: string;
  type: string;
  href?: string;
  github?: string;
  slug?: string;
  impact?: string;
  context?: string;
  approach?: string;
  tech?: string[];
  links?: { label: string; url: string }[];
  status?: ProjectStatus;
  overview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  techDecisions?: string[];
  lessons?: string[];
  roadmap?: string[];
  related?: string[];
};

export const featuredProjects: Project[] = [
  {
    title: "BinarySync",
    description:
      "A high-performance, cloud-native file versioning system that uses content-defined chunking (CDC) to transfer and store only the modified portions of large binary assets — minimizing bandwidth and storage for multi-gigabyte files.",
    longDescription:
      "Traditional file-sharing systems re-upload entire files on every change. For multi-gigabyte binary assets — datasets, disk images, game bundles — a single localized edit causes massive duplication. BinarySync solves this with a rolling Gear hash algorithm that draws dynamic chunk boundaries, making it resilient to insertions and deletions anywhere in the file. Only the changed chunks are re-uploaded; identical chunks across versions are stored exactly once via SHA-256 content addressing.",
    tags: ["Java", "Spring Boot", "AWS S3", "Virtual Threads"],
    categories: ["Backend & Infrastructure", "Developer Tools"],
    year: "2026",
    type: "Personal Project",
    slug: "binarysync",
    github: "https://github.com/saivijayragav/binarysync",
    status: "Active Development",
    context:
      "Working with large binary datasets during my ML internships, I experienced firsthand how painful it was to version and sync multi-gigabyte files. Existing tools either re-uploaded everything or used fixed-size chunking that broke on the smallest edit.",
    approach:
      "I implemented content-defined chunking using a Gear hash rolling algorithm, built on Java 21 Virtual Threads for parallel S3 transfers. The system uses H2 for chunk metadata and S3 for blob storage with a partitioned key scheme for optimized lookup. The client-server protocol supports delta sync — clients declare local chunks and only missing ones are transferred.",
    impact:
      "Reduced upload sizes by 60-90% for typical binary file edits. The system handles files of any size with constant memory overhead per chunk.",
    tech: ["Java 21", "Spring Boot 3.5", "AWS S3", "H2 Database", "Virtual Threads", "REST APIs"],
    overview:
      "BinarySync is a versioning and sync engine built for large binary assets. Instead of treating a file as one opaque blob, it slices it into content-addressed chunks, so a version history can share storage and transfers can move only what actually changed.",
    problem:
      "Large binary files break conventional versioning. A 4 GB dataset that gets a 100 MB edit forces a full re-upload with typical tools, and fixed-size chunking means even an insertion in the middle of a file invalidates every subsequent chunk. The result is wasted bandwidth, duplicated storage, and slow syncs for exactly the assets where data changes matter most.",
    solution:
      "BinarySync computes chunk boundaries from the content itself using a rolling Gear hash, so a local edit only alters the chunks around it. Chunks are addressed by their SHA-256 hash, making deduplication automatic across versions. A manifest tracks which chunks each version references, and a delta-sync protocol asks the server only for the chunks a client is missing.",
    keyFeatures: [
      "Content-defined chunking using a rolling Gear hash",
      "Delta synchronization with chunk-level uploads",
      "SHA-256 content-addressed deduplication",
      "Cloud-native object storage using AWS S3",
      "Java 21 Virtual Threads for parallel transfers",
      "Constant-memory chunk processing for large binary assets",
    ],
    techDecisions: [
      "Gear hash over cryptographic hashing for boundary detection — it is fast enough to run over every byte while staying resistant to edits shifting the stream.",
      "Content addressing with SHA-256 so identical chunks are stored once, regardless of which version references them.",
      "Virtual Threads for transfer parallelism — blocking I/O without the complexity of a thread-per-chunk pool.",
      "A partitioned S3 key scheme so chunk lookup stays flat and predictable at scale.",
      "H2 for chunk metadata to keep a self-contained, testable control plane.",
    ],
    lessons: [
      "Fixed-size chunking is deceptively simple until you insert one byte in the middle of a multi-gigabyte file. Content-defined chunking is the correct mental model from day one.",
      "The client-server protocol design matters as much as the storage layer — declaring local chunks up front turns a transfer problem into a set-difference problem.",
      "Constant memory is a feature. The system stays usable on developer laptops even for files that exceed RAM.",
    ],
    roadmap: [
      "cdc-java: publish the core chunking library as a reusable artifact",
      "SDK for other languages and a documented client API",
      "Dedicated documentation site",
      "A reproducible benchmarks page with real transfer numbers",
    ],
    related: ["ai-service-orchestrator", "aegis"],
  },
  {
    title: "NeuroScreen",
    description:
      "An AI-powered autism screening platform combining behavioral questionnaires with ML-based risk assessment, AI-assisted therapy recommendations, and interactive screening tools.",
    longDescription:
      "Early autism screening is critical for timely intervention, but specialist access is limited. NeuroScreen is evolving into a multimodal screening platform that combines a behavioral questionnaire with skeletal motion analysis, AI-generated therapy recommendations, and progress tracking — with a modern web interface built on Next.js and FastAPI.",
    tags: ["Python", "FastAPI", "Next.js", "ST-GCN"],
    categories: ["AI & Machine Learning", "Full-Stack"],
    year: "2026",
    type: "Healthcare AI",
    slug: "neuroscreen",
    github: "https://github.com/saivijayragav/Neuroscreen",
    status: "Active Development",
    context:
      "Access to autism screening specialists often involves months of waiting. I wanted to build a tool that could provide immediate, data-driven screening support while keeping the clinician in the loop.",
    approach:
      "The platform combines a behavioral screening questionnaire with skeletal motion analysis using an ST-GCN model, AI-assisted therapy recommendations, and progress tracking. The FastAPI backend handles ML inference while Next.js provides the screening and clinician-facing interface.",
    impact:
      "Brings an initial, data-driven screening signal to families before specialist access — evaluation metrics from the final ST-GCN model will be published on the project page.",
    tech: ["FastAPI", "ST-GCN", "Next.js", "PostgreSQL", "Docker"],
    overview:
      "NeuroScreen is a multimodal autism screening platform. It brings together a behavioral questionnaire, skeletal motion analysis, AI-assisted recommendations, and progress tracking into a single modern web application.",
    problem:
      "Early intervention changes outcomes, yet specialist access involves long waitlists and families lack an immediate, trustworthy screening signal. Existing digital screening tools are largely single-signal and leave families without clear next steps.",
    solution:
      "NeuroScreen layers multiple screening signals — a validated behavioral questionnaire and skeletal motion analysis through an ST-GCN model — to produce a risk assessment. AI-assisted therapy recommendations and progress tracking give families something actionable while they wait for a specialist.",
    keyFeatures: [
      "Skeletal motion analysis using an ST-GCN model",
      "Behavioral screening questionnaire for autism risk assessment",
      "AI-assisted therapy recommendations",
      "Progress tracking for continuous monitoring",
      "Modern web interface built with Next.js and FastAPI",
      "Modular architecture supporting future speech-based screening",
    ],
    techDecisions: [
      "ST-GCN for skeleton-based activity analysis — graph convolutions are a natural fit for body-joint topology.",
      "FastAPI for the ML backend so model inference, scheduling, and report generation share one service boundary.",
      "A modular pipeline design so speech analysis can be added as a new stage without reworking existing screening flows.",
      "PostgreSQL for structured screening records and longitudinal progress data.",
    ],
    lessons: [
      "Screening is a signal, not a diagnosis. The interface and language must keep clinicians firmly in the loop.",
      "A multimodal system is only as honest as its weakest evaluated stage — publishing only final-model metrics matters.",
      "Designing for future stages (like speech) from the start keeps the architecture from ossifying.",
    ],
    roadmap: [
      "Publish evaluation metrics from the final ST-GCN model",
      "Speech-based screening as an additional pipeline stage (planned)",
      "Longitudinal progress analytics for clinicians",
      "Expand to additional behavioral instruments",
    ],
    related: ["eva", "ai-service-orchestrator"],
  },
  {
    title: "AI Service Orchestrator",
    description:
      "A declarative AI workflow orchestration engine that executes YAML-defined multi-step AI workflows, enabling teams to chain AI services into autonomous agents without writing orchestration code.",
    longDescription:
      "AI Service Orchestrator is a Spring Boot control plane that turns YAML workflow definitions into running AI pipelines. Workflows can branch, retry, and run steps in parallel, while providers are abstracted behind OpenAPI-compatible interfaces so new AI services plug in without changing workflow code.",
    tags: ["Java", "Spring Boot", "AI Workflows", "YAML"],
    categories: ["AI & Machine Learning", "Backend & Infrastructure"],
    year: "2026",
    type: "Open Source",
    slug: "ai-service-orchestrator",
    github: "https://github.com/saivijayragav/AI-Service-Orchestrator",
    status: "Active Development",
    context:
      "Orchestrating multiple AI services by hand means writing glue code that retries, branches, and sequences calls. I wanted a control plane that made those patterns declarative.",
    approach:
      "A Spring Boot engine parses YAML workflow definitions into a DAG and executes steps with retry, branching, and parallelism. Providers are registered behind a common interface so services can be swapped without touching workflows.",
    impact:
      "Turns multi-step AI orchestration into a configuration problem rather than a coding problem, and makes pipelines inspectable and reproducible.",
    tech: ["Java", "Spring Boot", "YAML", "OpenAPI"],
    overview:
      "AI Service Orchestrator is a control plane for AI workflows. Teams define multi-step pipelines as YAML and the engine handles execution, retries, branching, and parallelism — no orchestration glue code required.",
    problem:
      "Composing AI services means writing custom code for sequencing, error handling, and parallelization. Every new pipeline duplicates that glue, and the logic is hidden inside application code instead of being visible and versionable.",
    solution:
      "Workflows are declared in YAML and executed by a Spring Boot engine. Steps run sequentially or in parallel, can branch, and retry on failure. Providers are abstracted behind OpenAPI-compatible interfaces, so the same workflow can target different AI backends without modification.",
    keyFeatures: [
      "Declarative YAML-based AI workflow definition",
      "Execution engine for multi-step AI pipelines",
      "Provider abstraction through OpenAPI-compatible interfaces",
      "Support for branching, retries, and parallel execution",
      "Extensible architecture for integrating additional AI providers",
      "No-code approach to agent orchestration",
    ],
    techDecisions: [
      "YAML as the workflow DSL — declarative, diffable, and reviewable in pull requests.",
      "DAG execution model so dependencies are explicit and parallelism is safe by construction.",
      "Provider abstraction behind a stable interface so adding a model vendor is additive rather than invasive.",
      "Retries and branching as first-class workflow primitives rather than code concerns.",
    ],
    lessons: [
      "Workflow engines are about making the common path boring and the exceptional path explicit.",
      "A clean provider interface is the difference between an integration and a platform.",
      "Reproducibility is a side effect of declarative definitions — a workflow is also a record of what ran.",
    ],
    roadmap: [
      "Richer step control: cancellation and timeouts as workflow primitives",
      "Workflow observability and step-level tracing",
      "Additional built-in provider adapters",
      "A visual workflow editor",
    ],
    related: ["binarysync", "aegis"],
  },
  {
    title: "Printing Shop Management",
    description:
      "A full-stack campus print automation platform designed for campus-scale workflows, featuring document uploads, dynamic pricing, Razorpay payments, and real-time order tracking across iOS and Android.",
    longDescription:
      "Built for a campus-scale print workflow, this platform digitizes the entire print shop process — from file upload and configuration to payment and real-time tracking. Students upload documents, customize print settings, get instant price calculations, and track orders as they move through production.",
    tags: ["Flutter", "Spring Boot", "Cloudflare R2", "Razorpay", "Firebase"],
    categories: ["Full-Stack", "Backend & Infrastructure"],
    year: "2025",
    type: "Full-Stack",
    slug: "printing-shop",
    github: "https://github.com/saivijayragav/Printout-Shop-Automation",
    status: "MVP",
    context:
      "The campus print shop handled hundreds of orders daily through a manual workflow — students emailed files, waited for confirmation, and had no visibility into order status. The process was slow and error-prone.",
    approach:
      "Built a Flutter cross-platform app with a Spring Boot REST API backend. Cloudflare R2 handles file storage at scale, Razorpay processes payments, and Firebase enables real-time push notifications. Dynamic pricing adjusts based on page count, color, and quality selections.",
    impact:
      "Designed for a campus-scale workflow, eliminating the manual order workflow and providing real-time visibility into print job status. The system is built to handle high-volume uploads during exam seasons.",
    tech: ["Flutter", "Spring Boot", "Cloudflare R2", "Razorpay", "Firebase Auth", "Firebase Messaging"],
    overview:
      "Printing Shop Management digitizes the end-to-end print workflow for a campus-scale shop — upload, configure, price, pay, and track orders in real time from a mobile app.",
    problem:
      "A busy campus print shop ran on emailed files and manual confirmations. Students had no pricing transparency and no visibility into when their print job would be ready, and the shop's workload was unmanageable during exam seasons.",
    solution:
      "A Flutter app lets students upload documents, configure print settings, and see instant prices. Payments run through Razorpay, files are stored on Cloudflare R2, and Firebase drives authentication and real-time notifications. An administrative dashboard manages the order queue and production workflow.",
    keyFeatures: [
      "Cross-platform mobile application",
      "Dynamic print pricing engine",
      "Razorpay payment integration",
      "Cloudflare object storage for document management",
      "Firebase-powered authentication and notifications",
      "Administrative dashboard for order management",
    ],
    techDecisions: [
      "Flutter for a single codebase across iOS and Android, with native-feeling UX.",
      "Razorpay for a payment flow that works in the Indian market without custom PCI scope.",
      "Cloudflare R2 for object storage with predictable pricing and no egress surprises.",
      "Firebase for real-time push notifications and auth so state sync stays simple.",
      "Spring Boot REST API as the source of truth for orders, pricing, and inventory.",
    ],
    lessons: [
      "Real-world deployment is a product exercise, not just a code exercise — the college ultimately did not grant deployment approval.",
      "Dynamic pricing is a small engine in disguise; getting its rules right matters more than the UI around it.",
      "Notifications turn a tool into a service — real-time order tracking is the feature users feel.",
    ],
    roadmap: [
      "Administrative dashboard refinement and production analytics",
      "Multi-shop support",
      "Alternative payment and notification providers",
      "Seek a deployment partner to run a live pilot",
    ],
    related: ["querypilot", "job-sniper"],
  },
  {
    title: "Evidence Verification Agent",
    description:
      "An AI-powered multimodal evidence verification platform for assessing the authenticity of news and video content, integrating deepfake detection, evidence-backed article verification, and real-time browser extension analysis.",
    longDescription:
      "Evidence Verification Agent (EVA) is a multimodal evidence verification platform. It combines CNN-based video deepfake detection with LLM-assisted news credibility assessment and evidence retrieval, packaged for real-time use through a browser extension.",
    tags: ["Python", "FastAPI", "Deep Learning", "Chrome Extension"],
    categories: ["AI & Machine Learning"],
    year: "2026",
    type: "AI Application",
    slug: "eva",
    github: "https://github.com/saivijayragav/Evidence-Verification-System",
    status: "Prototype",
    context:
      "Misinformation moves faster than manual fact-checking. I wanted to explore whether a single pipeline could surface authenticity signals across both video and news text before a claim spreads.",
    approach:
      "A multimodal pipeline where CNNs assess video authenticity, LLMs assist with news credibility, and an evidence retrieval stage backs up claims. A Chrome extension brings these signals to the user in real time.",
    impact:
      "A prototype that demonstrates a practical, in-browser path from media to authenticity signal.",
    tech: ["Python", "FastAPI", "CNN", "Chrome Extension"],
    overview:
      "Evidence Verification Agent is a multimodal evidence verification platform. It analyzes video and news content for authenticity signals and surfaces them to users in real time through a browser extension.",
    problem:
      "Deepfakes and viral misinformation are consumed on platforms where users have seconds to judge credibility. Existing verification tools are manual, slow, and out of reach for the typical reader or viewer.",
    solution:
      "Evidence Verification Agent runs CNN-based video deepfake detection and LLM-assisted news credibility assessment through a single pipeline. An evidence retrieval stage grounds assessments in sources, and a Chrome extension brings the results to the user's current tab.",
    keyFeatures: [
      "Video deepfake detection using CNNs",
      "AI-assisted news credibility assessment",
      "Evidence-backed article verification",
      "Real-time browser extension integration",
      "Multimodal verification pipeline",
      "Source attribution for analyzed news content",
    ],
    techDecisions: [
      "CNNs for video authenticity classification, focusing on spatial artifacts.",
      "LLM-assisted assessment for news credibility with an evidence-retrieval grounding stage to reduce hallucinated reasoning.",
      "A browser extension as the delivery surface because that is where misinformation is actually encountered.",
      "FastAPI backend to keep the pipeline callable from both the extension and a web dashboard.",
    ],
    lessons: [
      "Verification is a trust product — confidence, provenance, and sourcing matter as much as the model output.",
      "Grounding LLM assessments in retrievable evidence is non-negotiable for anything presented as fact.",
      "Prototype first, prove the signal, then scale the infrastructure.",
    ],
    roadmap: [
      "Publish evaluation metrics for the CNN model",
      "Expanded evidence sources and better source attribution",
      "Support for additional video and audio modalities",
      "A public demo and dataset release",
    ],
    related: ["neuroscreen", "ai-service-orchestrator"],
  },
];

export type ArchiveProject = {
  title: string;
  description: string;
  tags: string[];
  categories: ProjectCategory[];
  github?: string;
  stars?: number;
};

export const advancedSupportingProjects: ArchiveProject[] = [
  {
    title: "QueryPilot",
    description:
      "Schema-aware AI database copilot for safe SQL generation — understands your schema and validates queries before execution.",
    tags: ["Python", "NLP", "SQL"],
    categories: ["AI & Machine Learning", "Backend & Infrastructure"],
    github: "https://github.com/saivijayragav/QueryPilot",
  },
  {
    title: "Privacy Firewall",
    description:
      "Context-aware privacy detection, flagging, and redaction engine that identifies sensitive information in multimedia content with policy-driven enforcement modes.",
    tags: ["Python", "FastAPI", "Computer Vision", "NLP"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/Privacy-Firewall",
  },
  {
    title: "AEGIS",
    description:
      "Backend control plane for threat management with real-time threat ingestion, severity classification, and automated response orchestration via REST APIs.",
    tags: ["Python", "FastAPI", "Threat Detection"],
    categories: ["Backend & Infrastructure"],
  },
  {
    title: "AI Coding Agent CLI",
    description:
      "Intelligent CLI tool powered by Google Gemini that autonomously performs coding tasks through natural language requests, with multi-turn conversation and file management.",
    tags: ["Python", "Gemini API", "CLI"],
    categories: ["AI & Machine Learning", "Developer Tools"],
    github: "https://github.com/saivijayragav/AI-Coding-Agent-CLI",
  },
];

export const supportingProjects: ArchiveProject[] = [
  {
    title: "AI ATC Assistant",
    description:
      "AI-powered assistant for air traffic control operations, exploring how LLMs can support complex real-time decision-making in aviation.",
    tags: ["Python", "LLM", "Real-time Systems"],
    categories: ["AI & Machine Learning", "Automation"],
    github: "https://github.com/saivijayragav/AI-ATC-Assistant",
  },
  {
    title: "Clause Navigator",
    description:
      "Legal document clause analysis tool that helps navigate and understand complex legal document structures using NLP techniques.",
    tags: ["Python", "NLP", "Legal Tech"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/Clause-Navigator",
  },
  {
    title: "Heart Disease Risk Prediction",
    description:
      "Web-based ML prediction system that assesses heart disease risk from patient health parameters, deployed on Vercel with a clean interface.",
    tags: ["Python", "Scikit-learn", "Vercel"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/Heart-Disease-Risk-Prediction",
  },
  {
    title: "WSN AI Intrusion Detection",
    description:
      "Machine learning-based intrusion detection system for wireless sensor networks, identifying anomalous network behavior patterns.",
    tags: ["Python", "ML", "Network Security"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/WSN-AI-Intrusion-Detection",
  },
  {
    title: "AI vs Human Text Detection",
    description:
      "ML classifier that distinguishes AI-generated text from human-written content, built during the Microsoft AI Azure Internship program.",
    tags: ["Python", "NLP", "Classification"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/AI-Vs-Human-Text",
  },
  {
    title: "Autism Predictor",
    description:
      "Machine learning model for early autism prediction based on behavioral attributes and developmental indicators.",
    tags: ["Python", "ML", "Healthcare"],
    categories: ["AI & Machine Learning"],
    github: "https://github.com/saivijayragav/Autism_Predictor",
  },
  {
    title: "Harry Potter X Bot",
    description:
      "An X (Twitter) bot that posts three lines from Harry Potter books every 30 minutes, bringing literary magic to social feeds.",
    tags: ["Python", "Twitter API", "Automation"],
    categories: ["Automation", "Developer Tools"],
    github: "https://github.com/saivijayragav/harrypotter-x-bot",
  },
  {
    title: "Sudoku — Backtracking Solver",
    description:
      "Interactive Sudoku solver visualization that demonstrates the backtracking algorithm step by step, deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "Algorithms"],
    categories: ["Developer Tools"],
    github: "https://github.com/saivijayragav/Sudoku-Solving-using-Backtracking",
  },
  {
    title: "Typetest",
    description:
      "Typing speed test application with real-time WPM tracking, accuracy metrics, and customizable test durations.",
    tags: ["JavaScript", "UX", "Tool"],
    categories: ["Developer Tools"],
    github: "https://github.com/saivijayragav/typetest",
  },
  {
    title: "Job Sniper",
    description:
      "Automated job application tool that monitors job boards and helps streamline the application process with smart filtering.",
    tags: ["Python", "Automation", "Web Scraping"],
    categories: ["Automation"],
    github: "https://github.com/saivijayragav/Job-Sniper",
  },
];
