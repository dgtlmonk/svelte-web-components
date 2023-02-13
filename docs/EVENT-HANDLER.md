# Capturing events 


## VueJS


By default, Vue passes all data to Custom Elements as attributes. However, Vue also provides syntax to instruct its bindings to use properties instead. To bind to a Custom Element property use `:foo.prop="bar"`


Vue can listen to native DOM events dispatched from Custom Elements. Its declarative event bindings only support lowercase and kebab case events. To listen for any events named with capital letters you must write imperative code.


```js
<script setup>
function handleEvent(event){
  console.log(event.detail)
}
</script>

<template>
  <div className="App">
    <my-custom-component @event-name="handleEvent"></my-custom-component>
  </div>
</template>
```



## ReactJS <=v18 (v19 will fully support this out of the box)
```js

// hooks
import {  useEffect, useRef, useState } from "react";

export function useWebComponentEvent(eventName: string) {
    const [data, setData] = useState(undefined);
    const componentRef = useRef<HTMLElement | undefined>();
 
    useEffect(() => {
        const ref = componentRef.current;
        const eventListener = ($event: any) => {
            setData($event.detail);
        };
 
        ref?.addEventListener(eventName, eventListener, false);
 
        return () => {
             ref?.removeEventListener(`${eventName}`, 
                                     eventListener, true);
        };
    }, [componentRef]);
 
    return [componentRef, data];
}


// App
function App() {
    const [componentRef, data] = useWebComponentEvent('event-name');

    useEffect(()=> {
      // console.log('data ', data)
    }, [data])
 
    return (
        <div className="App">
            <my-custom-component ref={componentRef}></my-custom-component>
       </div>
    );
}

```




## ReactJS related issues

* [RFC: Plan for custom element attributes/properties in React 19](https://github.com/facebook/react/issues/11347)
* [Event Handler on React Component not invoked when React Component is rendered inside a Web Component](https://github.com/facebook/react/issues/9242)
* [Attributes and properties for Custom Components](https://github.com/facebook/react/issues/7249)





---
#### Resources
https://medium.com/swlh/create-a-react-custom-hooks-for-your-web-components-f4319bb4bc35
https://developer.vonage.com/en/blog/using-web-components-in-a-react-application-dr

[React +Custom Elements test](https://custom-elements-everywhere.com/libraries/react-experimental/results/results.html)
