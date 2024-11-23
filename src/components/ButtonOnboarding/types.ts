import type { ButtonHTMLAttributes } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type { GenericHTMLProps } from '@/types/react';

type ButtonHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export interface ButtonOnboardingProps extends ButtonHTMLProps {
  /**
   * Toggle flag disabled button
   */
  disabled?: boolean;
  /**
   * Icon to be displayed within the button
   */
  icon: CashboundIconType;
  /**
   * Margin to be applied to the button
   */
  margin?: string | number;
  /**
   * To identify whether a button has been selected by the user.
   */
  selected?: boolean;
}
