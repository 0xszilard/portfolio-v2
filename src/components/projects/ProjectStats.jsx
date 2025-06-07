import React from "react";

export default function ProjectStats() {
  return (
    <section className="bg-muted/30 border-t">
      <div className="container m-auto px-4 py-16 md:px-6 md:py-20">
        <div className="mb-12 space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Success Metrics</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Our projects consistently deliver measurable business results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">200+</div>
            <div className="text-muted-foreground text-sm">Projects Completed</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">$50M+</div>
            <div className="text-muted-foreground text-sm">Client Revenue Generated</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">2.5x</div>
            <div className="text-muted-foreground text-sm">Average ROI Increase</div>
          </div>
          <div className="space-y-2 text-center">
            <div className="text-primary text-4xl font-bold">98%</div>
            <div className="text-muted-foreground text-sm">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
