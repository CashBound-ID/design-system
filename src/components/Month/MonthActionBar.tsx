import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import ButtonIcon from '@/components/ButtonIcon';
import Flex from '@/components/Flex';
import Typography from '@/components/Typography';

import * as styles from './style.module.scss';
import type { MonthActionBarProps } from './types';

const MonthPickerActionBar = (props: MonthActionBarProps) => {
  const { currentYear, onChange } = props;
  const { color } = useDesignSystemProvider();

  const handleOnClickActionButton: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        if (e.currentTarget instanceof Element) {
          const label = e.currentTarget.getAttribute('aria-label');

          switch (label) {
            case 'prev year btn': {
              const countYear = currentYear - 1;
              onChange(countYear);
              break;
            }

            case 'next year btn': {
              const countYear = currentYear + 1;
              onChange(countYear);
              break;
            }
          }
        }
      },
      [onChange, currentYear]
    );

  return (
    <Flex className={styles['month-action-bar']} align="center" gap={4}>
      <section className={styles['month-action-bar__month-indicator']}>
        <Typography
          role="presentation"
          aria-label="current selected month"
          textAlign="left"
          modifier="body-lg"
          color={color.GRAYMAUVE1200}
        >
          <strong>{currentYear}</strong>
        </Typography>
      </section>

      <section className={styles['month-action-bar__button']}>
        <ButtonIcon
          variant="transparent"
          size="lg"
          type="button"
          aria-label="prev year btn"
          onClick={handleOnClickActionButton}
          icon="chevron-left"
        />
      </section>

      <section className={styles['month-action-bar__button']}>
        <ButtonIcon
          variant="transparent"
          size="lg"
          type="button"
          aria-label="next year btn"
          onClick={handleOnClickActionButton}
          icon="chevron-right"
        />
      </section>
    </Flex>
  );
};

export default MonthPickerActionBar;
