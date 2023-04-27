import { Meta, StoryObj } from '@storybook/react'
import { Plus } from '@/icons'

const meta: Meta<typeof Plus> = {
  title: 'Icons/Plus',
  component: Plus
}

export default meta

type Story = StoryObj<typeof Plus>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px'
  }
}
