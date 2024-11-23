import type { HTMLAttributes } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

type ChipHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface ChipProps extends ChipHTMLProps {
  /**
   * Determines whether the chip is clickable.
   * When set to `true`, the chip can be interacted with like a button.
   */
  clickable?: boolean;

  /**
   * Indicates whether the chip is disabled.
   * A disabled chip is non-interactive and may appear visually distinct.
   */
  disabled?: boolean;

  /**
   * Specifies the icon to display in the chip.
   * The icon should be of type `CashboundIconType`.
   */
  icon?: CashboundIconType;

  /**
   * Indicates whether the chip is in a selected state.
   * A selected chip may have a distinct appearance to signify its active state.
   */
  selected?: boolean;
}

const Chip = (props: ChipProps) => {
  const {
    'aria-label': ariaLabel = 'chip',
    children,
    className,
    clickable,
    disabled,
    icon,
    selected,
    ...res
  } = props;

  return (
    <section
      {...res}
      aria-label={ariaLabel}
      className={cx(styles['chip'], className)}
      data-disabled={disabled}
      data-selected={selected}
      data-clickable={clickable}
      data-icon={Boolean(icon)}
      role={clickable ? 'button' : 'presentation'}
    >
      {icon && <Icon className={styles['chip-icon']} icon={icon} size={16} />}

      <Typography
        className={styles['chip-text']}
        modifier="body-md"
        tag="span"
        fontWeight="medium"
      >
        {children}
      </Typography>
    </section>
  );
};

export default Chip;
