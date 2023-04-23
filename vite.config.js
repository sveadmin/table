import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SvelteAdminTable',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
  plugins: [
    svelte({
      preprocess: preprocess(), // <--- Add the Svelte preprocessor
    }),
  ],
});