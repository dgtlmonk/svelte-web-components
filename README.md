# Perkd UI Components 
### :rocket:  Reusable Web Components built with [Svelte](https://svelte.dev)

## Motivation
* Reuse components across different platform using web standards
* Isolate component development
* Code once, deploy anywhere.


### :bulb: Structure

    .
    ├── docs                                    # usage guides
    ├── packages                                # components
    ├── packages/{Component}/stories            # components stories
    ├──── shared                                # shared resource 
    ├────── utils                               # shared code utils 
    ├────── styles                              # shared component styles 
    ├────────── scss                            # shared scss variables and styles 
    ├──── storybook                             # storybook 
    ├── .generator                              # new component generator script folder
    └── README.md


### :wrench: Setup

Clone this repository, then install dependencies

```bash
$ yarn install
```
### :art: Creating new component

```bash
$ yarn run new
```
![wc-generator](https://user-images.githubusercontent.com/43092/218636329-c1636efe-1c40-4073-a3f5-d55de09e25f6.gif)


Creating new component generates:
1. Component folder
2. Component Storybook
3. Component Git branch to avoid accidental commit to `master` branch. Pull request is encouraged.


### :package: Building 

Build all components

```bash
$ yarn run build
```

Build specific component

```bash
$  cd packages/your-component
$  yarn run build
```

or Build via workspace  (root folder)

```bash
$ yarn workspace {workspace-name} run build 
```

{workspace-name} is the Component package `name` in package.json

### :camera_flash: Storybook  - Component Testing and Documentation

```bash
$ yarn run sb
```
![wc-sb](https://user-images.githubusercontent.com/43092/218355124-79b5146a-e50d-4308-8497-7d1c997db60a.gif)

## :nut_and_bolt: Dependencies

| Name                                                                                   | License                                                                                                                           | Description                                                                                                                |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`Svelte`](https://svelte.dev)                                                           | [![License](https://badgen.net/github/license/sveltejs/svelte)](https://github.com/sveltejs/svelte/blob/master/LICENSE.md)                     | Compiles code to tiny, framework-less vanilla JS — your app starts fast and stays fast 
| [`Vite`](https://vitejs.dev)                                                           | [![License](https://badgen.net/github/license/vitejs/vite)](https://api.github.com/repos/vitejs/vite/license)                     | Blazing fast dev tooling & bundler                                                                                         |
| [`SASS`](https://sass-lang.com)                           | [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/sass/sass/blob/main/LICENSE) | Stylesheet language that’s compiled to CSS. Use variables, nested rules, mixins, functions, and more                                                 |
 
 