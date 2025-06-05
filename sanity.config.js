import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "infobridge",
  projectId: "r7goxr5o",
  dataset: "production",
  studioHost: "infobridge",
  plugins: [visionTool()],
  ...schema,
});
