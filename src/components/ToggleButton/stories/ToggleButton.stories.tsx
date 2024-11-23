import { type ComponentType, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ToggleButton from '@/components/ToggleButton';
import ToggleButtonItem from '@/components/ToggleButton/ToggleButtonItem';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: ToggleButton,
  parameters: {
    'component-name': 'ToggleButton',
    'import-path': '@cashbound-id/design-system/toggle-button',
    'source-code': 'src/components/ToggleButton'
  },
  subcomponents: {
    'ToggleButton.Item': ToggleButtonItem as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'General/Button/Toggle Button'
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

type SampelStateType = 'list' | 'grid' | 'box';
const ToggleButtonPreview = () => {
  const [selected, setSelected] = useState<SampelStateType>('box');

  return (
    <ToggleButton<SampelStateType>
      value={selected}
      onChange={(args) => setSelected(args)}
    >
      <ToggleButton.Item<SampelStateType> value="list" icon="view-list-fill" />
      <ToggleButton.Item<SampelStateType> value="grid" icon="calendar-fill" />
      <ToggleButton.Item<SampelStateType> value="box" icon="check-box-fill" />
    </ToggleButton>
  );
};

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    }
  },
  render: () => {
    return (
      <ToggleButton<'list' | 'grid'> value="list" onChange={() => {}}>
        <ToggleButton.Item<'list' | 'grid'>
          value="list"
          icon="view-list-fill"
        />

        <ToggleButton.Item<'list' | 'grid'> value="grid" icon="calendar-fill" />
      </ToggleButton>
    );
  }
};

export const MultipleChoice: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Sample usage with combined dynamic selected state'
      }
    }
  },
  render: () => {
    return <ToggleButtonPreview />;
  }
};
