import React from "react";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="bg-muted/40 md:px-4px-2 py-10">
      <div className="m-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            I'm a full-stack developer with 5+ years of experience building web
            and mobile applications that deliver measurable business results. My
            approach focuses on understanding business objectives first, then
            crafting technical solutions that drive real outcomes.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            Previously, I've worked with startups, enterprise companies, and
            everything in between. My projects have generated over $4.2M in
            revenue for clients and saved countless hours through automation and
            optimization.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            When I'm not coding, you'll find me mentoring junior developers,
            speaking at tech conferences, or hiking with friends.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Technical Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Node.js</Badge>
            <Badge>GraphQL</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Redis</Badge>
            <Badge>AWS</Badge>
            <Badge>Docker</Badge>
            <Badge>CI/CD</Badge>
            <Badge>React Native</Badge>
            <Badge>Expo</Badge>
            <Badge>REST</Badge>
          </div>

          <h3 className="text-xl font-bold">Business Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Project Management</Badge>
            <Badge variant="outline">UX/UI Design</Badge>
            <Badge variant="outline">Data Analysis</Badge>
            <Badge variant="outline">A/B Testing</Badge>
            <Badge variant="outline">SEO Optimization</Badge>
            <Badge variant="outline">Conversion Rate Optimization</Badge>
            <Badge variant="outline">Copy Writing</Badge>
            <Badge variant="outline">Client Communication</Badge>
          </div>

          <h3 className="text-xl font-bold">Education & Certifications</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>AWS Certified Solutions Architect</li>
            <li>Google Cloud Professional Developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
