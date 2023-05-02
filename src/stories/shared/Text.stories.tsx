import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../shared'

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text
}

export default meta

type Story = StoryObj<typeof Text>

export const Paragraph: Story = {
  args: {
    children: 'This is a paragraph',
    tag: 'p'
  }
}

export const HeadingOne: Story = {
  args: {
    children: 'This is a heading one',
    tag: 'h1'
  }
}

export const HeadingTwo: Story = {
  args: {
    children: 'This is a heading two',
    tag: 'h2'
  }
}
