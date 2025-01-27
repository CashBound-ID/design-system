import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@/components/Grid';
import Icon from '@/components/Icon';

import { GRAYMAUVE1100, REDTOMATO1100 } from '@/constant/theme';

import { PREVIEW_ICON } from './constant';

import CardShowcaseUI from '@/storybook/components/CardShowcaseUI';

const meta = {
  argTypes: {
    children: {
      control: false
    }
  },
  component: Icon,
  parameters: {
    'component-name': 'Icon',
    docs: {
      description: {
        component:
          'Here is a list of icons that are available for use on our website. These icons can be integrated into various sections of the site to enhance visual appeal and improve user experience.'
      }
    },
    'import-path': '@cashbound-id/design-system/Icon',
    'source-code': 'src/components/icon'
  },
  tags: ['autodocs'],
  title: 'General/Icon'
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    color: REDTOMATO1100,
    icon: 'apple',
    size: 32
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

export const Variant: Story = {
  name: 'Variant Icon',
  parameters: {
    docs: {
      description: {
        story: 'These are the variants icons that you can used'
      }
    }
  },
  render: () => (
    <>
      <Grid gap={24}>
        {PREVIEW_ICON.map((item) => (
          <Grid.Item
            key={item.icon}
            col={2}
            xs={12}
            sm={6}
            md={3}
            lg={2}
            xl={2}
          >
            <CardShowcaseUI
              label={item.label}
              sourceCode={`<Icon icon="${item.icon}" color="#D0CDD7" />`}
            >
              <Icon icon={item.icon} color={GRAYMAUVE1100} size={24} />
            </CardShowcaseUI>
          </Grid.Item>
        ))}
      </Grid>
    </>
  ),
  storyName: 'variant'
};
