import * as React from 'react'
import { SVGProps } from 'react'

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='#ECEFF4'
    viewBox='0 0 32 32'
    width='1em'
    height='1em'
    {...props}
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='m8 12 8 8 8-8' />
  </svg>
)

export default ArrowDown
