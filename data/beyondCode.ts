export interface BeyondItem {
  title: string;
  category: string;
  badge: string;
  description: string;
  iconName: string;
}

export const beyondItems: BeyondItem[] = [
  {
    title: "ISRO START Programme",
    category: "Space Science & Space Tech",
    badge: "2x Certified",
    description:
      "National space technology awareness programme conducted by ISRO, exploring space sciences, remote sensing mechanics, and satellite data handling.",
    iconName: "Rocket",
  },
  {
    title: "Electronics Ideation & Prototyping",
    category: "Hardware & Systems",
    badge: "Tinkerers' Lab",
    description:
      "Hands-on ideation, rapid prototyping, and sensor integration at Tinkerers' Lab, TMU.",
    iconName: "Cpu",
  },
  {
    title: "National Cadet Corps (NCC)",
    category: "Leadership & Civic Duty",
    badge: "Cadet",
    description:
      "Drill, disciplined teamwork, physical endurance, and crisis leadership through the NCC national youth wing.",
    iconName: "Shield",
  },
  {
    title: "National Quizzing Champion",
    category: "General Knowledge & Speed",
    badge: "3x Participant",
    description:
      "Three-time competitor in the prestigious Sardar Unity Trinity Quiz and university-level intellectual trivia leagues.",
    iconName: "Award",
  },
  {
    title: "Competitive Chess",
    category: "Cognitive Strategy",
    badge: "Tactician",
    description:
      "Sharpening tactical calculation, pattern recognition, and risk assessment through regular competitive play.",
    iconName: "Trophy",
  },
];
