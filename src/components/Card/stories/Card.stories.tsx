import type { Meta, StoryObj } from '@storybook/react';

import Card from '@/components/Card';
import Typography from '@/components/Typography/Typography';

import { GRAYMAUVE300, WHITE } from '@/constant/theme';

const meta = {
  argTypes: {
    children: {
      control: false
    },
    radius: {
      control: 'select',
      options: ['circle', 'lg', 'md', 'sm', 'square', 'xl', 'xs', 'default'],
      table: {
        defaultValue: { summary: undefined }
      }
    },
    shadow: {
      control: 'select',
      options: ['element', 'lg', 'md', 'sm', 'xl', 'default'],
      table: {
        defaultValue: { summary: 'element' }
      }
    },
    shadowOnInteract: {
      control: 'select',
      options: ['element', 'lg', 'md', 'sm', 'xl'],
      table: {
        defaultValue: { summary: 'md' }
      }
    }
  },
  component: Card,
  parameters: {
    'component-name': 'Card',
    docs: {},
    'import-path': '@cashbound-id/design-system/card',
    'source-code': 'src/components/Card'
  },
  tags: ['autodocs'],
  title: 'Data Display/Card'
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Typography modifier="heading-md" fontWeight="bold" margin="0 0 10px">
          Title
        </Typography>
        <Typography modifier="body-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          nesciunt distinctio dignissimos
        </Typography>
      </>
    )
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Card component'
      }
    }
  }
};

export const CustomStyling: Story = {
  args: {
    background: WHITE,
    border: `1px solid ${GRAYMAUVE300}`,
    children: (
      <>
        <Typography modifier="heading-md" fontWeight="bold" margin="0 0 10px">
          Title
        </Typography>
        <Typography modifier="body-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          nesciunt distinctio dignissimos
        </Typography>
      </>
    ),
    shadow: 'md',
    shadowOnInteract: 'xl'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can customize components with border or box shadow'
      }
    }
  }
};
