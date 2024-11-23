import { useEffect, useRef } from 'react';

/**
 * A custom hook that executes a function only once on component mount.
 *
 * @param fn - The function to execute on mount.
 */
const useMount = (fn: () => void) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fn();
    }
  }, [fn]);
};

export default useMount;
