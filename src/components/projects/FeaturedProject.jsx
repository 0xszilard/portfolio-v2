import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { scaleinsta } from "@/assets";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="bg-muted/30">
      <div className="container m-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <Badge variant="secondary">Featured Case Study</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              From Audience to $2M Platform in 3 Weeks
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Brian, the founder had the niche, the audience, and the market insight — but no product. In just 3
                weeks, we built and launched their SaaS platform, helping them land $2M in Series A funding and 10k+
                active users.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">3 weeks</div>
                  <div className="text-muted-foreground text-sm">Build Time</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">$2M</div>
                  <div className="text-muted-foreground text-sm">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">10k+</div>
                  <div className="text-muted-foreground text-sm">Users at Launch</div>
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
                src={scaleinsta}
                width={600}
                height={400}
                alt="SaaS platform case study preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
