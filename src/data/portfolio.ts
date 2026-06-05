export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "GopherDB",
    description:
      "Disk-backed NoSQL key-value store in Go with B+ tree indexing, slotted page layout, copy-on-write transactions, and ACID properties.",
    technologies: ["Go", "B+ Tree", "Transactions"],
    codeUrl: "https://github.com/RohinJoshi1/GopherDB",
  },
  {
    title: "BusTub Database",
    description:
      "Disk-oriented relational DBMS in C++ with ARC buffer pool, concurrent B+ tree indexing, MVCC transaction support, and a vectorized query engine with rule-based optimization. Ranked top 5 on the CMU DB leaderboard.",
    technologies: ["C++", "SQL", "MVCC", "Query Optimization"],
  },
  {
    title: "Distributed Search Engine",
    description:
      "Distributed document search system using TF-IDF scoring across a cluster of nodes, enabling full-text retrieval from a large corpus.",
    technologies: ["Java", "TF-IDF", "Distributed Systems"],
    codeUrl: "https://github.com/RohinJoshi1/Distributed_Search",
  },
  {
    title: "Jasper",
    description:
      "Transcompiled object-oriented programming language that targets the JVM, with its own compiler and runtime.",
    technologies: ["Java", "Compilers", "JVM"],
    codeUrl: "https://github.com/RohinJoshi1/Jasper",
  },
  {
    title: "Adaptive Contrast RTIVD",
    description:
      "Real-time image and video dehazing on CUDA using adaptive contrast-based enhancement for low-visibility scenes.",
    technologies: ["CUDA", "Computer Vision", "Python"],
    codeUrl: "https://github.com/RohinJoshi1/Adaptive_Contrast_based_RTIVD",
  },
  {
    title: "Hierarchical Key-Value Cluster",
    description:
      "Consistent, sharded hierarchical key-value store with Raft-based replicated logs and leader election per directory shard, tested under simulated network faults.",
    technologies: ["Go", "Raft", "Distributed Systems"],
  },
];
