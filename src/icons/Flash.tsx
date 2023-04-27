import { SVGProps } from 'react'

export const Flash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#ECEFF4'
    viewBox='0 0 32 32'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M17.334 13.333V4L6.667 18.667h8V28l10.667-14.667h-8Z' />
  </svg>
)

export default Flash
