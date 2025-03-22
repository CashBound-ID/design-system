import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';

import dayjs from 'dayjs';

import CalendarItem from '@/components/Shared/CalendarItem';
import useMount from '@/hooks/useMount';

import {
  genCalendarItem,
  setToFirstDayOfMonth,
  setToMidnight
} from '@/utils/date';
import type { DateCalendarType } from '@/types/date';

import CalendarActionBar from './CalendarActionBar';
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

  const formattedItems = useMemo(() => {
    if (Array.isArray(calendarItems)) {
      return calendarItems.map((item) => {
        const isSelected = Boolean(
          selectedDate && item.date.getTime() === selectedDate
        );

        const today = setToMidnight(new Date());
        const isToday =
          !item.disabled && today.getTime() === item.date.getTime();

        return {
          ...item,
          isSelected,
          isToday,
          label: dayjs(item.date).format('D')
        };
      });
    }
    return []; // Return an empty array if calendarItems is not an array
  }, [calendarItems, selectedDate]);

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

      <section className={styles['calendar__content']}>
        {formattedItems.map((item) => {
          return (
            <CalendarItem
              key={item.date.toISOString()}
              label={item.label}
              date={item.date}
              isSelected={item.isSelected}
              isToday={item.isToday}
              disabled={item.disabled}
              onClickCalendarItem={handleOnClickCalendarItem}
            />
          );
        })}
      </section>
    </section>
  );
});

export default Calendar;
