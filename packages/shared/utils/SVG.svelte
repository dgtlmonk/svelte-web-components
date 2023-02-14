<!-- 
     Usage:

      <SVG
        {cls}
        {width}
        {height}
        {center}
        {scale}
        d="M14.7071 5.29289C15.0976 5.68342 15.0976 ..."
    /> 
-->
<script lang="ts">
  export let cls = "";
  // export let classes: string = "";
  export let scale: number = 1;
  export let center: number = 0;
  export let width: string = "32";
  export let height: string = "32";
  export let d: string = "";

</script>

<svg
  class={cls}
  xmlns="http://www.w3.org/2000/svg"
  viewBox={`0 0 ${width} ${height}`}
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
