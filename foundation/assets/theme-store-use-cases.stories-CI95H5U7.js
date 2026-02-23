import{r as b,j as f,d as re,w as O,s as E,S as ce}from"./iframe-BwCvR-Rn.js";import{d as H}from"./dedent-BuYMbVyj.js";import{g as Z}from"./get-theme-from-store-DOanYLt7.js";import{o as ee}from"./observe-theme-from-store-BnVImBhj.js";import{s as _}from"./set-theme-to-store-BD5RwHDf.js";import{S as ye}from"./show-theme-from-store-BGzzY3Qv.js";import{a as M}from"./append-id-Vsg144gU.js";import{B as Y}from"./button-CTG5KGTe.js";import{T as se}from"./theme-result-card-BVwVUOcQ.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-class-name-CEwuZh68.js";function pe(e){const{store:t,themes:s,theme:n}=e,[o,a]=b.useState(void 0);b.useEffect(()=>{const i=ee({store:t,themes:s,theme:n,handler:a});return()=>i.disconnect()},[t,s,n]);const r=b.useCallback(i=>{_({store:t,themes:s,theme:i})},[t,s]);return[o?.theme,r]}const B={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};function ie(e){return"init"in e}function Q(e){return!!e.write}function oe(e){return"v"in e||"e"in e}function q(e){if("e"in e)throw e.e;if((B?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v}function z(e){return typeof e?.then=="function"}function ue(e,t,s){if(!s.p.has(e)){s.p.add(e);const n=()=>s.p.delete(e);t.then(n,n)}}function le(e,t,s){var n;const o=new Set;for(const a of((n=s.get(e))==null?void 0:n.t)||[])o.add(a);for(const a of t.p)o.add(a);return o}const be=(e,t,...s)=>t.read(...s),Se=(e,t,...s)=>t.write(...s),ve=(e,t)=>{var s;return(s=t.INTERNAL_onInit)==null?void 0:s.call(t,e)},we=(e,t,s)=>{var n;return(n=t.onMount)==null?void 0:n.call(t,s)},Te=(e,t)=>{var s;const n=S(e),o=n[0],a=n[6],r=n[9];if((B?"production":void 0)!=="production"&&!t)throw new Error("Atom is undefined or null");let i=o.get(t);return i||(i={d:new Map,p:new Set,n:0},o.set(t,i),(s=a.i)==null||s.call(a,t),r?.(e,t)),i},xe=e=>{const t=S(e),s=t[1],n=t[3],o=t[4],a=t[5],r=t[6],i=t[13],l=[],m=g=>{try{g()}catch(c){l.push(c)}};do{r.f&&m(r.f);const g=new Set,c=g.add.bind(g);n.forEach(d=>{var u;return(u=s.get(d))==null?void 0:u.l.forEach(c)}),n.clear(),a.forEach(c),a.clear(),o.forEach(c),o.clear(),g.forEach(m),n.size&&i(e)}while(n.size||a.size||o.size);if(l.length)throw new AggregateError(l)},ke=e=>{const t=S(e),s=t[1],n=t[2],o=t[3],a=t[11],r=t[14],i=t[17],l=[],m=new WeakSet,g=new WeakSet,c=Array.from(o);for(;c.length;){const d=c[c.length-1],u=a(e,d);if(g.has(d)){c.pop();continue}if(m.has(d)){if(n.get(d)===u.n)l.push([d,u]);else if((B?"production":void 0)!=="production"&&n.has(d))throw new Error("[Bug] invalidated atom exists");g.add(d),c.pop();continue}m.add(d);for(const p of le(d,u,s))m.has(p)||c.push(p)}for(let d=l.length-1;d>=0;--d){const[u,p]=l[d];let w=!1;for(const T of p.d.keys())if(T!==u&&o.has(T)){w=!0;break}w&&(r(e,u),i(e,u)),n.delete(u)}},X=new WeakSet,Be=(e,t)=>{var s,n;const o=S(e),a=o[1],r=o[2],i=o[3],l=o[6],m=o[7],g=o[11],c=o[12],d=o[13],u=o[14],p=o[16],w=o[17],T=o[20],C=o[26],h=g(e,t);if(oe(h)){if(a.has(t)&&r.get(t)!==h.n)return h;let y=!1;for(const[A,D]of h.d)if(u(e,A).n!==D){y=!0;break}if(!y)return h}let x=!0;const j=new Set(h.d.keys()),L=new Map,F=()=>{for(const y of j)L.has(y)||h.d.delete(y)},P=()=>{if(a.has(t)){const y=!i.size;w(e,t),y&&(d(e),c(e))}},fe=y=>{var A;if(y===t){const ne=g(e,y);if(!oe(ne))if(ie(y))T(e,y,y.init);else throw new Error("no atom init");return q(ne)}const D=u(e,y);try{return q(D)}finally{L.set(y,D.n),h.d.set(y,D.n),z(h.v)&&ue(t,h.v,D),a.has(t)&&((A=a.get(y))==null||A.t.add(t)),x||P()}};let G,J;const ge={get signal(){return G||(G=new AbortController),G.signal},get setSelf(){return(B?"production":void 0)!=="production"&&console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."),(B?"production":void 0)!=="production"&&!Q(t)&&console.warn("setSelf function cannot be used with read-only atom"),!J&&Q(t)&&(J=(...y)=>{if((B?"production":void 0)!=="production"&&x&&console.warn("setSelf function cannot be called in sync"),!x)try{return p(e,t,...y)}finally{d(e),c(e)}}),J}},te=h.n;try{(B?"production":void 0)!=="production"&&X.delete(e);const y=m(e,t,fe,ge);if((B?"production":void 0)!=="production"&&X.has(e)&&console.warn("Detected store mutation during atom read. This is not supported."),T(e,t,y),z(y)){C(e,y,()=>G?.abort());const A=()=>{F(),P()};y.then(A,A)}else F();return(s=l.r)==null||s.call(l,t),h}catch(y){return delete h.v,h.e=y,++h.n,h}finally{x=!1,te!==h.n&&r.get(t)===te&&(r.set(t,h.n),i.add(t),(n=l.c)==null||n.call(l,t))}},Ce=(e,t)=>{const s=S(e),n=s[1],o=s[2],a=s[11],r=[t];for(;r.length;){const i=r.pop(),l=a(e,i);for(const m of le(i,l,n)){const g=a(e,m);o.get(m)!==g.n&&(o.set(m,g.n),r.push(m))}}},Ie=(e,t,...s)=>{const n=S(e),o=n[3],a=n[6],r=n[8],i=n[11],l=n[12],m=n[13],g=n[14],c=n[15],d=n[16],u=n[17],p=n[20];let w=!0;const T=h=>q(g(e,h)),C=(h,...x)=>{var j;const L=i(e,h);try{if(h===t){if(!ie(h))throw new Error("atom not writable");(B?"production":void 0)!=="production"&&X.add(e);const F=L.n,P=x[0];p(e,h,P),u(e,h),F!==L.n&&(o.add(h),c(e,h),(j=a.c)==null||j.call(a,h));return}else return d(e,h,...x)}finally{w||(m(e),l(e))}};try{return r(e,t,T,C,...s)}finally{w=!1}},_e=(e,t)=>{var s;const n=S(e),o=n[1],a=n[3],r=n[6],i=n[11],l=n[15],m=n[18],g=n[19],c=i(e,t),d=o.get(t);if(d){for(const[u,p]of c.d)if(!d.d.has(u)){const w=i(e,u);m(e,u).t.add(t),d.d.add(u),p!==w.n&&(a.add(u),l(e,u),(s=r.c)==null||s.call(r,u))}for(const u of d.d)if(!c.d.has(u)){d.d.delete(u);const p=g(e,u);p?.t.delete(t)}}},Ae=(e,t)=>{var s;const n=S(e),o=n[1],a=n[4],r=n[6],i=n[10],l=n[11],m=n[12],g=n[13],c=n[14],d=n[16],u=n[18],p=l(e,t);let w=o.get(t);if(!w){c(e,t);for(const T of p.d.keys())u(e,T).t.add(t);if(w={l:new Set,d:new Set(p.d.keys()),t:new Set},o.set(t,w),Q(t)){const T=()=>{let C=!0;const h=(...x)=>{try{return d(e,t,...x)}finally{C||(g(e),m(e))}};try{const x=i(e,t,h);x&&(w.u=()=>{C=!0;try{x()}finally{C=!1}})}finally{C=!1}};a.add(T)}(s=r.m)==null||s.call(r,t)}return w},De=(e,t)=>{var s,n;const o=S(e),a=o[1],r=o[5],i=o[6],l=o[11],m=o[19],g=l(e,t);let c=a.get(t);if(!c||c.l.size)return c;let d=!1;for(const u of c.t)if((s=a.get(u))!=null&&s.d.has(t)){d=!0;break}if(!d){c.u&&r.add(c.u),c=void 0,a.delete(t);for(const u of g.d.keys()){const p=m(e,u);p?.t.delete(t)}(n=i.u)==null||n.call(i,t);return}return c},Re=(e,t,s)=>{const n=S(e),o=n[11],a=n[27],r=o(e,t),i="v"in r,l=r.v;if(z(s))for(const m of r.d.keys())ue(t,s,o(e,m));r.v=s,delete r.e,(!i||!Object.is(l,r.v))&&(++r.n,z(l)&&a(e,l))},Oe=(e,t)=>{const s=S(e)[14];return q(s(e,t))},Ee=(e,t,...s)=>{const n=S(e),o=n[12],a=n[13],r=n[16];try{return r(e,t,...s)}finally{a(e),o(e)}},He=(e,t,s)=>{const n=S(e),o=n[12],a=n[18],r=n[19],l=a(e,t).l;return l.add(s),o(e),()=>{l.delete(s),r(e,t),o(e)}},Le=(e,t,s)=>{const o=S(e)[25];let a=o.get(t);if(!a){a=new Set,o.set(t,a);const r=()=>o.delete(t);t.then(r,r)}a.add(s)},Ge=(e,t)=>{const o=S(e)[25].get(t);o?.forEach(a=>a())},de=new WeakMap,S=e=>{const t=de.get(e);if((B?"production":void 0)!=="production"&&!t)throw new Error("Store must be created by buildStore to read its building blocks");return t};function Me(...e){const t={get(n){const o=S(t)[21];return o(t,n)},set(n,...o){const a=S(t)[22];return a(t,n,...o)},sub(n,o){const a=S(t)[23];return a(t,n,o)}},s=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},be,Se,ve,we,Te,xe,ke,Be,Ce,Ie,_e,Ae,De,Re,Oe,Ee,He,void 0,new WeakMap,Le,Ge].map((n,o)=>e[o]||n);return de.set(t,Object.freeze(s)),t}const je={};let Fe=0;function Pe(e,t){const s=`atom${++Fe}`,n={toString(){return(je?"production":void 0)!=="production"&&this.debugLabel?s+":"+this.debugLabel:s}};return n.init=e,n.read=Ne,n.write=Ue,n}function Ne(e){return e(this)}function Ue(e,t,s){return t(this,typeof s=="function"?s(e(this)):s)}function We(){return Me()}const ae=e=>{let t;const s=new Set,n=(m,g)=>{const c=typeof m=="function"?m(t):m;if(!Object.is(c,t)){const d=t;t=g??(typeof c!="object"||c===null)?c:Object.assign({},t,c),s.forEach(u=>u(t,d))}},o=()=>t,i={setState:n,getState:o,getInitialState:()=>l,subscribe:m=>(s.add(m),()=>s.delete(m))},l=t=e(n,o,i);return i},Ke=(e=>e?ae(e):ae);function me({store:e,themes:t,theme:s,"data-testid":n="theme-store-demo"}){const[o,a]=b.useState(void 0),[r,i]=b.useState(void 0);b.useEffect(()=>{const u=ee({store:e,themes:t,theme:s,handler:a});return()=>u.disconnect()},[e,t,s]);const l=b.useCallback(()=>{Z({store:e,themes:t,theme:s}).then(i)},[e,t,s]),m=b.useCallback(()=>{_({store:e,themes:t,theme:"default"})},[e,t]),g=b.useCallback(()=>{_({store:e,themes:t,theme:"grayscale"})},[e,t]),c=M(n,"observe"),d=M(n,"get");return f.jsxs("div",{className:"flex flex-col gap-2","data-testid":n,children:[f.jsxs("div",{className:"flex gap-2",children:[f.jsx(Y,{onClick:l,"data-testid":M(n,"btn-get"),children:"Get theme"}),f.jsx(Y,{onClick:m,"data-testid":M(n,"btn-set-default"),children:"Set default"}),f.jsx(Y,{onClick:g,"data-testid":M(n,"btn-set-grayscale"),children:"Set grayscale"})]}),f.jsx(se,{title:"Get (one-time)",result:r,"data-testid":d}),f.jsx(se,{title:"Observed (subscribe)",result:o,"data-testid":c})]})}me.__docgenInfo={description:`Demo component that uses getThemeFromStore, setThemeToStore, and observeThemeFromStore.
Renders observed value, a one-time get result, and buttons to trigger get/set for showcasing behavior.
All interactive elements and result areas use data-testid for testing.`,methods:[],displayName:"ThemeStoreDemo",props:{store:{required:!0,tsType:{name:"signature",type:"object",raw:`{
	get(): ThemeResult<Themes> | Promise<ThemeResult<Themes>>
	set?(result: ThemeResult<Themes>): void | Promise<void>
	subscribe?(handler: () => void): () => void
}`,signature:{properties:[{key:"get",value:{name:"union",raw:"ThemeResult<Themes> | Promise<ThemeResult<Themes>>",elements:[{name:"union",raw:`| { theme: keyof Themes; value: Themes[keyof Themes] }
| undefined`,elements:[{name:"signature",type:"object",raw:"{ theme: keyof Themes; value: Themes[keyof Themes] }",signature:{properties:[{key:"theme",value:{name:"Themes",required:!0}},{key:"value",value:{name:"Themes[Themes]",raw:"Themes[keyof Themes]",required:!0}}]}},{name:"undefined"}]},{name:"Promise",elements:[{name:"union",raw:`| { theme: keyof Themes; value: Themes[keyof Themes] }
| undefined`,elements:[{name:"signature",type:"object",raw:"{ theme: keyof Themes; value: Themes[keyof Themes] }",signature:{properties:[{key:"theme",value:{name:"Themes",required:!0}},{key:"value",value:{name:"Themes[Themes]",raw:"Themes[keyof Themes]",required:!0}}]}},{name:"undefined"}]}],raw:"Promise<ThemeResult<Themes>>"}],required:!0}},{key:"set",value:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}],required:!1}},{key:"subscribe",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""},themes:{required:!0,tsType:{name:"Themes"},description:""},theme:{required:!1,tsType:{name:"union",raw:"keyof Themes | null",elements:[{name:"Themes"},{name:"null"}]},description:""},"data-testid":{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",defaultValue:{value:"'theme-store-demo'",computed:!1}}}};const{expect:v,userEvent:R,waitFor:I}=__STORYBOOK_MODULE_TEST__,dt={title:"theme/ThemeStore use cases",tags:["func","version:next"],parameters:re({description:{component:"Use-case stories showing getThemeFromStore, setThemeToStore, and observeThemeFromStore with different store backends: React Context, mock backend API, Zustand, Jotai."}}),render:()=>f.jsx(f.Fragment,{})},k={default:"text-white",grayscale:"text-gray-100"};function Ve(e,t=50){let s=e;const n=[];return{get(){return new Promise(o=>{setTimeout(()=>o(s),t)})},set(o){return new Promise(a=>{setTimeout(()=>{s=o;for(const r of n)r();a()},t)})},subscribe(o){return n.push(o),()=>{const a=n.indexOf(o);a!==-1&&n.splice(a,1)}}}}const N={tags:["use-case"],loaders:[async()=>({store:Ve(void 0,10)})],decorators:[O({content:f.jsx("p",{children:"Theme store that simulates a backend API with async get/set and a short delay. No real HTTP; same pattern would work with axios or fetch."})}),E({source:H`
                const store = createBackendStore(undefined, 50)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            `})],render:(e,{loaded:{store:t}})=>f.jsx(me,{store:t,themes:k,theme:"default","data-testid":"with-backend-demo"}),play:async({canvas:e})=>{const t="with-backend-demo",s=()=>e.getByTestId(`${t}-observe-theme`),n=()=>e.getByTestId(`${t}-observe-value`),o=()=>e.getByTestId(`${t}-get-theme`),a=()=>e.getByTestId(`${t}-get-value`),r=()=>e.getByTestId(`${t}-btn-get`),i=()=>e.getByTestId(`${t}-btn-set-default`),l=()=>e.getByTestId(`${t}-btn-set-grayscale`);await I(async()=>{await v(s()).toHaveTextContent(/default|\(undefined\)/)}),await R.click(l()),await I(async()=>{await v(s()).toHaveTextContent("grayscale"),await v(n()).toHaveTextContent("text-gray-100")}),await R.click(r()),await I(async()=>{await v(o()).toHaveTextContent("grayscale"),await v(a()).toHaveTextContent("text-gray-100")}),await R.click(i()),await I(async()=>{await v(s()).toHaveTextContent("default"),await v(n()).toHaveTextContent("text-white")}),await R.click(r()),await I(async()=>{await v(o()).toHaveTextContent("default"),await v(a()).toHaveTextContent("text-white")})}};function $e(e){let t=e;return{get(){return t},set(s){t=s}}}function qe(e){let t=e;const s=[];return{get(){return t},set(n){t=n;for(const o of s)o()},subscribe(n){return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}}}const U={tags:["unit"],parameters:re({description:{story:"Gets theme from an in-memory sync store."}}),decorators:[O(),E({source:H`
                const store = {
                  get: () => ({ theme: 'grayscale', value: 'text-gray-100' }),
                  set: () => {},
                }
                const result = await getThemeFromStore({
                  store,
                  themes: { default: 'text-white', grayscale: 'text-gray-100' },
                  theme: 'default',
                })
            `})],render:()=>{const e=$e({theme:"grayscale",value:"text-gray-100"});return f.jsx(ye,{store:e,themes:k,theme:"default","data-testid":"result"})},play:async({canvas:e})=>{const t=await e.getByTestId("result-theme");await v(t).toHaveTextContent("grayscale");const s=await e.getByTestId("result-value");await v(s).toHaveTextContent("text-gray-100")}};function ze({store:e,"data-testid":t="use-theme-store"}){const[s,n]=pe({store:e,themes:k,theme:"default"});return f.jsxs(ce,{title:"useThemeStore","data-testid":t,appearance:"output",children:[f.jsxs("p",{children:["theme:"," ",f.jsx("span",{"data-testid":`${t}-theme`,children:s===void 0?"(undefined)":s})]}),f.jsx("button",{type:"button",onClick:()=>n("default"),"data-testid":`${t}-btn-default`,children:"Set default"}),f.jsx("button",{type:"button",onClick:()=>n("grayscale"),"data-testid":`${t}-btn-grayscale`,children:"Set grayscale"})]})}const W={tags:["use-case"],decorators:[O({content:f.jsxs("p",{children:[f.jsx("code",{children:"useThemeStore"})," returns the current theme and a setter. Subscribes to store changes so the returned theme stays in sync."]})}),E({source:H`
                const store = createInMemoryStoreWithSubscribe(undefined)
                const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
                setTheme('grayscale')
            `})],render:()=>{const e=qe(void 0);return f.jsx(ze,{store:e,"data-testid":"use-theme-store"})},play:async({canvas:e})=>{const t=()=>e.getByTestId("use-theme-store-theme"),s=()=>e.getByTestId("use-theme-store-btn-default"),n=()=>e.getByTestId("use-theme-store-btn-grayscale");await I(async()=>{await v(t()).toHaveTextContent("default")}),await R.click(n()),await I(async()=>{await v(t()).toHaveTextContent("grayscale")}),await R.click(s()),await I(async()=>{await v(t()).toHaveTextContent("default")})}},he=b.createContext(null);function Ze(){const e=b.useContext(he),t=b.useRef([]),s=b.useRef(void 0);if(!e)throw new Error("ThemeProvider required");return s.current=e.result,b.useMemo(()=>({get(){return s.current},set(n){e.setResult(n);for(const o of t.current)o()},subscribe(n){return t.current.push(n),()=>{const o=t.current.indexOf(n);o!==-1&&t.current.splice(o,1)}}}),[e])}function Je(){const[e,t]=b.useState(void 0),s=Ze();b.useEffect(()=>{const a=ee({store:s,themes:k,theme:"default",handler:t});return()=>a.disconnect()},[s]);const n=b.useCallback(()=>{_({store:s,themes:k,theme:"default"})},[s]),o=b.useCallback(()=>{_({store:s,themes:k,theme:"grayscale"})},[s]);return f.jsxs(ce,{title:"Theme from React Context",appearance:"output",children:[f.jsxs("p",{"data-testid":"context-theme",children:["theme: ",e?.theme===void 0?"(undefined)":String(e?.theme)]}),f.jsx("button",{type:"button",onClick:n,children:"Set default"}),f.jsx("button",{type:"button",onClick:o,children:"Set grayscale"})]})}const K={tags:["use-case"],decorators:[O({content:f.jsx("p",{children:"Theme store backed by React Context. get/set/subscribe are implemented with useState and a listener list."})}),E({source:H`
                const store = useThemeStoreFromContext()
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                observeThemeFromStore({ store, themes, theme: 'default', handler: setResult })
            `})],render:()=>{const[e,t]=b.useState({theme:"grayscale",value:"text-gray-100"});return f.jsx(he.Provider,{value:{result:e,setResult:t},children:f.jsx(Je,{})})},play:async()=>{const e={current:void 0},t={current:[]},s={get:()=>e.current,set:o=>{e.current=o;for(const a of t.current)a()},subscribe:o=>(t.current.push(o),()=>{const a=t.current.indexOf(o);a!==-1&&t.current.splice(a,1)})};await _({store:s,themes:k,theme:"grayscale"});const n=await Z({store:s,themes:k,theme:"default"});await v(n?.theme).toBe("grayscale")}};function Ye(e){const t=Qe(e);return{store:{get:()=>t.getState().themeResult,set:n=>t.setState({themeResult:n}),subscribe:n=>t.subscribe(n)},zustandStore:t}}function Qe(e){return Ke(()=>({themeResult:e}))}const V={tags:["use-case"],decorators:[O({content:f.jsx("p",{children:"Theme store backed by Zustand vanilla store. get/set/subscribe map to getState/setState/subscribe."})}),E({source:H`
                const { store } = createZustandThemeStore(undefined)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            `})],play:async()=>{const{store:e}=Ye(void 0);await _({store:e,themes:k,theme:"grayscale"});const t=await Z({store:e,themes:k,theme:"default"});await v(t?.theme).toBe("grayscale")}};function Xe(e){const t=Pe(e),s=We();return s.set(t,e),{get:()=>s.get(t),set:n=>s.set(t,n),subscribe:n=>s.sub(t,()=>n())}}const $={tags:["use-case"],decorators:[O({content:f.jsx("p",{children:"Theme store backed by Jotai. get/set/subscribe map to store.get/set/sub on a theme atom."})}),E({source:H`
                const store = createJotaiThemeStore(undefined)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            `})],play:async()=>{const e=Xe(void 0);await _({store:e,themes:k,theme:"grayscale"});const t=await Z({store:e,themes:k,theme:"default"});await v(t?.theme).toBe("grayscale")}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  loaders: [async () => {
    const store = createBackendStore(undefined, 10);
    return {
      store
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Theme store that simulates a backend API with async get/set and a short delay. No real
                    HTTP; same pattern would work with axios or fetch.
                </p>
  }), showSource({
    source: dedent\`
                const store = createBackendStore(undefined, 50)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            \`
  })],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    return <ThemeStoreDemo store={store} themes={themes} theme="default" data-testid="with-backend-demo" />;
  },
  play: async ({
    canvas
  }) => {
    const base = 'with-backend-demo';
    const observeTheme = () => canvas.getByTestId(\`\${base}-observe-theme\`);
    const observeValue = () => canvas.getByTestId(\`\${base}-observe-value\`);
    const getTheme = () => canvas.getByTestId(\`\${base}-get-theme\`);
    const getValue = () => canvas.getByTestId(\`\${base}-get-value\`);
    const btnGet = () => canvas.getByTestId(\`\${base}-btn-get\`);
    const btnSetDefault = () => canvas.getByTestId(\`\${base}-btn-set-default\`);
    const btnSetGrayscale = () => canvas.getByTestId(\`\${base}-btn-set-grayscale\`);

    // Initial observed state (default theme when store is undefined)
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent(/default|\\(undefined\\)/);
    });

    // Set grayscale and verify observed updates
    await userEvent.click(btnSetGrayscale());
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent('grayscale');
      await expect(observeValue()).toHaveTextContent('text-gray-100');
    });

    // Get theme (one-time) and verify it matches current store
    await userEvent.click(btnGet());
    await waitFor(async () => {
      await expect(getTheme()).toHaveTextContent('grayscale');
      await expect(getValue()).toHaveTextContent('text-gray-100');
    });

    // Set default and verify observed updates
    await userEvent.click(btnSetDefault());
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent('default');
      await expect(observeValue()).toHaveTextContent('text-white');
    });

    // Get theme again and verify it shows default
    await userEvent.click(btnGet());
    await waitFor(async () => {
      await expect(getTheme()).toHaveTextContent('default');
      await expect(getValue()).toHaveTextContent('text-white');
    });
  }
}`,...N.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'Gets theme from an in-memory sync store.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                const store = {
                  get: () => ({ theme: 'grayscale', value: 'text-gray-100' }),
                  set: () => {},
                }
                const result = await getThemeFromStore({
                  store,
                  themes: { default: 'text-white', grayscale: 'text-gray-100' },
                  theme: 'default',
                })
            \`
  })],
  render: () => {
    const store = createInMemoryStore({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ShowThemeFromStore store={store} themes={themes} theme="default" data-testid="result" />;
  },
  play: async ({
    canvas
  }) => {
    const resultTheme = await canvas.getByTestId('result-theme');
    await expect(resultTheme).toHaveTextContent('grayscale');
    const resultValue = await canvas.getByTestId('result-value');
    await expect(resultValue).toHaveTextContent('text-gray-100');
  }
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    <code>useThemeStore</code> returns the current theme and a setter. Subscribes to store
                    changes so the returned theme stays in sync.
                </p>
  }), showSource({
    source: dedent\`
                const store = createInMemoryStoreWithSubscribe(undefined)
                const [theme, setTheme] = useThemeStore({ store, themes, theme: 'default' })
                setTheme('grayscale')
            \`
  })],
  render: () => {
    const store = createInMemoryStoreWithSubscribe(undefined);
    return <UseThemeStoreDemo store={store} data-testid="use-theme-store" />;
  },
  play: async ({
    canvas
  }) => {
    const themeEl = () => canvas.getByTestId('use-theme-store-theme');
    const btnDefault = () => canvas.getByTestId('use-theme-store-btn-default');
    const btnGrayscale = () => canvas.getByTestId('use-theme-store-btn-grayscale');
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('default');
    });
    await userEvent.click(btnGrayscale());
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('grayscale');
    });
    await userEvent.click(btnDefault());
    await waitFor(async () => {
      await expect(themeEl()).toHaveTextContent('default');
    });
  }
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Theme store backed by React Context. get/set/subscribe are implemented with useState and a
                    listener list.
                </p>
  }), showSource({
    source: dedent\`
                const store = useThemeStoreFromContext()
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
                observeThemeFromStore({ store, themes, theme: 'default', handler: setResult })
            \`
  })],
  render: () => {
    const [result, setResult] = useState<ThemeResult<typeof themes>>({
      theme: 'grayscale',
      value: 'text-gray-100'
    });
    return <ThemeContext.Provider value={{
      result,
      setResult
    }}>
                <ReactContextDemo />
            </ThemeContext.Provider>;
  },
  play: async () => {
    const resultState = {
      current: undefined as ThemeResult<typeof themes>
    };
    const listenersRef = {
      current: [] as Array<() => void>
    };
    const store: ThemeStore<typeof themes> = {
      get: () => resultState.current,
      set: r => {
        resultState.current = r;
        for (const fn of listenersRef.current) fn();
      },
      subscribe: h => {
        listenersRef.current.push(h);
        return () => {
          const i = listenersRef.current.indexOf(h);
          if (i !== -1) listenersRef.current.splice(i, 1);
        };
      }
    };
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    const got = await getThemeFromStore({
      store,
      themes,
      theme: 'default'
    });
    await expect(got?.theme).toBe('grayscale');
  }
}`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Theme store backed by Zustand vanilla store. get/set/subscribe map to
                    getState/setState/subscribe.
                </p>
  }), showSource({
    source: dedent\`
                const { store } = createZustandThemeStore(undefined)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            \`
  })],
  play: async () => {
    const {
      store
    } = createZustandThemeStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    const result = await getThemeFromStore({
      store,
      themes,
      theme: 'default'
    });
    await expect(result?.theme).toBe('grayscale');
  }
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  decorators: [withStoryCard({
    content: <p>
                    Theme store backed by Jotai. get/set/subscribe map to store.get/set/sub on a theme atom.
                </p>
  }), showSource({
    source: dedent\`
                const store = createJotaiThemeStore(undefined)
                const result = await getThemeFromStore({ store, themes, theme: 'default' })
                await setThemeToStore({ store, themes, theme: 'grayscale' })
            \`
  })],
  play: async () => {
    const store = createJotaiThemeStore(undefined);
    await setThemeToStore({
      store,
      themes,
      theme: 'grayscale'
    });
    const result = await getThemeFromStore({
      store,
      themes,
      theme: 'default'
    });
    await expect(result?.theme).toBe('grayscale');
  }
}`,...$.parameters?.docs?.source}}};const mt=["WithBackendStore","InMemoryStore","UseThemeStore","WithReactContext","WithZustand","WithJotai"];export{U as InMemoryStore,W as UseThemeStore,N as WithBackendStore,$ as WithJotai,K as WithReactContext,V as WithZustand,mt as __namedExportsOrder,dt as default};
