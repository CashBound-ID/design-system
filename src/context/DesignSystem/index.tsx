import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';

import { genCSSVariableStyle } from '@/utils/theme';
import { DEFAULT_THEME } from '@/constant/theme';
import type { Theme } from '@/types/theme';
import type { Maybe } from '@/types/utils';

import './style.scss';

/**
 * Props for the `DesignSystemProvider` component.
 *
 * @interface DesignSystemProviderProps
 * @property {Theme} [theme] - An optional theme to be used, defaulting to `DEFAULT_THEME` if not provided.
 */
interface DesignSystemProviderProps {
  theme?: Theme;
}

/**
 * Context for managing and providing the current theme in the design system.
 *
 * @private
 */
const _designSystemContext = createContext<Maybe<Theme>>(undefined);

/**
 * `DesignSystemProvider` component that provides the current theme to its child components.
 * This component also injects CSS variables into the page's root element based on the selected theme.
 *
 * @param {PropsWithChildren<DesignSystemProviderProps>} props - The properties for the provider component.
 * @returns {JSX.Element} The provider component wrapping children.
 *
 * @example
 * <DesignSystemProvider theme={customTheme}>
 *   <SomeComponent />
 * </DesignSystemProvider>
 */
const DesignSystemProvider = (
  props: PropsWithChildren<DesignSystemProviderProps>
) => {
  const { children, theme = DEFAULT_THEME } = props;
  const cssVariables = genCSSVariableStyle(theme);

  return (
    <_designSystemContext.Provider value={theme}>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { ${cssVariables} }`
        }}
      />

      {children}
    </_designSystemContext.Provider>
  );
};

/**
 * Custom hook to access the theme provided by the `DesignSystemProvider`.
 *
 * @throws {Error} Throws an error if the hook is used outside of the `DesignSystemProvider`.
 * @returns {Theme} The current theme provided by the `DesignSystemProvider`.
 *
 * @example
 * const theme = useDesignSystemProvider();
 */
export const useDesignSystemProvider = () => {
  const payload = useContext(_designSystemContext);

  if (!payload) {
    throw new Error(
      `useDesignSystemProvider must be used within the DesignSystemProvider`
    );
  }

  return payload;
};

export default DesignSystemProvider;
