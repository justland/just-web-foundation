import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{a as n}from"./chunk-W22LQPXL-BSpKiHdn.js";import{a as r,c as i,i as a,l as o,s}from"./iframe-lHA9G3CN.js";import{t as c}from"./get-prefers-color-scheme-BYJ-yK6c.js";import{t as l}from"./src-BN_nq8F-.js";import{n as u,t as d}from"./dedent-DQaCLeUO.js";import{n as f,t as p}from"./button-AW1k6hjA.js";import{n as m,t as h}from"./scheme-sample-DOE5jIVP.js";import{h as g,t as _}from"./react-Dq6RBRG0.js";var v;function y(){return(y=e((()=>{v=`import { useEffect, useState } from 'react'
import type { ColorScheme } from '../../color-scheme/color-scheme.types.ts'
import { getColorScheme } from '../../color-scheme/get-color-scheme.ts'
import { observeColorScheme } from '../../color-scheme/observe-color-scheme.ts'

/**
 * React hook that returns the color scheme an element renders in, and re-renders when it changes.
 *
 * Follows the CSS \`color-scheme\` property, so it reflects a theme the user picked.
 * \`usePrefersColorScheme()\` reports the OS preference only.
 * See \`getColorScheme()\` for how the scheme is resolved and \`observeColorScheme()\` for which changes it sees.
 *
 * For SSR, returns \`defaultColorScheme\`. On the client, reads the real value immediately;
 * \`useEffect\` syncs and subscribes to changes.
 *
 * @param options.element - Element to read (accepts null e.g. from refs). Defaults to \`document.documentElement\`.
 * @param options.defaultColorScheme - Returned when there is no DOM (default: \`'light'\`)
 * @returns \`'light'\` or \`'dark'\`
 *
 * @example
 * \`\`\`tsx
 * const scheme = useColorScheme()
 * return <CodeBlock theme={scheme === 'dark' ? 'github-dark' : 'github-light'} />
 * \`\`\`
 */
export function useColorScheme(
	options?:
		| { element?: Element | null | undefined; defaultColorScheme?: ColorScheme | undefined }
		| undefined
): ColorScheme {
	const element = options?.element
	const defaultColorScheme = options?.defaultColorScheme
	const [scheme, setScheme] = useState<ColorScheme>(() =>
		getColorScheme({ element, defaultColorScheme })
	)

	useEffect(() => {
		setScheme(getColorScheme({ element, defaultColorScheme }))
		return observeColorScheme(setScheme, { element })
	}, [element, defaultColorScheme])

	return scheme
}
`})))()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{l(),_(),s(),u(),b=t(),f(),m(),y(),x=n(),{expect:S,userEvent:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T={title:`react/hooks/useColorScheme`,tags:[`func`,`version:4.1`],parameters:r({description:{component:"React hook that returns the color scheme an element renders in, and re-renders when it changes. It follows a `color-scheme` override such as a theme the user picked; `usePrefersColorScheme()` reports the OS preference only."}}),render:()=>(0,x.jsx)(x.Fragment,{})},E={tags:[`use-case`],parameters:r({source:{code:d`
                const [element, setElement] = useState<HTMLElement | null>(null)
                const scheme = useColorScheme({ element })
                return <div ref={setElement} style={{ colorScheme }}>Renders in: {scheme}</div>
            `}}),decorators:[o({content:(0,x.jsxs)(`p`,{children:[`The buttons set `,(0,x.jsx)(`code`,{children:`color-scheme`}),` on the panel. Pass the element through state (a callback ref), so the hook re-subscribes once the element mounts.`]})}),i()],render:()=>{let[e,t]=(0,b.useState)(null),[n,r]=(0,b.useState)(`light dark`),i=g({element:e});return(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsxs)(`div`,{className:`flex gap-2`,children:[(0,x.jsx)(p,{onPress:()=>r(`light`),children:`Light`}),(0,x.jsx)(p,{onPress:()=>r(`dark`),children:`Dark`}),(0,x.jsx)(p,{onPress:()=>r(`light dark`),children:`System`})]}),(0,x.jsx)(h,{ref:t,style:{colorScheme:n}}),(0,x.jsxs)(a,{appearance:`output`,children:[(0,x.jsx)(`p`,{children:(0,x.jsxs)(`code`,{children:[`color-scheme: `,n]})}),(0,x.jsxs)(`p`,{children:[`useColorScheme(): `,(0,x.jsx)(`strong`,{"data-testid":`scheme`,children:i})]})]})]})},play:async({canvas:e})=>{await w(()=>S(e.getByTestId(`scheme`)).toHaveTextContent(c())),await C.click(e.getByRole(`button`,{name:`Dark`})),await w(()=>S(e.getByTestId(`scheme`)).toHaveTextContent(`dark`)),await C.click(e.getByRole(`button`,{name:`Light`})),await w(()=>S(e.getByTestId(`scheme`)).toHaveTextContent(`light`))}},D={tags:[`source`],parameters:r({source:{code:v}}),decorators:[i()]},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
                const [element, setElement] = useState<HTMLElement | null>(null)
                const scheme = useColorScheme({ element })
                return <div ref={setElement} style={{ colorScheme }}>Renders in: {scheme}</div>
            \`
    }
  }),
  decorators: [withStoryCard({
    content: <p>
                    The buttons set <code>color-scheme</code> on the panel. Pass the element through state (a
                    callback ref), so the hook re-subscribes once the element mounts.
                </p>
  }), showSource()],
  render: () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const [colorScheme, setColorScheme] = useState('light dark');
    const scheme = useColorScheme({
      element
    });
    return <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <Button onPress={() => setColorScheme('light')}>Light</Button>
                    <Button onPress={() => setColorScheme('dark')}>Dark</Button>
                    <Button onPress={() => setColorScheme('light dark')}>System</Button>
                </div>
                <SchemeSample ref={setElement} style={{
        colorScheme
      }} />
                <StoryCard appearance="output">
                    <p>
                        <code>color-scheme: {colorScheme}</code>
                    </p>
                    <p>
                        useColorScheme(): <strong data-testid="scheme">{scheme}</strong>
                    </p>
                </StoryCard>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent(getPrefersColorScheme()));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dark'
    }));
    await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('dark'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Light'
    }));
    await waitFor(() => expect(canvas.getByTestId('scheme')).toHaveTextContent('light'));
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['source'],
  parameters: defineDocsParam({
    source: {
      code
    }
  }),
  decorators: [showSource()]
}`,...D.parameters?.docs?.source}}},O=[`BasicUsage`,`Source`]})))()}k();export{E as BasicUsage,D as Source,O as __namedExportsOrder,T as default};