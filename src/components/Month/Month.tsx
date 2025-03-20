import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';

import Flex from '@/components/Flex';
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
    (month: number) => {
      const formattedChoosenDate = setToFirstDayOfMonth(
        new Date(currentYear, month)
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
    [currentYear, onChooseMonth, selectedDate]
  );

  useMount(() => {
    let currentDate = new Date();

    if (selectedDate) currentDate = new Date(selectedDate);

    setCurrentYear(currentDate.getFullYear());
  });

  const formattedItems = useMemo(() => {
    return MONTH_LIST.map((item) => {
      //INFO: method to set selected month
      const combinedDate = new Date(
        new Date(currentYear, item.value)
      ).getTime();
      let isSelected = false;

      if (selectedDate) {
        const formattedSelectedDate = setToFirstDayOfMonth(
          new Date(selectedDate)
        ).getTime();
        isSelected = Boolean(combinedDate === formattedSelectedDate);
      }

      //INFO: method to set this month
      let isToday = false;
      const today = setToFirstDayOfMonth(new Date()).getTime();

      if (today === combinedDate) {
        isToday = true;
      }

      return {
        ...item,
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
      <Flex className={styles['month__content']} wrap="wrap">
        {formattedItems.map((item) => {
          return (
            <CalendarItem
              onClickCalendarItem={handleOnClickMonthItem}
              key={item.value}
              label={item.name}
              isSelected={item.isSelected}
              isToday={item.isToday}
            />
          );
        })}
      </Flex>
    </section>
  );
});

export default Month;
