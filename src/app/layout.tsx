import type { Metadata } from 'next'

import { Providers } from './providers'
import { RouterCanGoBackTracker } from '@/providers/router-can-go-back-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <Providers>
      <html>
        <body>
          {children}
          {modal}
          <RouterCanGoBackTracker />
        </body>
      </html>
    </Providers>
  )
}
