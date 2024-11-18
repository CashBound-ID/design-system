import type { Meta, StoryObj } from '@storybook/react';

import Icon from '@/components/Icon';

import { REDTOMATO800 } from '@/constant/theme';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Icon,
  parameters: {
    'component-name': 'Icon',
    docs: {
      description: {
        component:
          'Here is a list of icons that are available for use on our website. These icons can be integrated into various sections of the site to enhance visual appeal and improve user experience.'
      }
    },
    'import-path': '@cashbound-id/design-system/Icon',
    'source-code': 'src/components/Icon'
  },
  tags: ['autodocs'],
  title: 'General/Icon'
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    color: REDTOMATO800,
    icon: 'apple',
    size: 32
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    },
    layout: 'centered'
  }
};
