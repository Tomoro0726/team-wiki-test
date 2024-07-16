import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math'; // relevant

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: true,
  integrations: [
    react(),
    tailwind(),
    mdx({
      remarkPlugins: [remarkMath],
      // relevant
      rehypePlugins: [rehypeKatex], // relevant
    }),

    (await import('@playform/compress')).default({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
    }),
    playformInline(),
  ],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});