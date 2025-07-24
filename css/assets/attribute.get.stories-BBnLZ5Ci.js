import{j as e}from"./iframe-CKVYuos1.js";import{d as i}from"./define_docs_param-lmgaBKCF.js";import{g as o}from"./attribute-BU07dUZA.js";import"./globals.ctx-DOXvZQDb.js";const h={title:"utils/getAttribute",component:o,tags:["autodocs","new","version:1.0.0"],parameters:i({description:{component:"A utility function to get attribute values from DOM element"}})},a={name:"Get Document Root Attribute",args:{attributeName:"data-custom"},parameters:i({description:{story:"Gets the value of an attribute from document root"}}),loaders:[({args:{attributeName:t}})=>{document.documentElement.setAttribute(t,"test-value")}],render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}},s={name:"Get Specific Element Attribute",args:{attributeName:"data-custom"},parameters:i({description:{story:"Gets an attribute value from a specific element"}}),render(t){const r=document.createElement("div");r.setAttribute(t.attributeName,"test-value");const v=o(t.attributeName,r);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"', element)"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(v,null,2)})]})}},n={name:"Get Non-existent Attribute",args:{attributeName:"data-non-existent"},parameters:i({description:{story:"Returns null when trying to get a non-existent attribute"}}),render(t){const r=o(t.attributeName);return e.jsxs("div",{children:[e.jsx("div",{className:"mb-4",children:e.jsxs("code",{children:["getAttribute('",t.attributeName,"')"]})}),e.jsx("pre",{className:"bg-neutral-100 dark:bg-neutral-900 p-2 rounded",children:JSON.stringify(r,null,2)})]})}};var u,m,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Get Document Root Attribute',
  args: {
    attributeName: 'data-custom'
  },
  parameters: defineDocsParam({
    description: {
      story: 'Gets the value of an attribute from document root'
    }
  }),
  loaders: [({
    args: {
      attributeName
    }
  }) => {
    document.documentElement.setAttribute(attributeName, 'test-value');
  }],
  render(props: StoryArgs) {
    const value = getAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    const value = getAttribute(props.attributeName, element);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}', element)</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var p,g,N;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    const value = getAttribute(props.attributeName);
    return <div>
                <div className="mb-4">
                    <code>getAttribute('{props.attributeName}')</code>
                </div>
                <pre className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded">{JSON.stringify(value, null, 2)}</pre>
            </div>;
  }
}`,...(N=(g=n.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const S=["BasicUsage","SpecificElement","NonExistentAttribute"];export{a as BasicUsage,n as NonExistentAttribute,s as SpecificElement,S as __namedExportsOrder,h as default};
