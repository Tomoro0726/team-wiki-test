import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx({
    remarkPlugins: [remarkMath], // relevant
    rehypePlugins: [rehypeKatex] // relevant
  })],
  markdown: {
    remarkPlugins: [remarkBreaks,],
  }
});