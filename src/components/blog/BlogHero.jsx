import React from "react";
import { Badge } from "../ui/badge";
import { Search, TrendingUp } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function BlogHero() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          <TrendingUp className="mr-2 h-3 w-3" />
          Weekly Development Insights
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Learn From Our{" "}
          <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
            Development Expertise
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
          Practical guides, industry insights, and proven strategies to help you build better web applications and grow
          your business.
        </p>
        <div className="mx-auto flex max-w-md gap-2">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <Button className="h-9">Search</Button>
        </div>
      </div>
    </section>
  );
}
