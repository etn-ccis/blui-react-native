/// <reference types='vitest' />
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import reactNativeWeb from 'vite-plugin-react-native-web';
import prism from 'vite-plugin-prismjs';

export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
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

    root: __dirname,
    build: {
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
