const t="stencil-components";let e,n,l=!1;const o="undefined"!=typeof window?window:{},s=o.CSS,c=o.document||{head:{}},r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},i=(()=>(c.head.attachShadow+"").indexOf("[native")>-1)(),a=t=>Promise.resolve(t),u=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),p=new WeakMap,m=t=>"sc-"+t,f=t=>"object"==(t=typeof t)||"function"===t,$=(t,e,...n)=>{let l=null,o=!1,s=!1,c=[];const r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!f(l))&&(l+=""),o&&s?c[c.length-1].o+=l:c.push(o?d(null,l):l),s=o)};r(n);const i=d(t,null);return i.s=e,c.length>0&&(i.u=c),i},d=(t,e)=>({t:0,p:t,o:e,$:null,u:null}),w={},h=(t,n,l)=>{let o,s,r=n.u[l],i=0;if(null!==r.o)o=r.$=c.createTextNode(r.o);else if(o=r.$=c.createElement(r.p),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.u)for(i=0;i<r.u.length;++i)s=h(t,r,i),s&&o.appendChild(s);return o},y=(t,e,l,o,s,c)=>{let r,i=t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=h(null,l,s),r&&(o[s].$=r,i.insertBefore(r,e)))},_=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.$.remove()},b=(t,e)=>t.p===e.p,j=(t,e)=>{const n=e.$=t.$,l=t.u,o=e.u,s=e.o;null===s?null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,r=e.length-1,i=e[0],a=e[r],u=l.length-1,p=l[0],m=l[u];for(;s<=r&&c<=u;)null==i?i=e[++s]:null==a?a=e[--r]:null==p?p=l[++c]:null==m?m=l[--u]:b(i,p)?(j(i,p),i=e[++s],p=l[++c]):b(a,m)?(j(a,m),a=e[--r],m=l[--u]):b(i,m)?(j(i,m),t.insertBefore(i.$,a.$.nextSibling),i=e[++s],m=l[--u]):b(a,p)?(j(a,p),t.insertBefore(a.$,i.$),a=e[--r],p=l[++c]):(o=h(e&&e[c],n,c),p=l[++c],o&&i.$.parentNode.insertBefore(o,i.$));s>r?y(t,null==l[u+1]?null:l[u+1].$,n,l,c,u):c>u&&_(e,s,r)})(n,l,e,o):null!==o?(null!==t.o&&(n.textContent=""),y(n,null,e,o,0,o.length-1)):null!==l&&_(l,0,l.length-1):t.o!==s&&(n.data=s)},g=(t,e)=>{e&&!t.h&&e["s-p"].push(new Promise(e=>t.h=e))},v=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t._,l=()=>M(t,n,e);return g(t,t.j),k(void 0,()=>G(l))},M=(t,l,o)=>{const s=t.g,r=s["s-rc"];o&&(t=>{const e=t.v,n=t.g,l=e.t,o=((t,e)=>{let n=m(e.M),l=q.get(n);if(t=11===t.nodeType?t:c,l)if("string"==typeof l){let e,o=p.get(t=t.head||t);o||p.set(t,o=new Set),o.has(n)||(e=c.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t),((t,l)=>{const o=t.g,s=t.S||d(null,null),c=(t=>t&&t.p===w)(l)?l:$(null,null,l);n=o.tagName,c.p=null,c.t|=4,t.S=c,c.$=s.$=o.shadowRoot||o,e=o["s-sc"],j(s,c)})(t,S(l)),t.t&=-17,t.t|=2,r&&(r.map(t=>t()),s["s-rc"]=void 0);{const e=s["s-p"],n=()=>R(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},S=t=>{try{t=t.render()}catch(e){T(e)}return t},R=t=>{const e=t.g,n=t.j;64&t.t||(t.t|=64,L(e),t.R(e),n||U()),t.h&&(t.h(),t.h=void 0),512&t.t&&D(()=>v(t,!1)),t.t&=-517},U=()=>{L(c.documentElement),D(()=>(e=>{const n=new CustomEvent("appload",{detail:{namespace:t}});return e.dispatchEvent(n),n})(o))},k=(t,e)=>t&&t.then?t.then(e):e(),L=t=>t.classList.add("hydrated"),C=(t,e,n)=>{if(e.U){const l=Object.entries(e.U),o=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>x(this).k.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=x(this),s=o.k.get(e),c=o.t,r=o._;n=((t,e)=>null==t||f(t)?t:1&e?t+"":t)(n,l.U[e][0]),8&c&&void 0!==s||n===s||(o.k.set(e,n),r&&2==(18&c)&&v(o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){r.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},O=(t,e={})=>{const n=[],l=e.exclude||[],s=o.customElements,a=c.head,p=a.querySelector("meta[charset]"),f=c.createElement("style"),$=[];let d,w=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",c.baseURI).href,t.map(t=>t[1].map(e=>{const o={t:e[0],M:e[1],U:e[2],L:e[3]};o.U=e[2],!i&&1&o.t&&(o.t|=8);const c=o.M,a=class extends HTMLElement{constructor(t){super(t),A(t=this,o),1&o.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){d&&(clearTimeout(d),d=null),w?$.push(this):r.jmp(()=>(t=>{if(0==(1&r.t)){const e=x(t),n=e.v,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){g(e,e.j=n);break}}n.U&&Object.entries(n.U).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=W(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(C(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(r){T(r)}e.t&=-9,t()}const t=m(n.M);if(!q.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencil_components("./p-f5bab17b.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=q.get(t);u&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,q.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.j,c=()=>v(e,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,e,n)}l()}})(this))}disconnectedCallback(){r.jmp(()=>{})}forceUpdate(){(()=>{{const t=x(this);t.g.isConnected&&2==(18&t.t)&&v(t,!1)}})()}componentOnReady(){return x(this).C}};o.O=t[0],l.includes(c)||s.get(c)||(n.push(c),s.define(c,C(a,o,1)))})),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),a.insertBefore(f,p?p.nextSibling:a.firstChild),w=!1,$.length?$.map(t=>t.connectedCallback()):r.jmp(()=>d=setTimeout(U,30))},P=new WeakMap,x=t=>P.get(t),E=(t,e)=>P.set(e._=t,e),A=(t,e)=>{const n={t:0,g:t,v:e,k:new Map};return n.C=new Promise(t=>n.R=t),t["s-p"]=[],t["s-rc"]=[],P.set(t,n)},T=t=>console.error(t),F=new Map,W=t=>{const e=t.M.replace(/-/g,"_"),n=t.O,l=F.get(n);return l?l[e]:__sc_import_stencil_components(`./${n}.entry.js`).then(t=>(F.set(n,t),t[e]),T)},q=new Map,B=[],H=[],N=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&r.t?D(z):r.raf(z))},V=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){T(e)}t.length=0},z=()=>{V(B),V(H),(l=B.length>0)&&r.raf(z)},D=t=>a().then(t),G=N(H,!0),I=()=>s&&s.supports&&s.supports("color","var(--c)")?a():__sc_import_stencil_components("./p-69b85284.js").then(()=>(r.P=o.__cssshim)?(!1).i():0),J=()=>{r.P=o.__cssshim;const e=Array.from(c.querySelectorAll("script")).find(e=>RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===t),n=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href,K(n.resourcesUrl,e),o.customElements?a(n):__sc_import_stencil_components("./p-2347dcb6.js").then(()=>n))},K=(t,e)=>{const n="__sc_import_stencil_components";try{o[n]=Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;o[n]=l=>{const r=new URL(l,t).href;let i=s.get(r);if(!i){const t=c.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(o[n].m),t.remove()}}),s.set(r,i),c.head.appendChild(t)}return i}}};export{I as a,O as b,$ as h,J as p,E as r}