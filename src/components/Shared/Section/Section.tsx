import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';

interface SectionProps {
  // INFO: this props used for mapping component manually using Children API

  name: string | number;
}

const Section = (props: PropsWithChildren<SectionProps>) => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};

export default Section;
