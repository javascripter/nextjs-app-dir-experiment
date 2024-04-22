import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { css } from 'react-strict-dom'

type LinkProps = NextLinkProps & {
  style?: css.StyleXStyles
}

export function Link({ style, ...props }: LinkProps) {
  return <NextLink {...props} {...css.props(style)} />
}
