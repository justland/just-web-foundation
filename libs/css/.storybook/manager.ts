import { tagBadges } from '@repobuddy/storybook/manager'
import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
	tagBadges,
	theme: {
		...themes.dark,
		brandTitle: '@just-web/css',
	},
})
