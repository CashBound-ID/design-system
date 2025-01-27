import type { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/Flex';
import Images from '@/components/Images';
import Typography from '@/components/Typography';

import { GRAYMAUVE1000 } from '@/constant/theme';
import type { Radius } from '@/types/theme';

const meta = {
  argTypes: {
    objectPosition: {
      control: 'radio',
      options: ['bottom', 'center', 'left', 'right', 'top']
    },
    onError: {
      table: { disable: true }
    },
    onLoad: {
      table: { disable: true }
    },
    radius: {
      control: 'radio',
      options: ['circle', 'lg', 'md', 'sm', 'square', 'xl', 'xs']
    }
  },
  component: Images,
  parameters: {
    'component-name': 'Images',
    'import-path': '@cashbound-id/design-system/Images',
    'source-code': 'src/components/images'
  },
  tags: ['autodocs'],
  title: 'General/Images'
} satisfies Meta<typeof Images>;

export default meta;

type Story = StoryObj<typeof Images>;

export const Basic: Story = {
  args: {
    alt: 'Cashbound Images',
    height: 70,
    src: './assets/images/cashbound-logo.png',
    width: 70
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    },
    layout: 'centered'
  }
};

export const RadiusImage: Story = {
  name: 'Shape Image',
  parameters: {
    docs: {
      description: {
        story:
          'A showcase of all border radius variants, from sharp to fully rounded corners, to help you choose the right style for your components.'
      }
    }
  },
  render: () => {
    const IMAGE_RADIUS: (keyof Radius)[] = [
      'square',
      'sm',
      'md',
      'lg',
      'xl',
      'circle'
    ];

    return (
      <>
        <Flex gap={32} justify="center">
          {IMAGE_RADIUS.map((item) => {
            return (
              <Flex key={item} gap={16} vertical align="center">
                <Images
                  alt={'Cashbound Images'}
                  height={72}
                  radius={item}
                  src={'./assets/images/cashbound-logo.png'}
                  width={72}
                />

                <Typography color={GRAYMAUVE1000} modifier="body-md">
                  Radius <strong>{item}</strong>
                </Typography>
              </Flex>
            );
          })}
        </Flex>
      </>
    );
  }
};
