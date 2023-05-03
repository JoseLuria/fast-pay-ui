import * as React from 'react'
import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

type TextTag = 'h1' | 'h2' | 'p'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?: TextTag
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: TextTag
}

interface Overload {
  (props: ParagraphProps): JSX.Element
  (props: HeadingProps): JSX.Element
}

const isParagraph = (props: ParagraphProps | HeadingProps): props is ParagraphProps =>
  props.tag === 'p'

const styles = {
  h1: 'text-2xl text-white font-semibold md:text-3xl',
  h2: 'font-semibold text-white text-xl',
  p: 'text-sm text-white text-opacity-50'
}

const Text: Overload = ({ tag: Tag = 'p', className, ...props }) => {
  const tagProps = {
    className: clsx(styles[Tag], className),
    ...props
  }

  if (isParagraph({ ...tagProps, tag: Tag })) {
    return <p {...tagProps} />
  }

  return <Tag {...tagProps} />
}

export default Text
