import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';

import Grid from '@/components/Grid';
import CalendarItem from '@/components/Shared/CalendarItem';
import useMount from '@/hooks/useMount';

import { setToFirstDayOfMonth } from '@/utils/date';

import { MONTH_LIST } from './constant';
import MonthActionBar from './MonthActionBar';
import * as styles from './style.module.scss';
import type { MonthProps, MonthRefType } from './types';

const Month = forwardRef<MonthRefType, MonthProps>((props, ref) => {
  const { onChooseMonth, selectedDate = 0 } = props;
  const [currentYear, setCurrentYear] = useState<number>(() => 0);

  useImperativeHandle(ref, () => {
    return { setCurrentYear };
  });

  const handleOnChangeActionBar = useCallback(
    (arg: number) => {
      setCurrentYear(arg);
    },
    [setCurrentYear]
  );

  const handleOnClickMonthItem = useCallback(
    (timestamp: number) => {
      const formattedChoosenDate = setToFirstDayOfMonth(
        new Date(timestamp)
      ).getTime();
      const currentDate = setToFirstDayOfMonth(
        new Date(selectedDate)
      ).getTime();

      if (currentDate && formattedChoosenDate === currentDate) {
        onChooseMonth(undefined);
        return;
      }

      onChooseMonth(formattedChoosenDate);
    },
    [onChooseMonth, selectedDate]
  );

  useMount(() => {
    let currentDate = new Date();

    if (selectedDate) currentDate = new Date(selectedDate);

    setCurrentYear(currentDate.getFullYear());
  });

  const formattedItems = useMemo(() => {
    return MONTH_LIST.map((item) => {
      //INFO: method to set selected month
      const currentMonthDate = setToFirstDayOfMonth(
        new Date(new Date(currentYear, item.value))
      );
      let isSelected = false;

      if (selectedDate) {
        const formattedSelectedDate = setToFirstDayOfMonth(
          new Date(selectedDate)
        );
        isSelected = Boolean(
          currentMonthDate.getTime() === formattedSelectedDate.getTime()
        );
      }

      //INFO: method to set this month
      let isToday = false;
      const today = setToFirstDayOfMonth(new Date());

      if (today.getTime() === currentMonthDate.getTime()) {
        isToday = true;
      }

      return {
        ...item,
        date: currentMonthDate,
        isSelected,
        isToday
      };
    });
  }, [selectedDate, currentYear]);

  return (
    <section className={styles['month']} aria-label="month">
      <MonthActionBar
        currentYear={currentYear}
        onChange={handleOnChangeActionBar}
      />

      <Grid className={styles['month__content']} gap={8}>
        {formattedItems.map((item) => {
          return (
            <Grid.Item key={item.value} col={4}>
              <CalendarItem
                date={item.date}
                label={item.name}
                isSelected={item.isSelected}
                isToday={item.isToday}
                onClickCalendarItem={handleOnClickMonthItem}
              />
            </Grid.Item>
          );
        })}
      </Grid>
    </section>
  );
});

export default Month;
