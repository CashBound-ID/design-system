import type { PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement } from 'react';

import { isCompoundComponentValid } from '@/utils/dom';

interface MultiSwitchProps<T> {
  additionalProps?: T;
  matchs: Array<string | number> | string | number;
}

/**
 * Multi Switch Component
 *
 * @returns {JSX.Element}
 */
function MultiSwitch<T = Record<string, unknown>>(
  props: PropsWithChildren<MultiSwitchProps<T>>
) {
  const { additionalProps, children, matchs } = props;

  return (
    <>
      {Children.map(children, (child) => {
        let items = [];
        if (Array.isArray(matchs)) items = matchs;
        else items = [matchs];

        if (
          items.find((item) => isCompoundComponentValid(child, String(item)))
        ) {
          if (additionalProps) {
            return cloneElement(child as ReactElement, additionalProps);
          }

          return cloneElement(child as ReactElement);
        }

        return null;
      })}
    </>
  );
}

export default MultiSwitch;
