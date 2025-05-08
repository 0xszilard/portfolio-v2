import React from "react";
import FlipLink from "../ui/text-effect-flipper";

export default function Contact() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-5xl">
        <h2 className="md:text5xl text-4xl font-extrabold md:font-bold"></h2>
        <FlipLink href="https://github.com/0xszilard">Github</FlipLink>
        <FlipLink href="https://x.com/guri_who">LinkedIn</FlipLink>
        <FlipLink href="https://x.com/guri_who">Youtube</FlipLink>
      </div>
    </section>
  );
}
