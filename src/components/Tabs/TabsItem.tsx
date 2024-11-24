import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useCallback } from 'react';

import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';
import useMount from '@/hooks/useMount';

import { cx } from '@/utils/css';
import type { Color, FontWeight, TypographyModifier } from '@/types/theme';

import * as styles from './style.module.scss';
import type { TabItemFnType, TabItemProps, TabVariantType } from './types';

interface PrivateTabItemProps extends TabItemProps {
  active: boolean;
  colorActive: keyof Color;
  colorInactive: keyof Color;
  fontWeight: keyof FontWeight;
  modifier: keyof TypographyModifier;
  onSelectItem?: (args: string | number, index: number) => void;
  position?: number;
  variant: TabVariantType;
}

const TabItem: TabItemFnType = (props: TabItemProps) => {
  const {
    active,
    children,
    className,
    colorActive,
    colorInactive,
    fontWeight,
    keyName,
    modifier,
    onSelectItem,
    position,
    variant,
    ...res
  } = props as PropsWithChildren<PrivateTabItemProps>;

  const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      onSelectItem?.(keyName, Number(position));
    },
    [keyName, onSelectItem, position]
  );

  const { onClick } = useButtonRipples({
    enabled: true,
    onClick: handleOnClick,
    ripplesClassName: styles['button-ripple']
  });

  useMount(() => {
    if (active) {
      onSelectItem?.(keyName, Number(position));
    }
  });

  return (
    <section
      {...res}
      data-variant={variant}
      data-active={active}
      role="button"
      tabIndex={0}
      className={cx(styles['tab-item'], className)}
      onKeyDown={() => {}}
      onClick={onClick}
    >
      <Typography
        className={styles['tab-item-text']}
        fontWeight={fontWeight}
        modifier={modifier}
        textAlign="center"
        color={active ? colorActive : colorInactive}
      >
        {children}
      </Typography>
    </section>
  );
};

TabItem.COMPONENT_NAME = 'tab-item';

export default TabItem;
