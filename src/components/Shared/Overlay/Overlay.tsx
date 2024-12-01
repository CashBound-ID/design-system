import type { MouseEventHandler } from 'react';
import { useCallback } from 'react';

import Portal from '@/components/Shared/Portal';

import { cx } from '@/utils/css';
import { noop } from '@/utils/misc';

import * as styles from './style.module.scss';
import type { OverlayProps } from './types';

const Overlay = (props: OverlayProps) => {
  const {
    disabled = false,
    onClick,
    show = false,
    transparent = false,
    zIndex = 40,
    ...res
  } = props;

  const handleOnClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      if (!disabled && onClick) onClick(e);
    },
    [disabled, onClick]
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: `body { overflow: hidden; }` }}
      />

      <Portal>
        <section
          {...res}
          style={{ '--z-index': zIndex }}
          className={cx(styles['overlay'], 'animate')}
          role="button"
          tabIndex={0}
          data-show={show}
          data-transparent={transparent}
          onClick={handleOnClick}
          onKeyDown={noop}
        />
      </Portal>
    </>
  );
};

export default Overlay;
