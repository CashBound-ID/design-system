import type { MouseEventHandler } from 'react';
import { memo, useCallback, useMemo } from 'react';

import dayjs from 'dayjs';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { setToMidnight } from '@/utils/date';
import { noop } from '@/utils/misc';

import * as styles from './style.module.scss';
import type { CalendarItemProps } from './types';

const CalendarItem = (props: CalendarItemProps) => {
  const { date, disabled, onClickCalendarItem, selectedDate } = props;
  const { color: colorTheme } = useDesignSystemProvider();

  const { currentDate, isSelected, isToday } = useMemo(() => {
    const isSelected = Boolean(selectedDate && date.getTime() === selectedDate);
    let isToday = false;

    const today = setToMidnight(new Date());

    if (!disabled) {
      if (today.getTime() === date.getTime()) {
        isToday = true;
      }

      return {
        currentDate: dayjs(date),
        isSelected,
        isToday
      };
    }

    return {
      color: colorTheme.GRAYMAUVE900,
      currentDate: dayjs(date),
      isSelected,
      isToday
    };
  }, [colorTheme.GRAYMAUVE900, date, disabled, selectedDate]);

  const handleOnClickDateItem: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (date && !disabled) onClickCalendarItem(date.getTime());
    },
    [date, disabled, onClickCalendarItem]
  );

  const { onClick } = useButtonRipples({
    enabled: !disabled,
    onClick: handleOnClickDateItem,
    ripplesClassName: styles['button-ripple']
  });

  return (
    <button
      type="button"
      aria-label="calendar item"
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
        aria-label="calendar text"
      >
        {currentDate.format('D')}
      </Typography>
    </button>
  );
};

export default memo(CalendarItem);
