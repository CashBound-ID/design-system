import { type HTMLAttributes } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import { CHIP_TYPE } from './constant';
import * as styles from './style.module.scss';

type ChipInfoHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface ChipInfoProps extends ChipInfoHTMLProps {
  /**
   * Test identifier used for testing purposes.
   * This attribute helps identify the element during testing.
   */
  'data-testid'?: string;

  /**
   * Specifies the icon to display in the chip.
   * The icon should be of type `CashboundIconType`.
   */
  icon?: CashboundIconType;

  /**
   * Visual style variant of the banner
   */
  type: 'success' | 'neutral' | 'warning' | 'error';
}

const ChipInfo = (props: ChipInfoProps) => {
  const {
    'aria-label': ariaLabel = 'chip info',
    children,
    className,
    'data-testid': dataTestId = 'chip-info',
    icon,
    type = 'neutral',
    ...res
  } = props;
  const color = CHIP_TYPE[type];

  return (
    <section
      {...res}
      aria-label={ariaLabel}
      className={cx(styles['chip'], className)}
      style={{
        '--background-color': color.background,
        '--border-color': color.border
      }}
      data-icon={Boolean(icon)}
      data-testid={dataTestId}
    >
      {icon && (
        <Icon
          className={styles['chip-icon']}
          icon={icon}
          size={16}
          color={color.icon}
        />
      )}

      <Typography
        className={styles['chip-text']}
        modifier="body-md"
        tag="span"
        fontWeight="medium"
        color={color.text}
      >
        {children}
      </Typography>
    </section>
  );
};

export default ChipInfo;
