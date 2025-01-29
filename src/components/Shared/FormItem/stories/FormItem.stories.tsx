import { type ComponentType } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FormItem from '@/components/Shared/FormItem';

import { GRAYMAUVE300 } from '@/constant/theme';

import FormItemContent from '../FormItemContent';
import FormItemHelper from '../FormItemHelper';
import FormItemLabel from '../FormItemLabel';

const meta = {
  component: FormItem,
  parameters: {
    'component-name': 'FormItem',
    'import-path': '@cashbound-id/design-system/form-item',
    'source-code': 'src/components/Shared/FormItem'
  },
  subcomponents: {
    'FormItem.Content': FormItemContent as ComponentType<unknown>,
    'FormItem.Helper': FormItemHelper as ComponentType<unknown>,
    'FormItem.Label': FormItemLabel as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Form/Template/Form Item'
} satisfies Meta<typeof FormItem>;

export default meta;

type Story = StoryObj<typeof FormItem>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    },
    layout: 'centered'
  },
  render: () => {
    return (
      <FormItem>
        <FormItem.Label label="Label Name" required />

        <FormItem.Content>
          <section
            style={{
              background: GRAYMAUVE300,
              borderRadius: 8,
              height: 48,
              width: 300
            }}
          />
        </FormItem.Content>

        <FormItem.Helper helper="Hint messages" />
      </FormItem>
    );
  }
};

export const ErrorState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Example usage of the <code>FormItem</code> component with the Helper section applying error styling.'
      }
    },
    layout: 'centered'
  },
  render: () => {
    return (
      <FormItem>
        <FormItem.Label label="Label Name" required />

        <FormItem.Content>
          <section
            style={{
              background: GRAYMAUVE300,
              borderRadius: 8,
              height: 48,
              width: 300
            }}
          />
        </FormItem.Content>

        <FormItem.Helper helper="Hint messages" theme="error" />
      </FormItem>
    );
  }
};

export const SuccessState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Example usage of the <code>FormItem</code> component with the Helper section applying success styling.'
      }
    },
    layout: 'centered'
  },
  render: () => {
    return (
      <FormItem>
        <FormItem.Label label="Label Name" required />

        <FormItem.Content>
          <section
            style={{
              background: GRAYMAUVE300,
              borderRadius: 8,
              height: 48,
              width: 300
            }}
          />
        </FormItem.Content>

        <FormItem.Helper helper="Hint messages" theme="success" />
      </FormItem>
    );
  }
};

export const OptionalLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Example usage of the <code>FormItem</code> component with the Label section applying optional props.'
      }
    },
    layout: 'centered'
  },
  render: () => {
    return (
      <FormItem>
        <FormItem.Label label="Label Name" optional />

        <FormItem.Content>
          <section
            style={{
              background: GRAYMAUVE300,
              borderRadius: 8,
              height: 48,
              width: 300
            }}
          />
        </FormItem.Content>

        <FormItem.Helper helper="Hint messages" />
      </FormItem>
    );
  }
};
