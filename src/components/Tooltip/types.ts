import type { ReactNode } from 'react';

export type TooltipPositionType =
  | 'top'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'bottom'
  | 'left'
  | 'left top'
  | 'left bottom';

export interface TooltipProps {
  /**
   * The position of the tooltip relative to the target element.
   * @type {TooltipPositionType}
   */
  position: TooltipPositionType;
  /**
   * The content to be displayed inside the tooltip.
   * This can include text, JSX elements, or any ReactNode.
   * @type {ReactNode}
   */
  title: ReactNode;
  /**
   * The trigger event for showing the tooltip.
   * - `hover`: Tooltip is displayed when the user hovers over the target element.
   * - `click`: Tooltip is displayed when the user clicks on the target element.
   * @type {'hover' | 'click'}
   * @default 'hover'
   */
  trigger?: 'hover' | 'click';
}
