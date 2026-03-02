function s(e){if(e===void 0)return;const o={};for(const[t,r]of Object.entries(e))o[t.startsWith("--")?t:t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)]=r;return o}export{s as t};
