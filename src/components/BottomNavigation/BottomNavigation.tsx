import { type PropsWithChildren, useEffect, useMemo, useState } from 'react';

import Flex from '@/components/Flex';
import MultiSwitch from '@/components/Shared/MultiSwitch';

import BottomNavigationItem from './BottomNavigationItem';
import * as styles from './style.module.scss';
import type { BottomNavigationFnType, BottomNavigationProps } from './types';

function BottomNavigation<T extends number | string>(
  props: PropsWithChildren<BottomNavigationProps<T>>
) {
  const { children, onChange, position, value } = props;
  const [tempValue, setValue] = useState<T>(value);

  const injectedProps = useMemo(() => {
    return {
      onSelectItem: setValue,
      selected: tempValue
    };
  }, [tempValue]);

  useEffect(() => {
    onChange(tempValue);
  }, [onChange, tempValue]);

  return (
    <Flex
      className={styles['bottom-navigation']}
      data-position={position}
      align="center"
      justify="center"
    >
      <MultiSwitch
        matchs="bottom-navigation-item"
        additionalProps={injectedProps}
      >
        {children}
      </MultiSwitch>
    </Flex>
  );
}

BottomNavigation.Item = BottomNavigationItem;

export default BottomNavigation as unknown as BottomNavigationFnType;
