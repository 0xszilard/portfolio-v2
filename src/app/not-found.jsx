import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <TextHoverEffect text="404" />
      <Button asChild>
        <Link href="/">Go Back To Home</Link>
      </Button>
    </section>
  );
}
