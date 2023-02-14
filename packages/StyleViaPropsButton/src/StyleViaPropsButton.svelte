<svelte:options tag="c-custom-css"/>
<script lang="ts">
  export let label: string = 'Hi';
  export let color: string = '';
  export let bgColor: string = '#377cd7';
</script>

<button
  type="button"
  style="--button-color: {color}; --button-bg-color: {bgColor}"
  class="custom-css rounded-sm">
  {label}
</button>

<style lang="scss">
  // Using shared styles variables
  @import '../../shared/styles/scss/vars.scss';
    .custom-css {
      all: unset;
      padding: 1rem;
      border-radius: $rad-lg;
      color: var(--button-color);
      background-color: var(--button-bg-color);
    }
</style>





