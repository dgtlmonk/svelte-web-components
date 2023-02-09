import { StorybookConfig } from '@storybook/svelte-vite';
 import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import sveltePreprocess from  'svelte-preprocess'


const config: StorybookConfig = {
  "stories": [
    "../../**/src/**/*.mdx",
    "../../**/src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
        options: {
        postcssLoaderOptions: {
         implementation: require('postcss'),
       },
     },
    }
  ],
  "framework": {
    "name": "@storybook/svelte-vite",
    "options": {
    }
  },
  "docs": {
    "autodocs": "tag"
  },
  "core": {
    "builder" : "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7":true
  },
};

// FIXME: Svelte TS Support for mono repo
export default {
  ...config,
  svelteOptions: {
    preprocess: sveltePreprocess(),
  }
};