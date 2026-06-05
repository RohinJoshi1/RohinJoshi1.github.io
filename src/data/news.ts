export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "May 2026",
    title: "Joined Qualcomm as Software Engineer",
    description:
      "Started as a Software Engineer at Qualcomm in San Diego, CA.",
    link: "https://www.linkedin.com/company/qualcomm",
  },
  {
    date: "August 2025",
    title: "Started M.S. at Carnegie Mellon University",
    description:
      "Joined the Information Networking Institute as an M.S. student in Information Security and was selected as an INI TECH Fellow.",
    link: "https://www.cmu.edu/ini/",
  },
  {
    date: "May 2025",
    title: "Paper accepted at ICED25",
    description:
      "Leveraging Large Language Models for Enhanced Design by Analogy: A Computational Framework was presented at the International Conference on Engineering Design (ICED25).",
    link: "https://www.cambridge.org/core/journals/proceedings-of-the-design-society/article/leveraging-large-language-models-for-enabling-design-by-analogy-a-computational-framework/2E3BE1BB69B975B1FA5FDFF8BB634B44",
  },
  {
    date: "2025",
    title: "KAGS paper published in Advanced Engineering Informatics",
    description:
      "Our framework for early-stage design exploration with LLM agents was published in Advanced Engineering Informatics (Q1, IF 9.9).",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1474034625000345",
  },
  {
    date: "2024",
    title: "Paper accepted at I4C",
    description:
      "Adaptive Contrast Based Real Time Image and Video Dehazing was presented at the 5th International Conference on Circuits, Control, Communication and Computing (I4C).",
    link: "https://ieeexplore.ieee.org/document/10748514",
  },
  {
    date: "May 2023",
    title: "2nd Runners Up, Unisys UIP 2023",
    description:
      "Recognized for my work on Privacy preserving machine learning using Zero Knowledge Proofs at Unisys Innovation Program 2023.",
  },
  {
    date: "April 2023",
    title: "Winner, NIT-K Hackverse Blockchain Track",
    description:
      "Won the blockchain track at NIT Karnataka's Hackverse hackathon.",
  },
];
