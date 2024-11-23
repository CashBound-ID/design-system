import type { ComponentType } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import NavigationHeader from '@/components/NavigationHeader';
import NavigationAction from '@/components/NavigationHeader/NavigationAction';
import NavigationCTA from '@/components/NavigationHeader/NavigationCTA';
import NavigationTitle from '@/components/NavigationHeader/NavigationTitle';

import { WHITE } from '@/constant/theme';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: NavigationHeader,
  parameters: {
    'component-name': 'NavigationHeader',
    'import-path': '@cashbound-id/design-system/navigation-header',
    layout: 'fullscreen',
    'source-code': 'src/components/NavigationHeader'
  },
  subcomponents: {
    'NavigationHeader.Action': NavigationAction as ComponentType<unknown>,
    'NavigationHeader.CTA': NavigationCTA as ComponentType<unknown>,
    'NavigationHeader.Title': NavigationTitle as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Layout/Navigation/Navigation Header'
} satisfies Meta<typeof NavigationHeader>;

export default meta;

type Story = StoryObj<typeof NavigationHeader>;

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
        <NavigationHeader color={WHITE} position="sticky">
          <NavigationHeader.Title
            onClickNavigationIcon={() => {}}
            text="Navbar"
          />
          <NavigationHeader.CTA icon="attachment" onClick={() => {}} />
          <NavigationHeader.CTA icon="calendar-today-fill" onClick={() => {}} />
          <NavigationHeader.CTA icon="more" onClick={() => {}} />
        </NavigationHeader>

        <section style={{ height: 100 }} />
      </>
    );
  }
};

export const NavigationWithActionButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can create a navigation header that includes an action button, making it easy for users to interact with key features.'
      }
    }
  },
  render: () => {
    return (
      <>
        <NavigationHeader>
          <NavigationHeader.Title
            onClickNavigationIcon={() => {}}
            text="Navbar"
          />
          <NavigationHeader.Action text="Action Button" onClick={() => {}} />
        </NavigationHeader>

        <section style={{ height: 100 }} />
      </>
    );
  }
};

export const NavigationPosition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the position with three options: `default` for a relative position, `sticky` to keep the navigation bar in a sticky position, and `fixed` to pin it to the top.'
      }
    }
  },
  render: () => {
    return (
      <>
        <NavigationHeader position="sticky" color={WHITE}>
          <NavigationHeader.Title
            onClickNavigationIcon={() => {}}
            text="Navbar"
          />

          <NavigationHeader.CTA icon="more" onClick={() => {}} />
        </NavigationHeader>

        <section style={{ height: 100 }} />
      </>
    );
  }
};
