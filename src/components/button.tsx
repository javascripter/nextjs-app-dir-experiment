'use client'
import React from 'react'
import { Button as ReactAriaButton } from 'react-aria-components'
import { css } from 'react-strict-dom'

type ButtonProps = Readonly<{
  onPress?: () => void
  style?: css.StyleXStyles
  children?: React.ReactNode
}>

export function Button({ onPress, style, children }: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isPressed, setIsPressed] = React.useState(false)

  return (
    <ReactAriaButton
      onPress={onPress}
      onHoverChange={setIsHovered}
      onPressChange={setIsPressed}
      {...css.props(
        styles.button,
        // NOTE: pressed overrides hovered
        isHovered && styles.hovered,
        isPressed && styles.pressed,
        style
      )}
    >
      {children}
    </ReactAriaButton>
  )
}

const styles = css.create({
  button: {
    padding: '10px 20px',
    backgroundColor:
      'hsl(209.83240223463687, 84.83412322274881%, 41.37254901960784%)',
    color: 'white',
    borderRadius: 5,
    cursor: 'pointer',
    border: 0,
    outline: 'none',
  },
  pressed: {
    // opacity: 0.3,
  },
  hovered: {
    // opacity: 0.9,
  },
})
