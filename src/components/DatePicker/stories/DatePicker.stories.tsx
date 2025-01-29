import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { GRAYMAUVE1100 } from '@/constant/theme';
import type { Maybe } from '@/types/utils';

const meta = {
  component: DatePicker,
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
    'component-name': 'DatePicker',
    docs: {},
    'import-path': '@cashbound-id/design-system/date-picker',
    'source-code': 'src/components/DatePicker'
  },
  title: 'Form/Calendar/DatePicker'
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  name: 'Basic Usage',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the DatePicker component'
      }
    }
  },
  render: () => {
    const Component = () => {
      const [show, toggleShow] = useState(false);
      const [selectedDate, setSelectedDate] = useState<Maybe<number>>();

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
              Show Date Picker
            </Button>

            <Typography
              modifier="body-md"
              fontWeight="regular"
              color={GRAYMAUVE1100}
            >
              Selected Date:{' '}
              <strong>
                {selectedDate
                  ? dayjs(selectedDate).format('DD MMM YYYY')
                  : 'Null'}
              </strong>
            </Typography>
          </Flex>

          {show && (
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              onClose={toggleShow}
            />
          )}
        </>
      );
    };

    return <Component />;
  }
};
