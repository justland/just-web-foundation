import { setProjectAnnotations } from '@storybook/react'
import visAnnotation from 'storybook-addon-vis/preview'
import { vis } from 'storybook-addon-vis/vitest-setup'
import { beforeAll } from 'vitest'
import * as projectAnnotations from './.storybook/preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([visAnnotation, projectAnnotations])

beforeAll(project.beforeAll)

vis.presets.enable()
