import type { Meta, StoryObj } from '@storybook/react/*';

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

export const WithClearButton: Story = {
  args: {
    enableClear: true,
    label: 'Label',
    value: 'hello world',
    width: '500px'
  }
};

export const WithLoading: Story = {
  args: {
    label: 'Label',
    loading: true,
    width: '500px'
  }
};

export const UsingRequiredMode: Story = {
  args: {
    label: 'Label',
    required: true,
    width: '500px'
  }
};

export const UsingOptionalMode: Story = {
  args: {
    label: 'Label',
    optional: true,
    width: '500px'
  }
};

export const WithPrefixText: Story = {
  args: {
    label: 'Label',
    prefixText: 'Rp.',
    width: '500px'
  }
};

export const WithPrefixIcon: Story = {
  args: {
    label: 'Label',
    prefixIcon: 'attachment',
    width: '500px'
  }
};

export const WithPrefixIconAndText: Story = {
  args: {
    label: 'Label',
    prefixIcon: 'bank',
    prefixText: 'IDR',
    width: '500px'
  }
};

export const WithSuffixText: Story = {
  args: {
    label: 'Label',
    suffixText: 'Year',
    width: '500px'
  }
};

export const WithSuffixIcon: Story = {
  args: {
    enableClear: true,
    label: 'Label',
    maxLength: 100,
    suffixIcon: 'edit-fill',
    width: '500px'
  }
};

export const WithSuffixIconAndText: Story = {
  args: {
    label: 'Label',
    suffixIcon: 'bank',
    suffixText: 'IDR',
    width: '500px'
  }
};

export const ErrorState: Story = {
  args: {
    error: true,
    label: 'Label',
    width: '500px'
  }
};

export const ErrorStateWithHelper: Story = {
  args: {
    error: true,
    helper: 'Error message',
    label: 'Label',
    width: '500px'
  }
};

export const SuccessState: Story = {
  args: {
    label: 'Label',
    success: true,
    width: '500px'
  }
};

export const SuccessStateWithHelper: Story = {
  args: {
    helper: 'Correct',
    label: 'Label',
    success: true,
    width: '500px'
  }
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    helper: 'Please fill the name',
    label: 'Label',
    width: '500px'
  }
};
