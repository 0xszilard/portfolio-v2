import { PortableText } from "next-sanity";
import React from "react";
import { components } from "./BlogComponents";

export default function BlogContent({ data }) {
  return (
    <article className="prose prose-xl prose-blue prose-a:text-primary prose-li:marker:text-primary mx-auto mt-8 max-w-3xl">
      <PortableText value={data.body} components={components} />
    </article>
  );
}
