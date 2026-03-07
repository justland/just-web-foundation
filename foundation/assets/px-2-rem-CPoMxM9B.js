function n(e,r){if(e==null)return e;const{base:t=16,precision:i=4}=r??{};return typeof e=="string"&&(e=e.replace(/px$/,""),e=Number.parseFloat(e)),Number((e/t).toFixed(i))}export{n as p};
