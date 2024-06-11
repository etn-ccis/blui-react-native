/// <reference types='vitest' />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import reactNativeWeb from 'vite-plugin-react-native-web';
import prism from 'vite-plugin-prismjs';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/docs',

  server: {
    port: 4200,
    host: 'localhost',
    open: true,
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    mdx({
      /* jsxImportSource: …, otherOptions… */
      remarkPlugins: [remarkGfm],
      providerImportSource: '@mdx-js/react',
    }),
    reactNativeWeb(),
    prism({
      languages: ['javascript', 'css', 'html', 'typescript', 'jsx'],
      plugins: ['line-numbers'],
      theme: 'tomorrow',
      css: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../dist/docs',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../coverage/docs',
      provider: 'v8',
    },
  },
});
