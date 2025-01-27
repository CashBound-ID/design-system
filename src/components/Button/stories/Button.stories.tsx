import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button';
import type {
  ButtonModifierType,
  ButtonSizeType,
  ButtonVariantType
} from '@/components/Button/types';
import Flex from '@/components/Flex';

const meta = {
  component: Button,
  parameters: {
    'component-name': 'Button',
    docs: {},
    'import-path': '@cashbound-id/design-system/button',
    'source-code': 'src/components/Button'
  },
  title: 'General/Button/Button Default'
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button Text'
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
  size: ButtonSizeType[];
  theme: ButtonModifierType[];
  variant: ButtonVariantType;
}

const BoilerplateButton = (props: BoilerplateButtonProps) => {
  const { size, theme, variant } = props;
  const [mode, setMode] = useState<'reset' | 'loading' | 'disabled'>('reset');
  const [withIcon, toggleIcon] = useState(true);

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

        <Button
          modifier="primary"
          variant="text"
          size="sm"
          onClick={() => toggleIcon((state) => !state)}
        >
          Toggle Icon
        </Button>
      </Flex>

      <br />

      <Flex gap={10} vertical align="center">
        {theme.map((item) => {
          return (
            <Flex key={item} gap={10} align="center" justify="center">
              {size.map((preset) => {
                return (
                  <Button
                    key={`${item}-${preset}`}
                    variant={variant}
                    icon={withIcon ? 'shape-category-fill' : undefined}
                    modifier={item}
                    size={preset}
                    loading={mode === 'loading'}
                    disabled={mode === 'disabled'}
                  >
                    Text
                  </Button>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export const FilledVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant fill'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'error'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="fill" />;
  }
};

export const OutlineVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant outline'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'error'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="outline" />;
  }
};

export const TextVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example button using variant link'
      }
    }
  },
  render: () => {
    const theme: ButtonModifierType[] = ['primary', 'error'];
    const size: ButtonSizeType[] = ['lg', 'md', 'sm'];

    return <BoilerplateButton size={size} theme={theme} variant="text" />;
  }
};
