import type { PropsWithChildren } from 'react';
import {
  Children,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import useIndicatorAnimation from '@/hooks/useIndicatorAnimation';

import { cx } from '@/utils/css';
import { isCompoundComponentValid } from '@/utils/dom';

import * as styles from './style.module.scss';
import TabItem from './TabsItem';
import type { TabFnType, TabProps } from './types';

const Tabs: TabFnType = (props: PropsWithChildren<TabProps>) => {
  const {
    activeKey,
    children,
    className,
    colorActive,
    colorInactive,
    fontWeight = 'medium',
    modifier = 'body-md',
    onTabClick,
    variant,
    withBorder,
    ...res
  } = props;
  const {
    action: { onChangeActiveIndex, onContainerScroll },
    element: { container, indicator }
  } = useIndicatorAnimation(children);
  const { color } = useDesignSystemProvider();
  const [tempValue, setValue] = useState(activeKey);

  const handleOnChangePositiion = useCallback(
    (value: string | number, position: number) => {
      setValue(value);
      onChangeActiveIndex(position);
    },
    [onChangeActiveIndex]
  );

  const TabItem = useMemo(() => {
    const result = Children.map(children, (child, index) => {
      if (isCompoundComponentValid(child, 'tab-item')) {
        const currentKey = child.props?.keyName || index;
        const active = currentKey === tempValue;

        return cloneElement(child, {
          active,
          colorActive: colorActive || color.GRAYMAUVE1200,
          colorInactive: colorInactive || color.GRAYMAUVE1100,
          fontWeight,
          modifier,
          onSelectItem: handleOnChangePositiion,
          position: index,
          variant
        } as Record<string, unknown>);
      }

      return null;
    });

    return result;
  }, [
    children,
    color.GRAYMAUVE1100,
    color.GRAYMAUVE1200,
    colorActive,
    colorInactive,
    fontWeight,
    handleOnChangePositiion,
    modifier,
    tempValue,
    variant
  ]);

  useEffect(() => {
    onTabClick(tempValue);
  }, [onTabClick, tempValue]);

  return (
    <section className={styles['tab']}>
      <section
        {...res}
        className={cx(styles['tab-container'], className)}
        data-with-border={withBorder}
        data-variant={variant}
        ref={container}
        onScroll={onContainerScroll}
      >
        {TabItem}

        <section
          ref={indicator}
          className={cx(styles['tab-indicator'], className)}
        />
      </section>
    </section>
  );
};

Tabs.Item = TabItem;

export default Tabs;
