export interface SkillCategory {
  tier: "advanced" | "proficient" | "exploring";
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    tier: "advanced",
    title: "Advanced Core Stack",
    badge: "Core Mastery",
    description: "Daily drivers for rigorous data exploration, cleaning, and statistical modeling.",
    skills: [
      { name: "Python", featured: true },
      { name: "SQL", featured: true },
      { name: "Pandas", featured: true },
      { name: "NumPy", featured: true },
      { name: "Matplotlib", featured: true },
      { name: "Seaborn", featured: true },
    ],
  },
  {
    tier: "proficient",
    title: "Working Knowledge",
    badge: "Applied Engineering",
    description: "Production workflows, algorithms, web scraping, and API deployments.",
    skills: [
      { name: "Machine Learning" },
      { name: "scikit-learn" },
      { name: "Probability & Stats" },
      { name: "Web Scraping (Requests & BeautifulSoup)" },
      { name: "Flask API" },
      { name: "Vercel" },
      { name: "C++" },
      { name: "Java" },
    ],
  },
  {
    tier: "exploring",
    title: "Currently Exploring",
    badge: "Active Growth",
    description: "Scalable data architecture and generative AI integrations in progress.",
    skills: [
      { name: "Data Engineering" },
      { name: "AI-Powered Applications" },
      { name: "Open-Source Contributions" },
    ],
  },
];
