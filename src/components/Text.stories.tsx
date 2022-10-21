import { Text, IText } from './Text';
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Faça login para continuar'
  }
} as Meta<IText>

export const Default: StoryObj<IText> = {}

export const Large: StoryObj<IText> = {
  args: {
    size: 'lg'
  }
}
export const Small: StoryObj<IText> = {
  args: {
    size: 'sm'
  }
}