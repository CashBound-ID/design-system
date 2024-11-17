import type { HTMLAttributes } from 'react';

import type { Property } from 'csstype';

import type { FontFamily, FontWeight, TypographyModifier } from '@/types/theme';

/**
 * Defines the different types of HTML elements that can be used for typography.
 */
export type TypographyElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'section';

/**
 * Defines the types of typography modifiers available in the theme.
 */

interface BaseTypographyProps {
  className: string;
  color: string;
  display: 'block' | 'inline' | 'flex' | 'inline-flex';
  ellipsis: boolean;
  fontFamily: keyof FontFamily;
  fontWeight: keyof FontWeight;
  italic: boolean;
  margin: number | string;
  modifier: keyof TypographyModifier;
  tag: TypographyElementType;
  textAlign: Property.TextAlign;
  textDecoration: Property.TextDecoration;
}

/**
 * HTML attributes for typography components, excluding the base typography properties.
 */
type HTMLTypographyProps<T> = Omit<
  HTMLAttributes<T>,
  keyof BaseTypographyProps
>;

/////////////////////////////////////////////////////////////////////////////
// Typography Props
/////////////////////////////////////////////////////////////////////////////

/**
 * Props for the Typography component.
 */
export type TypographyProps<T extends Element> = HTMLTypographyProps<T> &
  Partial<BaseTypographyProps>;
