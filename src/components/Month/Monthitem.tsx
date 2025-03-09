import type { MouseEventHandler } from 'react';
import { memo, useCallback, useMemo } from 'react';

import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { setToFirstDayOfMonth } from '@/utils/date';
import { noop } from '@/utils/misc';

import * as styles from './style.module.scss';
import type { MonthitemProps } from './types';

const MonthPickeritem = (props: MonthitemProps) => {
  const { disabled, months, onClickMonthItem, selectedDate, selectedYear } =
    props;

  const handleOnClickMonthItem: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (months && months.value && !disabled) onClickMonthItem(months.value);
    },
    [months, disabled, onClickMonthItem]
  );

  const { onClick } = useButtonRipples({
    enabled: !disabled,
    onClick: handleOnClickMonthItem,
    ripplesClassName: styles['button-ripple']
  });

  const { isSelected, isToday } = useMemo(() => {
    //INFO: method to set selected month
    const combinedDate = new Date(
      new Date(selectedYear, months.value - 1)
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
      isSelected,
      isToday
    };
  }, [months.value, selectedDate, selectedYear]);

  return (
    <button
      type="button"
      aria-label="month item"
      data-selected={isSelected}
      data-today={isToday}
      tabIndex={0}
      disabled={disabled}
      onKeyDown={noop}
      onClick={onClick}
    >
      <Typography
        modifier="body-lg"
        fontWeight="medium"
        role="presentation"
        textAlign="center"
        aria-label="month text"
      >
        {months.name}
      </Typography>
    </button>
  );
};

export default memo(MonthPickeritem);
