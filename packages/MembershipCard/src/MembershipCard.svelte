<svelte:options tag="c-member-card"/>
<script lang="ts">
  // import {tw } from 'twind'
 	export let borderRadius: number = 12; 
 	export let src:string = ''; 

</script>

  <div class="container" 
    style="--border-radius: {borderRadius}px">
    <img 
      {src} 
      loading="eager" 
      aria-label="membership card" 
      alt="membership card" />
  </div>

<style lang="scss">
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: var(--border-radius);
    overflow: hidden;
    position: relative;
    bottom: -3px;
  }

  .container {
    min-width: min-content;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); 
    background: transparent;
  }

</style>


