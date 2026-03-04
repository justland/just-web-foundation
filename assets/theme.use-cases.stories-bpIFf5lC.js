import{j as _,w as U,s as j,d as R,r as Q}from"./iframe-6R7iObMn.js";import{d as V}from"./dedent-BuYMbVyj.js";import{T as z}from"./theme-store-demo-uf1zpCDF.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-result-card-xEPx6OSf.js";import"./button-2D35iakA.js";const T={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};function X(e){return"init"in e}function W(e){return!!e.write}function Y(e){return"v"in e||"e"in e}function K(e){if("e"in e)throw e.e;if((T?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v}function N(e){return typeof e?.then=="function"}function ee(e,t,o){if(!o.p.has(e)){o.p.add(e);const n=()=>o.p.delete(e);t.then(n,n)}}function te(e,t,o){var n;const a=new Set;for(const s of((n=o.get(e))==null?void 0:n.t)||[])a.add(s);for(const s of t.p)a.add(s);return a}const se=(e,t,...o)=>t.read(...o),re=(e,t,...o)=>t.write(...o),ce=(e,t)=>{var o;return(o=t.INTERNAL_onInit)==null?void 0:o.call(t,e)},ie=(e,t,o)=>{var n;return(n=t.onMount)==null?void 0:n.call(t,o)},de=(e,t)=>{var o;const n=y(e),a=n[0],s=n[6],r=n[9];if((T?"production":void 0)!=="production"&&!t)throw new Error("Atom is undefined or null");let l=a.get(t);return l||(l={d:new Map,p:new Set,n:0},a.set(t,l),(o=s.i)==null||o.call(s,t),r?.(e,t)),l},ue=e=>{const t=y(e),o=t[1],n=t[3],a=t[4],s=t[5],r=t[6],l=t[13],d=[],h=w=>{try{w()}catch(c){d.push(c)}};do{r.f&&h(r.f);const w=new Set,c=w.add.bind(w);n.forEach(u=>{var i;return(i=o.get(u))==null?void 0:i.l.forEach(c)}),n.clear(),s.forEach(c),s.clear(),a.forEach(c),a.clear(),w.forEach(h),n.size&&l(e)}while(n.size||s.size||a.size);if(d.length)throw new AggregateError(d)},le=e=>{const t=y(e),o=t[1],n=t[2],a=t[3],s=t[11],r=t[14],l=t[17],d=[],h=new WeakSet,w=new WeakSet,c=Array.from(a);for(;c.length;){const u=c[c.length-1],i=s(e,u);if(w.has(u)){c.pop();continue}if(h.has(u)){if(n.get(u)===i.n)d.push([u,i]);else if((T?"production":void 0)!=="production"&&n.has(u))throw new Error("[Bug] invalidated atom exists");w.add(u),c.pop();continue}h.add(u);for(const f of te(u,i,o))h.has(f)||c.push(f)}for(let u=d.length-1;u>=0;--u){const[i,f]=d[u];let p=!1;for(const g of f.d.keys())if(g!==i&&a.has(g)){p=!0;break}p&&(r(e,i),l(e,i)),n.delete(i)}},G=new WeakSet,me=(e,t)=>{var o,n;const a=y(e),s=a[1],r=a[2],l=a[3],d=a[6],h=a[7],w=a[11],c=a[12],u=a[13],i=a[14],f=a[16],p=a[17],g=a[20],B=a[26],m=w(e,t);if(Y(m)){if(s.has(t)&&r.get(t)!==m.n)return m;let b=!1;for(const[C,x]of m.d)if(i(e,C).n!==x){b=!0;break}if(!b)return m}let S=!0;const H=new Set(m.d.keys()),A=new Map,L=()=>{for(const b of H)A.has(b)||m.d.delete(b)},E=()=>{if(s.has(t)){const b=!l.size;p(e,t),b&&(u(e),c(e))}},ae=b=>{var C;if(b===t){const Z=w(e,b);if(!Y(Z))if(X(b))g(e,b,b.init);else throw new Error("no atom init");return K(Z)}const x=i(e,b);try{return K(x)}finally{A.set(b,x.n),m.d.set(b,x.n),N(m.v)&&ee(t,m.v,x),s.has(t)&&((C=s.get(b))==null||C.t.add(t)),S||E()}};let D,P;const oe={get signal(){return D||(D=new AbortController),D.signal},get setSelf(){return(T?"production":void 0)!=="production"&&console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."),(T?"production":void 0)!=="production"&&!W(t)&&console.warn("setSelf function cannot be used with read-only atom"),!P&&W(t)&&(P=(...b)=>{if((T?"production":void 0)!=="production"&&S&&console.warn("setSelf function cannot be called in sync"),!S)try{return f(e,t,...b)}finally{u(e),c(e)}}),P}},J=m.n;try{(T?"production":void 0)!=="production"&&G.delete(e);const b=h(e,t,ae,oe);if((T?"production":void 0)!=="production"&&G.has(e)&&console.warn("Detected store mutation during atom read. This is not supported."),g(e,t,b),N(b)){B(e,b,()=>D?.abort());const C=()=>{L(),E()};b.then(C,C)}else L();return(o=d.r)==null||o.call(d,t),m}catch(b){return delete m.v,m.e=b,++m.n,m}finally{S=!1,J!==m.n&&r.get(t)===J&&(r.set(t,m.n),l.add(t),(n=d.c)==null||n.call(d,t))}},he=(e,t)=>{const o=y(e),n=o[1],a=o[2],s=o[11],r=[t];for(;r.length;){const l=r.pop(),d=s(e,l);for(const h of te(l,d,n)){const w=s(e,h);a.get(h)!==w.n&&(a.set(h,w.n),r.push(h))}}},be=(e,t,...o)=>{const n=y(e),a=n[3],s=n[6],r=n[8],l=n[11],d=n[12],h=n[13],w=n[14],c=n[15],u=n[16],i=n[17],f=n[20];let p=!0;const g=m=>K(w(e,m)),B=(m,...S)=>{var H;const A=l(e,m);try{if(m===t){if(!X(m))throw new Error("atom not writable");(T?"production":void 0)!=="production"&&G.add(e);const L=A.n,E=S[0];f(e,m,E),i(e,m),L!==A.n&&(a.add(m),c(e,m),(H=s.c)==null||H.call(s,m));return}else return u(e,m,...S)}finally{p||(h(e),d(e))}};try{return r(e,t,g,B,...o)}finally{p=!1}},we=(e,t)=>{var o;const n=y(e),a=n[1],s=n[3],r=n[6],l=n[11],d=n[15],h=n[18],w=n[19],c=l(e,t),u=a.get(t);if(u){for(const[i,f]of c.d)if(!u.d.has(i)){const p=l(e,i);h(e,i).t.add(t),u.d.add(i),f!==p.n&&(s.add(i),d(e,i),(o=r.c)==null||o.call(r,i))}for(const i of u.d)if(!c.d.has(i)){u.d.delete(i);const f=w(e,i);f?.t.delete(t)}}},fe=(e,t)=>{var o;const n=y(e),a=n[1],s=n[4],r=n[6],l=n[10],d=n[11],h=n[12],w=n[13],c=n[14],u=n[16],i=n[18],f=d(e,t);let p=a.get(t);if(!p){c(e,t);for(const g of f.d.keys())i(e,g).t.add(t);if(p={l:new Set,d:new Set(f.d.keys()),t:new Set},a.set(t,p),W(t)){const g=()=>{let B=!0;const m=(...S)=>{try{return u(e,t,...S)}finally{B||(w(e),h(e))}};try{const S=l(e,t,m);S&&(p.u=()=>{B=!0;try{S()}finally{B=!1}})}finally{B=!1}};s.add(g)}(o=r.m)==null||o.call(r,t)}return p},ye=(e,t)=>{var o,n;const a=y(e),s=a[1],r=a[5],l=a[6],d=a[11],h=a[19],w=d(e,t);let c=s.get(t);if(!c||c.l.size)return c;let u=!1;for(const i of c.t)if((o=s.get(i))!=null&&o.d.has(t)){u=!0;break}if(!u){c.u&&r.add(c.u),c=void 0,s.delete(t);for(const i of w.d.keys()){const f=h(e,i);f?.t.delete(t)}(n=l.u)==null||n.call(l,t);return}return c},pe=(e,t,o)=>{const n=y(e),a=n[11],s=n[27],r=a(e,t),l="v"in r,d=r.v;if(N(o))for(const h of r.d.keys())ee(t,o,a(e,h));r.v=o,delete r.e,(!l||!Object.is(d,r.v))&&(++r.n,N(d)&&s(e,d))},ve=(e,t)=>{const o=y(e)[14];return K(o(e,t))},ge=(e,t,...o)=>{const n=y(e),a=n[12],s=n[13],r=n[16];try{return r(e,t,...o)}finally{s(e),a(e)}},Se=(e,t,o)=>{const n=y(e),a=n[12],s=n[18],r=n[19],d=s(e,t).l;return d.add(o),a(e),()=>{d.delete(o),r(e,t),a(e)}},Te=(e,t,o)=>{const a=y(e)[25];let s=a.get(t);if(!s){s=new Set,a.set(t,s);const r=()=>a.delete(t);t.then(r,r)}s.add(o)},Be=(e,t)=>{const a=y(e)[25].get(t);a?.forEach(s=>s())},ne=new WeakMap,y=e=>{const t=ne.get(e);if((T?"production":void 0)!=="production"&&!t)throw new Error("Store must be created by buildStore to read its building blocks");return t};function ke(...e){const t={get(n){const a=y(t)[21];return a(t,n)},set(n,...a){const s=y(t)[22];return s(t,n,...a)},sub(n,a){const s=y(t)[23];return s(t,n,a)}},o=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},se,re,ce,ie,de,ue,le,me,he,be,we,fe,ye,pe,ve,ge,Se,void 0,new WeakMap,Te,Be].map((n,a)=>e[a]||n);return ne.set(t,Object.freeze(o)),t}const Ie={};let _e=0;function Ce(e,t){const o=`atom${++_e}`,n={toString(){return(Ie?"production":void 0)!=="production"&&this.debugLabel?o+":"+this.debugLabel:o}};return n.init=e,n.read=xe,n.write=Ae,n}function xe(e){return e(this)}function Ae(e,t,o){return t(this,typeof o=="function"?o(e(this)):o)}function De(){return ke()}const q=e=>{let t;const o=new Set,n=(h,w)=>{const c=typeof h=="function"?h(t):h;if(!Object.is(c,t)){const u=t;t=w??(typeof c!="object"||c===null)?c:Object.assign({},t,c),o.forEach(i=>i(t,u))}},a=()=>t,l={setState:n,getState:a,getInitialState:()=>d,subscribe:h=>(o.add(h),()=>o.delete(h))},d=t=e(n,a,l);return l},He=(e=>e?q(e):q),{expect:v,userEvent:I,waitFor:k}=__STORYBOOK_MODULE_TEST__,Ge={title:"theme/Use Cases",tags:["version:1.0"],render:()=>_.jsx(_.Fragment,{})},F={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"};function Le(e,t=50){let o=e;const n=[];return{async read(){return new Promise(a=>{setTimeout(()=>a(o??void 0),t)})},async write(a){return new Promise(s=>{setTimeout(()=>{o=a??void 0;for(const r of n)r(a??null);s()},t)})},subscribe(a){return n.push(a),()=>{const s=n.indexOf(a);s!==-1&&n.splice(s,1)}}}}const O={tags:["use-case"],parameters:R({description:{story:"Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch."}}),loaders:[async()=>({store:Le(void 0,10)})],decorators:[U({content:_.jsx("p",{children:"Theme store that simulates a backend API with async read/write and subscribe. No real HTTP; same pattern would work with axios or fetch."})}),j({source:V`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            `})],render:(e,{loaded:{store:t}})=>_.jsx(z,{store:t,themes:F,setThemeKeys:["current","grayscale"],"data-testid":"with-backend-demo"}),play:async({canvas:e})=>{const t="with-backend-demo",o=()=>e.getByTestId(`${t}-observe-theme`),n=()=>e.getByTestId(`${t}-observe-value`),a=()=>e.getByTestId(`${t}-read-theme`),s=()=>e.getByTestId(`${t}-read-value`),r=()=>e.getByTestId(`${t}-btn-read`),l=()=>e.getByTestId(`${t}-btn-write-current`),d=()=>e.getByTestId(`${t}-btn-write-grayscale`);await k(async()=>{await v(o()).toHaveTextContent(/current|\(undefined\)/)}),await I.click(d()),await k(async()=>{await v(o()).toHaveTextContent("grayscale"),await v(n()).toHaveTextContent("theme-grayscale")}),await I.click(r()),await k(async()=>{await v(a()).toHaveTextContent("grayscale"),await v(s()).toHaveTextContent("theme-grayscale")}),await I.click(l()),await k(async()=>{await v(o()).toHaveTextContent("current"),await v(n()).toHaveTextContent("theme-current")}),await I.click(r()),await k(async()=>{await v(a()).toHaveTextContent("current"),await v(s()).toHaveTextContent("theme-current")})}};function Ee(e){const t=He(()=>({entry:e}));return{store:{read:()=>t.getState().entry,write:n=>t.setState({entry:n??void 0}),subscribe:n=>t.subscribe((a,s)=>{a.entry!==s?.entry&&n(a.entry??null)})},zustandStore:t}}const $={tags:["use-case"],parameters:R({description:{story:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."}}),decorators:[U({content:_.jsx("p",{children:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."})}),j({source:V`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const{store:e}=Q.useMemo(()=>Ee(void 0),[]);return _.jsx(z,{store:e,themes:F,setThemeKeys:["current","grayscale"],"data-testid":"with-zustand-demo"})},play:async({canvas:e})=>{const t="with-zustand-demo";await I.click(e.getByTestId(`${t}-btn-write-grayscale`)),await k(()=>v(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent("grayscale")),await v(e.getByTestId(`${t}-observe-value`)).toHaveTextContent("theme-grayscale"),await I.click(e.getByTestId(`${t}-btn-read`)),await k(()=>v(e.getByTestId(`${t}-read-theme`)).toHaveTextContent("grayscale"))}};function Oe(e){const t=Ce(e),o=De();return o.set(t,e),{read:()=>o.get(t),write:n=>o.set(t,n??void 0),subscribe:n=>o.sub(t,()=>n(o.get(t)??null))}}const M={tags:["use-case"],parameters:R({description:{story:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."}}),decorators:[U({content:_.jsx("p",{children:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."})}),j({source:V`
                const store = createJotaiThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const e=Q.useMemo(()=>Oe(void 0),[]);return _.jsx(z,{store:e,themes:F,setThemeKeys:["current","grayscale"],"data-testid":"with-jotai-demo"})},play:async({canvas:e})=>{const t="with-jotai-demo";await I.click(e.getByTestId(`${t}-btn-write-grayscale`)),await k(()=>v(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent("grayscale")),await v(e.getByTestId(`${t}-observe-value`)).toHaveTextContent("theme-grayscale"),await I.click(e.getByTestId(`${t}-btn-read`)),await k(()=>v(e.getByTestId(`${t}-read-theme`)).toHaveTextContent("grayscale"))}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch.'
    }
  }),
  loaders: [async () => {
    const store = createBackendStore(undefined, 10);
    return {
      store
    };
  }],
  decorators: [withStoryCard({
    content: <p>
                    Theme store that simulates a backend API with async read/write and subscribe. No real
                    HTTP; same pattern would work with axios or fetch.
                </p>
  }), showSource({
    source: dedent\`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            \`
  })],
  render: (_, {
    loaded: {
      store
    }
  }) => {
    return <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale']} data-testid="with-backend-demo" />;
  },
  play: async ({
    canvas
  }) => {
    const base = 'with-backend-demo';
    const observeTheme = () => canvas.getByTestId(\`\${base}-observe-theme\`);
    const observeValue = () => canvas.getByTestId(\`\${base}-observe-value\`);
    const readTheme = () => canvas.getByTestId(\`\${base}-read-theme\`);
    const readValue = () => canvas.getByTestId(\`\${base}-read-value\`);
    const btnRead = () => canvas.getByTestId(\`\${base}-btn-read\`);
    const btnWriteCurrent = () => canvas.getByTestId(\`\${base}-btn-write-current\`);
    const btnWriteGrayscale = () => canvas.getByTestId(\`\${base}-btn-write-grayscale\`);

    // Initial observed state (undefined when store is empty)
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent(/current|\\(undefined\\)/);
    });

    // Set grayscale and verify observed updates
    await userEvent.click(btnWriteGrayscale());
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent('grayscale');
      await expect(observeValue()).toHaveTextContent('theme-grayscale');
    });

    // Read theme (one-time) and verify it matches current store
    await userEvent.click(btnRead());
    await waitFor(async () => {
      await expect(readTheme()).toHaveTextContent('grayscale');
      await expect(readValue()).toHaveTextContent('theme-grayscale');
    });

    // Set current and verify observed updates
    await userEvent.click(btnWriteCurrent());
    await waitFor(async () => {
      await expect(observeTheme()).toHaveTextContent('current');
      await expect(observeValue()).toHaveTextContent('theme-current');
    });

    // Read theme again and verify it shows current
    await userEvent.click(btnRead());
    await waitFor(async () => {
      await expect(readTheme()).toHaveTextContent('current');
      await expect(readValue()).toHaveTextContent('theme-current');
    });
  }
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Theme store backed by Zustand vanilla store. read/write/subscribe map to
                    getState/setState/subscribe.
                </p>
  }), showSource({
    source: dedent\`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            \`
  })],
  render: () => {
    const {
      store
    } = useMemo(() => createZustandThemeStore(undefined), []);
    return <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale']} data-testid="with-zustand-demo" />;
  },
  play: async ({
    canvas
  }) => {
    const base = 'with-zustand-demo';
    await userEvent.click(canvas.getByTestId(\`\${base}-btn-write-grayscale\`));
    await waitFor(() => expect(canvas.getByTestId(\`\${base}-observe-theme\`)).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId(\`\${base}-observe-value\`)).toHaveTextContent('theme-grayscale');
    await userEvent.click(canvas.getByTestId(\`\${base}-btn-read\`));
    await waitFor(() => expect(canvas.getByTestId(\`\${base}-read-theme\`)).toHaveTextContent('grayscale'));
  }
}`,...$.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.'
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme
                    atom.
                </p>
  }), showSource({
    source: dedent\`
                const store = createJotaiThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            \`
  })],
  render: () => {
    const store = useMemo(() => createJotaiThemeStore(undefined), []);
    return <ThemeStoreDemo store={store} themes={themes} setThemeKeys={['current', 'grayscale']} data-testid="with-jotai-demo" />;
  },
  play: async ({
    canvas
  }) => {
    const base = 'with-jotai-demo';
    await userEvent.click(canvas.getByTestId(\`\${base}-btn-write-grayscale\`));
    await waitFor(() => expect(canvas.getByTestId(\`\${base}-observe-theme\`)).toHaveTextContent('grayscale'));
    await expect(canvas.getByTestId(\`\${base}-observe-value\`)).toHaveTextContent('theme-grayscale');
    await userEvent.click(canvas.getByTestId(\`\${base}-btn-read\`));
    await waitFor(() => expect(canvas.getByTestId(\`\${base}-read-theme\`)).toHaveTextContent('grayscale'));
  }
}`,...M.parameters?.docs?.source}}};const Ue=["WithBackendStore","WithZustand","WithJotai"];export{O as WithBackendStore,M as WithJotai,$ as WithZustand,Ue as __namedExportsOrder,Ge as default};
