import type { Meta, StoryObj } from "@storybook/react";
import Banner from "@/components/Banner";

const meta = {
  component: Banner,
  parameters: {
    "component-name": "Banner",
    docs: {},
    "import-path": "@cashbound-id/design-system/banner",
    "source-code": "src/components/Banner",
  },
  title: "Data Display/Banner",
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof Banner>;

export const Basic: Story = {
  args: {
    message: "Headline text",
    description: "Paragraph text",
  },
  name: "Basic Usage",
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates how to use the Banner component",
      },
    },
  },
};

export const BannerWithoutIcon: Story = {
  args: {
    withIcon: false,
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerWithFixedWidth: Story = {
  args: {
    width: "500px",
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerTypeNeutral: Story = {
  args: {
    type: "neutral",
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerTypeSuccess: Story = {
  args: {
    type: "success",
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerTypeWarning: Story = {
  args: {
    type: "warning",
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerTypeError: Story = {
  args: {
    type: "error",
    message: "Headline text",
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerWithoutDescription: Story = {
  args: {
    message: "Headline text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};

export const BannerWithoutMessage: Story = {
  args: {
    description: "Paragraph text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customize the banner layout to exclude the icon if you prefer not to include it on the banner section.",
      },
    },
  },
};
