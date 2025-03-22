import type { HTMLAttributes } from 'react';

import { cx } from '@/utils/css';
import type { GenericHTMLProps } from '@/types/react';
import type { Radius, Shadow } from '@/types/theme';

import * as styles from './style.module.scss';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface CardProps extends BaseHTMLProps {
  /** Whether the card should have a background */
  background?: string;
  /** Whether the card should have a border */
  border?: string;
  /** The margin around the card */
  margin?: string | number;
  /** The padding inside the card */
  padding?: string | number;
  /** Whether the card should have rounded corners */
  radius?: keyof Radius;
  /** The shadow level for the card */
  shadow?: keyof Shadow;
  /** The shadow level when interacting with the card */
  shadowOnInteract?: keyof Shadow;
}

const Card = (props: CardProps) => {
  const {
    'aria-label': ariaLabel = 'card',
    background,
    border,
    className,
    margin,
    padding = 16,
    radius = 'md',
    role = 'presentation',
    shadow,
    shadowOnInteract,
    style,
    ...res
  } = props;

  return (
    <section
      className={cx(styles['card'], className)}
      role={role}
      aria-label={ariaLabel}
      data-shadow={shadow}
      data-radius={radius}
      data-shadow-on-interact={shadowOnInteract}
      style={{ ...style, background, border, margin, padding }}
      {...res}
    />
  );
};

export default Card;
