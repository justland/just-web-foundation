function o(t){const e=globalThis.matchMedia("(prefers-color-scheme: light)"),r=n=>{t(n.matches?"light":"dark")};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)}export{o};
