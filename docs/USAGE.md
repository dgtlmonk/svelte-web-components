# Usage 

1. Build your component

```bash
$ cd `packages/your-component/`
$ yarn run build
```

2. Copy the `js` file from `/dist` folder to your app
             
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <script type="module" src="path/to/web-component.js"></script> 
</head>
<body>
  <my-web-component/>
</body>
</html>

```

### Vue 

```js
// main
import 'path/to/your/web-component.js'

<template>
  <your-custom-component stringProps="value" :numberProps="10" @event-name="myHandler"  />
</template>
```

### React 

```js
// main
import 'path/to/web-component.js'

export default () => (
  <your-custom-component props="value"  />
)

```

