<!-- 
     Usage:
      <SVG
        {width}
        {height}
        {center}
        {scale}
        d="M14.7071 5.29289C15.0976 5.68342 15.0976 ..."
    /> 
-->
<script lang="ts">
  export let color: string = "";
  export let scale: number = 1;
  export let center: number = 0;
  export let width: string = "24";
  export let height: string = "24";
  export let viewBox= "0 0 32 32"
  export let d: string = "";

</script>
<span class="icon"
      style="color: {color}"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {viewBox}
    {width}
    {height}
  >
    <g
      transform={`
          translate(${center}, ${center})
          scale(${scale})`}
    >
      <path xmlns="http://www.w3.org/2000/svg" {d} />
    </g>
  </svg>
</span>

<style>
  .icon {
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
