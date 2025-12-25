import{d as n,j as e}from"./iframe-D5rBLWIn.js";import{g as o}from"./data-attribute-DhOVGBXa.js";import"./preload-helper-PPVm8Dsz.js";import"./globals.ctx-DOXvZQDb.js";import"./attribute-jmTmRs65.js";const b={title:"utils/getDataAttribute",component:o,tags:["autodocs","new","version:1.0.0"],parameters:n({description:{component:"A utility function to get `data-*` attribute values from DOM element"}})},a={name:"Get Document Root Attribute",args:{attributeName:"data-theme"},parameters:n({description:{story:"Gets the value of data-theme attribute from document root"}}),render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getDataAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}},s={name:"Get Specific Element Attribute",args:{attributeName:"data-custom"},parameters:n({description:{story:"Gets an attribute value from a specific element"}}),render(t){const r=document.createElement("div");r.setAttribute(t.attributeName,"test-value");const u=o(t.attributeName,r);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getDataAttribute('",t.attributeName,"', element)"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(u,null,2)})]})}},i={name:"Get Non-existent Attribute",args:{attributeName:"data-non-existent"},parameters:n({description:{story:"Returns null when trying to get a non-existent attribute"}}),render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getDataAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Get Document Root Attribute',
  args: {
    attributeName: 'data-theme'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets the value of data-theme attribute from document root'
    }
  }),
  render(props: StoryArgs) {
    const value = getDataAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Get Specific Element Attribute',
  args: {
    attributeName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets an attribute value from a specific element'
    }
  }),
  render(props: StoryArgs) {
    const element = document.createElement('div');
    element.setAttribute(props.attributeName, 'test-value');
    const value = getDataAttribute(props.attributeName, element);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}', element)</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Get Non-existent Attribute',
  args: {
    attributeName: 'data-non-existent'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Returns null when trying to get a non-existent attribute'
    }
  }),
  render(props: StoryArgs) {
    const value = getDataAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getDataAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...i.parameters?.docs?.source}}};const g=["BasicUsage","SpecificElement","NonExistentAttribute"];export{a as BasicUsage,i as NonExistentAttribute,s as SpecificElement,g as __namedExportsOrder,b as default};
