import type { HTMLAttributes } from 'react';

import Icon from '@/components/Icon';
import Typography from '@/components/Typography';

import { cx } from '@/utils/css';
import type { GenericHTMLProps } from '@/types/react';

import { ICON_TYPE } from './constant';
import * as styles from './style.module.scss';

type BannerHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

interface BannerProps extends BannerHTMLProps {
  /**
   * Secondary descriptive text to display below the message
   */
  description?: string;
  /**
   * Primary message text to display in the banner
   */
  message?: string;
  /**
   * Visual style variant of the banner
   */
  type: 'success' | 'neutral' | 'warning' | 'error';
  /**
   * Width of the banner. Can be any valid CSS width value
   */
  width?: string | number;
  /**
   * Whether to show the status icon. Defaults to true
   */
  withIcon?: boolean;
}

const Banner = (props: BannerProps) => {
  const {
    className,
    description,
    message,
    type = 'neutral',
    width = 'auto',
    withIcon = true,
    ...res
  } = props;
  const { color, icon } = ICON_TYPE[type];

  return (
    <section
      {...res}
      className={cx(styles['banner'], className)}
      style={{ '--width': width }}
      data-type={type}
    >
      {withIcon && <Icon icon={icon} color={color} size={16} />}
      <div className={styles['banner-content']}>
        {Boolean(message) && (
          <Typography
            className={styles['banner-message']}
            modifier="body-md"
            tag="h1"
            fontWeight="medium"
          >
            {message}
          </Typography>
        )}
        <Typography
          className={styles['banner-description']}
          modifier="body-md"
          tag="p"
        >
          {description}
        </Typography>
      </div>
    </section>
  );
};

export default Banner;
