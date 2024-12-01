import type { PropsWithChildren } from 'react';

import type { BaseModalFooterProps } from '@/types/modal';

import * as styles from './style.module.scss';
import type { BottomSheetFooterFnType } from './types';

const BottomSheetFooter: BottomSheetFooterFnType = (
  props: PropsWithChildren<BaseModalFooterProps>
) => {
  const {
    'aria-label': ariaLabel,
    children,
    'data-testid': dataTestId
  } = props;

  return (
    <section
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={styles['bottom-sheet-footer']}
    >
      {children}
    </section>
  );
};

BottomSheetFooter.COMPONENT_NAME = 'bottom-sheet-footer';

export default BottomSheetFooter;
