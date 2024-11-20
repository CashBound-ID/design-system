import type { CSSProperties } from 'react';
import { useMemo } from 'react';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type { GridItemFnType, GridItemProps } from './types';

interface PrivateGridItemProps extends GridItemProps {
  gapHorizontal?: number;
  gapVertical?: number;
}

const GridItem: GridItemFnType = (props: PrivateGridItemProps) => {
  const {
    'aria-label': ariaLabel = 'grid item',
    className,
    col,
    gapHorizontal,
    gapVertical,
    lg,
    md,
    role = 'region',
    sm,
    xl,
    xs,
    ...res
  } = props;

  const style = useMemo<CSSProperties>(
    () => ({ padding: `${gapVertical}px ${gapHorizontal}px` }),
    [gapHorizontal, gapVertical]
  );
  return (
    <section
      className={cx(styles['grid-item'], className)}
      role={role}
      aria-label={ariaLabel}
      data-col={col}
      data-col-lg={lg}
      data-col-md={md}
      data-col-sm={sm}
      data-col-xs={xs}
      data-col-xl={xl}
      style={style}
      {...res}
    />
  );
};

GridItem.COMPONENT_NAME = 'grid-item';

// @ts-expect-error irfanandriansyah10@gmail.com - Expected error to enhance debugging by adding displayName in production.
GridItem.displayName = 'Grid.Item';

export default GridItem;
