import { Fragment } from 'react';

import type { PropsWithRequiredChildren } from '@/types/react';

interface SectionProps {
  // INFO: this props used for mapping component manually using Children API

  name: string | number;
}

const Section = (props: PropsWithRequiredChildren<SectionProps>) => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};

export default Section;
