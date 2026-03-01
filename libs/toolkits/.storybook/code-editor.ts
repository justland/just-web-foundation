import type { setupMonaco } from 'storybook-addon-code-editor'
import ClsxTypes from '../.editor/clsx/index.d.mts?raw'
import ToolkitTypes from '../.editor/just_web_toolkits/index.d.mts?raw'
import RepobuddyStorybookTypes from '../.editor/repobuddy_storybook/index.d.mts?raw'
import TypePlusTypes from '../.editor/type_plus/index.d.mts?raw'

export const onMonacoLoad: NonNullable<Parameters<typeof setupMonaco>[0]['onMonacoLoad']> = (
	monaco
) => {
	monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
		noSemanticValidation: false,
		noSyntaxValidation: false
	})
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		ToolkitTypes,
		'file:///node_modules/@just-web/toolkits/index.d.ts'
	)
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		RepobuddyStorybookTypes,
		'file:///node_modules/@repobuddy/storybook/index.d.ts'
	)
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		ClsxTypes,
		'file:///node_modules/clsx/index.d.mts'
	)
	monaco.languages.typescript.typescriptDefaults.addExtraLib(
		TypePlusTypes,
		'file:///node_modules/type-plus/index.d.ts'
	)
}
