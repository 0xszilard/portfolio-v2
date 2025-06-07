import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BlogCategories({ categories }) {
  return (
    <section className="bg-muted/30 border-t px-4 py-8 md:px-6">
      <div className="m-auto flex w-fit gap-4 pb-2">
        <Button variant="default" size="sm" asChild>
          <Link href="/blog">All Posts</Link>
        </Button>
        {categories.map((category) => (
          <Button key={category.slug} variant="ghost" size="sm" asChild>
            <Link href={`/blog/${category.slug}`}>{category.title}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
