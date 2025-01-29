import type { PropsWithChildren } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Typography from '@/components/Typography';

import type { FormItemLabelFnType, FormItemLabelProps } from './types';

const FormItemLabel: FormItemLabelFnType = (
  props: PropsWithChildren<FormItemLabelProps>
) => {
  const { label, optional, required } = props;
  const { color } = useDesignSystemProvider();

  return (
    <Typography
      modifier="body-md"
      data-testid="input-label"
      fontWeight="medium"
      tag="p"
      color={color.GRAYMAUVE1200}
    >
      {required && (
        <>
          <Typography
            modifier="body-md"
            tag="span"
            display="inline"
            color={color.REDTOMATO1000}
          >
            *
          </Typography>
          &nbsp;
        </>
      )}

      {label}

      {optional && (
        <>
          &nbsp;
          <Typography
            modifier="body-md"
            tag="span"
            display="inline"
            color={color.GRAYMAUVE1100}
          >
            (optional)
          </Typography>
        </>
      )}
    </Typography>
  );
};

FormItemLabel.COMPONENT_NAME = 'form-item-label';

export default FormItemLabel;
