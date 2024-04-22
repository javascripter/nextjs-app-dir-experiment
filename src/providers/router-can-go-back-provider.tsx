'use client'
import { useEffectEvent } from '@/hooks/use-effect-event'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const CAN_GO_BACK_STATE_KEY = '__canGoBack'

const RouterCanGoBackContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

/**
 * Provides the necessary context for `useCanGoBack()` hook.
 * The actual logic is implemented in `RouterCanGoBackTracker` component, which must be
 * mounted inside the `<body>` element separately.
 * Usage:
 * <RouterCanGoBackProvider>
 *   <html>
 *     <body>
 *       {children}
 *       <RouterCanGoBackTracker />
 *     </body>
 *   </html>
 * </RouterCanGoBackProvider>
 */

export function RouterCanGoBackProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const value = React.useState(false)

  return (
    <RouterCanGoBackContext.Provider value={value}>
      {children}
    </RouterCanGoBackContext.Provider>
  )
}

/**
 * Returns whether the user can go back without leaving the site.
 *
 * A typical use case is to conditionally render a back button in the UI.
 */
export function useCanGoBack() {
  const value = React.useContext(RouterCanGoBackContext)
  if (value === undefined) {
    throw new Error(
      'useCanGoBack must be used within a RouterCanGoBackProvider'
    )
  }
  return value[0]
}

function RouterCanGoBackTrackerImpl() {
  const context = React.useContext(RouterCanGoBackContext)
  if (context === undefined) {
    throw new Error(
      'RouterCanGoBackTracker must be used within a RouterCanGoBackProvider'
    )
  }

  const [, onChangeCanGoBack] = context

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onVisit = useEffectEvent(
    (_pathname: string, _searchParams: typeof searchParams) => {
      const canGoBack = !(
        window.history.state != null &&
        CAN_GO_BACK_STATE_KEY in window.history.state
      )
      onChangeCanGoBack(canGoBack)
    }
  )

  React.useEffect(() => {
    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
    // Next.js allows the use of the native history API to update the browser
    // history stack. We use this to mark the initial page visit as
    // unbackable.

    window.history.replaceState(
      { ...(window.history.state ?? {}), [CAN_GO_BACK_STATE_KEY]: false },
      '',
      window.location.href
    )
  }, [])

  React.useEffect(() => {
    // Navigation has occurred, and history has been updated at this point.
    onVisit(pathname, searchParams)
  }, [onVisit, pathname, searchParams])

  return null
}

// NOTE: You cannot place this component outside <html> element because it will
// cause hydration issues (reason not clear). This is why this component is
// separated from RouterCanGoBackProvider itself.
export function RouterCanGoBackTracker() {
  // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  // useSearchParams() will de-opt the entire component tree into CSR
  // mode without a Suspense boundary.
  return (
    <Suspense fallback={null}>
      <RouterCanGoBackTrackerImpl />
    </Suspense>
  )
}
