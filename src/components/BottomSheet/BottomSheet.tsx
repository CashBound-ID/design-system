import type { PropsWithChildren } from 'react';
import { useEffect, useImperativeHandle, useMemo, useRef } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Flex from '@/components/Flex';
import Overlay from '@/components/Shared/Overlay';
import Portal from '@/components/Shared/Portal';
import SingleSwitch from '@/components/Shared/SingleSwitch';
import { useModal } from '@/hooks/useModal';

import BottomSheetContent from './BottomSheetContent';
import BottomSheetFooter from './BottomSheetFooter';
import BottomSheetHeader from './BottomSheetHeader';
import * as styles from './style.module.scss';
import type { BottomSheetFnType, BottomSheetProps } from './types';
import dragHandleInit from './utils';

const BottomSheet: BottomSheetFnType = (
  props: PropsWithChildren<BottomSheetProps>
) => {
  const {
    'aria-label': ariaLabel,
    children,
    componentRef,
    'data-testid': dataTestId,
    disableCloseByDrag,
    overlayProps,
    showDragHandle = false,
    snapPoints
  } = props;
  const rootRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dragHandleRef = useRef<HTMLButtonElement>(null);
  const {
    elements: {
      'bottom-sheet-max-height': maxHeight = '90%',
      'bottom-sheet-overlay-z-index': overlayZIndex = 40,
      'bottom-sheet-z-index': bottomSheetZIndex = 40
    }
  } = useDesignSystemProvider();
  const {
    actions: { close, onAnimationEnd, onClickOverlay },
    state: { show }
  } = useModal({
    onAnimationEnd: props.onAnimationEnd,
    onClose: props.onClose,
    onOverlayClick: overlayProps?.onClick
  });

  useImperativeHandle(componentRef, () => ({ close }), [close]);

  useEffect(() => {
    const root = rootRef.current;
    const dragHandle = dragHandleRef.current;
    const header = headerRef.current;

    if (dragHandle && root && header) {
      const snapPointArr: Array<string | null> = snapPoints
        ? [snapPoints].flat()
        : [''];
      if (!disableCloseByDrag) snapPointArr.unshift(null);

      const draggable = dragHandleInit(root, header, snapPointArr, close);
      return draggable.destroy;
    }
    return;
  }, [close, disableCloseByDrag, snapPoints]);

  const injectedProps = useMemo(() => {
    return { onClose: close, showDragHandle };
  }, [close, showDragHandle]);

  return (
    <>
      <Overlay
        {...overlayProps}
        show={show}
        onClick={onClickOverlay}
        zIndex={overlayZIndex}
      />

      <Portal>
        <section
          style={{ '--max-height': maxHeight, '--z-index': bottomSheetZIndex }}
          className={styles['bottom-sheet']}
        >
          <section
            className={styles['bottom-sheet-container']}
            ref={rootRef}
            style={{
              maxHeight:
                snapPoints &&
                (typeof snapPoints === 'string' ? snapPoints : snapPoints[0])
            }}
            onAnimationEnd={onAnimationEnd}
            data-show={show}
            role="presentation"
            aria-label={ariaLabel}
            data-testid={dataTestId}
          >
            <section ref={headerRef} className={styles['bottom-sheet-header']}>
              {showDragHandle && (
                <button
                  ref={dragHandleRef}
                  type="button"
                  className={styles['bottom-sheet-drag-handle']}
                />
              )}
              <SingleSwitch
                match={'bottom-sheet-header'}
                additionalProps={injectedProps}
              >
                {children}
              </SingleSwitch>
            </section>

            <Flex vertical className={styles['bottom-sheet-wrapper']}>
              <SingleSwitch match={'bottom-sheet-content'}>
                {children}
              </SingleSwitch>

              <SingleSwitch match={'bottom-sheet-footer'}>
                {children}
              </SingleSwitch>
            </Flex>
          </section>
        </section>
      </Portal>
    </>
  );
};

BottomSheet.Content = BottomSheetContent;

BottomSheet.Footer = BottomSheetFooter;

BottomSheet.Header = BottomSheetHeader;

export default BottomSheet;
