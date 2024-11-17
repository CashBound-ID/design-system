import type { PropsWithChildren } from 'react';
import { createElement, useMemo } from 'react';

import * as styles from './style.module.scss';
import type { TypographyProps } from './types';

/**
 * Typography component for rendering text elements with customizable styles.
 *
 * @template T - The type of the HTML element to render.
 * @param {PropsWithChildren<TypographyProps<T>>} props - The props for the component.
 * @returns {JSX.Element} The rendered Typography component.
 */
const Typography = <T extends Element>(
  props: PropsWithChildren<TypographyProps<T>>
) => {
  const {
    children,
    color,
    display = 'block',
    ellipsis,
    fontFamily = 'primary',
    fontWeight = 'regular',
    italic = false,
    margin,
    modifier = 'text_body_base',
    style: styleProps = {},
    tag = 'p',
    textAlign = 'left',
    textDecoration = 'none',
    ...res
  } = props;

  /**
   * Memoized style object to avoid unnecessary re-renders.
   *
   * @type {React.CSSProperties}
   */
  const style = useMemo(() => {
    return {
      ...styleProps,
      color: color,
      display,
      margin,
      overflow: ellipsis ? 'hidden' : 'initial',
      textAlign,
      textDecoration,
      textOverflow: ellipsis ? 'ellipsis' : 'initial',
      whiteSpace: ellipsis ? 'nowrap' : 'initial'
    };
  }, [color, display, ellipsis, margin, styleProps, textAlign, textDecoration]);

  if (res.dangerouslySetInnerHTML) {
    return createElement(tag, {
      ...res,
      className: styles['typography'],
      'data-font-family': fontFamily,
      'data-font-weight': fontWeight,
      'data-italic': Boolean(italic),
      'data-modifier': modifier,
      style
    });
  }

  return createElement(
    tag,
    {
      ...res,
      className: styles['typography'],
      'data-font-family': fontFamily,
      'data-font-weight': fontWeight,
      'data-italic': Boolean(italic),
      'data-modifier': modifier,
      style
    },
    children
  );
};

/**
 * A memoized Typography component for rendering styled text with various options.
 */

Typography.displayName = 'Typography';

export default Typography;
