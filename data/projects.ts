export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkText?: string;
  thumbnail: string;
  isUpcoming?: boolean;
}

export const projects: Project[] = [
  {
    id: "seasonal-agriculture",
    title: "Seasonal Agriculture Performance Analysis",
    description:
      "Data analytics project exploring seasonal agricultural performance across Indian states: data cleaning, EDA, season-wise comparison of yield and water efficiency.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    link: "https://github.com/vanshkhotyan-cell/seasonal-agriculture-performance-analysis",
    linkText: "View on GitHub",
    thumbnail: "/assets/project-agriculture.jpg",
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn Analysis",
    description:
      "Analysis of 150,000 telecom customers to understand which customers leave and why. Uncovering behavioral indicators and churn factors to inform retention strategies.",
    tags: ["Python", "Pandas", "Data Analysis", "EDA"],
    link: "https://github.com/vanshkhotyan-cell",
    linkText: "View on GitHub",
    thumbnail: "/assets/project-churn.jpg",
  },
  {
    id: "vois-edunet-internship",
    title: "VOIS x Edunet Data Analytics Internship",
    description:
      "Skilling Program in Emerging Technologies (Data Analytics) under Vodafone Foundation x Edunet Foundation x TIRTC, plus the AICTE and VOIS for Tech University Engagement Program.",
    tags: ["Python", "Pandas", "Internship", "Enterprise Analytics"],
    link: "https://github.com/vanshkhotyan-cell",
    linkText: "View Credentials",
    thumbnail: "/assets/project-vois.jpg",
  },
  {
    id: "building-next",
    title: "What I'm building next",
    description:
      "Focus on Machine Learning, Data Engineering, and AI-powered applications, with open-source contributions coming up.",
    tags: ["Machine Learning", "Data Engineering", "AI Systems"],
    link: "https://github.com/vanshkhotyan-cell",
    linkText: "Follow Progress",
    thumbnail: "/assets/project-next.jpg",
    isUpcoming: true,
  },
];
