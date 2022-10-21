import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ReactNode } from 'react'
export interface IHeading {
  asChild?: boolean
  size?: 'sm' | 'md'| 'lg'
  children: ReactNode
}
export function Heading({ asChild, children, size = 'md'}: IHeading) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={clsx('text-gray-400', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg'
      })}>
      {children}
    </Comp>
  )
}