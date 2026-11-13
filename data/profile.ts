export interface Profile {
  name: string;
  role: string;
  subline: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  status: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const profile: Profile = {
  name: "Vansh Khotyan",
  role: "Data Analyst Intern",
  subline: "Python · SQL · Machine Learning",
  tagline: "I turn raw data into decisions.",
  bio: "I'm Vansh, a second-year B.Tech (Data Science) student at Teerthanker Mahaveer University, Moradabad. I enjoy working with real datasets: cleaning them, building models, and figuring out what the numbers are actually saying. That structured thinking is sharpened by chess and quizzing as much as by code.",
  email: "vanshkhotyan@gmail.com",
  linkedin: "https://www.linkedin.com/in/vansh-khotyan",
  github: "https://github.com/vanshkhotyan-cell",
  location: "Moradabad, Uttar Pradesh, India",
  status: "Open to internships",
  stats: [
    { label: "ISRO Certified", value: "2x" },
    { label: "Sardar Unity Trinity Quiz", value: "3x" },
    { label: "Discipline & Leadership", value: "NCC" },
    { label: "Community Service", value: "NSS" },
  ],
};
