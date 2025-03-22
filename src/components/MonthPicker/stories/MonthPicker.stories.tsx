import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react/*';
import dayjs from 'dayjs';

import Button from '@/components/Button';
import Flex from '@/components/Flex';
import MonthPicker from '@/components/MonthPicker';
import Typography from '@/components/Typography';

import { GRAYMAUVE1100 } from '@/constant/theme';
import type { Maybe } from '@/types/utils';

const meta = {
  component: MonthPicker,
  decorators: [
    (Story) => {
      return (
        <section
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            minHeight: 100
          }}
        >
          <Story />
        </section>
      );
    }
  ],
  parameters: {
    'component-name': 'MonthPicker',
    docs: {},
    'import-path': '@cashbound-id/design-system/month-picker',
    'source-code': 'src/components/MonthPicker'
  },
  title: 'Form/Calendar/MonthPicker'
} satisfies Meta<typeof MonthPicker>;

export default meta;

type Story = StoryObj<typeof MonthPicker>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the Month Picker component'
      }
    }
  },
  render: () => {
    const Component = () => {
      const [show, toggleShow] = useState(false);
      const [selectedMonth, setSelectedMonth] = useState<Maybe<number>>();

      return (
        <>
          <Flex vertical gap={16}>
            <Button
              modifier="primary"
              variant="fill"
              icon="calendar-fill"
              size="lg"
              onClick={() => toggleShow(true)}
            >
              Show Month Picker
            </Button>

            <Typography
              modifier="body-md"
              fontWeight="regular"
              color={GRAYMAUVE1100}
            >
              Selected Month:{' '}
              <strong>
                {selectedMonth
                  ? dayjs(selectedMonth).format('MMM YYYY')
                  : 'Null'}
              </strong>
            </Typography>
          </Flex>

          {show && (
            <MonthPicker
              value={selectedMonth}
              onChange={setSelectedMonth}
              onClose={toggleShow}
            />
          )}
        </>
      );
    };

    return <Component />;
  }
};
