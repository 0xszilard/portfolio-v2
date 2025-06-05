import React from "react";
import { Card, CardContent } from "../ui/card";
import { Target, Users, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="container m-auto mb-12 space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Drives Us</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Our core values shape every project we take on and every relationship we build.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Zap className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Speed Without Compromise</h3>
            <p className="text-muted-foreground">
              We deliver fast without cutting corners. Our proven processes and modern tech stack enable rapid
              development while maintaining enterprise-grade quality.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Target className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Business-First Approach</h3>
            <p className="text-muted-foreground">
              Every technical decision is made with your business goals in mind. We focus on features that drive revenue
              and user engagement, not just cool technology.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Users className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">True Partnership</h3>
            <p className="text-muted-foreground">
              We're not just vendors—we're your technical co-founders. We invest in your success and provide ongoing
              strategic guidance beyond just development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
