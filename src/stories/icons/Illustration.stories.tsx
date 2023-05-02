import { Meta, StoryObj } from '@storybook/react'
import { Illustration } from '../../icons'

const meta: Meta<typeof Illustration> = {
  title: 'Icons/Illustration',
  component: Illustration
}

export default meta

type Story = StoryObj<typeof Illustration>

export const Default: Story = {
  args: {
    width: '500px',
    height: '413px'
  }
}
