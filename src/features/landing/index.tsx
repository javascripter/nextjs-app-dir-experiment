'use client'
import { useCanGoBack } from '@/providers/router-can-go-back-provider'
import { Button } from '@/components/button'
import * as html from '@/components/html'
import { Link } from '@/components/link'

import { css } from 'react-strict-dom'

const styles = css.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: {
    //   default: 'white',
    //   ['@media (prefers-color-scheme: dark)']: 'black',
    // },
  },
  h1: {
    // color: {
    //   default: 'black',
    //   '@media (prefers-color-scheme: dark)': 'white',
    // },
  },
  button: {
    marginTop: 16,
  },
})

export function Landing() {
  const canGoBack = useCanGoBack()
  return (
    <html.main style={styles.main}>
      <html.h1 style={styles.h1}>Welcome to my website</html.h1>
      <Button
        style={styles.button}
        onPress={() => {
          alert(1)
        }}
      >
        Click me
      </Button>
      <Link href="/hello" scroll={false}>
        Go to hello
      </Link>
      <html.p>{canGoBack ? 'You can go back' : 'You cannot go back'}</html.p>
    </html.main>
  )
}
