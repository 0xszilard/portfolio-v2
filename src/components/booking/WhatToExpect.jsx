import { Calendar, Users, Zap } from "lucide-react";

export default function WhatToExpect() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-3xl font-bold">What to Expect</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Here's how our consultation process works to ensure you get maximum value from our time together.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">1. Schedule & Prepare</h3>
              <p className="text-muted-foreground text-sm">
                We'll send you a calendar invite and a brief questionnaire to help us prepare for your specific needs.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">2. Expert Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Meet with our senior developers to discuss your project, get technical recommendations, and explore
                solutions.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-lg">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">3. Action Plan</h3>
              <p className="text-muted-foreground text-sm">
                Receive a detailed follow-up with recommendations, timeline estimates, and next steps for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
