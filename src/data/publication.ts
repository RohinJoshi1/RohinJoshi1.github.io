export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "Advanced Engineering Informatics",
    title:
      "Knowledge Augmented Generalizer Specializer: A Framework for Early Stage Design Exploration",
    authors:
      "V. Sahadevan, R. Joshi, K. Borg, V. Singh, A.R. Singh, B. Muhammed, et al.",
    paperUrl:
      "https://www.sciencedirect.com/science/article/abs/pii/S1474034625000345",
    tldr:
      "A network-of-networks architecture for hierarchical design reasoning with LLM agents, combining a generalizer for synthesis and a specializer for web-scale research and validation.",
  },
  {
    year: "2025",
    conference:
      "ICED25 (International Conference on Engineering Design)",
    title:
      "Leveraging Large Language Models for Enhanced Design by Analogy: A Computational Framework",
    authors:
      "R. Joshi, R. Mitra, V. Sahadevan, K. Borg, V. Singh, B. Muhammed, et al.",
    paperUrl:
      "https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/leveraging-large-language-models-for-enabling-design-by-analogy-a-computational-framework/2E3BE1BB69B975B1FA5FDFF8BB634B44",
    tldr:
      "A computational framework for design-by-analogy leveraging FBS ontology, graph algorithms, and large language models.",
  },
  {
    year: "2024",
    conference:
      "I4C (5th International Conference on Circuits, Control, Communication and Computing)",
    title: "Adaptive Contrast Based Real Time Image and Video Dehazing",
    authors: "R. Joshi, D. Dange, K. Ks, S.R. Maiya",
    paperUrl: "https://ieeexplore.ieee.org/document/10748514",
    codeUrl: "https://github.com/RohinJoshi1/Adaptive_Contrast_based_RTIVD",
    tldr:
      "Real-time image and video dehazing using adaptive contrast enhancement on CUDA.",
  },
];
