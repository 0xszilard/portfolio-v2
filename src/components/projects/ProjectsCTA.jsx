import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="container m-auto px-4 py-16 md:px-6 md:py-20">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 md:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Success Story?</h2>
            <p className="text-lg opacity-90">
              Join 200+ successful companies who've transformed their business with our development expertise.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="secondary" asChild>
                <Link href="/#contact">Get Free Project Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground"
                asChild
              >
                <Link href="/booking">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
