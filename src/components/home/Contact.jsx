import React from "react";
import FlipLink from "../ui/text-effect-flipper";
import { ContactFormExample } from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-10 md:px-10">
      <div className="m-auto grid max-w-5xl grid-cols-2">
        <div>
          <FlipLink href="https://github.com/0xszilard">Github</FlipLink>
          <FlipLink href="https://linkedin.com/in/szilardmate">
            LinkedIn
          </FlipLink>
          <FlipLink href="https://youtube.com/@0xszilard">Youtube</FlipLink>
        </div>
        <ContactFormExample />
      </div>
    </section>
  );
}
