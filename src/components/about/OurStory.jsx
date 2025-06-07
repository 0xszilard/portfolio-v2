import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { placeholder } from "@/assets";

export default function OurStory() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6 md:py-20">
      <div className="container m-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Started in 2019 by three senior developers who were frustrated with agencies that over-promised and
                under-delivered. We saw too many businesses struggle with slow, expensive development cycles that didn't
                deliver real business value.
              </p>
              <p>
                Our mission became simple: build high-quality web applications faster and more cost-effectively than
                traditional agencies, while maintaining the highest standards of code quality and user experience.
              </p>
              <p>
                Today, we're a team of 15 specialists who have delivered over 200 projects, helping startups raise $50M+
                in funding and enterprises increase their digital revenue by an average of 2.5x.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/booking">Start Your Project</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ||
                  placeholder
                }
                width={900}
                height={900}
                alt="Team working together"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
