import type { ComponentProps, PropsWithChildren } from 'react';
import {
  Children,
  cloneElement,
  forwardRef,
  type HTMLAttributes,
  isValidElement
} from 'react';

import Flex from '@/components/Flex';

import { cx } from '@/utils/css';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

/**
 * Alignment options for the `HorizontalSlider` component.
 * - `stretch`: Stretches children to fill the height of the slider.
 * - `top`: Aligns children to the top of the slider.
 * - `middle`: Centers children vertically in the slider.
 * - `bottom`: Aligns children to the bottom of the slider.
 */
type HorizontalSliderAlignType = 'stretch' | 'top' | 'middle' | 'bottom';

/**
 * Base HTML properties for the slider component.
 */
type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

/**
 * Properties for the `HorizontalSlider` component.
 */
interface HorizontalSliderProps extends BaseHTMLProps {
  /**
   * Alignment of children within the slider.
   * @default 'stretch'
   */
  align?: HorizontalSliderAlignType;

  /**
   * Gap between child elements in the slider. Can be a string (e.g., '10px') or a number (e.g., 10).
   */
  gap?: number;

  /**
   * Padding inside the slider. Can be a string (e.g., '20px') or a number (e.g., 20).
   */
  padding?: string | number;
}

const MAPPING_ALIGN: Record<
  HorizontalSliderAlignType,
  ComponentProps<typeof Flex>['align']
> = {
  bottom: 'flex-end',
  middle: 'center',
  stretch: 'stretch',
  top: 'flex-start'
};

const HorizontalSlider = forwardRef<
  HTMLElement,
  PropsWithChildren<HorizontalSliderProps>
>((props: PropsWithChildren<HorizontalSliderProps>, ref) => {
  const {
    align = 'stretch',
    children,
    className,
    gap,
    padding,
    ...res
  } = props;

  return (
    <Flex
      {...res}
      componentRef={ref}
      align={MAPPING_ALIGN[align]}
      className={cx(styles['horizontal-slider'], className)}
      gap={gap}
      style={{ padding }}
      vertical={false}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return <section>{cloneElement(child)}</section>;
        }

        return null;
      })}
    </Flex>
  );
});

export default HorizontalSlider;
