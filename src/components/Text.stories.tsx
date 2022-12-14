import { Text, IText } from './Text';
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Faça login para continuar',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
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
export const CustomText: StoryObj<IText> = {
  args: {
    asChild: true,
    children: (
      <h1>Testando</h1>
    )
  },

  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}