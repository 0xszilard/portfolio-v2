import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="container mx-auto space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Build Something Amazing?</h2>
        <p className="text-muted-foreground text-lg">
          Let's discuss your project and see how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button>Get Free Project Quote</Button>
          <Button variant="outline" asChild>
            <Link href="/projects">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
