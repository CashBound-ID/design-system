import type { HTMLAttributes } from 'react';

import type { GenericHTMLProps } from '@/types/react';

export interface OverlayProps
  extends GenericHTMLProps<HTMLAttributes<HTMLElement>> {
  disabled?: boolean;
  show: boolean;
  transparent?: boolean;
  zIndex?: number;
}
