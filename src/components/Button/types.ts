import type { ButtonHTMLAttributes } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

type ButtonHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export type ButtonIconPositionType = 'pre' | 'post';
export type ButtonModifierType = 'primary' | 'error';
export type ButtonVariantType = 'outline' | 'fill' | 'text';
export type ButtonSizeType = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLProps {
  /**
   * Whether the button should be displayed as a full width
   */
  block?: boolean;
  /**
   * The content of the button
   */
  children?: string;
  /**
   * Toggle flag disabled button
   */
  disabled?: boolean;
  /**
   * Optional icon to be displayed within the button
   */
  icon?: CashboundIconType;
  /**
   * Position of the icon relative to the button text
   */
  iconPosition?: ButtonIconPositionType;
  /**
   * Whether the button should display a loading spinner
   */
  loading?: boolean;
  /**
   * Margin to be applied to the button
   */
  margin?: string | number;
  /**
   * Modifier style for the button
   */
  modifier: ButtonModifierType;
  /**
   * Size of the button
   */
  size?: ButtonSizeType;
  /**
   * Variant style for the button
   */
  variant: ButtonVariantType;
}
