import type { PropsWithChildren } from 'react';
import React, { cloneElement } from 'react';

import { findAndCloneChild } from '@/utils/dom';

interface SingleSwitchProps<T> {
  additionalProps?: T;
  match: string | number;
}

/**
 * Single Switch Component
 *
 * @returns {JSX.Element}
 */
function SingleSwitch<T = Record<string, unknown>>(
  props: PropsWithChildren<SingleSwitchProps<T>>
) {
  const { additionalProps, children, match } = props;
  const Element = findAndCloneChild(children, `${match}`);

  if (!Element || !React.isValidElement(Element)) return null;

  if (additionalProps) return cloneElement(Element, additionalProps);

  return Element;
}

export default SingleSwitch;
