export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  role: string;
  organization: string;
  period: string;
  location: string;
  details: string[];
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    id: "edunet",
    type: "experience",
    role: "Data Analyst Intern",
    organization: "Edunet Foundation",
    period: "Aug 2026 – Oct 2026",
    location: "Remote",
    details: [
      "Conducted exploratory data analysis, data wrangling, and structured statistical evaluations across real-world datasets.",
      "Part of the Skilling Program in Emerging Technologies (Data Analytics) under Vodafone Foundation x Edunet Foundation x TIRTC.",
    ],
    tags: ["Data Analytics", "Python", "EDA", "Statistical Analysis"],
  },
  {
    id: "vois",
    type: "experience",
    role: "Data Analyst Intern",
    organization: "VOIS x AICTE Virtual Internship",
    period: "Aug 2026 – Sep 2026",
    location: "Remote",
    details: [
      "Worked within the AICTE and VOIS for Tech University Engagement Program.",
      "Developed end-to-end data pipelines for dataset cleaning, feature identification, and visual insight synthesis.",
    ],
    tags: ["VOIS for Tech", "AICTE", "Pandas", "Enterprise Skilling"],
  },
  {
    id: "education",
    type: "education",
    role: "B.Tech in Data Science",
    organization: "Teerthanker Mahaveer University (TMU)",
    period: "Aug 2025 – Jun 2029",
    location: "Moradabad, Uttar Pradesh, India",
    details: [
      "Specializing in Machine Learning, Statistical Modeling, Big Data Systems, and Data Structures.",
      "Active participant in technical symposiums, research forums, and Tinkerers' Lab ideation sprints.",
    ],
    tags: ["Data Science", "Machine Learning", "Mathematics", "Algorithms"],
  },
];
