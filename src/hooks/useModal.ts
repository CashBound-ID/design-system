import type { MouseEventHandler } from 'react';
import { useCallback, useMemo, useState } from 'react';

interface UseModalArgs {
  onAnimationEnd?: (show: boolean) => void;
  onClose?: (isVisible: boolean) => void;
  onOverlayClick?: MouseEventHandler<HTMLElement>;
}

const useModal = (args: UseModalArgs) => {
  const { onAnimationEnd, onClose, onOverlayClick } = args;
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleOverlayClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      if (onOverlayClick) onOverlayClick(e);
      handleClose();
    },
    [handleClose, onOverlayClick]
  );

  const handleAnimationEnd = useCallback(() => {
    if (!isVisible && onClose) {
      onClose(false);
    }

    onAnimationEnd?.(isVisible);
  }, [onAnimationEnd, isVisible, onClose]);

  return useMemo(
    () => ({
      actions: {
        close: handleClose,
        onAnimationEnd: handleAnimationEnd,
        onClickOverlay: handleOverlayClick
      },
      state: { show: isVisible }
    }),
    [handleAnimationEnd, handleClose, handleOverlayClick, isVisible]
  );
};

export default useModal;
