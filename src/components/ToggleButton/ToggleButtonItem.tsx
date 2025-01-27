import type { MouseEventHandler, PropsWithChildren } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import useMount from '@/hooks/useMount';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type { ToggleButtonItemFnType, ToggleButtonItemProps } from './types';

interface PrivateToggleButtonItemProps
  extends ToggleButtonItemProps<string | number> {
  onSelectItem?: (args: string | number, index: number) => void;
  position?: number;
  selected?: string | number;
}

const ToggleButtonItem: ToggleButtonItemFnType = (
  props: PropsWithChildren<ToggleButtonItemProps<string | number>>
) => {
  const { className, icon, onSelectItem, position, selected, value, ...res } =
    props as PrivateToggleButtonItemProps;
  const { color } = useDesignSystemProvider();

  const handleOnClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    onSelectItem?.(value, Number(position));
  };

  useMount(() => {
    if (selected === value) {
      onSelectItem?.(value, Number(position));
    }
  });

  return (
    <button
      {...res}
      type="button"
      value={value}
      data-is-selected={selected === value}
      className={cx(styles['toggle-button-item'], className)}
      onClick={handleOnClickButton}
    >
      <Icon
        icon={icon}
        size={20}
        color={selected === value ? color.WHITE : color.GRAYMAUVE1100}
      />
    </button>
  );
};

ToggleButtonItem.COMPONENT_NAME = 'toggle-button-item';

export default ToggleButtonItem;
