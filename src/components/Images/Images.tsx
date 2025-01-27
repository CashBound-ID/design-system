import type { CSSProperties, ReactEventHandler } from 'react';

import { cx } from '@/utils/css';
import type { Radius } from '@/types/theme';

import * as styles from './style.module.scss';

interface ImagesProps {
  /**
   * Alternative text for the image.
   */
  alt: string;
  /**
   * Custom class name for image container element.
   */
  className?: string;
  /**
   * Height of the image. Can be a string or a number.
   */
  height?: string | number;
  /**
   * Defines how the image should be resized to fit its container.
   */
  objectFit?: CSSProperties['objectFit'];
  /**
   * Specifies the alignment of the image within its container.
   */
  objectPosition?: CSSProperties['objectPosition'];
  /**
   * Event handler for the error event.
   */
  onError?: ReactEventHandler<HTMLImageElement>;
  /**
   * Event handler for the load event.
   */
  onLoad?: ReactEventHandler<HTMLImageElement>;
  /**
   * Defines the border-radius of the image. Uses predefined keys from the theme.
   */
  radius?: keyof Radius;
  /**
   * Source URL of the image.
   */
  src: string;
  /**
   * If true, the section containing the image will have the `data-transparent` attribute set.
   */
  transparent?: boolean;
  /**
   * Width of the image. Can be a string or a number.
   */
  width?: string | number;
}

const Images = (props: ImagesProps) => {
  const {
    alt,
    className,
    height,
    objectFit = 'contain',
    objectPosition = 'initial',
    onError,
    onLoad,
    radius,
    src,
    transparent,
    width
  } = props;

  return (
    <section
      className={cx(styles['images'], className)}
      style={{
        '--img-obj-fit': objectFit,
        '--img-obj-position': objectPosition,
        height,
        width
      }}
      data-transparent={transparent}
      data-radius={radius}
    >
      <img src={src} alt={alt} onError={onError} onLoad={onLoad} />
    </section>
  );
};

export default Images;
