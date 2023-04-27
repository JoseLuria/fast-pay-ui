import { SVGProps } from 'react'

export const LogOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    fill='none'
    stroke='#131313'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M16 16h9.334m0 0-4 4m4-4-4-4m4-4V6.667A2.667 2.667 0 0 0 22.667 4H9.334a2.667 2.667 0 0 0-2.667 2.667v18.666A2.667 2.667 0 0 0 9.334 28h13.333a2.667 2.667 0 0 0 2.667-2.667V24'
    />
  </svg>
)

export default LogOut
