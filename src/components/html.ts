'use client'
import { html } from 'react-strict-dom'

export const {
  a,
  article,
  aside,
  b,
  bdi,
  bdo,
  blockquote,
  br,
  button,
  code,
  del,
  div,
  em,
  fieldset,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hr,
  i,
  img,
  input,
  ins,
  kbd,
  label,
  li,
  main,
  nav,
  ol,
  optgroup,
  option,
  p,
  pre,
  s,
  section,
  select,
  span,
  strong,
  sub,
  sup,
  textarea,
  u,
  ul,
  ...rest
} = html

// make sure we export everything
rest satisfies {
  [key: string]: never
}
