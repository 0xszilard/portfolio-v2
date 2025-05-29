"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <section className="px-4 py-10">
      <div className="m-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Explore Your Idea - Book Your Free Consultation
          </h2>
          <InlineWidget
            className="h-250 md:h-200 dark:invert"
            pageSettings={{
              backgroundColor: "#FFF",
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
      </div>
    </section>
  );
}
