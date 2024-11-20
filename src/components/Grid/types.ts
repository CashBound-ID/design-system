import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { GenericCompoundComponentType } from '@/types/react';

type _HTMLGridProps = Omit<HTMLAttributes<HTMLElement>, 'style'>;

/////////////////////////////////////////////////////////////////////////////
// Grid Item Types Section
/////////////////////////////////////////////////////////////////////////////

export type GridSizePresetsType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto';

export interface GridItemProps extends _HTMLGridProps {
  /** Specifies the number of columns the item spans in the default layout. */
  col?: GridSizePresetsType;
  /** Specifies the column span for large screens. */
  lg?: GridSizePresetsType;
  /** Specifies the column span for medium screens. */
  md?: GridSizePresetsType;
  /** Specifies the column span for small screens. */
  sm?: GridSizePresetsType;
  /** Specifies the column span for extra-large screens. */
  xl?: GridSizePresetsType;
  /** Specifies the column span for extra-small screens. */
  xs?: GridSizePresetsType;
}

/**
 * Type definition for the function signature of the `Grid.Item` component.
 *
 * @typedef _GridItemFnType
 *
 * @param {PropsWithChildren<GridItemProps>} props - The properties passed to the `Grid.Item` component.
 * @returns {JSX.Element} The rendered `Grid.Item` element.
 */
type _GridItemFnType = (props: PropsWithChildren<GridItemProps>) => JSX.Element;

/**
 * Type definition for the `Grid.Item` component, which is a compound component
 * associated with the `grid-item` identifier.
 *
 * @typedef {GenericCompoundComponentType<_GridItemFnType, 'grid-item'>} GridItemFnType
 */
export type GridItemFnType = GenericCompoundComponentType<
  _GridItemFnType,
  'grid-item'
>;

/////////////////////////////////////////////////////////////////////////////
// Grid Types Section
/////////////////////////////////////////////////////////////////////////////

export interface GridProps extends _HTMLGridProps {
  /** Specifies the gap (spacing) between grid items. */
  gap: number | [number, number];
}

export type GridFnType = {
  (props: PropsWithChildren<GridProps>): JSX.Element;
  Item: GridItemFnType;
};
