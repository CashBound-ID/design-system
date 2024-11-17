import type { PropsWithChildren } from 'react';

import { genCSSVariableStyle } from '@/utils/theme';
import { DEFAULT_THEME } from '@/constant/theme';
import type { Theme } from '@/types/theme';

interface DesignSystemProviderProps {
  theme?: Theme;
}

const DesignSystemProvider = (
  props: PropsWithChildren<DesignSystemProviderProps>
) => {
  const { children, theme = DEFAULT_THEME } = props;
  const cssVariables = genCSSVariableStyle(theme);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { ${cssVariables} }`
        }}
      />
      {children}
    </>
  );
};

export default DesignSystemProvider;
