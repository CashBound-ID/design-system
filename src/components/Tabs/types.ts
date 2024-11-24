import type { HTMLAttributes, PropsWithChildren } from 'react';

import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';
import type { Color, FontWeight, TypographyModifier } from '@/types/theme';

export type TabVariantType = 'center' | 'equal';

/////////////////////////////////////////////////////////////////////////////
// Tab Item Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface TabItemProps
  extends Omit<GenericHTMLProps<HTMLAttributes<HTMLElement>>, 'onClick'> {
  /**
   * Unique key name for the tab item.
   */
  keyName: string | number;
}

export type TabItemFnType = GenericCompoundComponentType<
  {
    (props: PropsWithChildren<TabItemProps>): JSX.Element;
  },
  'tab-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Tab Component Interface
/////////////////////////////////////////////////////////////////////////////

export interface TabProps
  extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  /**
   * The key of the active tab.
   */
  activeKey: string | number;
  /**
   * Custom color for tab items text when tab item active
   */
  colorActive?: keyof Color;
  /**
   * Custom color for tab items text when tab item inactive
   */
  colorInactive?: keyof Color;
  /**
   * Custom font weight for tab item text
   */
  fontWeight?: keyof FontWeight;
  /**
   * Custom typography modifier for tab items
   */
  modifier?: keyof TypographyModifier;
  /**
   * Callback function to handle tab click.
   */
  onTabClick: (keyName: string | number) => void;
  /**
   * The variant of the tab layout.
   */
  variant?: TabVariantType;
  /**
   * Whether tabs using border bottom as separator
   */
  withBorder?: boolean;
}

export type TabFnType = ((
  props: PropsWithChildren<TabProps>
) => JSX.Element) & {
  Item: TabItemFnType;
};
