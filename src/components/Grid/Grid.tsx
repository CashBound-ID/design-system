import type { CSSProperties, PropsWithChildren } from 'react';
import { Children, cloneElement, useMemo } from 'react';

import { cx } from '@/utils/css';
import { isCompoundComponentValid } from '@/utils/dom';

import GridItem from './GridItem';
import * as styles from './style.module.scss';
import type { GridFnType, GridProps } from './types';

const Grid: GridFnType = (props: PropsWithChildren<GridProps>) => {
  const {
    'aria-label': ariaLabel = 'grid container',
    children,
    className,
    gap = 16,
    role = 'region',
    ...res
  } = props;

  const injectedProps = useMemo(() => {
    if (typeof gap === 'number') {
      return { gapHorizontal: gap / 2, gapVertical: gap / 2 };
    }

    if (typeof gap === 'object' && Array.isArray(gap) && gap.length === 2) {
      const [gapVertical, gapHorizontal] = gap;

      return { gapHorizontal: gapHorizontal / 2, gapVertical: gapVertical / 2 };
    }

    return { gapHorizontal: 0, gapVertical: 0 };
  }, [gap]);

  const style = useMemo<CSSProperties>(() => {
    const { gapHorizontal, gapVertical } = injectedProps;

    return { margin: `-${gapVertical}px -${gapHorizontal}px 0` };
  }, [injectedProps]);

  return (
    <section
      role={role}
      aria-label={ariaLabel}
      className={cx(styles.grid, className)}
      {...res}
    >
      <section className={cx(styles['grid-row'], className)} style={style}>
        {Children.map(children, (child) => {
          if (isCompoundComponentValid(child, 'grid-item')) {
            return cloneElement(child, injectedProps);
          }

          return null;
        })}
      </section>
    </section>
  );
};

Grid.Item = GridItem;

// @ts-expect-error irfanandriansyah10@gmail.com - Expected error to enhance debugging by adding displayName in production.
Grid.displayName = 'Grid';

export default Grid;
