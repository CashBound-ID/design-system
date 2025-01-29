import { useMemo } from 'react';

import Flex from '@/components/Flex';

import type { FormItemProps } from './types';

const FormItem = (props: FormItemProps) => {
  const { children, margin, ...res } = props;

  const cssStyle = useMemo(() => {
    return { margin };
  }, [margin]);

  return (
    <section style={cssStyle}>
      <Flex {...res} gap={4} vertical>
        {children}
      </Flex>
    </section>
  );
};

export default FormItem;
