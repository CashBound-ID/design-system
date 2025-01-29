import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Calendar from '@/components/Calendar';

import { noop } from '@/utils/misc';
import type { Maybe } from '@/types/utils';

const meta = {
  component: Calendar,
  decorators: [
    (Story) => {
      return (
        <section
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 100
          }}
        >
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    'component-name': 'Calendar',
    docs: {},
    'import-path': '@cashbound-id/design-system/calendar',
    'source-code': 'src/components/Calendar'
  },
  title: 'Form/Calendar/Calendar'
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Basic: Story = {
  args: { onChooseDate: noop },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Calendar component'
      }
    }
  }
};

export const DynamicState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Calendar component'
      }
    }
  },
  render: () => {
    const Component = () => {
      const [state, setState] = useState<Maybe<number>>();

      return <Calendar selectedDate={state} onChooseDate={setState} />;
    };

    return <Component />;
  }
};
