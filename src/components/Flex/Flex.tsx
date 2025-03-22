import type { CSSProperties, PropsWithChildren, ReactHTML, Ref } from 'react';
import { createElement } from 'react';

import type { Property } from 'csstype';

interface FlexProps {
  /** Sets the alignment of elements in the direction of the cross axis */
  align?:
    | 'baseline'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';

  /** Custom classname */
  className?: string;
  /** Forward ref object */
  componentRef?: Ref<HTMLElement>;
  /** Flex CSS shorthand properties */
  flex?: Property.Flex;
  /** Sets the gap between grids */
  gap?: number;
  /** Sets the alignment of elements in the direction of the main axis */
  justify?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start';
  /** Custom styling */
  style?: CSSProperties;
  /** Custom element type */
  tag?: keyof ReactHTML;
  /** Is direction of the flex vertical */
  vertical?: boolean;
  /** Set whether the element is displayed in a single line or in multiple lines */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    align = 'normal',
    className,
    componentRef,
    flex,
    gap,
    justify,
    style,

    tag = 'div',
    vertical = false,
    wrap = false,
    ...res
  } = props;

  return createElement(tag, {
    ...res,
    className,
    ref: componentRef,
    style: {
      ...style,
      alignItems: align,
      display: 'flex',
      flex,
      flexDirection: vertical ? 'column' : 'initial',
      flexWrap: wrap,
      gap,
      justifyContent: justify
    }
  });
};

export default Flex;
