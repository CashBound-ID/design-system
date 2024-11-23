import type { PropsWithChildren } from 'react';

import type { CashboundIconType } from '@/types/icon';
import type { GenericCompoundComponentType } from '@/types/react';

export interface NavigationActionProps {
  /** Callback function triggered when the action is clicked. */
  onClick(): void;
  /** Text label for the action. */
  text: string;
}

export type NavigationActionFnType = GenericCompoundComponentType<
  (props: NavigationActionProps) => JSX.Element,
  'navigation-header-action'
>;

export interface NavigationCTAProps {
  /** Icon displayed in the CTA. */
  icon: CashboundIconType;
  /** Callback function triggered when the CTA is clicked. */
  onClick(): void;
}

export type NavigationCTAFnType = GenericCompoundComponentType<
  (props: NavigationCTAProps) => JSX.Element,
  'navigation-header-cta'
>;

export interface NavigationTitleProps {
  /** Optional navigation icon displayed beside the title. */
  navigationIcon?: CashboundIconType;
  /** Callback function triggered when the navigation icon is clicked. */
  onClickNavigationIcon(): void;
  /** Text label for the title. */
  text: string;
}

export type NavigationTitleFnType = GenericCompoundComponentType<
  (props: NavigationTitleProps) => JSX.Element,
  'navigation-header-title'
>;

export interface NavigationHeaderProps {
  /** The background color of the navigation header. Accepts any valid CSS color value (e.g., hex, rgb, hsl, etc.). */
  color?: string;
  /** The position of the navigation header. */
  position?: 'sticky' | 'fixed' | 'default';
}

export type NavigationHeaderFnType = {
  (props: PropsWithChildren<NavigationHeaderProps>): JSX.Element;
  Action: NavigationActionFnType;
  CTA: NavigationCTAFnType;
  Title: NavigationTitleFnType;
};
