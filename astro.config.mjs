import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math'; // relevant

import rehypeImg2pic from 'astro-rehype-img2pic';

import playformCompress from '@playform/compress';
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
    rehypeImg2pic({
      folderName: 'img2pic',
      formats: ['avif', 'webp'],
      qualities: [60, 80],
      sizes: [
        '(max-width: 768px) 100vw, 320px',
        '(max-width: 768px) 100vw, 320px',
      ],
      widths: [720, 1920],
      includeOriginalImage: false,
    }),
    playformCompress(),
    playformInline(),
  ],
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});