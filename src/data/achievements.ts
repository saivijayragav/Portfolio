export type HackathonEntry = {
  placement: string;
  event: string;
  year: string;
  icon: "trophy" | "silver" | "bronze" | "participant";
};

export type Achievement = {
  type: "leetcode" | "coding-contest" | "hackathons";
};

export type LeetCodeAchievement = Achievement & {
  type: "leetcode";
  rating: number;
  problemsSolved: number;
  badge: string;
  description: string;
  proof?: { label: string; url: string };
};

export type CodingContest = Achievement & {
  type: "coding-contest";
  title: string;
  highlight: string;
  description: string;
  proof?: { label: string; url: string };
};

export type HackathonsList = Achievement & {
  type: "hackathons";
  items: HackathonEntry[];
};

export const leetcode: LeetCodeAchievement = {
  type: "leetcode",
  rating: 1968,
  problemsSolved: 600,
  badge: "Knight",
  description:
    "Solved over 600 algorithmic problems and achieved a peak contest rating of 1968, demonstrating strong skills in Data Structures, Algorithms and competitive programming.",
  proof: {
    label: "LeetCode Profile",
    url: "https://leetcode.com/u/vijayragav003",
  },
};

export const codingContests: CodingContest[] = [
  {
    type: "coding-contest",
    title: "TCS CodeVita Season 13",
    highlight: "Global Rank: 1749",
    description:
      "Secured Global Rank 1749 in TCS CodeVita Season 13, an international competitive programming contest.",
    proof: {
      label: "View Certificate",
      url: "/certificates/TCS_CodeVita_Season13_saivijayragav.pdf",
    },
  },
];

export const hackathonsList: HackathonsList = {
  type: "hackathons",
  items: [
    { placement: "Winner", event: "BNY Service Design Jam", year: "2026", icon: "trophy" },
    { placement: "Winner", event: "AI Wars", year: "2026", icon: "trophy" },
    { placement: "Winner", event: "Tekhora'26", year: "2026", icon: "trophy" },
    { placement: "Runner-up", event: "VYUHATHON 1.0", year: "2026", icon: "silver" },
    { placement: "Third Place", event: "DEV ARENA'26", year: "2026", icon: "bronze" },
    { placement: "Participant", event: "India Innovates 2026", year: "2026", icon: "participant" },
  ],
};
