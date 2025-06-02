import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Target, Zap, Quote } from "lucide-react";
import { placeholder } from "@/assets";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto w-fit">
            <Award className="mr-2 h-3 w-3" />
            Est. 2019 • 200+ Projects Delivered
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            We Turn Complex Ideas Into{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              Simple Solutions
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Founded by experienced developers who understand the challenges of
            scaling digital products. We've helped over 150 companies transform
            their ideas into profitable web applications.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted/30 border-t">
        <div className="container px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Story
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Started in 2019 by three senior developers who were frustrated
                  with agencies that over-promised and under-delivered. We saw
                  too many businesses struggle with slow, expensive development
                  cycles that didn't deliver real business value.
                </p>
                <p>
                  Our mission became simple: build high-quality web applications
                  faster and more cost-effectively than traditional agencies,
                  while maintaining the highest standards of code quality and
                  user experience.
                </p>
                <p>
                  Today, we're a team of 15 specialists who have delivered over
                  200 projects, helping startups raise $50M+ in funding and
                  enterprises increase their digital revenue by an average of
                  2.5x.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={placeholder}
                  width={500}
                  height={500}
                  alt="Team working together"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4 py-16 md:px-6 md:py-20">
        <div className="mb-12 space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Drives Us
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Our core values shape every project we take on and every
            relationship we build.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                Speed Without Compromise
              </h3>
              <p className="text-muted-foreground">
                We deliver fast without cutting corners. Our proven processes
                and modern tech stack enable rapid development while maintaining
                enterprise-grade quality.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Target className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Business-First Approach</h3>
              <p className="text-muted-foreground">
                Every technical decision is made with your business goals in
                mind. We focus on features that drive revenue and user
                engagement, not just cool technology.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">True Partnership</h3>
              <p className="text-muted-foreground">
                We're not just vendors—we're your technical co-founders. We
                invest in your success and provide ongoing strategic guidance
                beyond just development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-muted/30 border-t">
        <div className="container px-4 py-16 md:px-6 md:py-20">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Senior developers and designers with 10+ years of experience
              building products for startups and Fortune 500 companies.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={placeholder}
                    width={96}
                    height={96}
                    alt="Sarah Chen"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Chen</h3>
                  <p className="text-muted-foreground text-sm">
                    Co-Founder & CTO
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Former Senior Engineer at Google. Specializes in scalable
                  architecture and performance optimization.
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={placeholder}
                    width={96}
                    height={96}
                    alt="Marcus Rodriguez"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Marcus Rodriguez</h3>
                  <p className="text-muted-foreground text-sm">
                    Co-Founder & CEO
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Ex-Stripe Product Manager. Focuses on user experience and
                  product strategy for maximum business impact.
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Product Strategy
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    UX Design
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={placeholder}
                    width={96}
                    height={96}
                    alt="Alex Thompson"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Alex Thompson</h3>
                  <p className="text-muted-foreground text-sm">
                    Lead Full-Stack Developer
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Former Airbnb engineer with expertise in building high-traffic
                  applications and complex integrations.
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container px-4 py-16 md:px-6 md:py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <Quote className="mx-auto h-12 w-12 opacity-50" />
              <blockquote className="text-xl font-medium md:text-2xl">
                "They delivered our MVP in 3 weeks and helped us raise $2M in
                Series A. The quality of their work and speed of delivery was
                incredible. They truly understand what startups need."
              </blockquote>
              <div className="space-y-2">
                <div className="font-semibold">Jennifer Walsh</div>
                <div className="text-sm opacity-90">CEO, TechFlow (YC S22)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 border-t">
        <div className="container px-4 py-16 md:px-6 md:py-20">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Track Record
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">200+</div>
              <div className="text-muted-foreground text-sm">
                Projects Delivered
              </div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">$50M+</div>
              <div className="text-muted-foreground text-sm">
                Client Funding Raised
              </div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">2.5x</div>
              <div className="text-muted-foreground text-sm">
                Average ROI Increase
              </div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-4xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your project and see how we can help you achieve your
            business goals.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg">
              Get Free Project Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
