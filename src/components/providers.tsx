import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DevPanel } from '@teo-garcia/react-shared/components/dev-panel'
import { SkipLink } from '@teo-garcia/react-shared/components/skip-link'
import { useEffect, useState } from 'react'

import { ThemeProvider } from '~/components/theme-provider'
import { ThemeSwitch } from '~/components/theme-switch/theme-switch'
import { env } from '~/lib/env'
import { createQueryClient } from '~/lib/query-client'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(createQueryClient)

  useEffect(() => {
    async function enableMocking() {
      if (env.isDevelopment) {
        const { initializeMSW } = await import('~/lib/mocks/browser')
        await initializeMSW()
      }
    }

    enableMocking()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='system' storageKey='theme'>
        <SkipLink href='#main-content' />
        {children}
        <ThemeSwitch />
        <DevPanel />
        <ReactQueryDevtools buttonPosition='bottom-left' />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
