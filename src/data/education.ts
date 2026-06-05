export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—2027",
    institution: "Carnegie Mellon University",
    degree:
      "M.S. in Information Security (GPA 3.9)",
  },
  {
    year: "2020—2024",
    institution: "Ramaiah Institute of Technology",
    degree:
      "B.Tech. in Information Science and Engineering (GPA 3.94/4.0)",
  },
];
