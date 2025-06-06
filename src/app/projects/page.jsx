import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { placeholder } from "@/assets";
import ProjectCard from "@/components/home/ProjectCard";
import { LANDING_PROJECTS } from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";

export const metadata = {
  title: "Projects",
  description:
    "Explore real projects by InfoBridge - from custom automations to full SaaS platforms. See how we help online creators scale with smart, tailored tech.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
  },
  openGraph: {
    title: "Our Work | InfoBridge - Projects for Online Creators",
    description:
      "Take a look at what we've built. InfoBridge delivers high-impact software solutions for creators, coaches, and solopreneurs.",
    siteName: "InfoBridge",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}/projects`,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge portfolio preview - real projects for creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "InfoBridge Projects | Automation & SaaS for Creators",
    description:
      "See how we turn ideas into tools. Browse our portfolio of SaaS platforms, client dashboards, and automations built for online creators.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "Project showcase - InfoBridge for creators",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function ProjectsPage() {
  const projects = await client.fetch(LANDING_PROJECTS);

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto w-fit">
            <Star className="mr-2 h-3 w-3" />
            200+ Successful Projects
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Projects That Drive{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text pr-2 text-transparent">
              Real Results
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            From MVP to enterprise scale, see how we've helped businesses increase revenue, raise funding, and scale
            their operations through strategic web development.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b px-4 md:px-6">
        <div className="m-auto flex w-fit gap-6 overflow-x-auto pb-4">
          <Button variant="default" size="sm">
            All Projects
          </Button>
          <Button variant="ghost" size="sm">
            SaaS Platforms
          </Button>
          <Button variant="ghost" size="sm">
            E-commerce
          </Button>
          <Button variant="ghost" size="sm">
            Fintech
          </Button>
          <Button variant="ghost" size="sm">
            Healthcare
          </Button>
          <Button variant="ghost" size="sm">
            Marketplaces
          </Button>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-muted/30">
        <div className="container m-auto px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Badge variant="secondary">Featured Case Study</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">TechFlow: From Idea to $2M Series A</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A Y Combinator startup needed to build their MVP in 3 weeks to meet investor deadlines. We delivered a
                  full-featured SaaS platform that helped them secure $2M in Series A funding.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-primary text-2xl font-bold">3 weeks</div>
                    <div className="text-muted-foreground text-sm">Development Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary text-2xl font-bold">$2M</div>
                    <div className="text-muted-foreground text-sm">Funding Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary text-2xl font-bold">10k+</div>
                    <div className="text-muted-foreground text-sm">Active Users</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Stripe</Badge>
              </div>
              <div className="flex gap-3">
                <Button>View Full Case Study</Button>
                <Button variant="outline">Live Demo</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg border shadow-lg">
                <Image
                  src={placeholder}
                  width={600}
                  height={400}
                  alt="TechFlow Dashboard"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container m-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Stats Section */}
      <section className="bg-muted/30 border-t">
        <div className="container m-auto px-4 py-16 md:px-6 md:py-20">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Success Metrics</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Our projects consistently deliver measurable business results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">200+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">$50M+</div>
              <div className="text-muted-foreground text-sm">Client Revenue Generated</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">2.5x</div>
              <div className="text-muted-foreground text-sm">Average ROI Increase</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container m-auto px-4 py-16 md:px-6 md:py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Success Story?</h2>
              <p className="text-lg opacity-90">
                Join 200+ successful companies who've transformed their business with our development expertise.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="secondary">Get Free Project Quote</Button>
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
