<svelte:options tag="c-applet-header"/>
<script lang="ts">  import { get_current_component } from 'svelte/internal';
  // import SVG from '../../shared/components/SVG.svelte';
  import dispatch from '../../shared/utils/dispatch';

  /** -------------------------------------------------
   * Props
   */
  export let back: boolean = false
  export let bg_color: string = null;
  export let close: boolean = false
  export let font_size: number = 1.5;
  export let font_weight: number= 700;
  export let icon_color: string = null;
  export let text_color: string = null;
  export let text: string = 'untitled';
  // -------------------------------------------------

  /** -------------------------------------------------
   * Endvents
   */
   const closeEvt: string = 'on-close';
   const backEvt: string = 'on-back';
  // -------------------------------------------------

  // Component reference for dispatching events
  const _this = get_current_component();
  
</script>

<div 
  class="nav wrapper"
  style="--nav-header-bg-color: {bg_color}; 
         --nav-header-text-color: {text_color};
         --nav-header-icon-color: {icon_color};
         --nav-header-font-weight: {font_weight};"
>

 <div class="nav-control-container">
    <div class="control-wrapper" 
      role="button"
      on:click={() => dispatch(backEvt, _this, {})} 
      on:keydown={() => dispatch(backEvt, _this, {})}> 

      {#if back}
         <!-- <SVG
          scale={.9}
          viewBox="0 0 20 20"
          d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
        />   -->
        <span class="control-icon" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="24"
            height="24"
          >
            <g
              transform="scale(.9)" >
              <path xmlns="http://www.w3.org/2000/svg" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
            </g>
          </svg>
        </span> 
      {/if}
    </div>
 </div>
 <span class="title" style="font-size: {font_size}rem;">
  {text} 
 </span>
 <div class="nav-control-container">
    <div class="control-wrapper" 
      role="button"
      on:click={() => dispatch(closeEvt, _this, {})} 
      on:keydown={() => dispatch(closeEvt, _this, {})}> 

      {#if close}
        <span class="control-icon" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <g>
              <path 
                xmlns="http://www.w3.org/2000/svg" 
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                />
            </g>
          </svg>
        </span> 
      {/if}
    </div>
 </div>

  <!-- <div class="svg-container">
    {#if withClose}
      <span class="icon"  
        role="button"
        on:click={() => dispatch(closeEvt, _this, {})}
        on:keydown={() => dispatch(closeEvt, _this, {})}
      > 
        <SVG
          viewBox="0 0 24 24"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
        />
    </span>
    {/if}
  </div> -->
</div>


<style lang="scss">
  @import '../../shared/styles/scss/palette.scss';
.nav {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
  }

  .wrapper {
    font-size: 1.3rem;
    text-align: center;
    height: 4rem/* 64px */; 
    background-color: var(--nav-header-bg-color, $perkd-orange);
    width: 100%;
  }
  .title {
    color: var(--nav-header-text-color,  #954700);
    font-weight: var(--nav-header-font-weight, 700);
  }

  .nav-control-container {
    display: flex;
    justify-content: center;
  }
  
  .control-wrapper {
    color: var(--nav-header-icon-color, white);
    scale: .7;
  }

  .control-icon {
    fill: currentColor;
    background-color: rgb(156 163 175 / .25);
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
</style>



