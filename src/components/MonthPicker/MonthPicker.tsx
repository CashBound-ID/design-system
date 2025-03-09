import type { MouseEventHandler } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import dayjs from 'dayjs';

import BottomSheet from '@/components/BottomSheet';
import Button from '@/components/Button';
import Grid from '@/components/Grid';
import Month from '@/components/Month';
import type { MonthRefType } from '@/components/Month/types';

import { setToFirstDayOfMonth } from '@/utils/date';
import type { BaseModalRefType } from '@/types/modal';
import type { Maybe } from '@/types/utils';

interface MonthPickerProps {
  /**
   * Callback function triggered when the date changes.
   * @param {number} timestamp - The selected date as a timestamp (in milliseconds).
   */
  onChange: (timestamp: number) => void;

  /**
   * Callback function triggered when the date picker is closed.
   * @param {boolean} show - Indicates whether the date picker is visible.
   */
  onClose: (show: boolean) => void;

  /**
   * The currently selected date as a timestamp (in milliseconds).
   * Optional.
   */
  value?: number;
}

const MonthPicker = (props: MonthPickerProps) => {
  const { onChange, onClose, value } = props;
  const modalRef = useRef<BaseModalRefType>(null);
  const monthRef = useRef<MonthRefType>(null);
  const [month, setMonth] = useState<Maybe<number>>(value);

  const handleOnClose: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (modalRef.current) modalRef.current.close();
  };

  const handleOnClickToday: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (monthRef.current) {
        const current = dayjs(new Date());

        monthRef.current.setCurrentYear(
          setToFirstDayOfMonth(current.toDate()).getFullYear()
        );
      }
    },
    []
  );

  const handleOnSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      handleOnClose(e);

      if (month) {
        onChange(month);
      }
    },
    [onChange, month]
  );

  const { isDisabled } = useMemo(() => {
    return {
      isDisabled: value === month || typeof month === 'undefined'
    };
  }, [month, value]);

  return (
    <BottomSheet onClose={onClose} showDragHandle componentRef={modalRef}>
      <BottomSheet.Content padding="0">
        <Month ref={monthRef} selectedDate={month} onChooseMonth={setMonth} />
      </BottomSheet.Content>

      <BottomSheet.Footer>
        <Grid gap={8}>
          <Grid.Item col={6}>
            <Button
              modifier="primary"
              variant="outline"
              block
              size="lg"
              onClick={handleOnClickToday}
            >
              Today
            </Button>
          </Grid.Item>

          <Grid.Item col={6}>
            <Button
              modifier="primary"
              variant="fill"
              block
              size="lg"
              disabled={isDisabled}
              onClick={handleOnSubmit}
            >
              Save
            </Button>
          </Grid.Item>
        </Grid>
      </BottomSheet.Footer>
    </BottomSheet>
  );
};

export default MonthPicker;
