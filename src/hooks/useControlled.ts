import { useCallback, useState } from 'react';

type UseControlledArgs<T> = {
  defaultValue: T;
  propValue: T | undefined;
};

const useControlled = <T>({
  defaultValue,
  propValue
}: UseControlledArgs<T>): [T, (newValue: T) => void] => {
  const controlled = propValue !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);
  const value = controlled ? propValue : localValue;

  const setValue = useCallback(
    (newValue: T) => {
      if (!controlled) setLocalValue(newValue);
    },
    [controlled]
  );

  return [value, setValue];
};

export default useControlled;
