import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { GRAYMAUVE300, GRAYMAUVE1100 } from '@/constant/theme';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Flex,
  parameters: {
    'component-name': 'Flex',
    docs: {
      description: {
        component: 'A flex layout container for alignment.'
      }
    },
    'import-path': '@cashbound-id/design-system/flex',
    'source-code': 'src/components/Flex'
  },
  tags: ['autodocs'],
  title: 'Layout/Flex'
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

const SampleBox = (props: PropsWithChildren<unknown>) => {
  return (
    <div style={{ backgroundColor: GRAYMAUVE300, width: '25%' }}>
      <Typography textAlign="center" color={GRAYMAUVE1100}>
        {props.children}
      </Typography>
    </div>
  );
};

export const Basic: Story = {
  args: {
    children: (
      <>
        <SampleBox>Box 1</SampleBox>
        <SampleBox>Box 2</SampleBox>
        <SampleBox>Box 3</SampleBox>
        <SampleBox>Box 4</SampleBox>
      </>
    ),
    gap: 8
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
