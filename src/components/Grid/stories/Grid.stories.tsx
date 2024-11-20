import type { ComponentType } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@/components/Grid';

import CardPreview from '@/storybook/components/CardPreview/CardPreview';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Grid,
  parameters: {
    'component-name': 'Grid',
    docs: {
      description: {
        component:
          'The Grid component is a flexible and responsive layout system for creating structured designs. It supports customizable columns, spacing, and alignment to adapt to various screen sizes.'
      }
    },
    'import-path': '@cashbound-id/design-system/Grid',
    'source-code': 'src/components/Grid'
  },
  subcomponents: {
    'Grid.Item': Grid.Item as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Layout/Grid'
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof Grid>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'The basic usage.'
      }
    }
  },
  render: () => {
    return (
      <Grid gap={16}>
        <Grid.Item>
          <CardPreview>Col</CardPreview>
        </Grid.Item>
        <Grid.Item>
          <CardPreview>Col</CardPreview>
        </Grid.Item>
        <Grid.Item>
          <CardPreview>Col</CardPreview>
        </Grid.Item>
      </Grid>
    );
  }
};

export const DefiningColumnSpan: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Sample usage if user defined the column span in Grid.Item props.'
      }
    }
  },
  render: () => (
    <Grid gap={16}>
      <Grid.Item col={12}>
        <CardPreview>Col 12</CardPreview>
      </Grid.Item>
      <Grid.Item col={6}>
        <CardPreview>Col 6</CardPreview>
      </Grid.Item>
      <Grid.Item col={6}>
        <CardPreview>Col 6</CardPreview>
      </Grid.Item>
      <Grid.Item col={4}>
        <CardPreview>Col 4</CardPreview>
      </Grid.Item>
      <Grid.Item col={4}>
        <CardPreview>Col 4</CardPreview>
      </Grid.Item>
      <Grid.Item col={4}>
        <CardPreview>Col 4</CardPreview>
      </Grid.Item>
    </Grid>
  )
};

export const AutoColumnWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Sample usage if user defined the column span is auto in Grid.Item props.'
      }
    }
  },
  render: () => (
    <Grid gap={16}>
      <Grid.Item col={'auto'}>
        <CardPreview>Col Auto</CardPreview>
      </Grid.Item>
      <Grid.Item col={'auto'}>
        <CardPreview>Col Auto</CardPreview>
      </Grid.Item>
      <Grid.Item>
        <CardPreview>Col </CardPreview>
      </Grid.Item>
    </Grid>
  )
};
