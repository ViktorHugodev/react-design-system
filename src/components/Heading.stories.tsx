import { Heading, IHeading } from './Heading';
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Ignite Lab',
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
} as Meta<IHeading>

export const Default: StoryObj<IHeading> = {}

export const Large: StoryObj<IHeading> = {
  args: {
    size: 'lg'
  }
}
export const Small: StoryObj<IHeading> = {
  args: {
    size: 'sm'
  }
}
export const CustomText: StoryObj<IHeading> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
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