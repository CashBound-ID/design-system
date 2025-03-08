import type { Meta, StoryObj } from '@storybook/react/*';

import Icon from '@/components/Icon';
import Textfield from '@/components/Textfield';

const meta = {
  component: Textfield,
  parameters: {
    'component-name': 'Textfield',
    docs: {},
    'import-path': '@cashbound-id/design-system/textfield',
    'source-code': 'src/components/Textfield'
  },
  title: 'Form/Textfield'
} satisfies Meta<typeof Textfield>;

export default meta;

type Story = StoryObj<typeof Textfield>;

export const Basic: Story = {
  args: {
    label: 'Label',
    width: '500px'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Banner component'
      }
    }
  }
};

export const TextfieldWithClearButton: Story = {
  args: {
    enableClear: true,
    label: 'Label',
    value: 'hello world',
    width: '500px'
  }
};

export const TextfieldWithLoading: Story = {
  args: {
    label: 'Label',
    loading: true,
    width: '500px'
  }
};

export const TextfieldRequired: Story = {
  args: {
    label: 'Label',
    required: true,
    width: '500px'
  }
};

export const TextfieldWithPrefixText: Story = {
  args: {
    label: 'Label',
    prefix: 'Rp.',
    width: '500px'
  }
};

export const TextfieldWithPrefixIcon: Story = {
  args: {
    label: 'Label',
    prefix: <Icon icon="attachment" />,
    width: '500px'
  }
};

export const TextfieldWithSuffixText: Story = {
  args: {
    label: 'Label',
    suffix: 'Year',
    width: '500px'
  }
};

export const TextfieldWithSuffixIcon: Story = {
  args: {
    label: 'Label',
    suffix: <Icon icon="edit-fill" />,
    width: '500px'
  }
};

export const TextfieldError: Story = {
  args: {
    error: true,
    label: 'Label',
    width: '500px'
  }
};

export const TextfieldErrorWithHelper: Story = {
  args: {
    error: true,
    helper: 'Error message',
    label: 'Label',
    width: '500px'
  }
};

export const TextfieldESuccess: Story = {
  args: {
    label: 'Label',
    success: true,
    width: '500px'
  }
};
