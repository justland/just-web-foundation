import{j as A,w as R,s as j,d as V,r as k}from"./iframe-BpXj-3b1.js";import{d as F}from"./dedent-D4JfOF0A.js";import{T as J}from"./theme-store-demo-Dl8Ng1NL.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-entry-D4S_RAMB.js";import"./append-id-Vsg144gU.js";import"./button-CGZNSIHq.js";import"./resolve-class-name-CqQ4XPfR.js";import"./theme-result-card-DQkyr6Gh.js";const C={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"};function B(e){return"init"in e}function P(e){return typeof e.write=="function"}function se(e){return!!e.onMount}function Q(e){return"v"in e||"e"in e}function z(e){if("e"in e)throw e.e;if((C?"production":void 0)!=="production"&&!("v"in e))throw new Error("[Bug] atom state is not initialized");return e.v}function G(e){return typeof e?.then=="function"}function oe(e){if(!(e instanceof Error))return!1;const t=e.name,n=e.message.toLowerCase();return(t==="RangeError"||t==="InternalError")&&(n.includes("call stack")||n.includes("too much recursion")||n.includes("stack overflow"))}function ee(e,t,n){if(!n.p.has(e)){n.p.add(e);const a=()=>n.p.delete(e);t.then(a,a)}}function te(e,t,n){const a=n.get(e),r=a?.t,s=t.p;if(!r?.size)return s;if(!s.size)return r;const o=new Set(r);for(const c of s)o.add(c);return o}function ce(e){return!!e.INTERNAL_onInit}const de=(e,t,n,...a)=>n.read(...a),ie=(e,t,n,...a)=>n.write(...a),ue=(e,t,n)=>n.INTERNAL_onInit(t),me=(e,t,n,a)=>{var r;return(r=n.onMount)==null?void 0:r.call(n,a)},he=(e,t,n)=>{var a;const r=e[0];let s=r.get(n);if(!s){const o=e[6],c=e[9];s={d:new Map,p:new Set,n:0},r.set(n,s),(a=o.i)==null||a.call(o,n),ce(n)&&c(e,t,n)}return s},fe=(e,t)=>{var n;const a=e[1],r=e[3],s=e[4],o=e[5],c=e[6],f=e[13];if(!c.f&&!r.size&&!s.size&&!o.size)return;const m=[],v=i=>{try{i()}catch(u){m.push(u)}};do{c.f&&v(c.f);const i=new Set;for(const u of r){const h=(n=a.get(u))==null?void 0:n.l;if(h)for(const w of h)i.add(w)}r.clear();for(const u of o)i.add(u);o.clear();for(const u of s)i.add(u);s.clear();for(const u of i)v(u);r.size&&f(e,t)}while(r.size||o.size||s.size);if(m.length)throw new AggregateError(m)},we=(e,t)=>{const n=e[1],a=e[2],r=e[3],s=e[11],o=e[14],c=e[17];if(!r.size)return;const f=[],m=[],v=new WeakSet,i=new WeakSet,u=[],h=[];for(const w of r)u.push(w),h.push(s(e,t,w));for(;u.length;){const w=u.length-1,y=u[w],S=h[w];if(i.has(y)){u.pop(),h.pop();continue}if(v.has(y)){if(a.get(y)===S.n)f.push(y),m.push(S);else if((C?"production":void 0)!=="production"&&a.has(y))throw new Error("[Bug] invalidated atom exists");i.add(y),u.pop(),h.pop();continue}v.add(y);for(const l of te(y,S,n))v.has(l)||(u.push(l),h.push(s(e,t,l)))}for(let w=f.length-1;w>=0;--w){const y=f[w],S=m[w];let l=!1;for(const _ of S.d.keys())if(_!==y&&r.has(_)){l=!0;break}l&&(a.set(y,S.n),o(e,t,y),c(e,t,y)),a.delete(y)}},U=new WeakSet,pe=(e,t,n)=>{var a,r;const s=e[1],o=e[2],c=e[3],f=e[6],m=e[7],v=e[11],i=e[12],u=e[13],h=e[14],w=e[16],y=e[17],S=e[20],l=e[26],_=e[28],d=v(e,t,n),b=_[0];if(Q(d)){if(s.has(n)&&o.get(n)!==d.n||d.m===b)return d.m=b,d;let p=!1;for(const[H,E]of d.d)if(h(e,t,H).n!==E){p=!0;break}if(!p)return d.m=b,d}let D=!0;const L=new Set(d.d.keys()),g=()=>{for(const p of L)d.d.delete(p)},M=()=>{if(s.has(n)){const p=!c.size;y(e,t,n),p&&(u(e,t),i(e,t))}},ne=p=>{var H;if(p===n){const q=v(e,t,p);if(!Q(q))if(B(p))S(e,t,p,p.init);else throw new Error("no atom init");return z(q)}const E=h(e,t,p);try{return z(E)}finally{L.delete(p),d.d.set(p,E.n),G(d.v)&&ee(n,d.v,E),s.has(n)&&((H=s.get(p))==null||H.t.add(n)),D||M()}};let O,W;const ae={get signal(){return O||(O=new AbortController),O.signal},get setSelf(){return(C?"production":void 0)!=="production"&&console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3."),(C?"production":void 0)!=="production"&&!P(n)&&console.warn("setSelf function cannot be used with read-only atom"),!W&&P(n)&&(W=(...p)=>{if((C?"production":void 0)!=="production"&&D&&console.warn("setSelf function cannot be called in sync"),!D)try{return w(e,t,n,p)}finally{u(e,t),i(e,t)}}),W}},Y=d.n,re=o.get(n)===Y;try{(C?"production":void 0)!=="production"&&U.delete(t);const p=m(e,t,n,ne,ae);if((C?"production":void 0)!=="production"&&U.has(t)&&console.warn("Detected store mutation during atom read. This is not supported."),S(e,t,n,p),G(p)){l(e,t,p,()=>O?.abort());const H=()=>{g(),M()};p.then(H,H)}else g();return(a=f.r)==null||a.call(f,n),d.m=b,d}catch(p){if(oe(p))throw p;return delete d.v,d.e=p,++d.n,d.m=b,d}finally{D=!1,d.n!==Y&&re&&(o.set(n,d.n),c.add(n),(r=f.c)==null||r.call(f,n))}},ye=(e,t,n)=>{const a=e[1],r=e[2],s=e[11],o=[n];for(;o.length;){const c=o.pop(),f=s(e,t,c);for(const m of te(c,f,a)){const v=s(e,t,m);r.get(m)!==v.n&&(r.set(m,v.n),o.push(m))}}},ve=(e,t,n,a)=>{const r=e[3],s=e[6],o=e[8],c=e[11],f=e[12],m=e[13],v=e[14],i=e[15],u=e[16],h=e[17],w=e[20],y=e[28];let S=!0;const l=d=>z(v(e,t,d)),_=(d,...b)=>{var D;const L=c(e,t,d);try{if(d===n){if(!B(d))throw new Error("atom not writable");(C?"production":void 0)!=="production"&&U.add(t);const g=L.n,M=b[0];w(e,t,d,M),h(e,t,d),g!==L.n&&(++y[0],r.add(d),i(e,t,d),(D=s.c)==null||D.call(s,d));return}else return u(e,t,d,b)}finally{S||(m(e,t),f(e,t))}};try{return o(e,t,n,l,_,...a)}finally{S=!1}},Se=(e,t,n)=>{var a;const r=e[1],s=e[3],o=e[6],c=e[11],f=e[15],m=e[18],v=e[19],i=c(e,t,n),u=r.get(n);if(u&&i.d.size>0){for(const[h,w]of i.d)if(!u.d.has(h)){const y=c(e,t,h);m(e,t,h).t.add(n),u.d.add(h),w!==y.n&&(s.add(h),f(e,t,h),(a=o.c)==null||a.call(o,h))}for(const h of u.d)if(!i.d.has(h)){u.d.delete(h);const w=v(e,t,h);w?.t.delete(n)}}},le=(e,t,n)=>{var a;const r=e[1],s=e[4],o=e[6],c=e[10],f=e[11],m=e[12],v=e[13],i=e[14],u=e[16],h=e[18],w=f(e,t,n);let y=r.get(n);if(!y){i(e,t,n);for(const S of w.d.keys())h(e,t,S).t.add(n);if(y={l:new Set,d:new Set(w.d.keys()),t:new Set},r.set(n,y),P(n)&&se(n)){const S=()=>{let l=!0;const _=(...d)=>{try{return u(e,t,n,d)}finally{l||(v(e,t),m(e,t))}};try{const d=c(e,t,n,_);d&&(y.u=()=>{l=!0;try{d()}finally{l=!1}})}finally{l=!1}};s.add(S)}(a=o.m)==null||a.call(o,n)}return y},Te=(e,t,n)=>{var a,r;const s=e[1],o=e[5],c=e[6],f=e[11],m=e[19],v=f(e,t,n);let i=s.get(n);if(!i||i.l.size)return i;let u=!1;for(const h of i.t)if((a=s.get(h))!=null&&a.d.has(n)){u=!0;break}if(!u){i.u&&o.add(i.u),i=void 0,s.delete(n);for(const h of v.d.keys()){const w=m(e,t,h);w?.t.delete(n)}(r=c.u)==null||r.call(c,n);return}return i},Ie=(e,t,n,a)=>{const r=e[11],s=e[27],o=r(e,t,n),c="v"in o,f=o.v;if(G(a))for(const m of o.d.keys())ee(n,a,r(e,t,m));o.v=a,delete o.e,(!c||!Object.is(f,o.v))&&(++o.n,G(f)&&s(e,t,f))},_e=(e,t,n)=>{const a=e[14];return z(a(e,t,n))},be=(e,t,n,...a)=>{const r=e[3],s=e[12],o=e[13],c=e[16],f=r.size;try{return c(e,t,n,a)}finally{r.size!==f&&(o(e,t),s(e,t))}},Ce=(e,t,n,a)=>{const r=e[12],s=e[13],o=e[18],c=e[19],m=o(e,t,n).l;return m.add(a),s(e,t),r(e,t),()=>{m.delete(a),c(e,t,n),s(e,t),r(e,t)}},xe=(e,t,n,a)=>{const r=e[25];let s=r.get(n);if(!s){s=new Set,r.set(n,s);const o=()=>r.delete(n);n.then(o,o)}s.add(a)},Ae=(e,t,n)=>{const r=e[25].get(n);r?.forEach(s=>s())},De=new WeakMap;function He(...e){const t={get(o){return a(n,t,o)},set(o,...c){return r(n,t,o,...c)},sub(o,c){return s(n,t,o,c)}},n=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},de,ie,ue,me,he,fe,we,pe,ye,ve,Se,le,Te,Ie,_e,be,Ce,void 0,new WeakMap,xe,Ae,[0]].map((o,c)=>e[c]||o);De.set(t,Object.freeze(n));const a=n[21],r=n[22],s=n[23];return t}const Le={};let Oe=0;function Ee(e,t){const n=`atom${++Oe}`,a={toString(){return(Le?"production":void 0)!=="production"&&this.debugLabel?n+":"+this.debugLabel:n}};return a.init=e,a.read=ge,a.write=Me,a}function ge(e){return e(this)}function Me(e,t,n){return t(this,typeof n=="function"?n(e(this)):n)}function $e(){return He()}const X=e=>{let t;const n=new Set,a=(m,v)=>{const i=typeof m=="function"?m(t):m;if(!Object.is(i,t)){const u=t;t=v??(typeof i!="object"||i===null)?i:Object.assign({},t,i),n.forEach(h=>h(t,u))}},r=()=>t,c={setState:a,getState:r,getInitialState:()=>f,subscribe:m=>(n.add(m),()=>n.delete(m))},f=t=e(a,r,c);return c},Ne=(e=>e?X(e):X),{expect:T,userEvent:x,waitFor:I}=__STORYBOOK_MODULE_TEST__,Ye={title:"theme/Use Cases",tags:["version:1.0"],render:()=>A.jsx(A.Fragment,{})},Z={current:"theme-current",next:"theme-next",grayscale:"theme-grayscale","high-contrast":"theme-high-contrast"};function Ke(e,t=50){let n=e;const a=[];return{async read(){return new Promise(r=>{setTimeout(()=>r(n??void 0),t)})},async write(r){return new Promise(s=>{setTimeout(()=>{n=r??void 0;for(const o of a)o(r??void 0);s()},t)})},subscribe(r){return a.push(r),()=>{const s=a.indexOf(r);s!==-1&&a.splice(s,1)}}}}const $={tags:["use-case"],parameters:V({description:{story:"Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch."}}),loaders:[async()=>({store:Ke(void 0,10)})],decorators:[R({content:A.jsx("p",{children:"Theme store that simulates a backend API with async read/write and subscribe. No real HTTP; same pattern would work with axios or fetch."})}),j({source:F`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            `})],render:(e,{loaded:{store:t}})=>A.jsx(J,{store:t,themes:Z,setThemeKeys:["current","grayscale"],"data-testid":"with-backend-demo"}),play:async({canvas:e})=>{const t="with-backend-demo",n=()=>e.getByTestId(`${t}-observe-theme`),a=()=>e.getByTestId(`${t}-observe-value`),r=()=>e.getByTestId(`${t}-read-theme`),s=()=>e.getByTestId(`${t}-read-value`),o=()=>e.getByTestId(`${t}-btn-read`),c=()=>e.getByTestId(`${t}-btn-write-current`),f=()=>e.getByTestId(`${t}-btn-write-grayscale`);await I(async()=>{await T(n()).toHaveTextContent(/current|\(undefined\)/)}),await x.click(f()),await I(async()=>{await T(n()).toHaveTextContent("grayscale"),await T(a()).toHaveTextContent("theme-grayscale")}),await x.click(o()),await I(async()=>{await T(r()).toHaveTextContent("grayscale"),await T(s()).toHaveTextContent("theme-grayscale")}),await x.click(c()),await I(async()=>{await T(n()).toHaveTextContent("current"),await T(a()).toHaveTextContent("theme-current")}),await x.click(o()),await I(async()=>{await T(r()).toHaveTextContent("current"),await T(s()).toHaveTextContent("theme-current")})}};function ze(e){const t=Ne(()=>({entry:e}));return{store:{read:()=>t.getState().entry,write:a=>t.setState({entry:a??void 0}),subscribe:a=>t.subscribe((r,s)=>{r.entry!==s?.entry&&a(r.entry??void 0)})},zustandStore:t}}const N={tags:["use-case"],parameters:V({description:{story:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."}}),decorators:[R({content:A.jsx("p",{children:"Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe."})}),j({source:F`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const{store:e}=k.useMemo(()=>ze(void 0),[]);return A.jsx(J,{store:e,themes:Z,setThemeKeys:["current","grayscale"],"data-testid":"with-zustand-demo"})},play:async({canvas:e})=>{const t="with-zustand-demo";await x.click(e.getByTestId(`${t}-btn-write-grayscale`)),await I(()=>T(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent("grayscale")),await T(e.getByTestId(`${t}-observe-value`)).toHaveTextContent("theme-grayscale"),await x.click(e.getByTestId(`${t}-btn-read`)),await I(()=>T(e.getByTestId(`${t}-read-theme`)).toHaveTextContent("grayscale"))}};function Ge(e){const t=Ee(e),n=$e();return n.set(t,e),{read:()=>n.get(t),write:a=>n.set(t,a??void 0),subscribe:a=>n.sub(t,()=>a(n.get(t)??void 0))}}const K={tags:["use-case"],parameters:V({description:{story:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."}}),decorators:[R({content:A.jsx("p",{children:"Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom."})}),j({source:F`
                const store = createJotaiThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{const e=k.useMemo(()=>Ge(void 0),[]);return A.jsx(J,{store:e,themes:Z,setThemeKeys:["current","grayscale"],"data-testid":"with-jotai-demo"})},play:async({canvas:e})=>{const t="with-jotai-demo";await x.click(e.getByTestId(`${t}-btn-write-grayscale`)),await I(()=>T(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent("grayscale")),await T(e.getByTestId(`${t}-observe-value`)).toHaveTextContent("theme-grayscale"),await x.click(e.getByTestId(`${t}-btn-read`)),await I(()=>T(e.getByTestId(`${t}-read-theme`)).toHaveTextContent("grayscale"))}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const qe=["WithBackendStore","WithZustand","WithJotai"];export{$ as WithBackendStore,K as WithJotai,N as WithZustand,qe as __namedExportsOrder,Ye as default};
