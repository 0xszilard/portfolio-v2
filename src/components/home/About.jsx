import React from "react";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="bg-muted/40 px-4 py-10 md:px-10">
      <div className="m-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            We’re a full-stack development agency with over 7 years of
            experience delivering web and mobile solutions that generate
            tangible business impact. Our process begins with understanding your
            strategic goals—then translating them into performant, scalable
            technology.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            From early-stage startups to enterprise clients, our team has
            successfully launched products that have generated more than $4.2M
            in client revenue—while saving time and costs through intelligent
            automation and optimization.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            Beyond development, we’re passionate about mentoring, contributing
            to the tech community, and staying at the forefront of innovation.
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
            <Badge>TailwindCSS</Badge>
            <Badge>Vercel</Badge>
          </div>

          <h3 className="text-xl font-bold">Business Capabilities</h3>
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

          <h3 className="text-xl font-bold">Certifications</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>AWS Certified Solutions Architect</li>
            <li>Google Cloud Professional Developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
