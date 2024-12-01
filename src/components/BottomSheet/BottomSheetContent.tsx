import type { PropsWithChildren } from 'react';

import * as styles from './style.module.scss';
import type {
  BottomSheetContentFnType,
  BottomSheetContentProps
} from './types';

const BottomSheetContent: BottomSheetContentFnType = (
  props: PropsWithChildren<BottomSheetContentProps>
) => {
  const {
    'aria-label': ariaLabel,
    children,
    'data-testid': dataTestId,
    padding
  } = props;

  return (
    <section
      aria-label={ariaLabel}
      data-testid={dataTestId}
      style={{ padding }}
      className={styles['bottom-sheet-content']}
    >
      {children}
    </section>
  );
};

BottomSheetContent.COMPONENT_NAME = 'bottom-sheet-content';

export default BottomSheetContent;
