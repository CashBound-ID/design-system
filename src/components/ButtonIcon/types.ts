import type { ButtonHTMLAttributes } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

type ButtonHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export type ButtonIconPositionType = 'pre' | 'post';
export type ButtonIconVariantType = 'transparent' | 'primary';
export type ButtonIconSizeType = 'sm' | 'md' | 'lg';

export interface ButtonIconProps extends ButtonHTMLProps {
  /**
   * Toggle flag disabled button
   */
  disabled?: boolean;
  /**
   * Icon to be displayed within the button
   */
  icon: CashboundIconType;
  /**
   * Whether the button should display a loading spinner
   */
  loading?: boolean;
  /**
   * Margin to be applied to the button
   */
  margin?: string | number;
  /**
   * Size of the button
   */
  size?: ButtonIconSizeType;
  /**
   * Variant style for the button
   */
  variant: ButtonIconVariantType;
}
