<!-- 
   This Component was generated. 

   custom element name i.e. <c-button /> 
   rename to suit your need -->
<svelte:options tag="c-rename-component-name"/>

<script lang="ts">
import { get_current_component } from "svelte/internal";

  // component props i.e. <c-button label="my-label"/>
  export let label: string = '';

  // local counter
  let count: number = 0

  // Event name to be handled by host Component. See EVENT-HANDLER.md
  const myCustomEvent = "on-count";
  const component: any = get_current_component();

  // Event Dispatcher
  // TODO: Move to Shared lib
  const dispatch = (name, detail ) => {
    component?.dispatchEvent(
      new CustomEvent(name,
      { detail,
        cancelable: true,
        bubbles: true,
        composed: true  // this is to make the event cross shadow dom boundaries
    }));
  };

  const increment = () => {
    count += 1
    dispatch(myCustomEvent, { count: count });
  }
</script>

<button
  type="button" 
  class="my-button"
  on:click={increment}
  >
  {label} {count}
</button>

<style>
.my-button {
  all: unset;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 20px;
  color: white;
  background-color: #1ea7fd;
}
</style>



