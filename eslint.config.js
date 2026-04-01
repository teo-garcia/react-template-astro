// eslint-disable-next-line simple-import-sort/imports
import base from '@teo-garcia/eslint-config-shared/base'
import sharedPlaywright from '@teo-garcia/eslint-config-shared/playwright'
import sharedReact from '@teo-garcia/eslint-config-shared/react'
import astroPlugin from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { ignores: ['.astro/**'] },
  ...base,
  ...sharedReact,
  ...astroPlugin.configs.recommended,
  ...sharedPlaywright,
])
