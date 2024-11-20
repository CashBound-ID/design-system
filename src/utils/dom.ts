import type { ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';

import type { GenericCompoundComponentType } from '@/types/react';
import type { Maybe, NullAble } from '@/types/utils';

/////////////////////////////////////////////////////////////////////////////
// Compound Component Utils Section
/////////////////////////////////////////////////////////////////////////////

const _isComponentNameCorrect = (
  // INFO: need to force casting to enable check the react element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any,
  componentName: string
): element is GenericCompoundComponentType<Record<string, unknown>, string> => {
  if (Object.prototype.hasOwnProperty.call(element?.type, 'COMPONENT_NAME')) {
    const { COMPONENT_NAME: name } = element.type as unknown as Record<
      string,
      unknown
    >;

    return name === componentName;
  }

  return false;
};

const _isPropsNameCorrect = <P>(
  // INFO: need to force casting to enable check the react element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any,
  propsName: string
): element is ReactElement<P> => {
  const compare = `${element?.props?.name}` || '';

  return compare === propsName;
};

/**
 * Checks if the provided element is a valid React element and its component name matches the specified name.
 *
 * @param element The element to check (ReactElement).
 * @param predicate the predicate to find. In this context we are using COMPONENT_NAME
 */
export const isCompoundComponentValid = <P>(
  element: Maybe<NullAble<unknown>>,
  predicate: string
): element is ReactElement<P> => {
  if (isValidElement(element)) {
    const isCoumpondValid = _isComponentNameCorrect(element, predicate);
    const isPropsNameValid = _isPropsNameCorrect(element, predicate);

    return isCoumpondValid || isPropsNameValid;
  }

  return false;
};

/////////////////////////////////////////////////////////////////////////////
// Shared DOM Utils
/////////////////////////////////////////////////////////////////////////////

/**
 * a helper function to find an element, the same as Array.prototype.find() more or less.
 *
 * @param children array of react child
 * @param predicate the predicate to find. In this context we are using COMPONENT_NAME
 */
export const findAndCloneChild = (
  children: ReactNode,
  predicate: string
): ReactElement | undefined => {
  let Element: ReactElement | null = null;
  let isMatched = false;

  Children.forEach(children, (child) => {
    if (!isMatched && isCompoundComponentValid(child, predicate)) {
      isMatched = true;
      Element = child;
    }
  });

  if (!isValidElement(Element)) return undefined;

  return Element;
};
