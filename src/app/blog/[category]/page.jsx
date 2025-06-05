import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "",
    description: "",

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${category.slug}`,
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
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryNames = {
    "web-development": "Web Development",
    "react-tutorials": "React Tutorials",
    "business-growth": "Business Growth",
    "case-studies": "Case Studies",
    "industry-insights": "Industry Insights",
  };

  const categoryName = categoryNames[category] || category.replace("-", " ");

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Link>
          </Button>
          <div className="space-y-6 text-center">
            <Badge variant="secondary" className="mx-auto w-fit px-4 py-2 text-base">
              {categoryName}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{categoryName} Articles</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {category === "web-development" &&
                "In-depth guides and tutorials on modern web development practices, frameworks, and tools."}
              {category === "react-tutorials" &&
                "Step-by-step React tutorials, best practices, and advanced techniques for building better applications."}
              {category === "business-growth" &&
                "Strategic insights on how technology decisions impact business growth and success."}
              {category === "case-studies" &&
                "Real-world examples of successful projects and the technical decisions that made them possible."}
              {category === "industry-insights" &&
                "Analysis of industry trends, emerging technologies, and their business implications."}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample posts for the category */}
          <Card className="group transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Article thumbnail"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Dec 15, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />8 min read
                </div>
              </div>
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link href={`/blog/${category}/sample-article-1`}>
                  {category === "web-development" && "Building Scalable Web Applications with Next.js 15"}
                  {category === "react-tutorials" && "Advanced React Patterns: Compound Components"}
                  {category === "business-growth" && "Technical Debt: The Hidden Cost of Fast Growth"}
                  {category === "case-studies" && "How We Reduced Load Time by 70% for a Major E-commerce Site"}
                  {category === "industry-insights" && "The Rise of Edge Computing in Web Development"}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm">
                {category === "web-development" &&
                  "Learn how to build production-ready applications with the latest Next.js features, including Server Components and improved performance optimizations."}
                {category === "react-tutorials" &&
                  "Master the compound component pattern to build flexible and reusable React components that are easy to maintain and extend."}
                {category === "business-growth" &&
                  "Understanding how technical decisions impact your bottom line and strategies for managing technical debt while scaling rapidly."}
                {category === "case-studies" &&
                  "A detailed breakdown of performance optimization techniques that resulted in significant improvements in user experience and conversion rates."}
                {category === "industry-insights" &&
                  "Exploring how edge computing is changing the landscape of web development and what it means for your next project."}
              </p>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User className="h-3 w-3" />
                Sarah Chen
              </div>
            </CardContent>
          </Card>

          {/* Add more sample posts */}
          <Card className="group transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Article thumbnail"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Dec 12, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  12 min read
                </div>
              </div>
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link href={`/blog/${category}/sample-article-2`}>
                  {category === "web-development" && "TypeScript Best Practices for Large Applications"}
                  {category === "react-tutorials" && "State Management with Zustand vs Redux Toolkit"}
                  {category === "business-growth" && "From Startup to Scale: Technical Architecture Decisions"}
                  {category === "case-studies" && "Migrating a Legacy System to Modern Stack: Lessons Learned"}
                  {category === "industry-insights" && "AI Integration in Web Development: Current State and Future"}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm">
                {category === "web-development" &&
                  "Essential TypeScript patterns and practices for maintaining large codebases with multiple developers and complex business logic."}
                {category === "react-tutorials" &&
                  "Compare modern state management solutions and learn when to use each approach in your React applications."}
                {category === "business-growth" &&
                  "Critical technical decisions that can make or break your scaling journey, with real examples from successful startups."}
                {category === "case-studies" &&
                  "A comprehensive look at modernizing a 10-year-old system while maintaining business continuity and user experience."}
                {category === "industry-insights" &&
                  "How AI tools are transforming development workflows and what developers need to know to stay competitive."}
              </p>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User className="h-3 w-3" />
                Alex Thompson
              </div>
            </CardContent>
          </Card>

          <Card className="group transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  width={350}
                  height={200}
                  alt="Article thumbnail"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Dec 10, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  15 min read
                </div>
              </div>
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link href={`/blog/${category}/sample-article-3`}>
                  {category === "web-development" && "Database Design Patterns for Modern Web Apps"}
                  {category === "react-tutorials" && "Building Custom Hooks: Advanced Patterns and Use Cases"}
                  {category === "business-growth" && "ROI of Modern Development Practices"}
                  {category === "case-studies" && "Scaling to 1M Users: Infrastructure and Code Changes"}
                  {category === "industry-insights" && "The Future of Full-Stack Development in 2025"}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm">
                {category === "web-development" &&
                  "Learn proven database design patterns that scale with your application and support complex business requirements."}
                {category === "react-tutorials" &&
                  "Advanced techniques for creating reusable, testable, and performant custom hooks that solve real-world problems."}
                {category === "business-growth" &&
                  "Quantifying the business impact of investing in modern development practices, tools, and team processes."}
                {category === "case-studies" &&
                  "The technical and architectural changes required to handle massive scale, with specific examples and performance metrics."}
                {category === "industry-insights" &&
                  "Predictions and trends that will shape how we build web applications in the coming year."}
              </p>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User className="h-3 w-3" />
                Marcus Rodriguez
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 border-t">
        <div className="container px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">Need Help Implementing These Concepts?</h2>
            <p className="text-muted-foreground text-lg">
              Our team of experts can help you apply these strategies to your specific project and business goals.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg">
                Get Free Consultation
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
