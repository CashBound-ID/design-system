import type { HTMLAttributes } from 'react';

import { cx } from '@/utils/css';
import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

type SpanHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLSpanElement>>;

interface IconProps extends SpanHTMLProps {
  /** The color of the icon */
  color?: string;
  /** The type of the icon */
  icon: CashboundIconType;
  /** The margin around the icon */
  margin?: number | string;
  /** The size of the icon */
  size?: number;
}

const Icon = (props: IconProps) => {
  const {
    'aria-label': ariaLabel = 'fithub icon',
    className,
    color,
    icon,
    margin,
    role = 'img',
    size = 16,
    ...res
  } = props;

  return (
    <span
      {...res}
      className={cx('cashbound-icon', styles['icon'], className)}
      style={{
        color,
        fontSize: size,
        height: size,
        margin,
        minHeight: size,
        minWidth: size,
        position: 'relative',
        textAlign: 'center',
        width: size
      }}
      role={role}
      aria-label={ariaLabel}
      data-icon={icon}
    />
  );
};

Icon.displayName = 'Icon';

export default Icon;
