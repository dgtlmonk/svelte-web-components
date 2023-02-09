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
$ yarn run workspace {component-name} build
```