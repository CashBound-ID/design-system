export interface CarouselControlArgs {
  /**
   * Maximum value the Carousel can slide to.
   */
  max: number;
  /**
   * Minimum value the Carousel can slide to.
   */
  min: number;
  /**
   * To set Carousel value directly.
   */
  setValue: (value: number) => void;
  /**
   * Current Carousel step.
   */
  step: number;
  /**
   * To trigger step down.
   */
  stepDown: () => void;
  /**
   * To trigger step up.
   */
  stepUp: () => void;
  /**
   * Current Carlusel value.
   */
  value: number;
  /**
   * Current visible cells.
   */
  visibleCells: number;
}

export interface CarouselProps {
  /**
   * Scroll automatically at a specified interval, given number in milliseconds.
   * Autoplay is false if not specified.
   */
  autoplay?: number;
  children: React.ReactNode;
  /**
   * Append nodes with navigation control capabilities.
   */
  control?: (props: CarouselControlArgs) => JSX.Element | null;
  /**
   * The default value of carousel. For uncontrolled carousel.
   */
  defaultValue?: number;
  /**
   * Spacing between items.
   */
  gutter?: string;
  /**
   * Callback when Carousel value changed.
   */
  onChange?: (value: number) => void;
  /**
   * Spacing between Carousel and it's parent element to create peek effect.
   */
  outerGutter?: string;
  /**
   * The amount of items will be skipped on a single step.
   */
  step?: number;
  /**
   * Current active index.
   */
  value?: number;
  /**
   * The amount of items will displayed at one time.
   */
  visibleCells?: number;
}
