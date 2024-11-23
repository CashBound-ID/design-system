import { type ComponentType, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import BottomNavigation from '@/components/BottomNavigation';
import BottomNavigationItem from '@/components/BottomNavigation/BottomNavigationItem';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: BottomNavigation,
  parameters: {
    'component-name': 'BottomNavigation',
    'import-path': '@cashbound-id/design-system/bottom-navigation',
    'source-code': 'src/components/BottomNavigation'
  },
  subcomponents: {
    'BottomNavigation.Item': BottomNavigationItem as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Layout/Navigation/Bottom Navigation'
} satisfies Meta<typeof BottomNavigation>;

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

type SampelStateType = 'transaction' | 'dashboard' | 'account';
const BottomNavigationPreview = () => {
  const [selected, setSelected] = useState<SampelStateType>('dashboard');

  return (
    <>
      <section style={{ margin: '16px 0 0' }} />

      <BottomNavigation<SampelStateType>
        position="sticky"
        value={selected}
        onChange={(args) => setSelected(args)}
      >
        <BottomNavigation.Item<SampelStateType>
          value="transaction"
          icon="transaction-log-fill"
          label="Transaction"
        />
        <BottomNavigation.Item<SampelStateType>
          value="dashboard"
          icon="chart-box-line"
          label="Dashboard"
        />
        <BottomNavigation.Item<SampelStateType>
          value="account"
          icon="profile-line"
          label="Account"
        />
      </BottomNavigation>
    </>
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
      <>
        <section style={{ margin: '16px 0 0' }} />

        <BottomNavigation<SampelStateType>
          position="sticky"
          value="dashboard"
          onChange={() => {}}
        >
          <BottomNavigation.Item<SampelStateType>
            value="transaction"
            icon="transaction-log-fill"
            label="Transaction"
          />
          <BottomNavigation.Item<SampelStateType>
            value="dashboard"
            icon="chart-box-line"
            label="Dashboard"
          />
          <BottomNavigation.Item<SampelStateType>
            value="account"
            icon="profile-line"
            label="Account"
          />
        </BottomNavigation>
      </>
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
    return <BottomNavigationPreview />;
  }
};
