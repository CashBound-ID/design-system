import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import type { NullAble } from '@/types/utils';

import type {
  BaseSnackbarProps,
  SnackbarImperativeRefType,
  SnackbarRefType
} from './types';
import Snackbar from '.';

const SnackbarImperative = forwardRef<SnackbarImperativeRefType, unknown>(
  (_, ref) => {
    const [snackbarPayload, setSnackbarPayload] = useState<
      BaseSnackbarProps | false
    >(false);
    const snackbarRef = useRef<SnackbarRefType>(null);
    const snackbarQueue = useRef<NullAble<BaseSnackbarProps>>(null);

    useEffect(() => {
      if (!snackbarPayload && snackbarQueue.current) {
        setSnackbarPayload(snackbarQueue.current);
        snackbarQueue.current = null;
      }
    }, [snackbarPayload]);

    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          if (snackbarRef.current) snackbarRef.current.close();
        },
        open: (props) => {
          if (snackbarRef.current) {
            snackbarQueue.current = props;
            snackbarRef.current.close();
          } else {
            setSnackbarPayload(props);
          }
        }
      }),
      []
    );

    if (snackbarPayload) {
      return (
        <Snackbar
          ref={snackbarRef}
          {...snackbarPayload}
          onClose={setSnackbarPayload}
        />
      );
    }

    return null;
  }
);

export default SnackbarImperative;
