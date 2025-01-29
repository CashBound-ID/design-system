import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';

import dayjs from 'dayjs';

import Flex from '@/components/Flex';
import useMount from '@/hooks/useMount';

import { genCalendarItem, setToFirstDayOfMonth } from '@/utils/date';
import type { DateCalendarType } from '@/types/date';

import CalendarActionBar from './CalendarActionBar';
import CalendarItem from './CalendarItem';
import * as styles from './style.module.scss';
import type {
  CalendarProps,
  CalendarRefType,
  OnClickPaginationArgs
} from './types';

const Calendar = forwardRef<CalendarRefType, CalendarProps>((props, ref) => {
  const { onChooseDate, selectedDate } = props;
  const [currentMonth, setCurrentMonth] = useState<number>(() => 0);

  useImperativeHandle(ref, () => {
    return { setCurrentMonth };
  });

  const handleOnClickPaginationBtn = useCallback(
    (args: OnClickPaginationArgs) => {
      const { type, unit } = args;

      switch (type) {
        case 'next': {
          let current = dayjs(new Date(currentMonth));
          if (unit === 'year') current = current.add(1, 'year');
          if (unit === 'month') current = current.add(1, 'month');

          setCurrentMonth(setToFirstDayOfMonth(current.toDate()).getTime());
          break;
        }

        case 'previous': {
          let current = dayjs(new Date(currentMonth));

          if (unit === 'year') current = current.subtract(1, 'year');
          if (unit === 'month') current = current.subtract(1, 'month');

          setCurrentMonth(setToFirstDayOfMonth(current.toDate()).getTime());
          break;
        }
      }
    },
    [currentMonth]
  );

  const handleOnClickCalendarItem = useCallback(
    (date: number) => {
      if (selectedDate && date === selectedDate) {
        onChooseDate(undefined);
        return;
      }

      onChooseDate(date);
    },
    [onChooseDate, selectedDate]
  );

  useMount(() => {
    let currentDate = new Date();

    if (selectedDate) currentDate = new Date(selectedDate);

    setCurrentMonth(setToFirstDayOfMonth(currentDate).getTime());
  });

  const calendarItems = useMemo<DateCalendarType[]>(() => {
    return genCalendarItem(currentMonth);
  }, [currentMonth]);

  return (
    <section
      className={styles['calendar']}
      aria-label="calendar picker"
      data-current-month={currentMonth}
    >
      <CalendarActionBar
        currentMonth={currentMonth}
        onClickPagination={handleOnClickPaginationBtn}
      />

      <Flex className={styles['calendar__content']} wrap="wrap">
        {calendarItems.map((item) => {
          return (
            <CalendarItem
              key={item.key}
              date={item.date}
              disabled={item.disabled}
              selectedDate={selectedDate}
              onClickCalendarItem={handleOnClickCalendarItem}
            />
          );
        })}
      </Flex>
    </section>
  );
});

export default Calendar;
