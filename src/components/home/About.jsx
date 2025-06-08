import React from "react";
import { Badge } from "../ui/badge";

export default function About() {
  return (
    <section className="border-y bg-radial from-white to-gray-100 px-4 py-10 md:px-10 dark:from-black dark:to-gray-800">
      <div className="m-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            We help creators, coaches, and niche experts turn their audience and expertise into real, scalable products.
            Whether it's a SaaS platform, membership portal, or automation tool — we bring your vision to life with
            clarity, speed, and zero tech overwhelm.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            With over 7 years of product-building experience, we’ve helped launch platforms that have generated over $2M
            in revenue — without bloated teams or endless timelines. Our process is lean, collaborative, and focused on
            getting you to market fast.
          </p>
          <p className="text-muted-foreground mt-4 md:text-lg">
            We’re not just developers — we’re product partners. That means thinking through positioning, user
            experience, monetization, and launch — not just code. If you’re serious about building something that gets
            used, we’re the team to help you make it real.
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
