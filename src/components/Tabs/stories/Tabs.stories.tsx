import type { ComponentType } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Tabs from '@/components/Tabs';
import TabItem from '@/components/Tabs/TabsItem';

const fn = () => {};

const meta = {
  component: Tabs,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 400 }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    'component-name': 'Tabs',
    'import-path': '@cashbound-id/design-system/tabs',
    layout: 'centered',
    'source-code': 'src/components/Tabs'
  },
  subcomponents: {
    'Tabs.Item': TabItem as ComponentType<unknown>
  },
  title: 'Navigation/Tab'
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Tabs component'
      }
    }
  },
  render: () => {
    const items = [
      {
        text: '1 item',
        value: '1'
      },
      { text: '2 item', value: 'Sample Item 12' },
      { text: '3 item', value: 'Sample Item 123' }
    ];

    return (
      <>
        <Tabs activeKey="1" onTabClick={fn}>
          {items.map((item) => (
            <Tabs.Item key={item.value} keyName={item.value}>
              {item.text}
            </Tabs.Item>
          ))}
        </Tabs>
      </>
    );
  }
};

export const WithBorder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Tabs component'
      }
    }
  },
  render: () => {
    return (
      <>
        <Tabs activeKey="1" onTabClick={fn} withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const VariantCenter: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example implement tab using variant center'
      }
    }
  },
  render: () => {
    return (
      <>
        <Tabs activeKey="1" onTabClick={fn} variant="center" withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const VariantEqual: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example implement tab using variant equal'
      }
    }
  },
  render: () => {
    return (
      <>
        <Tabs activeKey="1" onTabClick={fn} variant="equal" withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};

export const ScrollBehavior: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'If you have number of tabs that exceeds the container width, the TabBar will be scrollable. This behavior affects to all variant types.'
      }
    }
  },
  render: () => {
    return (
      <>
        <Tabs activeKey="1" onTabClick={fn} withBorder>
          <Tabs.Item keyName="1">1 item</Tabs.Item>
          <Tabs.Item keyName="2">2 item</Tabs.Item>
          <Tabs.Item keyName="3">3 item</Tabs.Item>
          <Tabs.Item keyName="4">4 item</Tabs.Item>
          <Tabs.Item keyName="5">5 item</Tabs.Item>
          <Tabs.Item keyName="6">6 item</Tabs.Item>
          <Tabs.Item keyName="7">7 item</Tabs.Item>
          <Tabs.Item keyName="8">8 item</Tabs.Item>
          <Tabs.Item keyName="9">9 item</Tabs.Item>
          <Tabs.Item keyName="10">10 item</Tabs.Item>
        </Tabs>
      </>
    );
  }
};
