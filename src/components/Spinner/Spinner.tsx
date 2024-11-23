import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import Icon from '@/components/Icon';

import { cx } from '@/utils/css';
import { GRAYMAUVE500 } from '@/constant/theme';

import * as styles from './style.module.scss';

interface SpinnerProps {
  /**
   * Whether the spinner should be centered.
   */
  center?: boolean;

  className?: string;

  /**
   * Whether the spinner should have a shadow.
   */
  shadow?: boolean;

  /**
   * The size of the spinner.
   */
  size: number;

  /**
   * The color of the spinner.
   */
  spinnerColor?: string;

  /**
   * The width of the spinner border.
   */
  spinnerWidth?: number;

  /**
   * Whether the spinner should be wrapped in a container.
   */
  withContainer?: boolean;
}

const Spinner = (props: SpinnerProps): JSX.Element => {
  const {
    center = false,
    className,
    shadow = false,
    size = 16,
    spinnerColor = GRAYMAUVE500,
    spinnerWidth = 2,
    withContainer = false
  } = props;

  const style = useMemo((): Record<string, CSSProperties> => {
    return {
      container: {
        height: withContainer ? size * 1.5 : 'initial',
        width: withContainer ? size * 1.5 : 'initial'
      },
      spinner: {
        borderLeftColor: spinnerColor,
        borderRightColor: spinnerColor,
        borderTopColor: spinnerColor,
        borderWidth: spinnerWidth,
        height: size,
        width: size
      }
    };
  }, [size, spinnerColor, spinnerWidth, withContainer]);

  return (
    <section
      aria-label="loading container"
      className={cx(styles['spinner'], className)}
      style={style.container}
      data-position-center={center}
      data-with-shadow={shadow}
      data-wrap-container={withContainer}
    >
      <Icon
        className={styles['spinner-content']}
        icon="loading"
        size={size}
        color={spinnerColor}
      />
    </section>
  );
};

export default Spinner;
