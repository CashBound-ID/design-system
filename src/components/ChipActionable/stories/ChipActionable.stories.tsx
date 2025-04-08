import type { Meta, StoryObj } from '@storybook/react';

import ChipActionable from '@/components/ChipActionable';

const meta = {
  component: ChipActionable,
  parameters: {
    'component-name': 'ChipActionable',
    docs: {},
    'import-path': '@cashbound-id/design-system/chip-actionable',
    'source-code': 'src/components/ChipActionable'
  },
  title: 'Data Display/Chip/Actionable'
} satisfies Meta<typeof ChipActionable>;

export default meta;

type Story = StoryObj<typeof ChipActionable>;

export const Basic: Story = {
  args: {
    children: 'Label Text',
    icon: 'shape-category-fill'
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

export const ChipWithoutIcon: Story = {
  args: {
    children: 'Label Text'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the chip layout to exclude the icon if you prefer not to include it within the chip section.'
      }
    }
  }
};

export const SelectedChip: Story = {
  args: {
    children: 'Label Text',
    icon: 'shape-category-fill',
    selected: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can adding flag if chip has been selected by user with defined props selected is true'
      }
    }
  }
};

export const SelectedDisabled: Story = {
  args: {
    children: 'Label Text',
    disabled: true,
    icon: 'shape-category-fill'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can adding flag if chip is disabled'
      }
    }
  }
};
