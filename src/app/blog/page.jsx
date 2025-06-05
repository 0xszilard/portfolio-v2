import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp } from "lucide-react";
import { placeholder } from "@/assets";

const latestPosts = [
  {
    id: "react-performance",
    title: "React Performance Optimization: 10 Proven Techniques",
    href: "/blog/react-tutorials/react-performance-optimization-guide",
    excerpt:
      "Learn how to optimize your React applications for better performance and user experience. Includes code examples and real-world benchmarks.",
    category: "React Tutorials",
    date: "Dec 12, 2024",
    imageSrc: "",
    imageAlt: "React Performance",
    author: "Sarah Chen",
    readTime: "12 min read",
  },
  {
    id: "mvp-to-series-a",
    title: "From MVP to Series A: A Complete Technical Roadmap",
    href: "/blog/business-growth/mvp-to-series-a-complete-guide",
    excerpt:
      "The technical decisions and architecture choices that can make or break your startup's funding journey. Based on our experience with 50+ funded startups.",
    category: "Business Growth",
    date: "Dec 10, 2024",
    imageSrc: "",
    imageAlt: "Business Growth",
    author: "Marcus Rodriguez",
    readTime: "15 min read",
  },
  {
    id: "nextjs-15-guide",
    title: "Next.js 15: Complete Guide to New Features and Migration",
    href: "/blog/web-development/nextjs-15-complete-guide",
    excerpt:
      "Everything you need to know about Next.js 15, including new features, breaking changes, and step-by-step migration guide with code examples.",
    category: "Web Development",
    date: "Dec 8, 2024",
    imageSrc: "",
    imageAlt: "Next.js Guide",
    author: "Alex Thompson",
    readTime: "10 min read",
  },
  {
    id: "web-trends-2025",
    title: "Web Development Trends 2025: What Every Business Should Know",
    href: "/blog/industry-insights/web-development-trends-2025",
    excerpt:
      "The technologies and approaches that will dominate web development in 2025, and how they'll impact your business decisions and budget planning.",
    category: "Industry Insights",
    date: "Dec 5, 2024",
    imageSrc: "",
    imageAlt: "Industry Insights",
    author: "Sarah Chen",
    readTime: "8 min read",
  },
  {
    id: "ecommerce-case-study",
    title: "How We Increased E-commerce Revenue by 300% in 6 Months",
    href: "/blog/case-studies/ecommerce-platform-300-percent-growth",
    excerpt:
      "A detailed breakdown of the technical and UX improvements that tripled our client's online revenue. Includes performance metrics and conversion data.",
    category: "Case Studies",
    date: "Dec 3, 2024",
    imageSrc: "",
    imageAlt: "Case Study",
    author: "Marcus Rodriguez",
    readTime: "14 min read",
  },
  {
    id: "react-server-components",
    title: "React Server Components: Complete Implementation Guide",
    href: "/blog/react-tutorials/react-server-components-guide",
    excerpt:
      "Master React Server Components with practical examples, performance comparisons, and best practices for production applications.",
    category: "React Tutorials",
    date: "Dec 1, 2024",
    imageSrc: "",
    imageAlt: "React Tutorial",
    author: "Alex Thompson",
    readTime: "16 min read",
  },
];

export const metadata = {
  title: "Blog",
  description: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/blog`,
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

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container m-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto w-fit">
            <TrendingUp className="mr-2 h-3 w-3" />
            Weekly Development Insights
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Learn From Our{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
              Development Expertise
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Practical guides, industry insights, and proven strategies to help you build better web applications and
            grow your business.
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/30 border-t">
        <div className="px-4 py-8 md:px-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            <Button variant="default" size="sm" asChild>
              <Link href="/blog">All Posts</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog/web-development">Web Development</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog/react-tutorials">React Tutorials</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog/business-growth">Business Growth</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog/case-studies">Case Studies</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog/industry-insights">Industry Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container m-auto px-4 py-16 md:px-6">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold">Featured Article</h2>
          <p className="text-muted-foreground">Our most popular and impactful content</p>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="aspect-video md:aspect-auto">
              <Image
                src={placeholder}
                width={600}
                height={400}
                alt="Featured article"
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-8">
              <div className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <Badge variant="secondary">Web Development</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Dec 15, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />8 min read
                  </div>
                </div>
                <h3 className="text-2xl font-bold">
                  How We Built a $2M SaaS Platform in 3 Weeks: Complete Technical Breakdown
                </h3>
                <p className="text-muted-foreground">
                  A detailed case study of how we helped TechFlow build their MVP using Next.js, TypeScript, and modern
                  development practices. Learn the exact architecture and decisions that led to their successful Series
                  A.
                </p>
                <Button asChild>
                  <Link href="/blog/case-studies/techflow-saas-platform-3-weeks">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Recent Posts */}
      <section className="container m-auto px-4 pb-16 md:px-6">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold">Latest Articles</h2>
          <p className="text-muted-foreground">Fresh insights and tutorials from our development team</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Card key={post.id} className="group pt-0 transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={post.imageSrc || placeholder}
                    width={350}
                    height={200}
                    alt={post.imageAlt}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>

                <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <p className="text-muted-foreground text-sm">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground flex items-center gap-2 text-sm">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1 text-sm">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted/30 border-t">
        <div className="container m-auto px-4 py-16 md:px-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl space-y-6 text-center">
                <h2 className="text-3xl font-bold">Stay Updated with Development Insights</h2>
                <p className="text-lg opacity-90">
                  Get weekly articles, tutorials, and industry insights delivered to your inbox. Join 5,000+ developers
                  and business owners.
                </p>
                <div className="mx-auto flex max-w-md gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary-foreground text-primary placeholder:text-primary/60"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </div>
                <p className="text-sm opacity-75">No spam. Unsubscribe anytime.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
