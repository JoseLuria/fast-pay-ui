import { Meta, StoryObj } from '@storybook/react'
import { Menu } from '@/icons'

const meta: Meta<typeof Menu> = {
  title: 'Icons/Menu',
  component: Menu
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px'
  }
}
