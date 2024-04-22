'use client'
import { RouteModal } from '@/components/route-modal'
import React from 'react'
import { Heading } from 'react-aria-components'

export default function HelloModal() {
  return (
    <RouteModal>
      <Heading slot="title">Hello Modal</Heading>
      <p>
        This is a modal dialog. You can close it by clicking the overlay or
        pressing the escape key.
      </p>
    </RouteModal>
  )
}
