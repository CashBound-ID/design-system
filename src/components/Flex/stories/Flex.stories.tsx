import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';

import CardPreview from '@/storybook/components/CardPreview';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Flex,
  parameters: {
    'component-name': 'Flex',
    docs: {
      description: {
        component: 'A flex layout container for alignment.'
      }
    },
    'import-path': '@cashbound-id/design-system/flex',
    'source-code': 'src/components/Flex'
  },
  tags: ['autodocs'],
  title: 'Layout/Flex'
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <CardPreview>Box 1</CardPreview>
        <CardPreview>Box 2</CardPreview>
        <CardPreview>Box 3</CardPreview>
        <CardPreview>Box 4</CardPreview>
      </>
    ),
    gap: 8
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    }
  }
};
