import React from "react";

export default function SocialProof() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16">
      <div className="container mx-auto md:px-6">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className="text-3xl font-bold">Trusted by 200+ Companies</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="text-primary text-3xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-3xl font-bold">$50M+</div>
              <div className="text-muted-foreground text-sm">Client Funding Raised</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-3xl font-bold">2.5x</div>
              <div className="text-muted-foreground text-sm">Average ROI Increase</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-primary text-3xl font-bold">24hr</div>
              <div className="text-muted-foreground text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
