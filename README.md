# Perkd UI Components (Work In Progress)
### Reusable Web Components built with [Svelte](https://svelte.dev)

## Motivation
* Reuse components across different platform using web standards
* Isolate component development
* Focus on Business requirements (and not the tech)


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
    └── README.md

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

Build via workspace 

```bash
$ yarn workspace {workspace-name} run build 
```

{workspace-name} is the component package name (package.json)

### Storybook  - Component Testing and Documentation

```bash
$ yarn run sb
```
![wc-sb](https://user-images.githubusercontent.com/43092/218355124-79b5146a-e50d-4308-8497-7d1c997db60a.gif)

