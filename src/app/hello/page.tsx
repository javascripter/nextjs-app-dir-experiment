'use client'
import { Link } from '@/components/link'
import { useCanGoBack } from '@/providers/router-can-go-back-provider'

export default function HelloPage() {
  const canGoBack = useCanGoBack()
  return (
    <div>
      <div>Hello Page</div>
      <Link href="/">{canGoBack ? 'Go back' : 'Go home'}</Link>
    </div>
  )
}
