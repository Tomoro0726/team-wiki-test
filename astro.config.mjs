import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex"; // relevant
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math"; // relevant

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  output: "static",
  compressHTML: true,
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkBreaks],

      remarkPlugins: [remarkMath],
      // relevant
      rehypePlugins: [rehypeKatex], // relevant
    }),

    (await import("@playform/compress")).default({
      CSS: true,
      HTML: false,
      Image: {
        enabled: true,
        quality: 80,
        avif: true,
      },
      JavaScript: true,
      SVG: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
