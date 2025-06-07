import React from "react";
import { Card, CardContent } from "../ui/card";
import { Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="container m-auto mb-12 space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Stand For</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          We’re here to help creators and coaches build real, scalable platforms — and we bring these values to every
          project.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Zap className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Speed, Without Sacrifice</h3>
            <p className="text-muted-foreground">
              We move fast — but never at the cost of clarity or quality. You’ll launch sooner, with confidence, and a
              product that’s built to grow.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Target className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Audience-Led Strategy</h3>
            <p className="text-muted-foreground">
              We design around your strengths — your audience, your expertise, your traction. Every feature we build
              supports real user needs and business outcomes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Users className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Partnership Over Projects</h3>
            <p className="text-muted-foreground">
              We’re more than devs — we’re product partners. That means strategic thinking, honest feedback, and support
              well beyond the launch.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
