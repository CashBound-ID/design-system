import type { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const Portal = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  // INFO: prevent render (broken when creating HTML string) if SSR because document.body is not defined
  if (typeof window === 'undefined') return null;

  // INFO: prevent render on document body for testing purpose
  if (process.env.NODE_ENV === 'test') return children;

  return createPortal(children, document.body);
};

export default Portal;
