import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to debounce changes in value and execute a function after a specified duration.
 *
 * @template T
 * @param value - The value to be debounced.
 * @param fn - The function to execute after the debounce duration.
 * @param duration - The debounce duration in milliseconds. Default is 500ms.
 * @returns A tuple containing the debounced value and a setter function for updating the value.
 */
const useDebounce = <T>(
  value: T,
  fn: (args: T) => void,
  duration: number = 500
) => {
  const [tempValue, setTempValue] = useState<T>(value);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (tempValue !== value) {
      setTempValue(value);
    }

    // INFO: disable tempValue add on dependencies prevent re-render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeoutId = setTimeout(() => fn(tempValue), duration);

    return () => clearTimeout(timeoutId);
  }, [duration, fn, tempValue]);

  return [tempValue, setTempValue] as const;
};

export default useDebounce;
