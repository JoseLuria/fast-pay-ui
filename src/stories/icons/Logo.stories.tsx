import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../../icons'

const meta: Meta<typeof Logo> = {
  title: 'Icons/Logo',
  component: Logo
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    width: '300px',
    height: '74px'
  }
}
