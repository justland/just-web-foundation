function i(e,t){const{base:o=16,precision:r=4}=t??{};return typeof e=="string"&&(e=e.replace(/rem$/,""),e=Number.parseFloat(e)),Number((e*o).toFixed(r))}export{i as r};
