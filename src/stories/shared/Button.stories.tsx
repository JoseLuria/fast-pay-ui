import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../shared'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

const children = 'Hello'

export const Default: Story = {
  args: {
    children,
    variant: 'default'
  }
}

export const Outline: Story = {
  args: {
    children,
    variant: 'outline'
  }
}

export const Warn: Story = {
  args: {
    children,
    variant: 'warn'
  }
}

export const Error: Story = {
  args: {
    children,
    variant: 'error'
  }
}

export const Success: Story = {
  args: {
    children,
    variant: 'success'
  }
}
