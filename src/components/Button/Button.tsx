import { useMemo } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import Spinner from '@/components/Spinner';
import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { cx } from '@/utils/css';
import type { TypographyModifier } from '@/types/theme';
import type { Maybe } from '@/types/utils';

import * as styles from './style.module.scss';
import type { ButtonProps, ButtonSizeType } from './types';

const Button = (props: ButtonProps) => {
  const {
    'aria-label': ariaLabel = 'cashbound button',
    block = false,
    children,
    className,
    disabled = false,
    icon,
    iconPosition = 'pre',
    loading = false,
    margin,
    modifier = 'primary',
    onClick: onClickProps,
    size = 'md',
    variant = 'fill',
    ...res
  } = props;
  const {
    color,
    elements: {
      'button-general--lg-icon-size': lgIcon = 20,
      'button-general--lg-text-modifier': lgText = 'body-md',
      'button-general--md-icon-size': mdIcon = 20,
      'button-general--md-text-modifier': mdText = 'body-md',
      'button-general--sm-icon-size': smIcon = 16,
      'button-general--sm-text-modifier': smText = 'body-sm'
    }
  } = useDesignSystemProvider();
  const { onClick } = useButtonRipples({
    enabled: variant === 'fill' || variant === 'outline',
    onClick: onClickProps,
    // ripplesClassName: styles['button-ripple']
    ripplesClassName: ''
  });

  const { iconSize, spinnerColor, spinnerSize, textModifier } = useMemo(() => {
    let spinnerColor: Maybe<string>;

    switch (variant) {
      case 'fill':
        spinnerColor = modifier === 'primary' ? color.WHITE : color.WHITE;
        break;

      case 'outline':
        spinnerColor =
          modifier === 'primary' ? color.VIOLET1200 : color.REDTOMATO1100;
        break;

      case 'text':
        spinnerColor =
          modifier === 'primary' ? color.VIOLET1200 : color.REDTOMATO1100;
        break;
    }

    const TEXT_MODIFIER_PRESET: Record<
      ButtonSizeType,
      keyof TypographyModifier
    > = {
      lg: lgText,
      md: mdText,
      sm: smText
    };

    const ICON_SIZE_PRESET: Record<ButtonSizeType, number> = {
      lg: lgIcon,
      md: mdIcon,
      sm: smIcon
    };

    return {
      iconSize: ICON_SIZE_PRESET[size],
      spinnerColor,
      spinnerSize: ICON_SIZE_PRESET[size],
      textModifier: TEXT_MODIFIER_PRESET[size]
    };
  }, [
    color.REDTOMATO1100,
    color.VIOLET1200,
    color.WHITE,
    lgIcon,
    lgText,
    mdIcon,
    mdText,
    modifier,
    size,
    smIcon,
    smText,
    variant
  ]);

  if (!spinnerColor) return null;

  return (
    <button
      {...res}
      className={cx(styles.button, className)}
      aria-label={ariaLabel}
      style={{ margin }}
      disabled={disabled}
      data-icon={icon}
      data-only-icon={Boolean(icon && !children)}
      data-loading={Boolean(loading && disabled !== true)}
      data-icon-position={icon && iconPosition ? iconPosition : undefined}
      data-modifier={modifier}
      data-size={size}
      data-block={block}
      data-variant={variant}
      onClick={onClick}
    >
      {Boolean(loading && disabled !== true) && (
        <Spinner
          className={styles['button-spinner']}
          spinnerColor={spinnerColor}
          size={spinnerSize}
          spinnerWidth={2}
        />
      )}

      <section className={styles['button-container']}>
        {icon && (
          <Icon className={styles['button-icon']} icon={icon} size={iconSize} />
        )}

        <Typography
          display="inline"
          className={styles['button-text']}
          tag="span"
          fontWeight="medium"
          textAlign="center"
          modifier={textModifier}
        >
          {children}
        </Typography>
      </section>
    </button>
  );
};

export default Button;
