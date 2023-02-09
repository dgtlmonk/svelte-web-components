# Usage 

Web Components allow us to build reusable, customizable elements. A web component’s greatest strength is its interoperability: being natively supported by browsers, web components can be used in any HTML environment, with any framework, or with no framework at all.



### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <script type="module" src="{path/to/myweb-component.js}"></script> 
</head>
<body>
  <my-web-component/>
</body>
</html>

```


### React 

```js
// main
import 'path/to/your/web-component.js'

export default () => (
  <your-custom-component props="value"  />
)

```


### Vue 

```js
// main
import 'path/to/your/web-component.js'

<template>
  <your-custom-component stringProps="value" :numberProps="10" @event-name="myHandler"  />
</template>
```

### Angular
```js
// todo
```