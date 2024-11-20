import type {
  Color,
  FontFamily,
  FontWeight,
  Radius,
  Shadow,
  Spacing,
  Theme,
  Transition,
  TypographyModifier
} from '@/types/theme';

/////////////////////////////////////////////////////////////////////////////
// Generate CSS Variable Section
/////////////////////////////////////////////////////////////////////////////

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

interface GenCSSVariableColorArgs {
  color: Color;
  shadow: Shadow;
}

/**
 * Generates CSS variables for colors and shadows.
 *
 * @param {GenCSSVariableColorArgs} args - The arguments for color and shadow CSS variable generation.
 * @returns {Record<string, string | number>} A record containing color and shadow-related CSS variables.
 */
export const genCSSVariableColor = (
  args: GenCSSVariableColorArgs
): Record<string, string | number> => {
  const color = Object.keys(args.color).reduce((res, item) => {
    const value = args.color[item as keyof Color];

    return { ...res, [`--${item}`]: value };
  }, {});

  const shadow = Object.keys(args.shadow).reduce((res, item) => {
    const value = args.shadow[item as keyof Shadow];

    return { ...res, [`--shadow-${item}`]: value };
  }, {});

  return { ...color, ...shadow };
};

interface GenCSSVariableShapeArgs {
  radius: Radius;
  spacing: Spacing;
}

/**
 * Generates CSS variables for shapes (radius and spacing).
 *
 * @param {GenCSSVariableShapeArgs} args - The arguments for shape-related CSS variable generation.
 * @returns {Record<string, string | number>} A record containing shape-related CSS variables.
 */
export const genCSSVariableShape = (
  args: GenCSSVariableShapeArgs
): Record<string, string | number> => {
  const radius = Object.keys(args.radius).reduce((res, item) => {
    const value = args.radius[item as keyof Radius];

    return { ...res, [`--radius-${item}`]: value };
  }, {});

  const spacing = Object.keys(args.spacing).reduce((res, item) => {
    const value = args.spacing[item as keyof Spacing];

    return { ...res, [`--spacing-${item}`]: value };
  }, {});

  return { ...radius, ...spacing };
};

/**
 * Generates CSS variables for transitions.
 *
 * @param {Transition} args - The transition properties including duration and timing function.
 * @returns {Record<string, string | number>} A record containing transition-related CSS variables.
 */
export const genCSSVariableTransition = (
  args: Transition
): Record<string, string | number> => {
  const { duration, timingFunction } = args;

  return {
    '--transition-duration': duration,
    '--transition-timing-fn': timingFunction
  };
};

/**
 * Generates a string containing all CSS variables for a theme.
 *
 * @param {Theme} args - The theme object containing color, font family, font weight, radius, shadow, spacing, and typography definitions.
 * @returns {string} A string of CSS variable declarations.
 */
export const genCSSVariableStyle = (args: Theme): string => {
  const {
    color,
    fontFamily,
    fontWeight,
    radius,
    shadow,
    spacing,
    transition,
    typography
  } = args;

  const variables = {
    ...genCSSVariableColor({ color, shadow }),
    ...genCSSVariableTypography({ fontFamily, fontWeight, typography }),
    ...genCSSVariableShape({ radius, spacing }),
    ...genCSSVariableTransition(transition)
  };

  return Object.keys(variables).reduce((res, item) => {
    return `${res} ${item}: ${variables[item]};`;
  }, '');
};
