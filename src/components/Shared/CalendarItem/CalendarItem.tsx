import type { MouseEventHandler } from 'react';
import { memo, useCallback } from 'react';

import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { noop } from '@/utils/misc';

import * as styles from './style.module.scss';
import type { CalendarItemProps } from './types';

const CalendarItem = (props: CalendarItemProps) => {
  const {
    date,
    disabled = false,
    isSelected,
    isToday,
    label,
    onClickCalendarItem
  } = props;

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
      className={styles['button-calendar']}
    >
      <Typography
        modifier="body-lg"
        fontWeight="medium"
        role="presentation"
        textAlign="center"
        aria-label="calendar text"
      >
        {label}
      </Typography>
    </button>
  );
};

export default memo(CalendarItem);
