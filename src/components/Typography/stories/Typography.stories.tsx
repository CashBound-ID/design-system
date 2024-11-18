import type { Meta, StoryObj } from '@storybook/react';

import Typography from '@/components/Typography';

import { DEFAULT_COLOR } from '@/constant/theme';

const SAMPLE_TEXT = 'Lorem Ipsum Dolor Sim Amet';

const meta = {
  argTypes: {
    children: {
      control: 'text'
    },
    className: {
      control: 'text',
      description: 'The class name for the typography component.'
    },
    color: {
      control: 'color',
      description: 'The color of the text.'
    },
    ellipsis: {
      control: 'boolean',
      description: 'Whether to apply ellipsis to the text.'
    },
    fontFamily: {
      control: 'select',
      description: 'The font family will be used for the text.',

      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    fontWeight: {
      control: 'select',
      description: 'Whether to apply font weight bold / normal',
      options: ['bold', 'medium', 'regular'],
      table: {
        defaultValue: { summary: 'regular' }
      }
    },
    italic: {
      control: 'boolean',
      description: 'Toggle for whether to implement italic or not?'
    },
    margin: {
      control: 'text',
      description: 'The margin around the typography component.'
    },
    modifier: {
      control: 'select',
      description:
        'The typography modifier to apply it will be reflect with the font size and styling the text section',

      options: [
        'body-lg',
        'body-md',
        'body-sm',
        'body-xs',
        'body-xxs',
        'heading-2xl',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'heading-xl'
      ],
      table: {
        defaultValue: { summary: 'body-lg' }
      }
    },
    textAlign: {
      control: 'select',

      options: ['center', 'left', 'right'],
      table: {
        defaultValue: { summary: 'left' }
      }
    },
    textDecoration: {
      control: 'select',

      options: [
        'auto',
        'blink',
        'dashed',
        'dotted',
        'double',
        'from-font',
        'grammar-error',
        'line-through',
        'none',
        'overline',
        'solid',
        'spelling-error',
        'underline',
        'wavy'
      ],
      table: {
        defaultValue: { summary: 'none' }
      }
    }
  },
  args: {
    children: SAMPLE_TEXT,
    color: DEFAULT_COLOR.GRAYMAUVE1200,
    fontWeight: 'bold',
    modifier: 'heading-md',
    tag: 'p'
  },
  component: Typography,
  parameters: {
    'component-name': 'Typography',
    docs: {
      description: {
        component:
          'Typography component for rendering text elements with customizable styles.'
      }
    },
    'import-path': '@cashbound-id/design-system/typography',
    layout: 'centered',
    'source-code': 'src/components/Typography'
  },
  tags: ['autodocs'],
  title: 'General/Typography'
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Typography component to create an H1 tag.'
      }
    }
  }
};
