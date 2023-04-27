import { Meta, StoryObj } from '@storybook/react'
import { Flash } from '@/icons'

const meta: Meta<typeof Flash> = {
  title: 'Icons/Flash',
  component: Flash
}

export default meta

type Story = StoryObj<typeof Flash>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px'
  }
}
