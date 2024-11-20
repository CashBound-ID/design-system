import type { HTMLAttributes } from 'react';

import { cx } from '@/utils/css';
import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

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
      style={{
        color,
        display: 'inline-block',
        fontSize: size,
        height: size,
        margin,
        position: 'relative',
        textAlign: 'center',
        width: size
      }}
      role={role}
      aria-label={ariaLabel}
      data-icon={icon}
      className={cx('cashbound-icon', className)}
    />
  );
};

Icon.displayName = 'Icon';

export default Icon;
