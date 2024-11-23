import type { MouseEventHandler } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type {
  BottomNavigationItemFnType,
  BottomNavigationItemProps
} from './types';

interface PrivateBottomNavigationItemProps
  extends BottomNavigationItemProps<string | number> {
  onSelectItem?: (args: string | number) => void;
  selected?: string | number;
}

const BottomNavigationItem: BottomNavigationItemFnType = (
  props: BottomNavigationItemProps<string | number>
) => {
  const { className, icon, label, onSelectItem, selected, value, ...res } =
    props as PrivateBottomNavigationItemProps;

  const handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    onSelectItem?.(value);
  };

  const { onClick } = useButtonRipples({
    enabled: true,
    onClick: handleOnClickButton,
    ripplesClassName: styles['button-ripple']
  });

  return (
    <button
      {...res}
      className={cx(styles['bottom-navigation-item'], className)}
      type="button"
      data-isselected={selected === value}
      onClick={onClick}
    >
      <Icon
        className={styles['bottom-navigation-icon']}
        icon={icon}
        size={20}
      />

      <Typography
        className={styles['bottom-navigation-text']}
        modifier="body-sm"
        fontWeight="medium"
        textAlign="center"
      >
        {label}
      </Typography>
    </button>
  );
};

BottomNavigationItem.COMPONENT_NAME = 'bottom-navigation-item';

export default BottomNavigationItem;
