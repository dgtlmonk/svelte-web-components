# Styling

## Styling via Props
```js
// Component
// button.svelte
<svelte:options tag="c-button"/>
<script lang="ts">
  export let label: string = 'Hi';
  export let color: string = '';
  export let bgColor: string = '#377cd7';
</script>

<button
  type="button"
  style="--button-color: {color}; --button-bg-color: {bgColor}"
  class="my-button">
  {label}
</button>

<style>
  .my-button {
    color: var(--button-color);
    background-color: var(--button-bg-color);
    all: unset;
  }
</style>

```


### VueJS
```js
// main
import 'path/to/your/web-component.js'

<template>
  <c-button label="hello world"  color="white" bgColor="blue" />
</template>

`
``
### ReactJS

```js
// main
import 'path/to/your/web-component.js'

export default () => (
  <c-button label="hello world"  color="white" bgColor="blue" />
)

```




## Styling via Custom [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)


```js
// Component
// button.svelte
<svelte:options tag="c-button"/> // custom element tag
<script lang="ts">
  export let label: string = '';
</script>

<button
  type="button"
  class="my-button">
  {label}
</button>

<style>
  .my-button{
    color: var(--color);
    background-color: var(--bg-color);
  }
</style>

```

### StyleSheet

```css
 /* style.css */
c-button {
    --color: white;
    --bg-color: blue;
}

/* or via :root */
/* :root {
  --color-primary: white;
  --bg-color-primary: blue;

} */

```

### VueJS
```js
// main
import 'style.css' 
import 'path/to/your/web-component.js'

<template>
  <c-button label="hello world"  />
</template>

```


### ReactJS

```js
// main
import 'style.css' 
import 'path/to/your/web-component.js'

export default () => (
  <c-button label="hello world"  />
)

```


#### Resources
* https://css-tricks.com/styling-a-web-component/
* https://usefulangle.com/post/370/custom-elements-external-cs-stylesheet
* https://erdemgonul.medium.com/styling-custom-components-in-svelte-3723ad752cd2
* https://nuclia.com/developers/how-to-run-svelte-custom-elements-in-dev-mode/
* https://svelte.dev/repl/bb42c17d585b4236824e1d5e48fe92b5?version=3.38.0