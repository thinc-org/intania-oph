import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  projectId: "d62otoua",
  dataset: "production",
  apiVersion: "2023-03-21",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  integrations: [tailwind(), react()]
});