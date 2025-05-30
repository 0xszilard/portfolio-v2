"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import {
  admin,
  bbe,
  crew_dark,
  crew_light,
  placeholder,
  scaleinsta,
  voyagio,
} from "@/app/assets";
import { useTheme } from "next-themes";

export default function Projects() {
  const { theme } = useTheme();

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
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      liveUrl: "https://securesphere.app",
      repoUrl: "https://github.com/",
    },
    {
      title: "Healthcare Patient Portal",
      description:
        "Built a GDPR & HIPAA-compliant, multi tenant user management system with real time analytics",
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
      title: "Crew",
      description:
        "Developed a real-time tracking system for a logistics company's fleet",
      image: theme === "dark" ? crew_dark : crew_light,
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

  return (
    <section className="bg-background px-4 py-10 md:px-10">
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
      <a
        href="/#contact"
        className="mx-auto mt-6 flex w-fit transform cursor-pointer flex-col rounded-lg border-2 border-gray-600 bg-gradient-to-t from-gray-800 to-gray-600 px-4 py-2 text-center font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:scale-102 active:scale-95 dark:border-gray-100 dark:from-gray-300 dark:to-gray-100 dark:text-black"
      >
        Get In Touch
        <span className="text-background/80 text-xs font-medium">
          Turn you ideas into revenue generating machines
        </span>
      </a>
    </section>
  );
}
