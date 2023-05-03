import type { FC, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  full?: boolean
}

const Input: FC<Props> = ({
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
    <fieldset className={spanStyles}>
      <label className={labelStyles} htmlFor={name}>
        {label}
        {error && <span>{error}</span>}
      </label>
      <input {...props} />
    </fieldset>
  )
}

export default Input
