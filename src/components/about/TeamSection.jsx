import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { placeholder } from "@/assets";
import { Badge } from "../ui/badge";

export default function TeamSection() {
  return (
    <section id="team" className="bg-muted/30 border-t px-4 py-16 md:px-6 md:py-20">
      <div className="m-auto max-w-6xl">
        <div className="mb-12 space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Senior developers and designers with 10+ years of experience building products for startups and Fortune 500
            companies.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="space-y-4 p-6 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                <Image src={placeholder} width={96} height={96} alt="Sarah Chen" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Sarah Chen</h3>
                <p className="text-muted-foreground text-sm">Co-Founder & CTO</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Former Senior Engineer at Google. Specializes in scalable architecture and performance optimization.
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
                <Image src={placeholder} width={96} height={96} alt="Marcus Rodriguez" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Marcus Rodriguez</h3>
                <p className="text-muted-foreground text-sm">Co-Founder & CEO</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Ex-Stripe Product Manager. Focuses on user experience and product strategy for maximum business impact.
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
                <Image src={placeholder} width={96} height={96} alt="Alex Thompson" className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Alex Thompson</h3>
                <p className="text-muted-foreground text-sm">Lead Full-Stack Developer</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Former Airbnb engineer with expertise in building high-traffic applications and complex integrations.
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
  );
}
