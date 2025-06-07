import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/badge";

export default function CategoryHeader({ currentCategory }) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/blog">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Posts
          </Link>
        </Button>
        <div className="space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto w-fit px-4 py-2 text-base">
            {currentCategory.title}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{currentCategory.title} Articles</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{currentCategory.description}</p>
        </div>
      </div>
    </section>
  );
}
