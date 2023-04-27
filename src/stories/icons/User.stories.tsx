import { Meta, StoryObj } from '@storybook/react'
import { User } from '@/icons'

const meta: Meta<typeof User> = {
  title: 'Icons/User',
  component: User
}

export default meta

type Story = StoryObj<typeof User>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px',
    stroke: '#ECEFF4'
  }
}
