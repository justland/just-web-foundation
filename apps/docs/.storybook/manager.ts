import { tagBadges } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
	tagBadges,
	theme: create({
		base: 'dark',
		brandTitle: '@just-web/fundation',
		brandUrl: 'https://github.com/justland/just-web-foundation'
	})
})
