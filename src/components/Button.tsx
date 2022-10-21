import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtton extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild: boolean
  children: ReactNode
  variant?: 'primary' | 'outline' | 'cancel'
}


export function Button({ asChild, children, variant = 'primary', ...rest }: IButtton) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp {...rest} className={clsx('font-semibold text-white rounded px-4 py-2 ', {
      'bg-cyan-500 hover:bg-cyan-700': variant === 'primary',
      'bg-white hover:white border-cyan-500 hover:border-cyan-700 border text-gray-100': variant === 'outline',
      'bg-red-500 hover:bg-red-500 border-white-100 hover:border-cyan-100 border hover:text-white-100 text-gray-100': variant === 'cancel',

    })}>
      {children}
    </Comp>
  )
}