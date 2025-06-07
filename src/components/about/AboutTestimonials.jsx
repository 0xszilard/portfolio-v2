import React from "react";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";

export default function AboutTestimonials() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <Card className="bg-primary text-primary-foreground container m-auto">
        <CardContent className="p-8 md:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Quote className="mx-auto h-12 w-12 opacity-50" />
            <blockquote className="text-xl font-medium md:text-2xl">
              "They delivered our MVP in 3 weeks and helped us raise $2M in Series A. The quality of their work and
              speed of delivery was incredible. They truly understand what startups need."
            </blockquote>
            <div className="space-y-2">
              <div className="font-semibold">Jennifer W.</div>
              <div className="text-sm opacity-90">CEO (YC S22)</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
