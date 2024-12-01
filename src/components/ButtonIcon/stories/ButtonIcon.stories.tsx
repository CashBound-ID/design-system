import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import ButtonIcon from '@/components/ButtonIcon';
import type { ButtonIconSizeType } from '@/components/ButtonIcon/types';
import type { ButtonIconVariantType } from '@/components/ButtonIcon/types';
import Flex from '@/components/Flex';

const meta = {
  component: ButtonIcon,
  parameters: {
    'component-name': 'ButtonIcon',
    docs: {},
    'import-path': '@cashbound-id/design-system/button-icon',
    'source-code': 'src/components/ButtonIcon'
  },
  title: 'General/Button/Button Icon'
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Basic: Story = {
  args: {
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

interface BoilerplateButtonProps {
  size: ButtonIconSizeType[];
  variant: ButtonIconVariantType;
}

const BoilerplateButton = (props: BoilerplateButtonProps) => {
  const { size, variant } = props;
  const [mode, setMode] = useState<'reset' | 'loading' | 'disabled'>('reset');

  return (
    <>
      <Flex gap={8}>
        <Button
          modifier="primary"
          variant="text"
          size="sm"
          onClick={() => setMode('disabled')}
        >
          Set Disabled
        </Button>

        <Button
          modifier="primary"
          variant="text"
          size="sm"
          onClick={() => setMode('loading')}
        >
          Set Loading
        </Button>

        <Button
          modifier="primary"
          variant="text"
          size="sm"
          onClick={() => setMode('reset')}
        >
          Reset
        </Button>
      </Flex>

      <br />

      <Flex gap={10} vertical align="center">
        <Flex gap={10} align="center" justify="center">
          {size.map((preset) => {
            return (
              <ButtonIcon
                key={preset}
                variant={variant}
                icon="shape-category-fill"
                size={preset}
                loading={mode === 'loading'}
                disabled={mode === 'disabled'}
              >
                Text
              </ButtonIcon>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export const PrimaryVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant primary'
      }
    }
  },
  render: () => {
    const size: ButtonIconSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} variant="primary" />;
  }
};

export const TransparentVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant transparent'
      }
    }
  },
  render: () => {
    const size: ButtonIconSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} variant="transparent" />;
  }
};
