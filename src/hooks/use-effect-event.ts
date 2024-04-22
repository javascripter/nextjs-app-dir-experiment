import React from 'react'

// https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
// Note: this userland implementation does not follow the exact same semantics
// as the React RFC.
// 1. Effect events must be omitted from the dependency array of the effect in
//    the official implementation. This implementation ensures a stable
//    reference so you can safely include (or omit) it in the dependency array.
// 2. The official implementation uses a different mechanism to ensure the event
//    is not called during rendering. This userland implementation throws an
//    error only before the first render.
export function useEffectEvent<T extends Function>(event: T): T {
  const ref = React.useRef<T | null>(null)
  React.useInsertionEffect(() => {
    ref.current = event
  }, [event])

  return React.useCallback((...args: unknown[]) => {
    const f = ref.current
    if (!f) {
      throw new Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      )
    }
    return f(...args)
  }, []) as unknown as T
}
