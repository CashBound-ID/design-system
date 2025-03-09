import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react/*';

import { noop } from '@/utils/misc';

import Month from '../Month';

const meta = {
  component: Month,
  parameters: {
    'component-name': 'Month',
    docs: {},
    'import-path': '@cashbound-id/design-system/month',
    'source-code': 'src/components/Month'
  },
  title: 'Form/Calendar/Month'
} satisfies Meta<typeof Month>;

export default meta;

type Story = StoryObj<typeof Month>;

export const Basic: Story = {
  args: {
    onChooseMonth: noop,
    selectedDate: 1721506994000
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Month component'
      }
    }
  }
};

export const DynamicState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Month component'
      }
    }
  },
  render: () => {
    const [state, setState] = useState<number>();

    return <Month onChooseMonth={setState} selectedDate={state} />;
  }
};
