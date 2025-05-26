import React from "react";
import ProjectCard from "./ProjectCard";
import { admin, bbe, placeholder, scaleinsta, voyagio } from "@/app/assets";

const projects = [
  {
    title: "0xSec",
    description:
      "End-to-end cyber security platform offering real-time threat detection and automated incident response for SMEs",
    image: placeholder,
    outcomes: [
      "Reduced average threat response time by 62%",
      "Adopted by 40+ companies within the first 3 months",
      "Passed independent penetration testing with zero critical vulnerabilities",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "AWS"],
    liveUrl: "https://securesphere.app",
    repoUrl: "https://github.com/",
  },
  {
    title: "Healthcare Patient Portal",
    description:
      "Built a HIPAA-compliant patient management system for a healthcare provider",
    image: admin,
    outcomes: [
      "Reduced admin workload by 32 hours/week",
      "97% patient satisfaction rating",
      "Saved $340K annually in operational costs",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "BBE Insider",
    description:
      "Full-stack learning management software & mock exam platform for the WU's BBE program.",
    image: bbe,
    outcomes: [
      "€320,000+ project evaluation",
      "6,500+ active users across 2 mediums",
      "32% free-to-paid conversion rate",
    ],
    technologies: ["Next.js", "Supabase", "Stripe", "Prisma"],
    liveUrl: "https://bbe-insider.com",
    repoUrl: "https://github.com/",
  },

  {
    title: "Logistics Tracking System",
    description:
      "Developed a real-time tracking system for a logistics company's fleet",
    image: placeholder,
    outcomes: [
      "Reduced fuel costs by 22%",
      "Improved on-time deliveries by 34%",
      "ROI achieved within 4 months of deployment",
    ],
    technologies: ["React Native", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "ScaleInsta / Hydrogen",
    description:
      "Designed and developed a high-converting marketing site for a SaaS startup",
    image: scaleinsta,
    outcomes: [
      "189% increase in lead generation",
      "Reduced bounce rate from 65% to 23%",
      "Contributed to $850K seed round success",
    ],
    technologies: ["Next.js", "Framer Motion", "Supabase"],
    liveUrl: "https://scaleinsta.com",
    repoUrl: "https://github.com",
  },

  {
    title: "Voyagio",
    description: "AI Travel Itinerary Planner to personalize trips for users",
    image: voyagio,
    outcomes: [
      "1000 active users in the first month",
      "Average session time increased by 4.7 minutes",
      "Featured in TechCrunch as innovative solution",
    ],
    technologies: ["Typescript", "OpenAI", "Firebase"],
    liveUrl: "https://voyag-io.vercel.app",
    repoUrl: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section className="bg-muted px-4 py-10 md:px-10">
      <div className="m-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <ProjectCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.image}
            outcomes={item.outcomes}
            technologies={item.technologies}
            liveUrl={item.liveUrl}
            repoUrl={item.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}
