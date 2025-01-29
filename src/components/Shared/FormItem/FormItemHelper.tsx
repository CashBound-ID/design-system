import { useMemo } from 'react';

import { useDesignSystemProvider } from '@/context/DesignSystem';

import Typography from '@/components/Typography';

import type { FormItemHelperFnType, FormItemHelperProps } from './types';

const FormItemHelper: FormItemHelperFnType = (props: FormItemHelperProps) => {
  const { helper, theme = 'initial' } = props;
  const { color: colorTheme, transition } = useDesignSystemProvider();

  const { color } = useMemo(() => {
    let color = colorTheme.GRAYMAUVE1100;
    if (theme === 'error') color = colorTheme.REDTOMATO1100;
    if (theme === 'success') color = colorTheme.GREENGRASS1100;
    if (theme === 'disabled') color = colorTheme.GRAYMAUVE900;

    return {
      color
    };
  }, [
    colorTheme.GRAYMAUVE1100,
    colorTheme.GRAYMAUVE900,
    colorTheme.GREENGRASS1100,
    colorTheme.REDTOMATO1100,
    theme
  ]);

  return (
    <Typography
      modifier="body-sm"
      data-testid="input-helper"
      tag="p"
      color={color}
      style={{
        transition: `color ${transition.duration} ${transition.timingFunction}`
      }}
      dangerouslySetInnerHTML={{ __html: helper }}
    />
  );
};

FormItemHelper.COMPONENT_NAME = 'form-item-helper';

export default FormItemHelper;
