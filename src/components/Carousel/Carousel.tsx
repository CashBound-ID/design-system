import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef
} from 'react';

import useControlled from '@/hooks/useControlled';

import { cx } from '@/utils/css';

import * as styles from './style.module.scss';
import type { CarouselProps } from './types';
import { initCarousel } from './utils';

const Carousel = (props: CarouselProps) => {
  const {
    autoplay = 0,
    children,
    control,
    defaultValue = 0,
    gutter = '0px',
    onChange,
    outerGutter = '0px',
    step = 1,
    value: propValue,
    visibleCells = 1
  } = props;
  const [value, _setValue] = useControlled({ defaultValue, propValue });
  let length = 0;

  const slides = Children.map(children, (child) => {
    if (isValidElement(child)) {
      length += 1;
      return (
        <section className={styles['carousel__slide-item']}>{child}</section>
      );
    }

    return null;
  });

  // navigation target
  const min = 0;
  const max = Math.max(length - visibleCells, 0);

  const setValue = useCallback(
    (val: number) => {
      _setValue(val);
      if (onChange) onChange(val);
    },
    [_setValue, onChange]
  );

  const stepAuto = useCallback(() => {
    setValue(value === max ? min : Math.min(value + step, max));
  }, [setValue, min, max, step, value]);

  const stepDown = useCallback(() => {
    setValue(Math.max(value - step, min));
  }, [setValue, min, step, value]);

  const stepUp = useCallback(() => {
    setValue(Math.min(value + step, max));
  }, [setValue, max, step, value]);

  // ref forwarding
  const wrapper = useRef<HTMLDivElement>(null);

  // re-adjust value after screen resize (for last slide)
  useEffect(() => {
    if (value > max) setValue(max);
  }, [value, max, setValue]);

  const slideGroup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapperDOM = wrapper.current;
    const slideGroupDOM = slideGroup.current;

    if (wrapperDOM && slideGroupDOM) {
      const carousel = initCarousel({
        autoplay,
        max,
        min,
        slideGroupDOM,
        stepAuto,
        stepDown,
        stepUp,
        value,
        wrapperDOM
      });
      return carousel.destroy;
    }
    return;
  }, [autoplay, max, min, value, stepAuto, stepDown, stepUp]);

  return (
    <>
      <section
        ref={wrapper}
        style={{
          '--carousel-gutter': gutter,
          '--carousel-outer-gutter': outerGutter,
          '--carousel-visible-cells': visibleCells
        }}
        className={cx(styles['carousel'])}
      >
        <section className={styles['carousel__slider']}>
          <section
            ref={slideGroup}
            className={styles['carousel__slide-group']}
            style={{ transform: `translate3d(${-value * 100}%,0,0)` }}
          >
            {slides}
          </section>
        </section>
      </section>

      {control &&
        control({
          max,
          min,
          setValue,
          step,
          stepDown,
          stepUp,
          value,
          visibleCells
        })}
    </>
  );
};

export default Carousel;
