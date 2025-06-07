import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { placeholder } from "@/assets";
import Link from "next/link";

export default function FeaturedProject() {
  return (
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
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
              <Badge variant="outline">Stripe</Badge>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/blog/founder-stories/how-we-built-a-usd2m-saas-platform-in-3-weeks-complete-technical-breakdown">
                  View Full Case Study
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg border shadow-lg">
              <Image
                src={placeholder}
                width={600}
                height={400}
                alt="Featured Case Study"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
