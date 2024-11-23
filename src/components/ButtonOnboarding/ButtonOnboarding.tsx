import { useMemo } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import useButtonRipples from '@/hooks/useButtonRipples';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type { ButtonOnboardingProps } from './types';

const ButtonOnboarding = (props: ButtonOnboardingProps) => {
  const {
    'aria-label': ariaLabel = 'cashbound button',
    children,
    className,
    disabled = false,
    icon,
    margin,
    onClick: onClickProps,
    selected,
    ...res
  } = props;
  const { color } = useDesignSystemProvider();
  const { onClick } = useButtonRipples({
    enabled: !disabled,
    onClick: onClickProps,
    ripplesClassName: styles['button-ripple']
  });

  const { textColor } = useMemo(() => {
    if (disabled) {
      return {
        textColor: 'rgba(0, 0, 0, 0.3)'
      };
    }

    if (selected) {
      return {
        textColor: color.WHITE
      };
    }

    return {
      textColor: color.GRAYMAUVE1200
    };
  }, [disabled, selected, color.GRAYMAUVE1200, color.WHITE]);

  return (
    <button
      {...res}
      className={cx(styles['button-onboarding'], className)}
      aria-label={ariaLabel}
      style={{ margin }}
      disabled={disabled}
      data-selected={selected}
      onClick={onClick}
    >
      <Icon icon={icon} size={20} color={textColor} />

      <Typography
        tag="span"
        modifier="body-md"
        fontWeight="medium"
        color={textColor}
      >
        {children}
      </Typography>
    </button>
  );
};

export default ButtonOnboarding;
