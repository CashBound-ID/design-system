import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() },
  component: Button,
  parameters: {
    'component-name': 'Button',
    'import-path': '@cashbound-id/design-system/button',
    layout: 'centered',
    'source-code': 'src/components/Button'
  },
  tags: ['button.tsx'],
  title: 'General/Button'
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large'
  }
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small'
  }
};
