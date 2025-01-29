import type { PropsWithChildren } from 'react';
import { useImperativeHandle, useRef } from 'react';

import type { FormItemContentFnType, FormItemContentProps } from './types';

const FormItemContent: FormItemContentFnType = (
  props: PropsWithChildren<FormItemContentProps>
) => {
  const { children, componentRef, ...res } = props;
  const ref = useRef<HTMLElement>(null);

  useImperativeHandle(componentRef, () => {
    return ref.current as HTMLElement;
  });

  return (
    <section ref={ref} {...res}>
      {children}
    </section>
  );
};

FormItemContent.COMPONENT_NAME = 'form-item-content';

export default FormItemContent;
