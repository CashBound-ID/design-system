import { useMemo } from 'react';

import Typography from '@/components/Typography';

import { GRAYMAUVE900 } from '@/constant/theme';

import type { FormItemCounterFnType, FormItemCounterProps } from './types';

const FormItemCounter: FormItemCounterFnType = (
  props: FormItemCounterProps
) => {
  const { className, currentCounter, maxLength } = props;

  const text = useMemo(() => {
    if (maxLength) {
      return `${currentCounter} / ${maxLength}`;
    }

    return currentCounter;
  }, [currentCounter, maxLength]);

  return (
    <Typography
      tag="section"
      data-testid="input-counter"
      className={className}
      modifier="body-md"
      color={GRAYMAUVE900}
      display="inline"
    >
      {text}
    </Typography>
  );
};

FormItemCounter.COMPONENT_NAME = 'form-item-counter';

export default FormItemCounter;
