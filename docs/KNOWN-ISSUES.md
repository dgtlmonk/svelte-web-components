## Known Issues


### Attributes can't be kebab-case (web components)

Genrated Svelte custom elements cannot read snakeCase attributes (see Issue reference links). Instead, we can use snake_case as an alternative attribute format when declaring attributes.

```js
//  component.svelte
<svelte:options tag="my-component"/>
<script>
// ❌ This won't work when exported as web component
// export let borderRadius = 10;

// ✅ Instead, use kebab-case (for now)
export let border_radius = 10;
</script>

<div style="--border-radius:{border_radius}px">
    <slot/>
</div>
 
<style>
    border-radius: var(--border-radius, 20px);
</style>
 
```

```js
// consumer.vue
<script>
    import 'path/to/component.svelte'
</script>

<template>
    <my-component  :border_radius="30">
</template>
 ```



> Note that this issue only occurs in Svelte. React and Vue can read `camelCase` attributes. But we want our web component to be portable with all available frameworks, so using kebab_case is preffered pattern at the moment.


## Issue reference

* https://github.com/sveltejs/svelte/issues/875
* https://github.com/sveltejs/svelte/issues/3852
* https://community.webcomponents.dev/tnzk/svelte-for-web-components-development-pitfalls-and-workarounds-1405#fn2