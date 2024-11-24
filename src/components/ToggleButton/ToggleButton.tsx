import {
  Children,
  cloneElement,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import Flex from '@/components/Flex';
import useIndicatorAnimation from '@/hooks/useIndicatorAnimation';

import { isCompoundComponentValid } from '@/utils/dom';

import * as styles from './style.module.scss';
import ToggleButtonItem from './ToggleButtonItem';
import type { ToggleButtonFnType, ToggleButtonProps } from './types';

function ToggleButton<T extends number | string>(
  props: PropsWithChildren<ToggleButtonProps<T>>
) {
  const { children, onChange, value } = props;
  const {
    action: { onChangeActiveIndex },
    element: { container, indicator }
  } = useIndicatorAnimation(children);
  const [tempValue, setValue] = useState<T>(value);

  const handleOnChangePositiion = useCallback(
    (value: T, position: number) => {
      setValue(value);
      onChangeActiveIndex(position);
    },
    [onChangeActiveIndex]
  );

  const injectedProps = useMemo(() => {
    return {
      onSelectItem: handleOnChangePositiion,
      selected: tempValue
    };
  }, [handleOnChangePositiion, tempValue]);

  useEffect(() => {
    onChange(tempValue);
  }, [onChange, tempValue]);

  let toggleButtonIndex = 0;

  return (
    <Flex
      componentRef={container}
      align="center"
      className={styles['toggle-button']}
    >
      {Children.map(children, (child) => {
        const currentIndex = toggleButtonIndex;
        toggleButtonIndex += 1;

        if (isCompoundComponentValid(child, 'toggle-button-item')) {
          return cloneElement(child, {
            ...injectedProps,
            position: currentIndex
          } as object);
        }

        return null;
      })}
      <section className={styles['toggle-button-indicator']} ref={indicator} />
    </Flex>
  );
}

ToggleButton.Item = ToggleButtonItem;

export default ToggleButton as unknown as ToggleButtonFnType;
