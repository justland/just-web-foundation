import{j as _,w as U,s as j,d as R,r as Q}from"./iframe-BfstSRl9.js";import{d as V}from"./dedent-BuYMbVyj.js";import{T as z}from"./theme-store-demo-rg07-YKB.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-entry-D4S_RAMB.js";import"./append-id-Vsg144gU.js";import"./button-CnRfsOuR.js";import"./resolve-class-name-CvdOUndO.js";import"./theme-result-card-ZBE0ua8g.js";const T={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};function X(e){return"init"in e}function W(e){return!!e.write}function Y(e){return"v"in e||"e"in e}function K(e){if("e"in e)throw e.e;if((T?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v}function N(e){return typeof e?.then=="function"}function ee(e,t,a){if(!a.p.has(e)){a.p.add(e);const n=()=>a.p.delete(e);t.then(n,n)}}function te(e,t,a){var n;const o=new Set;for(const s of((n=a.get(e))==null?void 0:n.t)||[])o.add(s);for(const s of t.p)o.add(s);return o}const se=(e,t,...a)=>t.read(...a),re=(e,t,...a)=>t.write(...a),ce=(e,t)=>{var a;return(a=t.INTERNAL_onInit)==null?void 0:a.call(t,e)},ie=(e,t,a)=>{var n;return(n=t.onMount)==null?void 0:n.call(t,a)},de=(e,t)=>{var a;const n=y(e),o=n[0],s=n[6],r=n[9];if((T?"production":void 0)!=="production"&&!t)throw new Error("Atom is undefined or null");let l=o.get(t);return l||(l={d:new Map,p:new Set,n:0},o.set(t,l),(a=s.i)==null||a.call(s,t),r?.(e,t)),l},ue=e=>{const t=y(e),a=t[1],n=t[3],o=t[4],s=t[5],r=t[6],l=t[13],d=[],h=w=>{try{w()}catch(c){d.push(c)}};do{r.f&&h(r.f);const w=new Set,c=w.add.bind(w);n.forEach(u=>{var i;return(i=a.get(u))==null?void 0:i.l.forEach(c)}),n.clear(),s.forEach(c),s.clear(),o.forEach(c),o.clear(),w.forEach(h),n.size&&l(e)}while(n.size||s.size||o.size);if(d.length)throw new AggregateError(d)},le=e=>{const t=y(e),a=t[1],n=t[2],o=t[3],s=t[11],r=t[14],l=t[17],d=[],h=new WeakSet,w=new WeakSet,c=Array.from(o);for(;c.length;){const u=c[c.length-1],i=s(e,u);if(w.has(u)){c.pop();continue}if(h.has(u)){if(n.get(u)===i.n)d.push([u,i]);else if((T?"production":void 0)!=="production"&&n.has(u))throw new Error("[Bug] invalidated atom exists");w.add(u),c.pop();continue}h.add(u);for(const f of te(u,i,a))h.has(f)||c.push(f)}for(let u=d.length-1;u>=0;--u){const[i,f]=d[u];let p=!1;for(const g of f.d.keys())if(g!==i&&o.has(g)){p=!0;break}p&&(r(e,i),l(e,i)),n.delete(i)}},G=new WeakSet,me=(e,t)=>{var a,n;const o=y(e),s=o[1],r=o[2],l=o[3],d=o[6],h=o[7],w=o[11],c=o[12],u=o[13],i=o[14],f=o[16],p=o[17],g=o[20],B=o[26],m=w(e,t);if(Y(m)){if(s.has(t)&&r.get(t)!==m.n)return m;let b=!1;for(const[C,x]of m.d)if(i(e,C).n!==x){b=!0;break}if(!b)return m}let S=!0;const H=new Set(m.d.keys()),A=new Map,L=()=>{for(const b of H)A.has(b)||m.d.delete(b)},E=()=>{if(s.has(t)){const b=!l.size;p(e,t),b&&(u(e),c(e))}},oe=b=>{var C;if(b===t){const Z=w(e,b);if(!Y(Z))if(X(b))g(e,b,b.init);else throw new Error("no atom init");return K(Z)}const x=i(e,b);try{return K(x)}finally{A.set(b,x.n),m.d.set(b,x.n),N(m.v)&&ee(t,m.v,x),s.has(t)&&((C=s.get(b))==null||C.t.add(t)),S||E()}};let D,P;const ae={get signal(){return D||(D=new AbortController),D.signal},get setSelf(){return(T?"production":void 0)!=="production"&&console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."),(T?"production":void 0)!=="production"&&!W(t)&&console.warn("setSelf function cannot be used with read-only atom"),!P&&W(t)&&(P=(...b)=>{if((T?"production":void 0)!=="production"&&S&&console.warn("setSelf function cannot be called in sync"),!S)try{return f(e,t,...b)}finally{u(e),c(e)}}),P}},J=m.n;try{(T?"production":void 0)!=="production"&&G.delete(e);const b=h(e,t,oe,ae);if((T?"production":void 0)!=="production"&&G.has(e)&&console.warn("Detected store mutation during atom read. This is not supported."),g(e,t,b),N(b)){B(e,b,()=>D?.abort());const C=()=>{L(),E()};b.then(C,C)}else L();return(a=d.r)==null||a.call(d,t),m}catch(b){return delete m.v,m.e=b,++m.n,m}finally{S=!1,J!==m.n&&r.get(t)===J&&(r.set(t,m.n),l.add(t),(n=d.c)==null||n.call(d,t))}},he=(e,t)=>{const a=y(e),n=a[1],o=a[2],s=a[11],r=[t];for(;r.length;){const l=r.pop(),d=s(e,l);for(const h of te(l,d,n)){const w=s(e,h);o.get(h)!==w.n&&(o.set(h,w.n),r.push(h))}}},be=(e,t,...a)=>{const n=y(e),o=n[3],s=n[6],r=n[8],l=n[11],d=n[12],h=n[13],w=n[14],c=n[15],u=n[16],i=n[17],f=n[20];let p=!0;const g=m=>K(w(e,m)),B=(m,...S)=>{var H;const A=l(e,m);try{if(m===t){if(!X(m))throw new Error("atom not writable");(T?"production":void 0)!=="production"&&G.add(e);const L=A.n,E=S[0];f(e,m,E),i(e,m),L!==A.n&&(o.add(m),c(e,m),(H=s.c)==null||H.call(s,m));return}else return u(e,m,...S)}finally{p||(h(e),d(e))}};try{return r(e,t,g,B,...a)}finally{p=!1}},we=(e,t)=>{var a;const n=y(e),o=n[1],s=n[3],r=n[6],l=n[11],d=n[15],h=n[18],w=n[19],c=l(e,t),u=o.get(t);if(u){for(const[i,f]of c.d)if(!u.d.has(i)){const p=l(e,i);h(e,i).t.add(t),u.d.add(i),f!==p.n&&(s.add(i),d(e,i),(a=r.c)==null||a.call(r,i))}for(const i of u.d)if(!c.d.has(i)){u.d.delete(i);const f=w(e,i);f?.t.delete(t)}}},fe=(e,t)=>{var a;const n=y(e),o=n[1],s=n[4],r=n[6],l=n[10],d=n[11],h=n[12],w=n[13],c=n[14],u=n[16],i=n[18],f=d(e,t);let p=o.get(t);if(!p){c(e,t);for(const g of f.d.keys())i(e,g).t.add(t);if(p={l:new Set,d:new Set(f.d.keys()),t:new Set},o.set(t,p),W(t)){const g=()=>{let B=!0;const m=(...S)=>{try{return u(e,t,...S)}finally{B||(w(e),h(e))}};try{const S=l(e,t,m);S&&(p.u=()=>{B=!0;try{S()}finally{B=!1}})}finally{B=!1}};s.add(g)}(a=r.m)==null||a.call(r,t)}return p},ye=(e,t)=>{var a,n;const o=y(e),s=o[1],r=o[5],l=o[6],d=o[11],h=o[19],w=d(e,t);let c=s.get(t);if(!c||c.l.size)return c;let u=!1;for(const i of c.t)if((a=s.get(i))!=null&&a.d.has(t)){u=!0;break}if(!u){c.u&&r.add(c.u),c=void 0,s.delete(t);for(const i of w.d.keys()){const f=h(e,i);f?.t.delete(t)}(n=l.u)==null||n.call(l,t);return}return c},pe=(e,t,a)=>{const n=y(e),o=n[11],s=n[27],r=o(e,t),l="v"in r,d=r.v;if(N(a))for(const h of r.d.keys())ee(t,a,o(e,h));r.v=a,delete r.e,(!l||!Object.is(d,r.v))&&(++r.n,N(d)&&s(e,d))},ve=(e,t)=>{const a=y(e)[14];return K(a(e,t))},ge=(e,t,...a)=>{const n=y(e),o=n[12],s=n[13],r=n[16];try{return r(e,t,...a)}finally{s(e),o(e)}},Se=(e,t,a)=>{const n=y(e),o=n[12],s=n[18],r=n[19],d=s(e,t).l;return d.add(a),o(e),()=>{d.delete(a),r(e,t),o(e)}},Te=(e,t,a)=>{const o=y(e)[25];let s=o.get(t);if(!s){s=new Set,o.set(t,s);const r=()=>o.delete(t);t.then(r,r)}s.add(a)},Be=(e,t)=>{const o=y(e)[25].get(t);o?.forEach(s=>s())},ne=new WeakMap,y=e=>{const t=ne.get(e);if((T?"production":void 0)!=="production"&&!t)throw new Error("Store must be created by buildStore to read its building blocks");return t};function ke(...e){const t={get(n){const o=y(t)[21];return o(t,n)},set(n,...o){const s=y(t)[22];return s(t,n,...o)},sub(n,o){const s=y(t)[23];return s(t,n,o)}},a=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},se,re,ce,ie,de,ue,le,me,he,be,we,fe,ye,pe,ve,ge,Se,void 0,new WeakMap,Te,Be].map((n,o)=>e[o]||n);return ne.set(t,Object.freeze(a)),t}const Ie={};let _e=0;function Ce(e,t){const a=`atom${++_e}`,n={toString(){return(Ie?"production":void 0)!=="production"&&this.debugLabel?a+":"+this.debugLabel:a}};return n.init=e,n.read=xe,n.write=Ae,n}function xe(e){return e(this)}function Ae(e,t,a){return t(this,typeof a=="function"?a(e(this)):a)}function De(){return ke()}const q=e=>{let t;const a=new Set,n=(h,w)=>{const c=typeof h=="function"?h(t):h;if(!Object.is(c,t)){const u=t;t=w??(typeof c!="object"||c===null)?c:Object.assign({},t,c),a.forEach(i=>i(t,u))}},o=()=>t,l={setState:n,getState:o,getInitialState:()=>d,subscribe:h=>(a.add(h),()=>a.delete(h))},d=t=e(n,o,l);return l},He=(e=>e?q(e):q),{expect:v,userEvent:I,waitFor:k}=__STORYBOOK_MODULE_TEST__,Re={title:"theme/Use Cases",tags:["version:1.0"],render:()=>_.jsx(_.Fragment,{})},F={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"};function Le(e,t=50){let a=e;const n=[];return{async read(){return new Promise(o=>{setTimeout(()=>o(a??void 0),t)})},async write(o){return new Promise(s=>{setTimeout(()=>{a=o??void 0;for(const r of n)r(o??void 0);s()},t)})},subscribe(o){return n.push(o),()=>{const s=n.indexOf(o);s!==-1&&n.splice(s,1)}}}}const O={tags:["use-case"],parameters:R({description:{story:"Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch."}}),loaders:[async()=>({store:Le(void 0,10)})],decorators:[U({content:_.jsx("p",{children:"Theme store that simulates a backend API with async read/write and subscribe. No real HTTP; same pattern would work with axios or fetch."})}),j({source:V`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            `})],render:(e,{loaded:{store:t}})=>_.jsx(z,{store:t,themes:F,setThemeKeys:["current","grayscale"],"data-testid":"with-backend-demo"}),play:async({canvas:e})=>{const t="with-backend-demo",a=()=>e.getByTestId(`${t}-observe-theme`),n=()=>e.getByTestId(`${t}-observe-value`),o=()=>e.getByTestId(`${t}-read-theme`),s=()=>e.getByTestId(`${t}-read-value`),r=()=>e.getByTestId(`${t}-btn-read`),l=()=>e.getByTestId(`${t}-btn-write-current`),d=()=>e.getByTestId(`${t}-btn-write-grayscale`);await k(async()=>{await v(a()).toHaveTextContent(/current|\(undefined\)/)}),await I.click(d()),await k(async()=>{await v(a()).toHaveTextContent("grayscale"),await v(n()).toHaveTextContent("theme-grayscale")}),await I.click(r()),await k(async()=>{await v(o()).toHaveTextContent("grayscale"),await v(s()).toHaveTextContent("theme-grayscale")}),await I.click(l()),await k(async()=>{await v(a()).toHaveTextContent("current"),await v(n()).toHaveTextContent("theme-current")}),await I.click(r()),await k(async()=>{await v(o()).toHaveTextContent("current"),await v(s()).toHaveTextContent("theme-current")})}};function Ee(e){const t=He(()=>({entry:e}));return{store:{read:()=>t.getState().entry,write:n=>t.setState({entry:n??void 0}),subscribe:n=>t.subscribe((o,s)=>{o.entry!==s?.entry&&n(o.entry??void 0)})},zustandStore:t}}const $={tags:["use-case"],parameters:R({description:{story:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."}}),decorators:[U({content:_.jsx("p",{children:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."})}),j({source:V`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const{store:e}=Q.useMemo(()=>Ee(void 0),[]);return _.jsx(z,{store:e,themes:F,setThemeKeys:["current","grayscale"],"data-testid":"with-zustand-demo"})},play:async({canvas:e})=>{const t="with-zustand-demo";await I.click(e.getByTestId(`${t}-btn-write-grayscale`)),await k(()=>v(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent("grayscale")),await v(e.getByTestId(`${t}-observe-value`)).toHaveTextContent("theme-grayscale"),await I.click(e.getByTestId(`${t}-btn-read`)),await k(()=>v(e.getByTestId(`${t}-read-theme`)).toHaveTextContent("grayscale"))}};function Oe(e){const t=Ce(e),a=De();return a.set(t,e),{read:()=>a.get(t),write:n=>a.set(t,n??void 0),subscribe:n=>a.sub(t,()=>n(a.get(t)??void 0))}}const M={tags:["use-case"],parameters:R({description:{story:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."}}),decorators:[U({content:_.jsx("p",{children:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."})}),j({source:V`
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
}`,...M.parameters?.docs?.source}}};const Ve=["WithBackendStore","WithZustand","WithJotai"];export{O as WithBackendStore,M as WithJotai,$ as WithZustand,Ve as __namedExportsOrder,Re as default};
