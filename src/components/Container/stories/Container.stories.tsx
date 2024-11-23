import type { Meta, StoryObj } from '@storybook/react';

import Container from '@/components/Container';

import CardPreview from '@/storybook/components/CardPreview/CardPreview';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Container,
  parameters: {
    'component-name': 'Container',
    docs: {
      description: {
        component:
          'The Container component is typically used as a wrapper for sections, styled with a maximum width of 1200px. On tablets and mobile devices, it automatically adjusts to a full-width layout (100%).'
      }
    },
    'import-path': '@cashbound-id/design-system/container',
    'source-code': 'src/components/Container'
  },
  tags: ['autodocs'],
  title: 'Layout/Container'
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Basic: Story = {
  args: {
    children: <CardPreview>Container</CardPreview>
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Container component'
      }
    }
  }
};
