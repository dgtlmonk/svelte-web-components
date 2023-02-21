<svelte:options tag="c-image-loader" />

<script lang="ts">
  import { onMount } from "svelte"
  import { get_current_component } from "svelte/internal"
  import dispatch from "../../shared/utils/dispatch"

  export let src: string = ""
  export let border_radius: number = 12
  export let width: number = null
  export let height: number = null
  export let unit: string = "px"

  let isLoading = true
  const img = new Image(),
    minWidth = 220,
    minHeight = 120,
    // Image click event name
    clickEvt: string = "image-click",
    // Component reference for dispatching events
    _this = get_current_component()

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
  on:click={() => dispatch(clickEvt, _this)}
  on:keydown={() => dispatch(clickEvt, _this)}
  class="container"
  role="button"
  style={`--border-radius:${border_radius}px; 
            --container-height: ${height}${unit};
            --container-width: ${width}${unit};
                    min-width: ${minWidth}${unit}; 
                   min-height: ${minHeight}${unit}
                   --min-height: ${minHeight}${unit}
                   `}
>
  {#if isLoading}
    <div class="pulse-loader" />
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
    overflow: hidden;
  }
  %img-wrapper {
    width: 100%;
    height: 100%;
    min-width: var(--container-width, 100%);
    min-height: var(--container-height, 100%);
    border-radius: var(--border-radius);
    vertical-align: middle;
  }
  .pulse-loader {
    background: #f3f4f6;
    position: relative;
    min-height: var(--min-height, 220px);
    @extend %animate-pulse;
    @extend %img-wrapper;
  }

  img {
    object-fit: cover;
    overflow: hidden;
    height: auto;
    @extend %img-wrapper;
  }
</style>
