import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function NewsLetter() {
  return (
    <section className="bg-muted/30 border-t px-4 py-16 md:px-6">
      <div className="container m-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <h2 className="text-3xl font-bold">Stay Updated with Development Insights</h2>
              <p className="text-lg opacity-90">
                Get weekly articles, tutorials, and industry insights delivered to your inbox. Join 5,000+ developers
                and business owners.
              </p>
              <div className="mx-auto flex max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground text-primary placeholder:text-primary/60"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
              <p className="text-sm opacity-75">No spam. Unsubscribe anytime.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
