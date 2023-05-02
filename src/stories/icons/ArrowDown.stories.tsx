import { Meta, StoryObj } from '@storybook/react'
import { ArrowDown } from '../../icons'

const meta: Meta<typeof ArrowDown> = {
  title: 'Icons/ArrowDown',
  component: ArrowDown
}

export default meta

type Story = StoryObj<typeof ArrowDown>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px'
  }
}
