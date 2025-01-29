import type { MouseEventHandler } from 'react';
import { useCallback, useMemo } from 'react';

import dayjs from 'dayjs';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import ButtonIcon from '@/components/ButtonIcon';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import { CALENDAR_DAY_INDICATOR } from '@/constant/date';

import * as styles from './style.module.scss';
import type { CalendarActionBarProps } from './types';

const CalendarActionBar = (props: CalendarActionBarProps) => {
  const { currentMonth, onClickPagination } = props;
  const { color } = useDesignSystemProvider();

  const formattedMonth = useMemo(() => {
    return dayjs(new Date(currentMonth)).format('MMM YYYY');
  }, [currentMonth]);

  const handleOnClickActionButton: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        if (e.currentTarget instanceof Element) {
          const label = e.currentTarget.getAttribute('aria-label');

          switch (label) {
            case 'prev year btn':
              onClickPagination({ type: 'previous', unit: 'year' });
              break;

            case 'prev month btn':
              onClickPagination({ type: 'previous', unit: 'month' });
              break;

            case 'next month btn':
              onClickPagination({ type: 'next', unit: 'month' });
              break;

            case 'next year btn':
              onClickPagination({ type: 'next', unit: 'year' });
              break;
          }
        }
      },
      [onClickPagination]
    );

  return (
    <Flex
      className={styles['calendar-action-bar']}
      aria-label="calendar action bar"
      vertical
      gap={4}
    >
      <Flex align="center">
        <section className={styles['calendar-action-bar__month-indicator']}>
          <Typography
            role="presentation"
            aria-label="current selected month"
            textAlign="left"
            modifier="body-lg"
            color={color.GRAYMAUVE1200}
          >
            <strong>{formattedMonth}</strong>
          </Typography>
        </section>

        <section className={styles['calendar-action-bar__button']}>
          <ButtonIcon
            variant="transparent"
            size="lg"
            type="button"
            aria-label="prev month btn"
            onClick={handleOnClickActionButton}
            icon="chevron-left"
          />
        </section>

        <section className={styles['calendar-action-bar__button']}>
          <ButtonIcon
            variant="transparent"
            size="lg"
            type="button"
            aria-label="next month btn"
            onClick={handleOnClickActionButton}
            icon="chevron-right"
          />
        </section>
      </Flex>

      <Flex className={styles['calendar-action-bar__days']} align="center">
        {CALENDAR_DAY_INDICATOR.map((item) => {
          return (
            <Typography
              key={item}
              role="presentation"
              aria-label="day indicator"
              textAlign="center"
              modifier="body-md"
              color={color.GRAYMAUVE1100}
            >
              {item}
            </Typography>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default CalendarActionBar;
