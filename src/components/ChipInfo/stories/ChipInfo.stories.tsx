import type { Meta, StoryObj } from '@storybook/react';

import ChipInfo from '@/components/ChipInfo';

const meta = {
  component: ChipInfo,
  parameters: {
    'component-name': 'ChipInfo',
    docs: {},
    'import-path': '@cashbound-id/design-system/chip-info',
    'source-code': 'src/components/ChipInfo'
  },
  title: 'Data Display/Chip/Info'
} satisfies Meta<typeof ChipInfo>;

export default meta;

type Story = StoryObj<typeof ChipInfo>;

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
    icon: 'shape-category-fill'
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
