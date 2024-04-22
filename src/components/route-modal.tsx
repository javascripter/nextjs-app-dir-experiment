'use client'
import { useRouter } from 'next/navigation'
import { ANIMATION_DURATION, Modal } from './modal'
import React from 'react'
import { css } from 'react-strict-dom'

function useRouteModalProps() {
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState(true)

  const onOpenChange = (value: boolean) => {
    if (value) {
      setIsOpen(true)
      return
    }
    setIsOpen(false)
    setTimeout(() => {
      router.back()
    }, ANIMATION_DURATION)
  }

  return { isOpen, onOpenChange }
}

export function RouteModal({
  style,
  children,
}: {
  style?: css.StyleXStyles
  children: React.ReactNode
}) {
  const { isOpen, onOpenChange } = useRouteModalProps()
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable
      style={style}
    >
      {children}
    </Modal>
  )
}
