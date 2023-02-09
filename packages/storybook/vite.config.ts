import { defineConfig } from 'vite'
import { folderInput } from 'rollup-plugin-folder-input'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/build-options.html
export default defineConfig(({ command, mode }) => {
  const isProd = command === 'build' && mode === 'production';

  return {
    plugins: [
      isProd && folderInput(),
      svelte({
        compilerOptions: {
          customElement: isProd,
        },
      })
    ],
    build: {
      // minify: true,
      // rollupOptions: {
      //  // Svelte files to build as custom elements / web components
      //   input: ['src/*.svelte'],
      //   output: {
      //     format: 'es',
      //     dir: 'dist',
      //     // https://rollupjs.org/configuration-options/#output-assetfilenames
      //     // assetFileNames: (assetInfo)=> `[name]/${assetInfo.name}`,
      //     // entryFileNames: '[name]/[name].js',

      //     assetFileNames: (assetInfo)=> `${assetInfo.name}`,
      //     entryFileNames: '[name].js',



      //     // shared chunk
      //     // https://rollupjs.org/configuration-options/#output-chunkfilenames
      //     chunkFileNames:'internal/[name].js'
      //   }
      // }
    },
  }
})
