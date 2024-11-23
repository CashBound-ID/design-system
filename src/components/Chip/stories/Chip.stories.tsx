import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@/components/Chip';

const meta = {
  component: Chip,
  parameters: {
    'component-name': 'Chip',
    docs: {},
    'import-path': '@cashbound-id/design-system/chip',
    'source-code': 'src/components/Chip'
  },
  title: 'Data Display/Chip'
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    children: 'Label Text',
    clickable: true,
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
    children: 'Label Text',
    clickable: true
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
    clickable: true,
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
    clickable: true,
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
