import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as n,c as r,i,l as a,s as o}from"./iframe-DFQ_z_Nq.js";import{n as s,t as c}from"./dedent-DQaCLeUO.js";import{t as l}from"./append-id-zpm9RrJk.js";import{t as u}from"./src-BVeczmcL.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{u(),o(),s(),d=t(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`utils/appendId`,tags:[`func`,`version:1.0`],parameters:n({description:{component:`Appends a suffix to an ID if the ID is defined. Useful for propagating ids (e.g. data-testid, key, or aria attributes) from parent to sub-components so selectors and keys stay consistent and predictable.`}}),render:()=>(0,d.jsx)(d.Fragment,{})},m={tags:[`use-case`],parameters:n({description:{story:`Append a suffix to a defined ID. Returns the combined id with a hyphen.`}}),decorators:[a(),r({source:c`
                appendId('card', 'title')   // 'card-title'
                appendId('form', 'submit')  // 'form-submit'
            `})],render(){return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsx)(`pre`,{className:`text-sm`,children:[{id:`card`,suffix:`title`},{id:`form`,suffix:`submit`},{id:`list`,suffix:`item-0`}].map(({id:e,suffix:t})=>`appendId('${e}', '${t}') → ${JSON.stringify(l(e,t))}`).join(`
`)})})},play:async()=>{await f(l(`card`,`title`)).toBe(`card-title`),await f(l(`form`,`submit`)).toBe(`form-submit`)}},h={name:`data-testid and key propagation`,tags:[`use-case`],parameters:n({description:{story:`Pass a root id (e.g. from props) down and use appendId for data-testid, key, or other ids so sub-components get stable, predictable identifiers without manual concatenation.`}}),decorators:[a(),r({source:c`
                // Parent receives id (or data-testid) and passes it down
                function Card({ id, title, items }: Props) {
                  return (
                    <div data-testid={id}>
                      <h2 data-testid={appendId(id, 'title')}>{title}</h2>
                      <ul>
                        {items.map((item, i) => (
                          <li key={appendId(id, \`item-\${i}\`)} data-testid={appendId(id, \`item-\${i}\`)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                // <Card id="product-card" /> → data-testid="product-card", "product-card-title", "product-card-item-0", ...
            `})],render(){let e=`product-card`;return(0,d.jsxs)(i,{appearance:`output`,children:[(0,d.jsxs)(`p`,{className:`mb-2 text-sm text-gray-600 dark:text-gray-400`,children:[`With `,(0,d.jsxs)(`code`,{children:[`id="`,e,`"`]}),`, sub-ids become:`]}),(0,d.jsx)(`pre`,{className:`text-sm`,children:[`title`,`item-0`,`item-1`,`item-2`].map(t=>`appendId('${e}', '${t}') → ${l(e,t)}`).join(`
`)})]})},play:async()=>{let e=`product-card`;await f(l(e,`title`)).toBe(`product-card-title`),await f(l(e,`item-0`)).toBe(`product-card-item-0`)}},g={name:`when id is undefined`,tags:[`unit`],parameters:n({description:{story:`When the id is undefined, appendId returns undefined. Use this when the parent does not set an id (e.g. optional data-testid) so sub-components do not render stray ids.`}}),decorators:[a(),r({source:c`
                appendId(undefined, 'title')  // undefined
                appendId(undefined, 'item')   // undefined
            `})],render(){return(0,d.jsx)(i,{appearance:`output`,children:(0,d.jsxs)(`pre`,{className:`text-sm`,children:[`appendId(undefined, 'title') → ${JSON.stringify(l(void 0,`title`))}`,`
`,`appendId(undefined, 'item') → ${JSON.stringify(l(void 0,`item`))}`]})})},play:async()=>{await f(l(void 0,`title`)).toBeUndefined(),await f(l(void 0,`item`)).toBeUndefined()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Append a suffix to a defined ID. Returns the combined id with a hyphen.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                appendId('card', 'title')   // 'card-title'
                appendId('form', 'submit')  // 'form-submit'
            \`
  })],
  render() {
    const examples = [{
      id: 'card',
      suffix: 'title'
    }, {
      id: 'form',
      suffix: 'submit'
    }, {
      id: 'list',
      suffix: 'item-0'
    }];
    return <StoryCard appearance="output">
                <pre className="text-sm">
                    {examples.map(({
          id,
          suffix
        }) => \`appendId('\${id}', '\${suffix}') → \${JSON.stringify(appendId(id, suffix))}\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(appendId('card', 'title')).toBe('card-title');
    await expect(appendId('form', 'submit')).toBe('form-submit');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'data-testid and key propagation',
  tags: ['use-case'],
  parameters: defineDocsParam({
    description: {
      story: 'Pass a root id (e.g. from props) down and use appendId for data-testid, key, or other ids so sub-components get stable, predictable identifiers without manual concatenation.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                // Parent receives id (or data-testid) and passes it down
                function Card({ id, title, items }: Props) {
                  return (
                    <div data-testid={id}>
                      <h2 data-testid={appendId(id, 'title')}>{title}</h2>
                      <ul>
                        {items.map((item, i) => (
                          <li key={appendId(id, \\\`item-\\\${i}\\\`)} data-testid={appendId(id, \\\`item-\\\${i}\\\`)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                // <Card id="product-card" /> → data-testid="product-card", "product-card-title", "product-card-item-0", ...
            \`
  })],
  render() {
    const id = 'product-card';
    const suffixes = ['title', 'item-0', 'item-1', 'item-2'];
    return <StoryCard appearance="output">
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    With <code>id="{id}"</code>, sub-ids become:
                </p>
                <pre className="text-sm">
                    {suffixes.map(suffix => \`appendId('\${id}', '\${suffix}') → \${appendId(id, suffix)}\`).join('\\n')}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    const id = 'product-card';
    await expect(appendId(id, 'title')).toBe('product-card-title');
    await expect(appendId(id, 'item-0')).toBe('product-card-item-0');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'when id is undefined',
  tags: ['unit'],
  parameters: defineDocsParam({
    description: {
      story: 'When the id is undefined, appendId returns undefined. Use this when the parent does not set an id (e.g. optional data-testid) so sub-components do not render stray ids.'
    }
  }),
  decorators: [withStoryCard(), showSource({
    source: dedent\`
                appendId(undefined, 'title')  // undefined
                appendId(undefined, 'item')   // undefined
            \`
  })],
  render() {
    return <StoryCard appearance="output">
                <pre className="text-sm">
                    {\`appendId(undefined, 'title') → \${JSON.stringify(appendId(undefined, 'title'))}\`}
                    {'\\n'}
                    {\`appendId(undefined, 'item') → \${JSON.stringify(appendId(undefined, 'item'))}\`}
                </pre>
            </StoryCard>;
  },
  play: async () => {
    await expect(appendId(undefined, 'title')).toBeUndefined();
    await expect(appendId(undefined, 'item')).toBeUndefined();
  }
}`,...g.parameters?.docs?.source}}},_=[`BasicUsage`,`DataTestIdAndKeyPropagation`,`WhenIdUndefined`]})))()}v();export{m as BasicUsage,h as DataTestIdAndKeyPropagation,g as WhenIdUndefined,_ as __namedExportsOrder,p as default};