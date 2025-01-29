import type { HTMLAttributes, PropsWithChildren, Ref } from 'react';

import type {
  GenericCompoundComponentType,
  GenericHTMLProps
} from '@/types/react';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

/////////////////////////////////////////////////////////////////////////////
// Label Section
/////////////////////////////////////////////////////////////////////////////

export interface FormItemLabelProps {
  /**
   * The label text for the form item.
   * Optional.
   */
  label?: string;

  /**
   * Whether the form item is optional.
   * Defaults to `false`.
   * Optional.
   */
  optional?: boolean;

  /**
   * Whether the form item is required.
   * Defaults to `false`.
   * Optional.
   */
  required?: boolean;
}

export type FormItemLabelFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<FormItemLabelProps>) => JSX.Element,
  'form-item-label'
>;

/////////////////////////////////////////////////////////////////////////////
// Content Section
/////////////////////////////////////////////////////////////////////////////

export interface FormItemContentProps extends BaseHTMLProps {
  /**
   * A ref to the underlying HTML element.
   * Optional.
   */
  componentRef?: Ref<HTMLElement>;
}

export type FormItemContentFnType = GenericCompoundComponentType<
  (props: PropsWithChildren<FormItemContentProps>) => JSX.Element,
  'form-item-content'
>;

/////////////////////////////////////////////////////////////////////////////
// Helper Section
/////////////////////////////////////////////////////////////////////////////

export interface FormItemHelperProps {
  /**
   * The helper text content.
   */
  helper: string;

  /**
   * Whether the helper text should indicate an error, success, disabled or initial UI.
   */
  theme?: 'initial' | 'disabled' | 'error' | 'success';
}

export type FormItemHelperFnType = GenericCompoundComponentType<
  (props: FormItemHelperProps) => JSX.Element,
  'form-item-helper'
>;

/////////////////////////////////////////////////////////////////////////////
// FormItem Container Section
/////////////////////////////////////////////////////////////////////////////

export interface FormItemProps extends BaseHTMLProps {
  /**
   * Margin value for spacing.
   * Can be a string (e.g., `'10px'`) or a number.
   * Optional.
   */
  margin?: string | number;
}

export type FormItemFnType = ((
  props: PropsWithChildren<FormItemProps>
) => JSX.Element) & {
  /**
   * The content section of the form item.
   */
  Content: FormItemContentFnType;

  /**
   * The helper section of the form item.
   */
  Helper: FormItemHelperFnType;

  /**
   * The label section of the form item.
   */
  Label: FormItemLabelFnType;
};
