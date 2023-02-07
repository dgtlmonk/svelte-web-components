# Creating

<!-- At the heart of each component is a [JavaScript Native Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

For productivity reasons, we are using [Svelte](https://svelte.dev) to create web components. 

Unlike ReactJS or VueJS, Svelte compiles the codes into JavaScript codes that the browser can use during build time. This avoids performance overhead, making it 2x faster than frameworkds that use Virtual DOM and are compiled at runtime.

---

# One essential distinction between React and Svelte is that Svelte works more like a compiler, while React is more of a classic Javascript library.

---

[img here]

 it is important to note that in 2020 Svelte took it over in overall user satisfaction.


2020 Svelte won user satisfaction
https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/

Svelte also holds the number one spot on the Loved vs. Dreaded web framework survey on StackOverflow. React lags a little bit behind, taking fourth place. -->

### Framework-specific components fail us in a number of ways:

* You can only use them in the framework they're designed for 🔒
* Their lifespan is limited to that of the framework's ⏳
* New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems. They're supported by all modern browsers, they're framework-agnostic, and they're part of the standard, so we know they'll be supported for many years to come.