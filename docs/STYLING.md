# Styling


### There are ways to style custom component depending on use-cases



#### Styling via Custom [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

```js
// button.svelte
<svelte:options tag="c-button"/> // custom element tag
<script lang="ts">
  export let label: string = '';
</script>

<button
  type="button"
  class="primary">
  {label} {count}
</button>

<style>
    .primary {
      color: var(--color-primary);
      background-color: var(--bg-color-primary);
    }
</style>

```

### ReactJS
```js

// app.css
c-button {
    --color-primary: white;
    --bg-color-primary: blue;
}

```

```js
// main
import 'app.css'
import 'path/to/your/web-component.js'

export default () => (
  <your-custom-component props="value"  />
)


```

## Shared Stylesheet





#### Resources
https://css-tricks.com/styling-a-web-component/