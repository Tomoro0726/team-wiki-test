import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math'; // relevant

import rehypeImg2pic from "astro-rehype-img2pic";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx({
    remarkPlugins: [remarkMath],
    // relevant
    rehypePlugins: [rehypeKatex] // relevant
  }), rehypeImg2pic()],
  markdown: {
    remarkPlugins: [remarkBreaks]
  }
});