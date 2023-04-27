import { Meta, StoryObj } from '@storybook/react'
import { LogOut } from '@/icons'

const meta: Meta<typeof LogOut> = {
  title: 'Icons/LogOut',
  component: LogOut
}

export default meta

type Story = StoryObj<typeof LogOut>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px',
    stroke: '#ECEFF4'
  }
}
