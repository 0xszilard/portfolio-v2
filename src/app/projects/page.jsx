import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock, Star } from "lucide-react";
import { placeholder } from "@/assets";

export const metadata = {
  title: "",
  description: "",

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
  },
  openGraph: {
    title: "",
    description: "",
    siteName: "InfoBridge",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "",
    description: "",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "",
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

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container m-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto w-fit">
            <Star className="mr-2 h-3 w-3" />
            200+ Successful Projects
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Projects That Drive{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
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
      <section className="border-b">
        <div className="px-4 md:px-6">
          <div className="flex gap-6 overflow-x-auto pb-4">
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
                <Button>
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg border shadow-lg">
                <Image src={placeholder} width={600} height={400} alt="TechFlow Dashboard" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container m-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, idx) => (
            <Card key={idx} className="group pt-0 transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={placeholder}
                    width={350}
                    height={200}
                    alt="LearnHub Platform"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">EdTech</Badge>
                  <div className="text-muted-foreground flex items-center gap-1 text-sm">
                    <Clock className="h-3 w-3" />
                    10 weeks
                  </div>
                </div>
                <h3 className="text-xl font-semibold">LearnHub LMS</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive learning management system with video streaming, progress tracking, and AI-powered
                  recommendations. Serves 25k+ students globally.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>95% Completion Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>25k+ Students</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Video
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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
                <Button size="lg" variant="secondary">
                  Get Free Project Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
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
    </main>
  );
}
