import type { Meta, StoryObj } from '@storybook/react/*';

import Checkbox from '@/components/Checkbox';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { GRAYMAUVE1200, REDTOMATO1100, VIOLET900 } from '@/constant/theme';

const meta = {
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Flex align="center" justify="center">
          <Story />
        </Flex>
      );
    }
  ],
  parameters: {
    'component-name': 'Checkbox',
    docs: {},
    'import-path': '@cashbound-id/design-system/checkbox',
    'source-code': 'src/components/Checkbox'
  },
  title: 'Form/Checkbox'
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    label: 'Lorem Ipsum'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Banner component'
      }
    }
  }
};

export const CustomLabel: Story = {
  args: {
    label: (
      <Typography modifier="body-md" color={GRAYMAUVE1200} tag="p">
        <Typography
          tag="span"
          display="inline"
          color={REDTOMATO1100}
          modifier="body-sm"
        >
          *&nbsp;
        </Typography>
        Saya sudah baca dan setuju dengan&nbsp;
        <a href="/">
          <Typography
            tag="span"
            display="inline"
            color={VIOLET900}
            fontWeight="medium"
            modifier="body-md"
          >
            kebijakan data privasi
          </Typography>
        </a>
        .
      </Typography>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'We can customize label using react component'
      }
    }
  }
};

export const EnableClickLabel: Story = {
  args: {
    enableClickLabel: true,
    label: 'Lorem Ipsum'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Banner component'
      }
    }
  }
};

export const DisabledNotChecked: Story = {
  args: {
    disabled: true,
    label: 'Lorem Ipsum'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Banner component'
      }
    }
  }
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: 'Lorem Ipsum'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Banner component'
      }
    }
  }
};
