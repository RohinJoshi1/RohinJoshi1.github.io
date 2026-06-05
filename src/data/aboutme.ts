export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Rohin Joshi",
  title: "M.S. Student in Information Security",
  institution: "Carnegie Mellon University",
  description:
    "I'm a graduate student at <a href='https://www.cmu.edu'>Carnegie Mellon University</a> working at the intersection of computer systems and security. My research interests span database internals (query optimizers in particular), OS internals, performance optimization, storage systems, distributed systems, and vulnerability research. I also make really good coffee, love fountain pens, and going on long walks.",
  email: "rohinj@andrew.cmu.edu",
  imageUrl: "/images/profile.jpg",
  googleScholarUrl:
    "https://scholar.google.com/citations?user=XThGjbAAAAAJ&hl=en",
  githubUsername: "RohinJoshi1",
  linkedinUsername: "rohinjoshi1",
  cvUrl: "/Rohin_Joshi_Resume.pdf",
  institutionUrl: "https://www.cmu.edu",
};
