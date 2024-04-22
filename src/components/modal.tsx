'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {
  Dialog,
  Modal as AriaModal,
  ModalOverlay,
  ModalOverlayProps,
  DialogProps,
} from 'react-aria-components'
import { css } from 'react-strict-dom'

type ModalProps = Readonly<
  Pick<
    ModalOverlayProps,
    'isOpen' | 'onOpenChange' | 'isDismissable' | 'isKeyboardDismissDisabled'
  > &
    Pick<DialogProps, 'id' | 'role'> & {
      style?: css.StyleXStyles
      children: React.ReactNode
    }
>

export const ANIMATION_DURATION = 400

const fadeIn = css.keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const fadeOut = css.keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

const styles = css.create({
  overlay: {
    position: 'fixed',
    width: '100%',
    inset: 0,
    height: 'var(--visual-viewport-height)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: `${ANIMATION_DURATION}ms`,
  },
  fadeOut: {
    animationName: fadeOut,
    animationDuration: `${ANIMATION_DURATION}ms`,
  },
  dialog: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
})

export function Modal({
  isOpen,
  onOpenChange,
  isDismissable,
  style,
  children,
  ...props
}: ModalProps) {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={isDismissable}
      {...css.props(styles.overlay, isOpen ? styles.fadeIn : styles.fadeOut)}
    >
      <AriaModal>
        <Dialog {...props} {...css.props(styles.dialog, style)}>
          {children}
        </Dialog>
      </AriaModal>
    </ModalOverlay>
  )
}
