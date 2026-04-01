import base from '@teo-garcia/eslint-config-shared/base'
import { defineConfig } from 'eslint/config'
import sharedPlaywright from '@teo-garcia/eslint-config-shared/playwright'
import sharedReact from '@teo-garcia/eslint-config-shared/react'
import astroPlugin from 'eslint-plugin-astro'

export default defineConfig([
  { ignores: ['.astro/**'] },
  ...base,
  ...sharedReact,
  ...astroPlugin.configs.recommended,
  ...sharedPlaywright,
])
