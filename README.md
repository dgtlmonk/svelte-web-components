# Perkd UI Components 
### Reusable Web Components built with [Svelte](https://svelte.dev)

## Motivation
* Reuse components across different platform using web standards
* Isolate component development
* Code once, deploy anywhere.


### Folders

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


### Setup

Clone this repository, then install dependencies

```bash
$ yarn install
```
### Creating new component

```bash
$ yarn run new
```
![wc-generator](https://user-images.githubusercontent.com/43092/218636329-c1636efe-1c40-4073-a3f5-d55de09e25f6.gif)


Creating new component creates:
1. Component folder
2. Component Storybook
3. Component Git branch to avoid accidental commit to `master` branch. Pull request is encouraged.


### Building 

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

### Storybook  - Component Testing and Documentation

```bash
$ yarn run sb
```
![wc-sb](https://user-images.githubusercontent.com/43092/218355124-79b5146a-e50d-4308-8497-7d1c997db60a.gif)

