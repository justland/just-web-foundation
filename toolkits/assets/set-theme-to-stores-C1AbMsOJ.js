async function r(t,i){const o=t.filter(e=>typeof e.write=="function");await Promise.all(o.map(e=>Promise.resolve(e.write(i))))}export{r as s};
