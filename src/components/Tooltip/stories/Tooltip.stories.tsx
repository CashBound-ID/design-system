import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Tooltip from '@/components/Tooltip';
import Typography from '@/components/Typography';

import { hexToRgba } from '@/utils/css';
import { WHITE } from '@/constant/theme';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Tooltip,
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
    'component-name': 'Tooltip',
    'import-path': '@cashbound-id/design-system/tooltip',
    'source-code': 'src/components/Tooltip'
  },
  tags: ['autodocs'],
  title: 'Feedback/Tooltip'
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    children: <Typography>Hover It!</Typography>,
    position: 'bottom',
    title: 'Tooltip Content',
    trigger: 'hover'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    }
  }
};

export const CustomTriggerEvent: Story = {
  args: {
    children: <Typography>Click It!</Typography>,
    position: 'bottom',
    title: 'Tooltip Content',
    trigger: 'click'
  },
  parameters: {
    docs: {
      description: {
        story:
          'To replace default event listener, you can set the <code>trigger</code> props value to your desired events.'
      }
    }
  }
};

export const CustomPosition: Story = {
  args: {
    children: <Typography>Hover It!</Typography>,
    position: 'top',
    title: 'Tooltip Content'
  },
  parameters: {
    docs: {
      description: {
        story:
          'To replace default position tooltip, you can set the <code>position</code> props value to your desired position.'
      }
    }
  }
};

export const CustomTooltipContent: Story = {
  args: {
    children: <Typography>Price.</Typography>,
    position: 'top',
    title: (
      <Flex align="center" gap={4}>
        <Typography
          color={hexToRgba('#FFF', 0.8)}
          modifier="body-sm"
          fontWeight="medium"
        >
          IDR
        </Typography>

        <Typography color={WHITE} modifier="body-sm" fontWeight="medium">
          5.000.000
        </Typography>
      </Flex>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize tooltip content with defined JSX element.'
      }
    }
  }
};
