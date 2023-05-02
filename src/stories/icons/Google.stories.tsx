import { Meta, StoryObj } from '@storybook/react'
import { Google } from '../../icons'

const meta: Meta<typeof Google> = {
  title: 'Icons/Google',
  component: Google
}

export default meta

type Story = StoryObj<typeof Google>

export const Default: Story = {
  args: {
    width: '64px',
    height: '64px'
  }
}
