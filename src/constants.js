import { admin, bbe, crew_dark, crew_light, scaleinsta, sec_dark, sec_light, voyagio } from "@/assets";

export const keywords = [
  "web developer",
  "custom software developer",
  "creator economy tools",
  "software for coaches",
  "infoproduct tech",
  "automations for content creators",
  "scale online business",
  "infobridge",
  "software consulting",
  "info consulting",
  "web consulting",
  "software engineering",
  "fullstack dev",
];

export const projects = [
  {
    title: "0xSec",
    description:
      "End-to-end cyber security platform offering real-time threat detection and automated incident response for SMEs",
    image: sec_dark,
    outcomes: [
      "Reduced average threat response time by 62%",
      "Adopted by 40+ companies within the first 3 months",
      "Passed independent penetration testing with zero critical vulnerabilities",
    ],
    technologies: ["Node.js", "MongoDB", "AWS", "Kubernetes"],
    liveUrl: "https://0xsec.vercel.app",
    slug: "0xsec",
  },
  {
    title: "Healthcare Patient Portal",
    description: "Built a GDPR & HIPAA-compliant, multi tenant user management system with real time analytics",
    image: admin,
    outcomes: [
      "Reduced admin workload by 32 hours/week",
      "97% patient satisfaction rating",
      "Saved $340K annually in operational costs",
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    slug: "example",
  },
  {
    title: "BBE Insider",
    description: "Full-stack learning management software & mock exam platform for the WU's BBE program.",
    image: bbe,
    outcomes: [
      "€320,000+ project evaluation",
      "6,500+ active users across 2 platforms",
      "32% free-to-paid conversion rate",
    ],
    technologies: ["Next.js", "Supabase", "Stripe", "Prisma"],
    liveUrl: "https://bbe-insider.com",
    slug: "bbe-insider",
  },
  {
    title: "Crew",
    description: "Developed a real-time tracking system for a logistics company's fleet",
    image: crew_light,
    outcomes: [
      "Reduced fuel costs by 22%",
      "Improved on-time deliveries by 34%",
      "ROI achieved within 4 months of deployment",
    ],
    technologies: ["React Native", "GraphQL", "MongoDB"],
    liveUrl: "https://crew.app",
    slug: "crew",
  },
  {
    title: "ScaleInsta / Hydrogen",
    description: "Designed and developed a high-converting marketing site for a SaaS startup",
    image: scaleinsta,
    outcomes: [
      "189% increase in lead generation",
      "Reduced bounce rate from 65% to 23%",
      "Contributed to $850K seed round success",
    ],
    technologies: ["Next.js", "Framer Motion", "Supabase"],
    liveUrl: "https://scaleinsta.com",
    slug: "scaleinsta",
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
    slug: "voyagio",
  },
];
