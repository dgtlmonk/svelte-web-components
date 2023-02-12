<svelte:options tag="c-custom-css"/>
<script lang="ts">
  export let label: string = 'Hi';
  // export let color: string = '';
  // export let bgColor: string = '#377cd7';
</script>

<button
  type="button"
  class="custom-css">
  {label}
  <slot></slot>
</button>

<style>
    .custom-css {
      all: unset;
      padding: 1rem;
      border-radius: 8px;
      color: var(--button-color);
      background-color: var(--button-bg-color);
    }
</style>





