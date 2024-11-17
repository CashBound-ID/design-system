import type {
  Color,
  FontFamily,
  FontWeight,
  Theme,
  TypographyModifier
} from '@/types/theme';

/////////////////////////////////////////////////////////////////////////////
// Generate CSS Variable Section
/////////////////////////////////////////////////////////////////////////////

/**
 * Arguments for generating CSS variables for typography.
 */
interface GenCSSVariableTypographyArgs {
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  typography: TypographyModifier;
}

/**
 * Generates CSS variables for typography.
 *
 * @param {GenCSSVariableTypographyArgs} args - The arguments for typography CSS variable generation.
 * @returns {Record<string, string | number>} A record containing typography-related CSS variables.
 */
export const genCSSVariableTypography = (
  args: GenCSSVariableTypographyArgs
): Record<string, string | number> => {
  const fontFamily = Object.keys(args.fontFamily).reduce((res, item) => {
    const value = args.fontFamily[item as keyof FontFamily];

    if (value) {
      return { ...res, [`--font-${item}`]: value };
    }

    return res;
  }, {});

  const fontWeight = Object.keys(args.fontWeight).reduce((res, item) => {
    const value = args.fontWeight[item as keyof FontWeight];

    return { ...res, [`--font-weight-${item}`]: value };
  }, {});

  const typography = Object.keys(args.typography).reduce((res, item) => {
    const { fontSize, letterSpacing, lineHeight } =
      args.typography[item as keyof TypographyModifier];

    return {
      ...res,
      [`--text-${item}-size`]: fontSize,
      [`--text-${item}-letter-spacing`]: letterSpacing,
      [`--text-${item}-line-height`]: lineHeight
    };
  }, {});

  return { ...fontFamily, ...fontWeight, ...typography };
};

/**
 * Generates CSS variables for color properties.
 *
 * @param {Color} color - The color object containing key-value pairs for color definitions.
 * @returns {Record<string, string | number>} A record containing color-related CSS variables.
 */
export const genCSSVariableColor = (
  color: Color
): Record<string, string | number> => {
  return Object.keys(color).reduce((res, item) => {
    const value = color[item as keyof Color];

    return { ...res, [`--${item}`]: value };
  }, {});
};

/**
 * Generates a string containing CSS variables for a theme.
 *
 * @param {Theme} args - The theme object containing color, font family, font weight, and typography definitions.
 * @returns {string} A string of CSS variable declarations.
 */
export const genCSSVariableStyle = (args: Theme): string => {
  const { color, fontFamily, fontWeight, typography } = args;
  const variables = {
    ...genCSSVariableColor(color),
    ...genCSSVariableTypography({ fontFamily, fontWeight, typography })
  };

  return Object.keys(variables).reduce((res, item) => {
    return `${res} ${item}: ${variables[item]};`;
  }, '');
};
