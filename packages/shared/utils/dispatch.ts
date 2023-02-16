export default (name, component, detail = {}) => {
    component?.dispatchEvent(new CustomEvent(name,
      { detail,
      cancelable: true,
      bubbles: true,
      composed: true  // this is to make the event cross shadow dom boundaries
    }));
  };

