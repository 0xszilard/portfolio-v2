import { CaseIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "metaTitle",
      type: "string",
    }),

    defineField({
      name: "metaDescription",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
      description: "Key achievements or metrics for this project",
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      description: "List of tech stacks used",
    }),

    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      description: "URL where the project is deployed or demonstrated",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error("Must be a valid URL"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      slug: "slug.current",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
