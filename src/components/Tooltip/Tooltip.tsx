import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Typography from '@/components/Typography';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type { TooltipProps } from './types';

const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const { children, position, title, trigger = 'hover' } = props;
  const {
    color: { WHITE }
  } = useDesignSystemProvider();
  const [showTooltip, toggleShowTooltip] = useState(false);
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleOnHoverContainer = useCallback(() => {
    if (trigger === 'hover') {
      toggleShowTooltip(true);
      setIsVisibleTooltip(true);
      return;
    }
  }, [trigger]);

  const handleOnUnhoverContainer = useCallback(() => {
    if (trigger === 'hover') {
      setIsVisibleTooltip(false);
      return;
    }
  }, [trigger]);

  const handleOnClickContainer = useCallback(
    (event: MouseEvent) => {
      if (trigger === 'click' && ref.current) {
        if (ref.current.contains(event.target as HTMLElement)) {
          toggleShowTooltip(true);
          setIsVisibleTooltip(true);
          return;
        }

        setIsVisibleTooltip(false);
      }
    },
    [trigger]
  );

  const handleOnAnimationEnd = useCallback(() => {
    if (!isVisibleTooltip) {
      toggleShowTooltip(false);
      return;
    }
  }, [isVisibleTooltip]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOnClickContainer);

    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleOnHoverContainer);
      ref.current.addEventListener('mouseleave', handleOnUnhoverContainer);
    }

    return () => {
      document.removeEventListener('mousedown', handleOnClickContainer);

      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleOnHoverContainer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current.removeEventListener('mouseleave', handleOnUnhoverContainer);
      }
    };
  }, [
    handleOnClickContainer,
    handleOnHoverContainer,
    handleOnUnhoverContainer
  ]);

  return (
    <section className={styles.tooltip}>
      <section ref={ref}>{children}</section>

      {showTooltip && (
        <section
          className={cx(styles['tooltip__content'], 'animate')}
          data-visible={isVisibleTooltip}
          data-position={position}
          onAnimationEnd={handleOnAnimationEnd}
        >
          {typeof title === 'string' || typeof title === 'number' ? (
            <Typography color={WHITE} ellipsis modifier="body-sm">
              {title}
            </Typography>
          ) : (
            title
          )}
        </section>
      )}
    </section>
  );
};

export default Tooltip;
