import { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/shared'

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    name: 'email',
    label: 'Correo',
    placeholder: 'correo@mail.com',
    error: '',
    full: true
  }
}

export const Error: Story = {
  args: {
    name: 'email',
    label: 'Correo',
    placeholder: 'correo@mail.com',
    error: 'formato incorrecto',
    full: true
  }
}
