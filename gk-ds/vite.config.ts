import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import VitePluginCustomElementsManifest from 'vite-plugin-cem';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    VitePluginCustomElementsManifest({
      files: ['./lib/**/*.ts'],
      lit: true,
      output: './custom-elements.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(dirname, 'lib/index.ts'),
      name: 'gk-ds',
      fileName: format => `gk-ds.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'gk-ds.css';
          }
          return assetInfo.name || 'asset';
        },
      },
    },
  },
});
