<svelte:options tag="c-image-loader" />

<script lang="ts">
  import { onMount } from "svelte"

  export let src: string = ""
  export let border_radius: number = 12
  export let unit: string = "px"
  export let width: number = null
  export let height: number = null

  let isLoading = true
  const img = new Image()
  const minWidth = 220,
    minHeight = 120

  onMount(() => {
    img.src = src

    img.onload = () => {
      isLoading = false
    }

    img.onerror = () => {
      isLoading = false
    }
  })
</script>

<div
  class="container"
  style={`--border-radius: ${border_radius}px; 
            --container-height: ${height}${unit};
            --container-width: ${width}${unit};
                  min-width: ${minWidth}${unit}; 
                  min-height:${minHeight}${unit}`}
>
  {#if isLoading}
    <div class="loader-bg" />
  {:else}
    <img
      {src}
      loading="eager"
      aria-label="membership card"
      alt="membership card"
    />
  {/if}
</div>

<style lang="scss">
  @import "../../shared/styles/scss/animation.scss";

  %img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    bottom: -3px;
  }
  .loader-bg {
    background: #f3f4f6;
    position: relative;
    @extend %animate-pulse;
    @extend %img-wrapper;
  }

  img {
    object-fit: fill;
    overflow: hidden;
    position: relative;
    @extend %img-wrapper;
  }

  .container {
    width: var(--container-width, 100%);
    height: var(--container-height, 100%);
    border-radius: var(--border-radius);
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: transparent;
  }
</style>
