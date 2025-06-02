import { projects } from "@/constants";

const projectEntries = projects.map((project) => ({
  url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
  lastModified: new Date(),
  priority: 0.25,
}));

export default function sitemap() {
  return [
    {
      url: process.env.NEXT_PUBLIC_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...projectEntries,
    {
      url: `${process.env.NEXT_PUBLIC_URL}/imprint`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/privacy`,
      lastModified: new Date(),
      priority: 0.1,
    },
  ];
}
