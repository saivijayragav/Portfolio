export type Certification = {
  title: string;
  org: string;
  issued: string;
  skills: string[];
  logo?: string;
  credentialUrl?: string;
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: "Google AI Essentials",
    org: "Google / Coursera",
    issued: "March 2025",
    skills: ["Generative AI", "Prompt Engineering", "AI Fundamentals"],
    credentialUrl: "/certificates/coursera%20google%20ai%20essentials.pdf",
  },
  {
    title: "AWS Academy Cloud Foundations",
    org: "AWS Academy",
    issued: "April 2024",
    skills: ["Cloud Computing", "AWS Core Services"],
    credentialUrl: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250308-27-6qfmbo.pdf",
  },
  {
    title: "MongoDB Basics for Students",
    org: "MongoDB",
    issued: "June 2025",
    skills: ["MongoDB", "NoSQL Databases"],
    credentialUrl: "/certificates/Sai%20Vijay%20Ragav%20-%20MongoDBBasicsforStudents_Badge.pdf",
  },
];
