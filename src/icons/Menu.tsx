import { SVGProps } from 'react'

export const Menu = (props: SVGProps<SVGSVGElement>) => (
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
      d='M4 6.667h10.667M4 16h17.333M4 25.333h24'
    />
  </svg>
)

export default Menu
