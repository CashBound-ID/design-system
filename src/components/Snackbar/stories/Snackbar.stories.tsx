import { type ComponentType, useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/Button/Button';
import Flex from '@/components/Flex';
import Snackbar from '@/components/Snackbar';
import type { SnackbarImperativeRefType } from '@/components/Snackbar/types';

import { GREENCASH900, REDTOMATO900 } from '@/constant/theme';

const meta = {
  component: Snackbar,
  parameters: {
    'component-name': 'Snackbar',
    'import-path': '@cashbound-id/design-system/snackbar',
    'source-code': 'src/components/Snackbar'
  },
  subcomponents: {
    'Snackbar.Imperative': Snackbar.Imperative as ComponentType<unknown>,
    'Snackbar.Provider': Snackbar.Provider as ComponentType<unknown>
  },
  tags: ['autodocs'],
  title: 'Feedback/Snackbar'
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof Snackbar>;

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
    const ref = useRef<SnackbarImperativeRefType>(null);

    return (
      <>
        <Flex gap={20} wrap="wrap">
          <Button
            modifier="primary"
            variant="fill"
            onClick={() =>
              ref.current?.open({
                message: 'Sample Message'
              })
            }
          >
            Default
          </Button>

          <Button
            modifier="primary"
            variant="fill"
            onClick={() =>
              ref.current?.open({
                icon: 'check-circle-line',
                iconColor: GREENCASH900,
                message: 'Sample Message'
              })
            }
          >
            With Icon
          </Button>

          <Button
            modifier="primary"
            variant="fill"
            onClick={() =>
              ref.current?.open({
                ctaLabel: 'CTA',
                iconColor: 'BLUE500',
                message: 'Sample Message',
                onCtaClick: () => alert('Invoked from CTA')
              })
            }
          >
            With CTA
          </Button>

          <Button
            modifier="primary"
            variant="fill"
            onClick={() =>
              ref.current?.open({
                icon: 'error-line',
                iconColor: REDTOMATO900,
                message: (
                  <>
                    Action failed. Please try again later. If the issue
                    <br />
                    persists, contact support.
                  </>
                )
              })
            }
          >
            Multiple Line Text
          </Button>
        </Flex>

        <Snackbar.Imperative ref={ref} />
      </>
    );
  }
};

export const SampleUsingCustomHooks: Story = {
  render: () => {
    const DemoSnackbar = () => {
      const { open } = Snackbar.useSnackbar();

      return (
        <>
          <Flex gap={20} wrap="wrap">
            <Button
              modifier="primary"
              variant="fill"
              onClick={() =>
                open({
                  message: 'Sample Message'
                })
              }
            >
              Default
            </Button>

            <Button
              modifier="primary"
              variant="fill"
              onClick={() =>
                open({
                  icon: 'check-circle-line',
                  iconColor: GREENCASH900,
                  message: 'Sample Message'
                })
              }
            >
              With Icon
            </Button>

            <Button
              modifier="primary"
              variant="fill"
              onClick={() =>
                open({
                  ctaLabel: 'CTA',
                  iconColor: 'BLUE500',
                  message: 'Sample Message',
                  onCtaClick: () => alert('Invoked from CTA')
                })
              }
            >
              With CTA
            </Button>

            <Button
              modifier="primary"
              variant="fill"
              onClick={() =>
                open({
                  icon: 'error-line',
                  iconColor: REDTOMATO900,
                  message: (
                    <>
                      Action failed. Please try again later. If the issue
                      <br />
                      persists, contact support.
                    </>
                  )
                })
              }
            >
              Multiple Line Text
            </Button>
          </Flex>
        </>
      );
    };

    return <DemoSnackbar />;
  }
};
