import { useMemo } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

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
    size = 'md',
    variant = 'fill',
    ...res
  } = props;
  const {
    color,
    elements: {
      'button-lg-icon-size': lgIcon = 20,
      'button-lg-text-modifier': lgText = 'body-md',
      'button-md-icon-size': mdIcon = 20,
      'button-md-text-modifier': mdText = 'body-md',
      'button-sm-icon-size': smIcon = 16,
      'button-sm-text-modifier': smText = 'body-sm'
    }
  } = useDesignSystemProvider();

  const { iconSize, spinnerColor, textModifier } = useMemo(() => {
    let spinnerColor: Maybe<string>;

    switch (variant) {
      case 'fill':
        spinnerColor = color.WHITE;
        break;

      case 'outline':
        spinnerColor = color.VIOLET1200;
        break;

      case 'text':
        spinnerColor = color.VIOLET1200;
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
    color.VIOLET1200,
    color.WHITE,
    lgIcon,
    lgText,
    mdIcon,
    mdText,
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
    >
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