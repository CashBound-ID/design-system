import type { Meta, StoryObj } from '@storybook/react';

import Banner from '@/components/Banner';

const meta = {
  component: Banner,
  parameters: {
    'component-name': 'Banner',
    docs: {},
    'import-path': '@cashbound-id/design-system/banner',
    'source-code': 'src/components/Banner'
  },
  title: 'Data Display/Banner'
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof Banner>;

export const Basic: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text'
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

export const BannerWithoutIcon: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    withIcon: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerWithFixedWidth: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    width: '500px'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerTypeNeutral: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    type: 'neutral'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerTypeSuccess: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    type: 'success'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerTypeWarning: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    type: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerTypeError: Story = {
  args: {
    description: 'Paragraph text',
    message: 'Headline text',
    type: 'error'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerWithoutDescription: Story = {
  args: {
    message: 'Headline text'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};

export const BannerWithoutMessage: Story = {
  args: {
    description: 'Paragraph text'
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.'
      }
    }
  }
};
