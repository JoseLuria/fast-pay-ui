import { SVGProps } from 'react'

export const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    fill='none'
    width='1em'
    height='1em'
    stroke='#131313'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M6.667 26.667v-1.334A9.333 9.333 0 0 1 16 16m0 0a9.333 9.333 0 0 1 9.334 9.333v1.334M16 16a5.333 5.333 0 1 0 0-10.667A5.333 5.333 0 0 0 16 16Z'
    />
  </svg>
)

export default User
