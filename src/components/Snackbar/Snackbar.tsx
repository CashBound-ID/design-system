import type { AnimationEventHandler, MouseEventHandler } from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Flex from '@/components/Flex';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';
import useMount from '@/hooks/useMount';

import { cx } from '@/utils/css';
import { WHITE } from '@/constant/theme';

import * as styles from './style.module.scss';
import type { SnackbarProps, SnackbarRefType } from './types';

const Snackbar = forwardRef<SnackbarRefType, SnackbarProps>(
  (props: SnackbarProps, ref) => {
    const {
      autoClose = 5000,
      ctaLabel,
      icon,
      iconColor = WHITE,
      message,
      onClose,
      onCtaClick
    } = props;
    const {
      color,
      elements: {
        'snackbar-cta-modifier': ctaModifier = 'body-md',
        'snackbar-text-modifier': textModifier = 'body-md',
        'snackbar-z-index': zIndex = 100
      }
    } = useDesignSystemProvider();
    const node = useRef<HTMLElement>(null);

    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          if (node.current) node.current.setAttribute('data-animate', 'hide');
        }
      }),
      []
    );

    const handleHideToaster = () => {
      if (node.current) node.current.setAttribute('data-animate', 'hide');
    };

    const handleOnClickCTA: MouseEventHandler<HTMLButtonElement> = useCallback(
      (e) => {
        e.preventDefault();

        if (onCtaClick) onCtaClick(e);
        // handleHideToaster();
      },
      [onCtaClick]
    );

    const handleOnAnimationEnd: AnimationEventHandler<HTMLElement> = (e) => {
      const { currentTarget } = e;

      if (currentTarget.getAttribute('data-animate') === 'show') {
        currentTarget.removeAttribute('data-n-animate');
      } else if (onClose) {
        onClose(false);
      }
    };

    const { onClick } = useButtonRipples({
      enabled: Boolean(ctaLabel && onCtaClick),
      onClick: handleOnClickCTA,
      ripplesClassName: styles['button-ripple-light']
    });

    useEffect(() => {
      if (autoClose) {
        const timeout = setTimeout(() => {
          handleHideToaster();
        }, autoClose);

        return () => {
          clearTimeout(timeout);
        };
      }
      return;
    }, [autoClose, message]);

    useMount(() => {
      if (node.current) node.current.setAttribute('data-animate', 'show');
    });

    return (
      <section
        ref={node}
        style={{ '--z-index': zIndex }}
        className={cx(styles['snackbar'], 'animate')}
        onAnimationEnd={handleOnAnimationEnd}
      >
        <Flex
          className={styles['snackbar-container']}
          gap={8}
          align="center"
          tag="section"
        >
          {icon && <Icon icon={icon} color={iconColor} size={20} />}

          <Typography
            tag="p"
            modifier={textModifier}
            className="snackbar__text"
            color={color.WHITE}
            margin="0"
          >
            {message}
          </Typography>

          <Flex gap={4} align="center">
            {ctaLabel && (
              <button
                className={styles['snackbar-cta']}
                type="button"
                onClick={onClick}
              >
                <Typography
                  modifier={ctaModifier}
                  fontWeight="medium"
                  color={color.VIOLET600}
                >
                  {ctaLabel}
                </Typography>
              </button>
            )}
          </Flex>
        </Flex>
      </section>
    );
  }
);

export default Snackbar;
