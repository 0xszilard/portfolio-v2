import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CategoryCTA() {
  return (
    <section className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Need Help Implementing These Concepts?</h2>
          <p className="text-muted-foreground text-lg">
            Our team of experts can help you apply these strategies to your specific project and business goals.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button>Get Free Consultation</Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
