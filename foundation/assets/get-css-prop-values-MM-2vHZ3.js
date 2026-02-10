function g(t,...o){if(typeof t=="string")return g(globalThis.document.body,t,...o);const e=globalThis.getComputedStyle(t);return o.map(r=>e.getPropertyValue(r))}export{g};
