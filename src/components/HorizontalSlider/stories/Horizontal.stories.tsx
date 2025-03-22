import type { CSSProperties, PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Card from '@/components/Card';
import HorizontalSlider from '@/components/HorizontalSlider';
import Typography from '@/components/Typography';

const SampleCard = (props: PropsWithChildren<{ style?: CSSProperties }>) => {
  const { children, style = {} } = props;
  const { color } = useDesignSystemProvider();

  return (
    <Card
      padding="12px"
      shadow="md"
      shadowOnInteract="lg"
      background={color.GRAYMAUVE500}
      style={{ height: 300, width: 200, ...style }}
    >
      <Typography
        modifier="body-md"
        color={color.GRAYMAUVE1100}
        fontWeight="bold"
        textAlign="center"
      >
        {children}
      </Typography>
    </Card>
  );
};

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: HorizontalSlider,
  parameters: {
    'component-name': 'HorizontalSlider',
    'import-path': '@cashbound-id/design-system/horizontal-slider',
    'source-code': 'src/components/HorizontalSlider'
  },

  tags: ['autodocs'],
  title: 'Layout/Horizontal Slider'
} satisfies Meta<typeof HorizontalSlider>;

export default meta;

type Story = StoryObj<typeof HorizontalSlider>;

export const Basic: Story = {
  args: {
    children: [
      <SampleCard key={1}>Col 1</SampleCard>,
      <SampleCard key={2}>Col 2</SampleCard>,
      <SampleCard key={3}>Col 3</SampleCard>,
      <SampleCard key={4}>Col 4</SampleCard>,
      <SampleCard key={5}>Col 5</SampleCard>,
      <SampleCard key={6}>Col 6</SampleCard>
    ],
    gap: 16,
    padding: '32px'
  },
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component'
      }
    }
  }
};

export const TopAlign: Story = {
  args: {
    align: 'top',
    children: [
      <SampleCard key={1} style={{ height: 60 }}>
        Col 1
      </SampleCard>,
      <SampleCard key={2} style={{ height: 80 }}>
        Col 2
      </SampleCard>,
      <SampleCard key={3} style={{ height: 150 }}>
        Col 3
      </SampleCard>,
      <SampleCard key={4}>Col 4</SampleCard>,
      <SampleCard key={5} style={{ height: 120 }}>
        Col 5
      </SampleCard>,
      <SampleCard key={6} style={{ height: 100 }}>
        Col 6
      </SampleCard>
    ],
    gap: 16,
    padding: '32px'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component with align `top`'
      }
    }
  }
};

export const BottomAlign: Story = {
  args: {
    align: 'bottom',
    children: [
      <SampleCard key={1} style={{ height: 60 }}>
        Col 1
      </SampleCard>,
      <SampleCard key={2} style={{ height: 80 }}>
        Col 2
      </SampleCard>,
      <SampleCard key={3} style={{ height: 150 }}>
        Col 3
      </SampleCard>,
      <SampleCard key={4}>Col 4</SampleCard>,
      <SampleCard key={5} style={{ height: 120 }}>
        Col 5
      </SampleCard>,
      <SampleCard key={6} style={{ height: 100 }}>
        Col 6
      </SampleCard>
    ],
    gap: 16,
    padding: '32px'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component with align `bottom`'
      }
    }
  }
};

export const MiddleAlign: Story = {
  args: {
    align: 'middle',
    children: [
      <SampleCard key={1} style={{ height: 60 }}>
        Col 1
      </SampleCard>,
      <SampleCard key={2} style={{ height: 80 }}>
        Col 2
      </SampleCard>,
      <SampleCard key={3} style={{ height: 150 }}>
        Col 3
      </SampleCard>,
      <SampleCard key={4}>Col 4</SampleCard>,
      <SampleCard key={5} style={{ height: 120 }}>
        Col 5
      </SampleCard>,
      <SampleCard key={6} style={{ height: 100 }}>
        Col 6
      </SampleCard>
    ],
    gap: 16,
    padding: '32px'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component with align `middle`'
      }
    }
  }
};

export const StretchAlign: Story = {
  args: {
    align: 'stretch',
    children: [
      <SampleCard key={1}>Col 1</SampleCard>,
      <SampleCard key={2}>Col 2</SampleCard>,
      <SampleCard key={3}>Col 3</SampleCard>,
      <SampleCard key={4}>Col 4</SampleCard>,
      <SampleCard key={5}>Col 5</SampleCard>,
      <SampleCard key={6}>Col 6</SampleCard>
    ],
    gap: 16,
    padding: '32px'
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates how to use the Horizontal Slider component with align `stretch`'
      }
    }
  }
};
