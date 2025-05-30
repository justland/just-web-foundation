function n(t,e){const{base:o=16,precision:i=4}=e??{};return typeof t=="string"&&(t=t.replace(/rem$/,""),t=Number.parseFloat(t)),(t*o).toFixed(i)}export{n as r};
