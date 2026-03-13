function r(t,...e){if(typeof t=="string")return r(globalThis.document.body,t,...e);const o=globalThis.getComputedStyle(t);return e.map(a=>o.getPropertyValue(a))}export{r as g};
