import React from "react";
import ProjectCard from "../home/ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <ProjectCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.mainImage}
            outcomes={item.outcomes}
            technologies={item.technologies}
            liveUrl={item.liveUrl}
            sug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}
