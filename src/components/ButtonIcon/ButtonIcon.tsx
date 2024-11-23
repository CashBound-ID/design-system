import { useMemo } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import Spinner from '@/components/Spinner';
import useButtonRipples from '@/hooks/useButtonRipples';

import { cx } from '@/utils/css';
import type { Maybe } from '@/types/utils';

import * as styles from './style.module.scss';
import type { ButtonIconProps, ButtonIconSizeType } from './types';

const ButtonIcon = (props: ButtonIconProps) => {
  const {
    'aria-label': ariaLabel = 'cashbound button icon',
    className,
    disabled = false,
    icon,
    loading = false,
    margin,
    onClick: onClickProps,
    size = 'md',
    variant = 'primary',
    ...res
  } = props;
  const {
    color,
    elements: {
      'button-icon--lg-icon-size': lgIcon = 24,
      'button-icon--md-icon-size': mdIcon = 24,
      'button-icon--sm-icon-size': smIcon = 20
    }
  } = useDesignSystemProvider();
  const { onClick } = useButtonRipples({
    enabled: true,
    onClick: onClickProps,
    ripplesClassName: styles['button-ripple']
  });

  const { iconSize, spinnerColor, spinnerSize } = useMemo(() => {
    let spinnerColor: Maybe<string>;

    switch (variant) {
      case 'primary':
        spinnerColor = color.VIOLET900;
        break;

      case 'transparent':
        spinnerColor = color.GRAYMAUVE1200;
        break;
    }

    const ICON_SIZE_PRESET: Record<ButtonIconSizeType, number> = {
      lg: lgIcon,
      md: mdIcon,
      sm: smIcon
    };

    return {
      iconSize: ICON_SIZE_PRESET[size],
      spinnerColor,
      spinnerSize: ICON_SIZE_PRESET[size]
    };
  }, [
    variant,
    lgIcon,
    mdIcon,
    smIcon,
    size,
    color.VIOLET900,
    color.GRAYMAUVE1200
  ]);

  if (!spinnerColor) return null;

  return (
    <button
      {...res}
      className={cx(styles['button-icon'], className)}
      aria-label={ariaLabel}
      style={{ margin }}
      disabled={disabled}
      data-loading={Boolean(loading && disabled !== true)}
      data-size={size}
      data-variant={variant}
      onClick={onClick}
    >
      {Boolean(loading && disabled !== true) && (
        <Spinner
          className={styles['button-icon-spinner']}
          spinnerColor={spinnerColor}
          size={spinnerSize}
          spinnerWidth={2}
        />
      )}

      {icon && (
        <Icon
          className={styles['button-icon-content']}
          icon={icon}
          size={iconSize}
        />
      )}
    </button>
  );
};

export default ButtonIcon;
