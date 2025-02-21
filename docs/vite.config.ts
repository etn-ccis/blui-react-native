/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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

    build: {
        outDir: '../dist/docs',
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
