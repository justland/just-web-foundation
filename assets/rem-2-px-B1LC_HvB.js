function e(t,i){if(t==null)return t;const{base:n=16,precision:o=4}=i??{};return typeof t=="string"&&(t=t.replace(/rem$/,""),t=Number.parseFloat(t)),Number((t*n).toFixed(o))}export{e as r};
