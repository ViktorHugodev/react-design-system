import { clsx } from 'clsx'

export interface IText {
  size?: 'sm' | 'md' | 'lg'
  children: string
}

export function Text({ size = 'md', children }: IText) {
  return <span className={clsx('text-gray-100 font-sans', {
    'text-xs': size === 'sm',
    'text-sm': size === 'md',
    'text-md': size === 'lg'
  })}
  >
    {children}
  </span>
}