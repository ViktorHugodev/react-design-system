import { Button, IButtton } from './Button';
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Entrar',

  },
  argTypes: {
    variant: {
      options: ['primary', 'outline', 'cancel'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<IButtton>

export const Default: StoryObj<IButtton> = {}

export const Outline: StoryObj<IButtton> = {
  args: {
    variant: 'outline'
  }
}
export const Cancel: StoryObj<IButtton> = {
  args: {
    variant: 'cancel'
  }
}
export const CustomButton: StoryObj<IButtton> = {
  args: {
    asChild: true,
    children: (
      <a>Testando</a>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}