import { type ButtonHTMLAttributes } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

type ChipActionableHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ChipActionableProps extends ChipActionableHTMLProps {
  /**
   * Test identifier used for testing purposes.
   * This attribute helps identify the element during testing.
   */
  'data-testid'?: string;

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

const ChipActionable = (props: ChipActionableProps) => {
  const {
    'aria-label': ariaLabel = 'chip actionable',
    children,
    className,
    'data-testid': dataTestId = 'chip-actionable',
    disabled,
    icon,
    selected,
    ...res
  } = props;

  return (
    <button
      {...res}
      aria-label={ariaLabel}
      className={cx(styles['chip'], className)}
      data-disabled={disabled}
      data-selected={selected}
      data-icon={Boolean(icon)}
      data-testid={dataTestId}
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
    </button>
  );
};

export default ChipActionable;
