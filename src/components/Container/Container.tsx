import type { HTMLAttributes, PropsWithChildren } from 'react';

import { cx } from '@/utils/css';
import type { GenericHTMLProps } from '@/types/react';

import * as styles from './style.module.scss';

type BaseHTMLProps = GenericHTMLProps<HTMLAttributes<HTMLElement>>;

const Container = (props: PropsWithChildren<BaseHTMLProps>) => {
  const { className, ...res } = props;

  return <section className={cx(styles.container, className)} {...res} />;
};

export default Container;
