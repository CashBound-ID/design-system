import type { PropsWithChildren, ReactNode } from 'react';

import type {
  BaseModalContentProps,
  BaseModalFooterProps,
  BaseModalHeaderProps,
  BaseModalProps
} from '@/types/modal';
import type { GenericCompoundComponentType } from '@/types/react';

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export interface BottomSheetContentProps extends BaseModalContentProps {
  /**
   * Custom padding to apply to the bottom sheet content.
   * Accepts any valid CSS padding value.
   */
  padding?: string;
}

export type BottomSheetContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<BottomSheetContentProps>) => JSX.Element,
  'bottom-sheet-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Footer Section
/////////////////////////////////////////////////////////////////////////////

export type BottomSheetFooterFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<BaseModalFooterProps>) => JSX.Element,
  'bottom-sheet-footer'
>;

/////////////////////////////////////////////////////////////////////////////
// Header Section
/////////////////////////////////////////////////////////////////////////////

export interface BottomSheetHeaderProps extends BaseModalHeaderProps {
  /**
   * call-to-action (CTA) element in the header.
   */
  cta?: ReactNode;

  /**
   * Whether to hide the close button in the header.
   * Defaults to `false` (close button is shown).
   */
  hideCloseButton?: boolean;

  /**
   * Title of the bottom sheet header.
   * This is a required field.
   */
  title: string;
}

export type BottomSheetHeaderFnType = GenericCompoundComponentType<
  (props: BottomSheetHeaderProps) => JSX.Element,
  'bottom-sheet-header'
>;

/////////////////////////////////////////////////////////////////////////////
// Bottom Sheet Container Section
/////////////////////////////////////////////////////////////////////////////

export interface BottomSheetProps extends BaseModalProps {
  /**
   * Disable close when drag bottom sheet to bottom.
   */
  disableCloseByDrag?: boolean;

  /**
   * Show bottomsheet drag handle.
   */
  showDragHandle?: boolean;

  /**
   * Set maximum height / snap points of bottomsheet.
   */
  snapPoints?: string | Array<string>;
}

/**
 * Type definition for the BottomSheet component, which includes the main component and its compound components.
 *
 * @typedef {(props: PropsWithChildren<BottomSheetProps>) => JSX.Element} BottomSheetFnType
 * @property {BottomSheetContentFnType} Content - The content section of the BottomSheet.
 * @property {BottomSheetFooterFnType} Footer - The footer section of the BottomSheet.
 */
export type BottomSheetFnType = ((
  props: PropsWithChildren<BottomSheetProps>
) => JSX.Element) & {
  Content: BottomSheetContentFnType;
  Footer: BottomSheetFooterFnType;
  Header: BottomSheetHeaderFnType;
};
