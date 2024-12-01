import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useRef } from 'react';

import type { Maybe } from '@/types/utils';

import SnackbarImperative from './SnackbarImperative';
import type { SnackbarImperativeRefType } from './types';

const _SnackbarContext =
  createContext<Maybe<SnackbarImperativeRefType>>(undefined);

const SnackbarProvider = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const snackbarRef = useRef<SnackbarImperativeRefType>(null);

  const contextValue = useMemo<SnackbarImperativeRefType>(() => {
    return {
      close: () => {
        if (snackbarRef.current) snackbarRef.current.close();
      },
      open: (args) => {
        if (snackbarRef.current) snackbarRef.current.open(args);
      }
    };
  }, []);

  return (
    <_SnackbarContext.Provider value={contextValue}>
      {children}

      <SnackbarImperative ref={snackbarRef} />
    </_SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

export const useSnackbar = () => {
  const state = useContext(_SnackbarContext);

  if (!state) {
    throw new Error(`useSnackbar must be used within the Snackbar.Provider`);
  }

  return state;
};
