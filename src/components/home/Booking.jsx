"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export default function Booking() {
  return (
    <section id="contact" className="px-4 pt-10 pb-20 md:px-6">
      <div className="m-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Badge className="mb-2">BOOK YOUR FREE STRATEGY CALL</Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Free 15-Minute SaaS Product Strategy Call
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            In just 15 minutes, you'll walk away with a clear plan to turn your app or SaaS idea into a real, working
            product — even if you're not technical.
          </p>
          <p className="text-muted-foreground mb-4 text-lg">
            Pick a time on our calendar and let’s talk about your idea, your market, and how we can bring your platform
            to life fast, lean, and smart.
          </p>
          <h3 className="text-primary mb-3 text-xl font-semibold">THIS CALL IS PERFECT FOR:</h3>
          <ol className="text-muted-foreground list-outside list-disc space-y-2 pl-5 text-lg">
            <li>
              Creators or founders with an idea for a{" "}
              <span className="text-foreground font-bold">SaaS, platform, or web app</span> but no dev team.
            </li>
            <li>
              Entrepreneurs looking to <span className="text-foreground font-bold">validate, scope, and launch</span> a
              product the smart way — without learning to code.
            </li>
            <li>
              Founders who want a partner that can{" "}
              <span className="text-foreground font-bold">handle tech from A to Z</span> — from wireframes to launch.
            </li>
            <li>
              People who are tired of generic dev shops and want a team that{" "}
              <span className="text-foreground font-bold">understands product, not just code.</span>
            </li>
            <li>
              Anyone who wants to build software that{" "}
              <span className="text-foreground font-bold">gets used, makes money, and scales.</span>
            </li>
          </ol>
        </div>

        <Card className="flex-grow overflow-hidden p-0">
          <InlineWidget
            className="h-full dark:invert"
            pageSettings={{
              backgroundColor: "FFFFFF",
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: "00a2ff",
              textColor: "1B1714",
              resize: true,
              hideGdprBanner: true,
            }}
            url="https://calendly.com/infobridge-dev/consulting"
          />
        </Card>
      </div>
    </section>
  );
}
