import { useCallback, useState } from 'react';

import Flex from '@/components/Flex';
import useMount from '@/hooks/useMount';

import { setToFirstDayOfMonth } from '@/utils/date';

import MonthActionBar from './MonthActionBar';
import Monthitem from './Monthitem';
import * as styles from './style.module.scss';
import type { MonthProps, MonthsType } from './types';

const Month = (props: MonthProps) => {
  const { onChooseMonth, selectedDate = 0 } = props;

  const [months, setMonths] = useState<MonthsType[]>();
  const [currentYear, setCurrentYear] = useState<number>(() => 0);

  const getMonthList = () => {
    const monthList = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(0, i);
      const monthName = date.toLocaleString('default', { month: 'short' });
      monthList.push({ name: monthName.toUpperCase(), value: i + 1 });
    }

    setMonths(monthList);
    return monthList;
  };

  const handleOnChangeActionBar = useCallback(
    (arg: number) => {
      setCurrentYear(arg);
    },
    [setCurrentYear]
  );

  const handleOnClickMonthItem = useCallback(
    (month: number) => {
      const formattedChoosenDate = setToFirstDayOfMonth(
        new Date(currentYear, month - 1)
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

    getMonthList();
  });

  return (
    <section className={styles['month']} aria-label="month">
      <MonthActionBar
        currentYear={currentYear}
        onChange={handleOnChangeActionBar}
      />
      <Flex className={styles['month__content']} wrap="wrap">
        {months &&
          months.map((item) => {
            return (
              <Monthitem
                key={item.value}
                selectedYear={currentYear}
                months={item}
                onClickMonthItem={handleOnClickMonthItem}
                selectedDate={selectedDate}
              />
            );
          })}
      </Flex>
    </section>
  );
};

export default Month;
