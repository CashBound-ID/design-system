import type { Meta, StoryObj } from '@storybook/react';

import ButtonOnboarding from '@/components/ButtonOnboarding';

const meta = {
  component: ButtonOnboarding,
  parameters: {
    'component-name': 'ButtonOnboarding',
    docs: {},
    'import-path': '@cashbound-id/design-system/button-onboarding',
    'source-code': 'src/components/ButtonOnboarding'
  },
  title: 'General/Button/Button Onboarding'
} satisfies Meta<typeof ButtonOnboarding>;

export default meta;

type Story = StoryObj<typeof ButtonOnboarding>;

export const Basic: Story = {
  args: {
    children: 'Label',
    icon: 'shape-category-fill',
    margin: '16px 0'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Button component'
      }
    }
  }
};

export const DisabledState: Story = {
  args: {
    children: 'Label',
    disabled: true,
    icon: 'shape-category-fill',
    margin: '16px 0'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates if button onboarding is disabled'
      }
    }
  }
};

export const SelectedState: Story = {
  args: {
    children: 'Label',
    disabled: false,
    icon: 'shape-category-fill',
    margin: '16px 0',
    selected: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates if button onboarding is selected'
      }
    }
  }
};
