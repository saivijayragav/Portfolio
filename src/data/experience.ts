export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  contributions: string[];
  certificate?: { label: string; url: string };
};

export const experience: Experience[] = [
  {
    company: "National Informatics Centre",
    role: "Software Development Intern",
    period: "May 2025 – Aug 2025",
    location: "Chennai",
    description: `Developed a Spring Boot ticketing platform integrated with a
FastAPI-based AI service running Qwen2.5-VL. The system
automatically extracted 8+ metadata fields from ticket
submissions, reducing manual entry effort by an estimated 60–70%
for support agents across 20+ states.`,
    contributions: [
      "Built RAG-based support assistant using PostgreSQL for structured ticket data across 10+ categories, accelerating resolution times for state-level support teams",
      "Designed the FastAPI integration layer that bridged the Spring Boot monolith with the Qwen2.5-VL vision model for automated field extraction",
      "Shipped the platform across multiple state deployments, handling diverse workflows and language requirements",
    ],
  },
  {
    company: "Sprelia",
    role: "AI/ML Intern",
    period: "Oct 2025 – Dec 2025",
    location: "Remote",
    description: `Designed and deployed a multimodal RAG pipeline that ingested,
parsed, and indexed over 10,000 patent documents using LangChain
and Unstructured. The system enriched each document with structured
metadata, dramatically improving downstream retrieval accuracy for
the legal research team.`,
    contributions: [
      "Built a hybrid search architecture on Milvus supporting semantic retrieval across 1M+ embeddings, reducing query response times to under a second",
      "Designed metadata extraction and enrichment pipelines that transformed unstructured patent filings into queryable, categorized knowledge",
      "Collaborated with the research team to iterate on chunking strategies and embedding models for domain-specific retrieval quality",
    ],
  },
  {
    company: "Microsoft Initiative \u00d7 Edunet Foundation \u00d7 AICTE",
    role: "AI Azure Virtual Intern",
    period: "May 2025 \u2013 Jun 2025",
    location: "Remote",
    description: `Successfully completed a 4-week AI Azure Virtual Internship, a
Microsoft initiative implemented by Edunet Foundation in
collaboration with AICTE. Built hands-on solutions using
Microsoft Azure AI services through guided projects and
practical assignments, strengthening knowledge of cloud-based AI
and machine learning workflows.`,
    contributions: [
      "Built hands-on solutions using Microsoft Azure AI services including cognitive services, ML model deployment, and cloud-based AI workflows",
      "Completed guided projects covering AI fundamentals, responsible AI practices, and real-world Azure implementation scenarios",
      "Strengthened foundational knowledge of cloud-based AI infrastructure and machine learning operations on Azure",
    ],
    certificate: {
      label: "View Certificate",
      url: "/certificates/MS_AZURE%20Certificate.pdf",
    },
  },
];
