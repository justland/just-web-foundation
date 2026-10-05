import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,l as a,s as o}from"./iframe-DZio5HsQ.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{n as l,t as u}from"./theme-store-demo-CZZDbJ2G.js";function d(e,t){let n=`atom${++m}`,r={toString(){return n}};return typeof e==`function`?r.read=e:(r.init=e,r.read=f,r.write=p),t&&(r.write=t),r}function f(e){return e(this)}function p(e,t,n){return t(this,typeof n==`function`?n(e(this)):n)}var m;function h(){return(h=e((()=>{m=0})))()}function ee(e){return`init`in e}function g(e){return typeof e.write==`function`}function _(e){return!!e.onMount}function v(e){return`v`in e||`e`in e}function y(e){if(`e`in e)throw e.e;return e.v}function b(e){return typeof e?.then==`function`}function te(e){if(!(e instanceof Error))return!1;let t=e.name,n=e.message.toLowerCase();return(t===`RangeError`||t===`InternalError`)&&(n.includes(`call stack`)||n.includes(`too much recursion`)||n.includes(`stack overflow`))}function ne(e,t,n){if(!n.p.has(e)){n.p.add(e);let r=()=>n.p.delete(e);t.then(r,r)}}function x(e,t,n){let r=n.get(e)?.t,i=t.p;if(!r?.size)return i;if(!i.size)return r;let a=new Set(r);for(let e of i)a.add(e);return a}function S(e){return!!e.INTERNAL_onInit}function C(e){let t={get(e){return r(n,t,e)},set(e,...r){return i(n,t,e,...r)},sub(e,r){return a(n,t,e,r)}},n=Object.freeze({a:new WeakMap,m:new WeakMap,i:new WeakMap,c:new Set,q:new Set,Q:new Set,h:{},R:w,W:T,I:E,M:D,e:O,f:k,C:A,r:j,d:M,w:N,D:re,t:ie,T:ae,v:oe,g:se,s:P,b:F,B:void 0,p:new WeakMap,H:I,A:L,E:[0],...e});R.set(t,n);let r=n.g,i=n.s,a=n.b;return t}var w,T,E,D,O,k,A,j,M,N,re,ie,ae,oe,se,P,F,I,L,R;function z(){return(z=e((()=>{w=(e,t,n,...r)=>n.read(...r),T=(e,t,n,...r)=>n.write(...r),E=(e,t,n)=>n.INTERNAL_onInit(t),D=(e,t,n,r)=>n.onMount?.(r),O=(e,t,n)=>{let r=e.a,i=r.get(n);if(!i){let a=e.h,o=e.I;i={d:new Map,p:new Set,n:0},r.set(n,i),a.i?.(n),S(n)&&o(e,t,n)}return i},k=(e,t)=>{let n=e.m,r=e.c,i=e.q,a=e.Q,o=e.h,s=e.C;if(!o.f&&!r.size&&!i.size&&!a.size)return;let c=[],l=e=>{try{e()}catch(e){c.push(e)}};do{o.f&&l(o.f);let c=new Set;for(let e of r){let t=n.get(e)?.l;if(t)for(let e of t)c.add(e)}r.clear();for(let e of a)c.add(e);a.clear();for(let e of i)c.add(e);i.clear();for(let e of c)l(e);r.size&&s(e,t)}while(r.size||a.size||i.size);if(c.length)throw typeof AggregateError==`function`?AggregateError(c):Object.assign(Error(),{errors:c})},A=(e,t)=>{let n=e.m,r=e.i,i=e.c,a=e.e,o=e.r,s=e.D;if(!i.size)return;let c=[],l=[],u=new WeakSet,d=new WeakSet,f=[],p=[];for(let n of i)f.push(n),p.push(a(e,t,n));for(;f.length;){let i=f.length-1,o=f[i],s=p[i];if(d.has(o)){f.pop(),p.pop();continue}if(u.has(o)){r.get(o)===s.n&&(c.push(o),l.push(s)),d.add(o),f.pop(),p.pop();continue}u.add(o);for(let r of x(o,s,n))u.has(r)||(f.push(r),p.push(a(e,t,r)))}for(let n=c.length-1;n>=0;--n){let a=c[n],u=l[n],d=!1;for(let e of u.d.keys())if(e!==a&&i.has(e)){d=!0;break}d&&(r.set(a,u.n),o(e,t,a),s(e,t,a)),r.delete(a)}},j=(e,t,n)=>{let r=e.m,i=e.i,a=e.c,o=e.h,s=e.R,c=e.e,l=e.f,u=e.C,d=e.r,f=e.D,p=e.v,m=e.H,h=e.E,g=c(e,t,n),_=h[0];if(v(g)){if(r.has(n)&&i.get(n)!==g.n||g.m===_)return g.m=_,g;let a=!1;for(let[n,r]of g.d)if(d(e,t,n).n!==r){a=!0;break}if(!a)return g.m=_,g}let x=!0,S=new Set(g.d.keys()),C=()=>{for(let e of S)g.d.delete(e)},w=()=>{if(r.has(n)){let r=!a.size;f(e,t,n),r&&(u(e,t),l(e,t))}},T=i=>{if(i===n){let n=c(e,t,i);if(!v(n)){if(ee(i))p(e,t,i,i.init);else throw Error(`no atom init`)}return y(n)}let a=d(e,t,i);try{return y(a)}finally{S.delete(i),g.d.set(i,a.n),b(g.v)&&ne(n,g.v,a),r.has(n)&&r.get(i)?.t.add(n),x||w()}},E,D={get signal(){return E||=new AbortController,E.signal}},O=g.n,k=i.get(n)===O;try{let r=s(e,t,n,T,D);if(p(e,t,n,r),b(r)){m(e,t,r,()=>E?.abort());let n=()=>{C(),w()};r.then(n,n)}else C();return o.r?.(n),g.m=_,g}catch(e){if(te(e))throw e;return delete g.v,g.e=e,++g.n,g.m=_,g}finally{x=!1,g.n!==O&&k&&(i.set(n,g.n),a.add(n),o.c?.(n))}},M=(e,t,n)=>{let r=e.m,i=e.i,a=e.e,o=[n];for(;o.length;){let n=o.pop(),s=a(e,t,n);for(let c of x(n,s,r)){let n=a(e,t,c);i.get(c)!==n.n&&(i.set(c,n.n),o.push(c))}}},N=(e,t,n,r)=>{let i=e.c,a=e.h,o=e.W,s=e.e,c=e.f,l=e.C,u=e.r,d=e.d,f=e.w,p=e.D,m=e.v,h=e.E,g=!0,_=n=>y(u(e,t,n)),v=(r,...o)=>{let u=s(e,t,r);try{if(r===n){if(!ee(r))throw Error(`atom not writable`);let n=u.n,s=o[0];m(e,t,r,s),p(e,t,r),n!==u.n&&(++h[0],i.add(r),d(e,t,r),a.c?.(r));return}return f(e,t,r,o)}finally{g||(l(e,t),c(e,t))}};try{return o(e,t,n,_,v,...r)}finally{g=!1}},re=(e,t,n)=>{let r=e.m,i=e.c,a=e.h,o=e.e,s=e.d,c=e.t,l=e.T,u=o(e,t,n),d=r.get(n);if(d&&u.d.size>0){for(let[r,l]of u.d)if(!d.d.has(r)){let u=o(e,t,r);c(e,t,r).t.add(n),d.d.add(r),l!==u.n&&(i.add(r),s(e,t,r),a.c?.(r))}for(let r of d.d)u.d.has(r)||(d.d.delete(r),l(e,t,r)?.t.delete(n))}},ie=(e,t,n)=>{let r=e.m,i=e.q,a=e.h,o=e.M,s=e.e,c=e.f,l=e.C,u=e.r,d=e.w,f=e.t,p=s(e,t,n),m=r.get(n);if(!m){u(e,t,n);for(let r of p.d.keys())f(e,t,r).t.add(n);m={l:new Set,d:new Set(p.d.keys()),t:new Set},r.set(n,m),g(n)&&_(n)&&i.add(()=>{let r=!0,i=(...i)=>{try{return d(e,t,n,i)}finally{r||(l(e,t),c(e,t))}};try{let a=o(e,t,n,i);a&&(m.u=()=>{r=!0;try{a()}finally{r=!1}})}finally{r=!1}}),a.m?.(n)}return m},ae=(e,t,n)=>{let r=e.m,i=e.Q,a=e.h,o=e.e,s=e.T,c=o(e,t,n),l=r.get(n);if(!l||l.l.size)return l;let u=!1;for(let e of l.t)if(r.get(e)?.d.has(n)){u=!0;break}if(!u){l.u&&i.add(l.u),l=void 0,r.delete(n);for(let r of c.d.keys())s(e,t,r)?.t.delete(n);a.u?.(n);return}return l},oe=(e,t,n,r)=>{let i=e.e,a=e.A,o=i(e,t,n),s=`v`in o,c=o.v;if(b(r))for(let a of o.d.keys())ne(n,r,i(e,t,a));o.v=r,delete o.e,(!s||!Object.is(c,o.v))&&(++o.n,b(c)&&a(e,t,c))},se=(e,t,n)=>{let r=e.r;return y(r(e,t,n))},P=(e,t,n,...r)=>{let i=e.c,a=e.f,o=e.C,s=e.w,c=i.size;try{return s(e,t,n,r)}finally{i.size!==c&&(o(e,t),a(e,t))}},F=(e,t,n,r)=>{let i=e.f,a=e.C,o=e.t,s=e.T,c=o(e,t,n).l;return c.add(r),a(e,t),i(e,t),()=>{c.delete(r),s(e,t,n),a(e,t),i(e,t)}},I=(e,t,n,r)=>{let i=e.p,a=i.get(n);if(!a){a=new Set,i.set(n,a);let e=()=>i.delete(n);n.then(e,e)}a.add(r)},L=(e,t,n)=>{e.p.get(n)?.forEach(e=>e())},R=new WeakMap})))()}function ce(){return B?B():C()}var B;function V(){return(V=e((()=>{z()})))()}var H,U;function W(){return(W=e((()=>{H=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},U=(e=>e?H(e):H)})))()}function le(e,t=50){let n=e,r=[];return{async read(){return new Promise(e=>{setTimeout(()=>e(n??void 0),t)})},async write(e){return new Promise(i=>{setTimeout(()=>{n=e??void 0;for(let t of r)t(e??void 0);i()},t)})},subscribe(e){return r.push(e),()=>{let t=r.indexOf(e);t!==-1&&r.splice(t,1)}}}}function ue(e){let t=U(()=>({entry:e}));return{store:{read:()=>t.getState().entry,write:e=>t.setState({entry:e??void 0}),subscribe:e=>t.subscribe((t,n)=>{t.entry!==n?.entry&&e(t.entry??void 0)})},zustandStore:t}}function de(e){let t=d(e),n=ce();return n.set(t,e),{read:()=>n.get(t),write:e=>n.set(t,e??void 0),subscribe:e=>n.sub(t,()=>e(n.get(t)??void 0))}}var G,K,q,J,Y,fe,X,Z,Q,$,pe;function me(){return(me=e((()=>{o(),s(),h(),V(),G=t(),W(),l(),K=n(),{expect:q,userEvent:J,waitFor:Y}=__STORYBOOK_MODULE_TEST__,fe={title:`theme/Use Cases`,tags:[`version:1.0`],render:()=>(0,K.jsx)(K.Fragment,{})},X={current:`theme-current`,next:`theme-next`,grayscale:`theme-grayscale`,"high-contrast":`theme-high-contrast`},Z={tags:[`use-case`],parameters:r({description:{story:`Theme store that simulates a backend API with async read/write and subscribe. Same pattern would work with axios or fetch.`}}),loaders:[async()=>({store:le(void 0,10)})],decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store that simulates a backend API with async read/write and subscribe. No real HTTP; same pattern would work with axios or fetch.`})}),i({source:c`
                const store = createBackendStore(undefined, 50)
                const theme = await store.read()
                await store.write(themeEntry(themes, 'grayscale'))
            `})],render:(e,{loaded:{store:t}})=>(0,K.jsx)(u,{store:t,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-backend-demo`}),play:async({canvas:e})=>{let t=`with-backend-demo`,n=()=>e.getByTestId(`${t}-observe-theme`),r=()=>e.getByTestId(`${t}-observe-value`),i=()=>e.getByTestId(`${t}-read-theme`),a=()=>e.getByTestId(`${t}-read-value`),o=()=>e.getByTestId(`${t}-btn-read`);await Y(async()=>{await q(n()).toHaveTextContent(/current|\(undefined\)/)}),await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(async()=>{await q(n()).toHaveTextContent(`grayscale`),await q(r()).toHaveTextContent(`theme-grayscale`)}),await J.click(o()),await Y(async()=>{await q(i()).toHaveTextContent(`grayscale`),await q(a()).toHaveTextContent(`theme-grayscale`)}),await J.click(e.getByTestId(`${t}-btn-write-current`)),await Y(async()=>{await q(n()).toHaveTextContent(`current`),await q(r()).toHaveTextContent(`theme-current`)}),await J.click(o()),await Y(async()=>{await q(i()).toHaveTextContent(`current`),await q(a()).toHaveTextContent(`theme-current`)})}},Q={tags:[`use-case`],parameters:r({description:{story:`Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.`}}),decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store backed by Zustand vanilla store. read/write/subscribe map to getState/setState/subscribe.`})}),i({source:c`
                const { store } = createZustandThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{let{store:e}=(0,G.useMemo)(()=>ue(void 0),[]);return(0,K.jsx)(u,{store:e,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-zustand-demo`})},play:async({canvas:e})=>{let t=`with-zustand-demo`;await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(()=>q(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent(`grayscale`)),await q(e.getByTestId(`${t}-observe-value`)).toHaveTextContent(`theme-grayscale`),await J.click(e.getByTestId(`${t}-btn-read`)),await Y(()=>q(e.getByTestId(`${t}-read-theme`)).toHaveTextContent(`grayscale`))}},$={tags:[`use-case`],parameters:r({description:{story:`Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.`}}),decorators:[a({content:(0,K.jsx)(`p`,{children:`Theme store backed by Jotai. read/write/subscribe map to store.get/set/sub on a theme atom.`})}),i({source:c`
                const store = createJotaiThemeStore(undefined)
                const theme = store.read()
                store.write(themeEntry(themes, 'grayscale'))
            `})],render:()=>{let e=(0,G.useMemo)(()=>de(void 0),[]);return(0,K.jsx)(u,{store:e,themes:X,setThemeKeys:[`current`,`grayscale`],"data-testid":`with-jotai-demo`})},play:async({canvas:e})=>{let t=`with-jotai-demo`;await J.click(e.getByTestId(`${t}-btn-write-grayscale`)),await Y(()=>q(e.getByTestId(`${t}-observe-theme`)).toHaveTextContent(`grayscale`)),await q(e.getByTestId(`${t}-observe-value`)).toHaveTextContent(`theme-grayscale`),await J.click(e.getByTestId(`${t}-btn-read`)),await Y(()=>q(e.getByTestId(`${t}-read-theme`)).toHaveTextContent(`grayscale`))}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},pe=[`WithBackendStore`,`WithZustand`,`WithJotai`]})))()}me();export{Z as WithBackendStore,$ as WithJotai,Q as WithZustand,pe as __namedExportsOrder,fe as default};