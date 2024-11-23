import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

type ButtonHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

/////////////////////////////////////////////////////////////////////////////
// Toggle Button Item
/////////////////////////////////////////////////////////////////////////////

export type ToggleButtonItemFnType = GenericCompoundComponentType<
  <T extends number | string>(
    props: PropsWithChildren<ToggleButtonItemProps<T>>
  ) => JSX.Element,
  'toggle-button-item'
>;

export interface ToggleButtonItemProps<T extends number | string>
  extends ButtonHTMLProps {
  /**
   * The icon displayed on the button.
   */
  icon: CashboundIconType;

  /**
   * The value associated with this toggle button.
   */
  value: T;
}

/////////////////////////////////////////////////////////////////////////////
// Toggle Button
/////////////////////////////////////////////////////////////////////////////

export interface ToggleButtonProps<T extends number | string> {
  /**
   * Callback function triggered when the selected value changes.
   *
   * @param {T} value - The new value of the toggle.
   */
  onChange(value: T): void;

  /**
   * The current value of the toggle.
   */
  value: T;
}

export type ToggleButtonFnType = {
  <T extends number | string>(
    props: PropsWithChildren<ToggleButtonProps<T>>
  ): JSX.Element;
  Item: ToggleButtonItemFnType;
};
