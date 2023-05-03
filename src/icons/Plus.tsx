import * as React from 'react'
import { SVGProps } from 'react'

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width='1em'
    height='1em'
    stroke='#ECEFF4'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M8 16h8m0 0h8m-8 0V8m0 8v8'
    />
  </svg>
)

export default Plus
