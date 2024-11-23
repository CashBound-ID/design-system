import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

type ButtonHTMLProps = GenericHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export type BottomNavigationItemFnType = GenericCompoundComponentType<
  <T extends number | string>(
    props: BottomNavigationItemProps<T>
  ) => JSX.Element,
  'bottom-navigation-item'
>;

export interface BottomNavigationItemProps<T extends number | string>
  extends ButtonHTMLProps {
  /** The icon displayed on the button.*/
  icon: CashboundIconType;
  /** Label bottom navigation item.*/
  label: string;
  /** The value associated with this toggle button.*/
  value: T;
}

export interface BottomNavigationProps<T extends number | string> {
  /** Callback function triggered when the selected value changes. */
  onChange(value: T): void;
  /** The position of the navigation header. */
  position?: 'sticky' | 'fixed' | 'default';
  /** The current value of the toggle.*/
  value: T;
}

export type BottomNavigationFnType = {
  <T extends number | string>(
    props: PropsWithChildren<BottomNavigationProps<T>>
  ): JSX.Element;
  Item: BottomNavigationItemFnType;
};
