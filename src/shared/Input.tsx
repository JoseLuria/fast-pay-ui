import type { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  error?: string
  full?: boolean
}

export const Input: FC<Props> = ({
  name,
  className,
  placeholder,
  type = 'text',
  error,
  label,
  full,
  ...restProps
}) => {
  const spanStyles = clsx('text-sm flex flex-col text-white', full ? 'w-full' : 'w-fit')

  const labelStyles = clsx('flex justify-between mb-[10px]', error && 'text-red duration-200')

  const inputStyles = clsx(
    'w-full py-3 px-4 bg-dark-gray border-2 duration-200 rounded placeholder:text-gray',
    'outline-none focus:outline-none focus-visible:outline-none',
    error ? 'border-red focus-visible:border-red' : 'border-dark-gray focus-visible:border-gray',
    className
  )

  const props = {
    className: inputStyles,
    name,
    type,
    placeholder,
    ...restProps
  }

  return (
    <span className={spanStyles}>
      <label className={labelStyles} htmlFor={name}>
        {label}
        {error && <span>{error}</span>}
      </label>
      <input {...props} />
    </span>
  )
}
