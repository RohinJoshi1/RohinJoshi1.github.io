export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2026 — Present",
    title: "Software Engineer",
    company: "Qualcomm",
    companyUrl: "https://www.qualcomm.com",
  },
  {
    date: "Oct 2024 — Oct 2025",
    title: "Software Engineer",
    company: "Borg Markkula Oy",
    description:
      "Designed a parallel execution engine for large-scale data processing using OpenMP task + loop parallelism, reducing end-to-end latency from 650 ms to 30 ms. Optimized shared-memory concurrency via cache-aware data layouts and reduced cross-core contention. Built a parallel cut-and-fill mesh processing pipeline using ray projections, cutting per-operation runtime from 10 s to 30 ms.",
    companyUrl: "https://www.borgmarkkula.com",
  },
  {
    date: "Oct 2023 — Dec 2024",
    title: "Research Engineer",
    company: "Indian Institute of Science",
    description:
      "Led the design and development of KAGS (Knowledge Augmented Generalizer Specializer), a network-of-networks framework for early-stage design generation and hierarchical reasoning with LLM agents—achieving over 80% reduction in design ideation time. Built knowledge graph and retrieval pipelines using FBS ontology, graph algorithms, and vector stores. Published in Advanced Engineering Informatics (Q1, IF 9.9).",
    advisor: "Dr. Vishal Singh",
    companyUrl: "https://iisc.ac.in",
  },
  {
    date: "Jul 2023 — Jan 2024",
    title: "Technical Intern, Office of the CTO",
    company: "Unisys",
    description:
      "Contributed to the Digital Bill of Materials project (OSS under Linux Foundation): added mTLS authentication between distributed nodes, built a pub-sub WebSocket notification service supporting 200K+ concurrent clients (75% latency reduction), and developed an Azure-based RAG ingestion pipeline for the sales team's financial research LLM.",
    companyUrl: "https://www.unisys.com",
  },
  {
    date: "Apr 2022 — Mar 2023",
    title: "Blockchain Lead",
    company: "MetaStart",
    description:
      "Led the R&D wing focusing on zero-knowledge proofs, proxy re-encryption, self-sovereign digital identity, and cross-chain bridges. Created a smart contract framework that reduced gas fees by over 50% and development time by 80%. Coordinated launch of DApps around NFT and DeFi applications.",
    companyUrl: "https://www.linkedin.com/company/metastart3",
  },
];
