'use client'
import { useRouter } from 'next/navigation'
import { I18nProvider, RouterProvider } from 'react-aria-components'
import { RouterCanGoBackProvider } from '../providers/router-can-go-back-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <I18nProvider>
      <RouterProvider navigate={router.push}>
        <RouterCanGoBackProvider>{children}</RouterCanGoBackProvider>
      </RouterProvider>
    </I18nProvider>
  )
}
