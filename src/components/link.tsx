'use client'
import { LinkProps as NextLinkProps } from 'next/link'
import { Link as NextLink } from '@/lib/next-view-transitions'

import { css } from 'react-strict-dom'

type LinkProps = NextLinkProps & {
  style?: css.StyleXStyles
  children?: React.ReactNode
}

export function Link({ style, ...props }: LinkProps) {
  return <NextLink {...props} {...css.props(style)} />
}
