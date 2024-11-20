import type { PropsWithChildren } from 'react';

import Typography from '@/components/Typography';

import { GRAYMAUVE300, GRAYMAUVE1100 } from '@/constant/theme';

const CardPreview = (props: PropsWithChildren<unknown>) => {
  return (
    <section
      style={{
        backgroundColor: GRAYMAUVE300,
        borderRadius: 8,
        padding: '16px',
        width: '100%'
      }}
    >
      <Typography textAlign="center" color={GRAYMAUVE1100}>
        {props.children}
      </Typography>
    </section>
  );
};

export default CardPreview;
