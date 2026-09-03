import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-Dhw67M0q.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l,t as u}from"./theme-store-demo-BMuLlMoM.js";function d(e){return`init`in e}function f(e){return typeof e.write==`function`}function p(e){return!!e.onMount}function m(e){return`v`in e||`e`in e}function h(e){if(`e`in e)throw e.e;return e.v}function g(e){return typeof e?.then==`function`}function _(e){if(!(e instanceof Error))return!1;let t=e.name,n=e.message.toLowerCase();return(t===`RangeError`||t===`InternalError`)&&(n.includes(`call stack`)||n.includes(`too much recursion`)||n.includes(`stack overflow`))}function v(e,t,n){if(!n.p.has(e)){n.p.add(e);let r=()=>n.p.delete(e);t.then(r,r)}}function y(e,t,n){let r=n.get(e)?.t,i=t.p;if(!r?.size)return i;if(!i.size)return r;let a=new Set(r);for(let e of i)a.add(e);return a}function b(e){return!!e.INTERNAL_onInit}function x(...e){let t={get(e){return r(n,t,e)},set(e,...r){return i(n,t,e,...r)},sub(e,r){return a(n,t,e,r)}},n=[new WeakMap,new WeakMap,new WeakMap,new Set,new Set,new Set,{},S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,void 0,new WeakMap,z,ee,[0]].map((t,n)=>e[n]||t);te.set(t,Object.freeze(n));let r=n[21],i=n[22],a=n[23];return t}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,ee,te;function ne(){return(ne=e((()=>{S=(e,t,n,...r)=>n.read(...r),C=(e,t,n,...r)=>n.write(...r),w=(e,t,n)=>n.INTERNAL_onInit(t),T=(e,t,n,r)=>n.onMount?.call(n,r),E=(e,t,n)=>{var r;let i=e[0],a=i.get(n);if(!a){let o=e[6],s=e[9];a={d:new Map,p:new Set,n:0},i.set(n,a),(r=o.i)==null||r.call(o,n),b(n)&&s(e,t,n)}return a},D=(e,t)=>{let n=e[1],r=e[3],i=e[4],a=e[5],o=e[6],s=e[13];if(!o.f&&!r.size&&!i.size&&!a.size)return;let c=[],l=e=>{try{e()}catch(e){c.push(e)}};do{o.f&&l(o.f);let c=new Set;for(let e of r){let t=n.get(e)?.l;if(t)for(let e of t)c.add(e)}r.clear();for(let e of a)c.add(e);a.clear();for(let e of i)c.add(e);i.clear();for(let e of c)l(e);r.size&&s(e,t)}while(r.size||a.size||i.size);if(c.length)throw AggregateError(c)},O=(e,t)=>{let n=e[1],r=e[2],i=e[3],a=e[11],o=e[14],s=e[17];if(!i.size)return;let c=[],l=[],u=new WeakSet,d=new WeakSet,f=[],p=[];for(let n of i)f.push(n),p.push(a(e,t,n));for(;f.length;){let i=f.length-1,o=f[i],s=p[i];if(d.has(o)){f.pop(),p.pop();continue}if(u.has(o)){r.get(o)===s.n&&(c.push(o),l.push(s)),d.add(o),f.pop(),p.pop();continue}u.add(o);for(let r of y(o,s,n))u.has(r)||(f.push(r),p.push(a(e,t,r)))}for(let n=c.length-1;n>=0;--n){let a=c[n],u=l[n],d=!1;for(let e of u.d.keys())if(e!==a&&i.has(e)){d=!0;break}d&&(r.set(a,u.n),o(e,t,a),s(e,t,a)),r.delete(a)}},k=(e,t,n)=>{var r,i;let a=e[1],o=e[2],s=e[3],c=e[6],l=e[7],u=e[11],p=e[12],y=e[13],b=e[14],x=e[16],S=e[17],C=e[20],w=e[26],T=e[28],E=u(e,t,n),D=T[0];if(m(E)){if(a.has(n)&&o.get(n)!==E.n||E.m===D)return E.m=D,E;let r=!1;for(let[n,i]of E.d)if(b(e,t,n).n!==i){r=!0;break}if(!r)return E.m=D,E}let O=!0,k=new Set(E.d.keys()),A=()=>{for(let e of k)E.d.delete(e)},j=()=>{if(a.has(n)){let r=!s.size;S(e,t,n),r&&(y(e,t),p(e,t))}},M=r=>{var i;if(r===n){let n=u(e,t,r);if(!m(n)){if(d(r))C(e,t,r,r.init);else throw Error(`no atom init`)}return h(n)}let o=b(e,t,r);try{return h(o)}finally{k.delete(r),E.d.set(r,o.n),g(E.v)&&v(n,E.v,o),a.has(n)&&((i=a.get(r))==null||i.t.add(n)),O||j()}},N,P,F={get signal(){return N||=new AbortController,N.signal},get setSelf(){return!P&&f(n)&&(P=(...r)=>{if(!O)try{return x(e,t,n,r)}finally{y(e,t),p(e,t)}}),P}},I=E.n,L=o.get(n)===I;try{let i=l(e,t,n,M,F);if(C(e,t,n,i),g(i)){w(e,t,i,()=>N?.abort());let n=()=>{A(),j()};i.then(n,n)}else A();return(r=c.r)==null||r.call(c,n),E.m=D,E}catch(e){if(_(e))throw e;return delete E.v,E.e=e,++E.n,E.m=D,E}finally{O=!1,E.n!==I&&L&&(o.set(n,E.n),s.add(n),(i=c.c)==null||i.call(c,n))}},A=(e,t,n)=>{let r=e[1],i=e[2],a=e[11],o=[n];for(;o.length;){let n=o.pop(),s=a(e,t,n);for(let c of y(n,s,r)){let n=a(e,t,c);i.get(c)!==n.n&&(i.set(c,n.n),o.push(c))}}},j=(e,t,n,r)=>{let i=e[3],a=e[6],o=e[8],s=e[11],c=e[12],l=e[13],u=e[14],f=e[15],p=e[16],m=e[17],g=e[20],_=e[28],v=!0,y=n=>h(u(e,t,n)),b=(r,...o)=>{var u;let h=s(e,t,r);try{if(r===n){if(!d(r))throw Error(`atom not writable`);let n=h.n,s=o[0];g(e,t,r,s),m(e,t,r),n!==h.n&&(++_[0],i.add(r),f(e,t,r),(u=a.c)==null||u.call(a,r));return}return p(e,t,r,o)}finally{v||(l(e,t),c(e,t))}};try{return o(e,t,n,y,b,...r)}finally{v=!1}},M=(e,t,n)=>{var r;let i=e[1],a=e[3],o=e[6],s=e[11],c=e[15],l=e[18],u=e[19],d=s(e,t,n),f=i.get(n);if(f&&d.d.size>0){for(let[i,u]of d.d)if(!f.d.has(i)){let d=s(e,t,i);l(e,t,i).t.add(n),f.d.add(i),u!==d.n&&(a.add(i),c(e,t,i),(r=o.c)==null||r.call(o,i))}for(let r of f.d)d.d.has(r)||(f.d.delete(r),u(e,t,r)?.t.delete(n))}},N=(e,t,n)=>{var r;let i=e[1],a=e[4],o=e[6],s=e[10],c=e[11],l=e[12],u=e[13],d=e[14],m=e[16],h=e[18],g=c(e,t,n),_=i.get(n);if(!_){d(e,t,n);for(let r of g.d.keys())h(e,t,r).t.add(n);_={l:new Set,d:new Set(g.d.keys()),t:new Set},i.set(n,_),f(n)&&p(n)&&a.add(()=>{let r=!0,i=(...i)=>{try{return m(e,t,n,i)}finally{r||(u(e,t),l(e,t))}};try{let a=s(e,t,n,i);a&&(_.u=()=>{r=!0;try{a()}finally{r=!1}})}finally{r=!1}}),(r=o.m)==null||r.call(o,n)}return _},P=(e,t,n)=>{var r;let i=e[1],a=e[5],o=e[6],s=e[11],c=e[19],l=s(e,t,n),u=i.get(n);if(!u||u.l.size)return u;let d=!1;for(let e of u.t)if(i.get(e)?.d.has(n)){d=!0;break}if(!d){u.u&&a.add(u.u),u=void 0,i.delete(n);for(let r of l.d.keys())c(e,t,r)?.t.delete(n);(r=o.u)==null||r.call(o,n);return}return u},F=(e,t,n,r)=>{let i=e[11],a=e[27],o=i(e,t,n),s=`v`in o,c=o.v;if(g(r))for(let a of o.d.keys())v(n,r,i(e,t,a));o.v=r,delete o.e,(!s||!Object.is(c,o.v))&&(++o.n,g(c)&&a(e,t,c))},I=(e,t,n)=>{let r=e[14];return h(r(e,t,n))},L=(e,t,n,...r)=>{let i=e[3],a=e[12],o=e[13],s=e[16],c=i.size;try{return s(e,t,n,r)}finally{i.size!==c&&(o(e,t),a(e,t))}},R=(e,t,n,r)=>{let i=e[12],a=e[13],o=e[18],s=e[19],c=o(e,t,n).l;return c.add(r),a(e,t),i(e,t),()=>{c.delete(r),s(e,t,n),a(e,t),i(e,t)}},z=(e,t,n,r)=>{let i=e[25],a=i.get(n);if(!a){a=new Set,i.set(n,a);let e=()=>i.delete(n);n.then(e,e)}a.add(r)},ee=(e,t,n)=>{e[25].get(n)?.forEach(e=>e())},te=new WeakMap})))()}function re(e,t){let n=`atom${++se}`,r={toString(){return n}};return typeof e==`function`?r.read=e:(r.init=e,r.read=ie,r.write=ae),t&&(r.write=t),r}function ie(e){return e(this)}function ae(e,t,n){return t(this,typeof n==`function`?n(e(this)):n)}function oe(){return B?B():x()}var se,B;function V(){return(V=e((()=>{ne(),se=0})))()}var H,U;function W(){return(W=e((()=>{H=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},U=(e=>e?H(e):H)})))()}function ce(e,t=50){let n=e,r=[];return{async read(){return new Promise(e=>{setTimeout(()=>e(n??void 0),t)})},async write(e){return new Promise(i=>{setTimeout(()=>{n=e??void 0;for(let t of r)t(e??void 0);i()},t)})},subscribe(e){return r.push(e),()=>{let t=r.indexOf(e);t!==-1&&r.splice(t,1)}}}}function le(e){let t=U(()=>({entry:e}));return{store:{read:()=>t.getState().entry,write:e=>t.setState({entry:e??void 0}),subscribe:e=>t.subscribe((t,n)=>{t.entry!==n?.entry&&e(t.entry??void 0)})},zustandStore:t}}function ue(e){let t=re(e),n=oe();return n.set(t,e),{read:()=>n.get(t),write:e=>n.set(t,e??void 0),subscribe:e=>n.sub(t,()=>e(n.get(t)??void 0))}}var G,K,q,J,Y,de,X,Z,Q,$,fe;function pe(){return(pe=e((()=>{o(),s(),V(),G=t(),W(),l(),K=n(),{expect:q,userEvent:J,waitFor:Y}=__STORYBOOK_MODULE_TEST__,de={title:`theme/Use Cases`,tags:[`version:1.0`],render:()=>(0,K.jsx)(K.Fragment,{})},X={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},Z={tags:[`use-case`],parameters:r({description:{story:`Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch.`}}),loaders:[async()=>({store:ce(void 0,10)})],decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store that simulates a backend API with async read/write and subscribe. No real HTTP; same pattern would work with axios or fetch.`})}),i({source:c`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            `})],render:(e,{loaded:{store:t}})=>(0,K.jsx)(u,{store:t,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-backend-demo`}),play:async({canvas:e})=>{let t=`with-backend-demo`,n=()=>e.getByTestId(`${t}-observe-theme`),r=()=>e.getByTestId(`${t}-observe-value`),i=()=>e.getByTestId(`${t}-read-theme`),a=()=>e.getByTestId(`${t}-read-value`),o=()=>e.getByTestId(`${t}-btn-read`);await Y(async()=>{await q(n()).toHaveTextContent(/current|\(undefined\)/)}),await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(async()=>{await q(n()).toHaveTextContent(`grayscale`),await q(r()).toHaveTextContent(`theme-grayscale`)}),await J.click(o()),await Y(async()=>{await q(i()).toHaveTextContent(`grayscale`),await q(a()).toHaveTextContent(`theme-grayscale`)}),await J.click(e.getByTestId(`${t}-btn-write-current`)),await Y(async()=>{await q(n()).toHaveTextContent(`current`),await q(r()).toHaveTextContent(`theme-current`)}),await J.click(o()),await Y(async()=>{await q(i()).toHaveTextContent(`current`),await q(a()).toHaveTextContent(`theme-current`)})}},Q={tags:[`use-case`],parameters:r({description:{story:`Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.`}}),decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.`})}),i({source:c`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{let{store:e}=(0,G.useMemo)(()=>le(void 0),[]);return(0,K.jsx)(u,{store:e,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-zustand-demo`})},play:async({canvas:e})=>{let t=`with-zustand-demo`;await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(()=>q(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent(`grayscale`)),await q(e.getByTestId(`${t}-observe-value`)).toHaveTextContent(`theme-grayscale`),await J.click(e.getByTestId(`${t}-btn-read`)),await Y(()=>q(e.getByTestId(`${t}-read-theme`)).toHaveTextContent(`grayscale`))}},$={tags:[`use-case`],parameters:r({description:{story:`Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.`}}),decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.`})}),i({source:c`
                const store = createJotaiThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{let e=(0,G.useMemo)(()=>ue(void 0),[]);return(0,K.jsx)(u,{store:e,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-jotai-demo`})},play:async({canvas:e})=>{let t=`with-jotai-demo`;await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(()=>q(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent(`grayscale`)),await q(e.getByTestId(`${t}-observe-value`)).toHaveTextContent(`theme-grayscale`),await J.click(e.getByTestId(`${t}-btn-read`)),await Y(()=>q(e.getByTestId(`${t}-read-theme`)).toHaveTextContent(`grayscale`))}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},fe=[`WithBackendStore`,`WithZustand`,`WithJotai`]})))()}pe();export{Z as WithBackendStore,$ as WithJotai,Q as WithZustand,fe as __namedExportsOrder,de as default};