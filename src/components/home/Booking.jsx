"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
import { Badge } from "../ui/badge";

export default function Booking() {
  return (
    <section id="contact" className="px-4 py-10 dark:bg-black">
      <div className="m-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Badge className="mb-2">SCHEDULE YOUR CALL WITH US</Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Free 15-Minute Consultation Call
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with Funnels & Paid
            Advertising.
          </p>
          <p className="text-muted-foreground mb-4 text-lg">
            Find a time on our calendar to schedule your call today and we look
            forward to speaking to you soon!
          </p>
          <h3 className="text-primary mb-3 text-xl font-semibold">
            THIS AUDIT CALL IS PERFECT FOR:
          </h3>
          <ol className="text-muted-foreground list-outside list-disc space-y-2 pl-5 text-lg">
            <li>
              Businesses looking to convert their current website into a{" "}
              <span className="text-foreground font-bold">
                high quality & streamlined funnel format.
              </span>
            </li>
            <li>
              Businesses looking to take their offline business{" "}
              <span className="text-foreground font-bold">online</span>
            </li>
            <li>
              Businesses looking to understand their{" "}
              <span className="text-foreground font-bold">
                increased revenue potential
              </span>
              with funnels & conversion rate optimization.
            </li>
            <li>
              Businesses looking to{" "}
              <span className="text-foreground font-bold">
                maximize their conversion rates & average order value.
              </span>
            </li>
            <li>
              Businesses looking for a reliable agency that can{" "}
              <span className="text-foreground font-bold">
                make their company a priority.
              </span>
            </li>
          </ol>
        </div>
        <InlineWidget
          className="dark:invert"
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
      </div>
    </section>
  );
}
