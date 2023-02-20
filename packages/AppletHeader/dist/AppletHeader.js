function E(){}function P(e,t){for(const n in t)e[n]=t[n];return e}function O(e){return e()}function R(){return Object.create(null)}function L(e){e.forEach(O)}function S(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function W(e){return Object.keys(e).length===0}function F(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function w(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function V(){return K(" ")}function j(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function X(e){return Array.from(e.childNodes)}function Y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function m(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function tt(e){const t={};for(const n of e)t[n.name]=n.value;return t}let C;function z(e){C=e}function et(){if(!C)throw new Error("Function called outside component initialization");return C}const p=[],Z=[],T=[],q=[],nt=Promise.resolve();let $=!1;function ot(){$||($=!0,nt.then(g))}function B(e){T.push(e)}const N=new Set;let y=0;function g(){if(y!==0)return;const e=C;do{try{for(;y<p.length;){const t=p[y];y++,z(t),rt(t.$$)}}catch(t){throw p.length=0,y=0,t}for(z(null),p.length=0,y=0;Z.length;)Z.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];N.has(n)||(N.add(n),n())}T.length=0}while(p.length);for(;q.length;)q.pop()();$=!1,N.clear(),z(e)}function rt(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const it=new Set;function ct(e,t){e&&e.i&&(it.delete(e),e.i(t))}function lt(e,t,n,o){const{fragment:d,after_update:f}=e.$$;d&&d.m(t,n),o||B(()=>{const u=e.$$.on_mount.map(O).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...u):L(u),e.$$.on_mount=[]}),f.forEach(B)}function st(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(p.push(e),ot(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ft(e,t,n,o,d,f,u,k=[-1]){const h=C;z(e);const r=e.$$={fragment:null,ctx:[],props:f,update:E,not_equal:d,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:R(),dirty:k,skip_bound:!1,root:t.target||h.$$.root};u&&u(r.root);let v=!1;if(r.ctx=n?n(e,t.props||{},(l,i,...c)=>{const s=c.length?c[0]:i;return r.ctx&&d(r.ctx[l],r.ctx[l]=s)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](s),v&&at(e,l)),i}):[],r.update(),v=!0,L(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const l=X(t.target);r.fragment&&r.fragment.l(l),l.forEach(H)}else r.fragment&&r.fragment.c();t.intro&&ct(e.$$.fragment),lt(e,t.target,t.anchor,t.customElement),g()}z(h)}let Q;typeof HTMLElement=="function"&&(Q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(O).filter(S);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){st(this,1),this.$destroy=E}$on(e,t){if(!S(t))return E;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const o=n.indexOf(t);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});const M=(e,t,n={})=>{t==null||t.dispatchEvent(new CustomEvent(e,{detail:n,cancelable:!0,bubbles:!0,composed:!0}))};function D(e){let t;return{c(){t=x("span"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24"><g transform="scale(.9)"><path xmlns="http://www.w3.org/2000/svg" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"></path></g></svg>',b(t,"class","control-icon")},m(n,o){A(n,t,o)},d(n){n&&H(t)}}}function G(e){let t;return{c(){t=x("span"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g><path xmlns="http://www.w3.org/2000/svg" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"></path></g></svg>',b(t,"class","control-icon")},m(n,o){A(n,t,o)},d(n){n&&H(t)}}}function ut(e){let t,n,o,d,f,u,k,h,r,v,l,i=e[0]&&D(),c=e[2]&&G();return{c(){t=x("div"),n=x("div"),o=x("div"),i&&i.c(),d=V(),f=x("span"),u=K(e[7]),k=V(),h=x("div"),r=x("div"),c&&c.c(),this.c=E,b(o,"class","control-wrapper"),b(o,"role","button"),b(n,"class","nav-control-container"),b(f,"class","title"),m(f,"font-size",e[3]+"rem"),b(r,"class","control-wrapper"),b(r,"role","button"),b(h,"class","nav-control-container"),b(t,"class","nav wrapper"),m(t,"--nav-header-bg-color",e[1]),m(t,"--nav-header-text-color",e[6]),m(t,"--nav-header-icon-color",e[5]),m(t,"--nav-header-font-weight",e[4])},m(s,_){A(s,t,_),w(t,n),w(n,o),i&&i.m(o,null),w(t,d),w(t,f),w(f,u),w(t,k),w(t,h),w(h,r),c&&c.m(r,null),v||(l=[j(o,"click",e[9]),j(o,"keydown",e[10]),j(r,"click",e[11]),j(r,"keydown",e[12])],v=!0)},p(s,[_]){s[0]?i||(i=D(),i.c(),i.m(o,null)):i&&(i.d(1),i=null),_&128&&Y(u,s[7]),_&8&&m(f,"font-size",s[3]+"rem"),s[2]?c||(c=G(),c.c(),c.m(r,null)):c&&(c.d(1),c=null),_&2&&m(t,"--nav-header-bg-color",s[1]),_&64&&m(t,"--nav-header-text-color",s[6]),_&32&&m(t,"--nav-header-icon-color",s[5]),_&16&&m(t,"--nav-header-font-weight",s[4])},i:E,o:E,d(s){s&&H(t),i&&i.d(),c&&c.d(),v=!1,L(l)}}}const I="on-close",J="on-back";function ht(e,t,n){let{back:o=!1}=t,{bg_color:d=null}=t,{close:f=!1}=t,{font_size:u=1.5}=t,{font_weight:k=700}=t,{icon_color:h=null}=t,{text_color:r=null}=t,{text:v="untitled"}=t;const l=et(),i=()=>M(J,l,{}),c=()=>M(J,l,{}),s=()=>M(I,l,{}),_=()=>M(I,l,{});return e.$$set=a=>{n(13,t=P(P({},t),F(a))),"back"in a&&n(0,o=a.back),"bg_color"in a&&n(1,d=a.bg_color),"close"in a&&n(2,f=a.close),"font_size"in a&&n(3,u=a.font_size),"font_weight"in a&&n(4,k=a.font_weight),"icon_color"in a&&n(5,h=a.icon_color),"text_color"in a&&n(6,r=a.text_color),"text"in a&&n(7,v=a.text)},e.$$.update=()=>{console.log(t)},t=F(t),[o,d,f,u,k,h,r,v,l,i,c,s,_]}class dt extends Q{constructor(t){super(),this.shadowRoot.innerHTML="<style>.nav{display:grid;grid-template-columns:50px 1fr 50px;align-items:center}.wrapper{font-size:1.3rem;text-align:center;height:4rem;background-color:var(--nav-header-bg-color, #ffb102);width:100%}.title{color:var(--nav-header-text-color, #954700);font-weight:var(--nav-header-font-weight, 700)}.nav-control-container{display:flex;justify-content:center}.control-wrapper{color:var(--nav-header-icon-color, white);scale:0.7}.control-icon{fill:currentColor;background-color:rgba(156, 163, 175, 0.25);width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center}</style>",ft(this,{target:this.shadowRoot,props:tt(this.attributes),customElement:!0},ht,ut,U,{back:0,bg_color:1,close:2,font_size:3,font_weight:4,icon_color:5,text_color:6,text:7},null),t&&(t.target&&A(t.target,this,t.anchor),t.props&&(this.$set(t.props),g()))}static get observedAttributes(){return["back","bg_color","close","font_size","font_weight","icon_color","text_color","text"]}get back(){return this.$$.ctx[0]}set back(t){this.$$set({back:t}),g()}get bg_color(){return this.$$.ctx[1]}set bg_color(t){this.$$set({bg_color:t}),g()}get close(){return this.$$.ctx[2]}set close(t){this.$$set({close:t}),g()}get font_size(){return this.$$.ctx[3]}set font_size(t){this.$$set({font_size:t}),g()}get font_weight(){return this.$$.ctx[4]}set font_weight(t){this.$$set({font_weight:t}),g()}get icon_color(){return this.$$.ctx[5]}set icon_color(t){this.$$set({icon_color:t}),g()}get text_color(){return this.$$.ctx[6]}set text_color(t){this.$$set({text_color:t}),g()}get text(){return this.$$.ctx[7]}set text(t){this.$$set({text:t}),g()}}customElements.define("c-applet-header",dt);
