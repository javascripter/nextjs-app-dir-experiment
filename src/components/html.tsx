import React from 'react'
import { css, html } from 'react-strict-dom'
import { StrictReactDOMProps } from 'react-strict-dom/dist/types/StrictReactDOMProps'

// NOTE: `react-strict-dom` relies on React Context, which means we cannot use
// them as React Server Components.
// [A pending PR](https://github.com/facebook/react-strict-dom/pull/76) will fix
// this, but until it's merged, we need to use patch-package to apply the fix.
// Please see the `patches` directory for the patch.

// A light wrapper around react-strict-dom's html components to add default
// styles.
function createComponent<T, P extends StrictReactDOMProps>(
  Component: React.ComponentType<P>,
  defaultStyle: P['style']
) {
  if (!defaultStyle) {
    // No need to wrap the component
    return Component
  }
  const StrictComponent = React.forwardRef<T, P>((props, ref) => {
    return (
      <Component {...props} ref={ref} style={[defaultStyle, props.style]} />
    )
  })

  StrictComponent.displayName = Component.displayName
  return StrictComponent as unknown as React.ComponentType<P>
}

/**
 * CSS reset styles for all elements.
 *
 * DO NOT MODIFY THIS STYLE UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * This reset is intentionally minimal. In general, prefer writing styles
 * for individual elements instead of modifying this reset.
 *
 * Avoid:
 * - Setting `margin` or `padding` to `0` for all elements.
 *   - Already done by react-styled-dom and redundant.
 * - Setting `display: flex` for all elements.
 *   - We're not doing the react-native-web approach.
 *
 */
const styles = css.create({
  block: {
    boxSizing: 'border-box',
  },
  inline: {
    boxSizing: 'border-box',
    whiteSpace: 'pre-wrap',
  },
})

export const a = createComponent(html.a, styles.inline)
export const article = createComponent(html.article, styles.block)
export const aside = createComponent(html.aside, styles.block)
export const b = createComponent(html.b, styles.inline)
export const bdi = createComponent(html.bdi, styles.inline)
export const bdo = createComponent(html.bdo, styles.inline)
export const blockquote = createComponent(html.blockquote, styles.block)
export const br = createComponent(html.br, null)
export const button = createComponent(html.button, null)
export const code = createComponent(html.code, styles.inline)
export const del = createComponent(html.del, null)
export const div = createComponent(html.div, styles.block)
export const em = createComponent(html.em, styles.inline)
export const fieldset = createComponent(html.fieldset, styles.block)
export const footer = createComponent(html.footer, styles.block)
export const form = createComponent(html.form, styles.block)
export const h1 = createComponent(html.h1, styles.block)
export const h2 = createComponent(html.h2, styles.block)
export const h3 = createComponent(html.h3, styles.block)
export const h4 = createComponent(html.h4, styles.block)
export const h5 = createComponent(html.h5, styles.block)
export const h6 = createComponent(html.h6, styles.block)
export const header = createComponent(html.header, styles.block)
export const hr = createComponent(html.hr, styles.block)
export const i = createComponent(html.i, styles.inline)
export const img = createComponent(html.img, null)
export const input = createComponent(html.input, null)
export const ins = createComponent(html.ins, null)
export const kbd = createComponent(html.kbd, null)
export const label = createComponent(html.label, styles.inline)
export const li = createComponent(html.li, styles.block)
export const main = createComponent(html.main, styles.block)
export const nav = createComponent(html.nav, styles.block)
export const ol = createComponent(html.ol, styles.block)
export const optgroup = createComponent(html.optgroup, null)
export const option = createComponent(html.option, null)
export const p = createComponent(html.p, styles.block)
export const pre = createComponent(html.pre, styles.block)
export const s = createComponent(html.s, null)
export const section = createComponent(html.section, styles.block)
export const select = createComponent(html.select, null)
export const span = createComponent(html.span, styles.inline)
export const strong = createComponent(html.strong, styles.inline)
export const sub = createComponent(html.sub, styles.inline)
export const sup = createComponent(html.sup, styles.inline)
export const textarea = createComponent(html.textarea, null)
export const u = createComponent(html.u, null)
export const ul = createComponent(html.ul, styles.block)
