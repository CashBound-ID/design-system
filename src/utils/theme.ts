import {
  DEFAULT_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_TYPOGRAPHY_MODIFIER
} from '@/constant/theme';
import type {
  Color,
  FontFamily,
  FontWeight,
  TypographyModifier
} from '@/types/theme';

export const genCSSVariableTypography = (): Record<string, string | number> => {
  const fontFamily = Object.keys(DEFAULT_FONT_FAMILY).reduce((res, item) => {
    const value = DEFAULT_FONT_FAMILY[item as keyof FontFamily];

    if (value) {
      return { ...res, [`--font-${item}`]: value };
    }

    return res;
  }, {});

  const fontWeight = Object.keys(DEFAULT_FONT_FAMILY).reduce((res, item) => {
    const value = DEFAULT_FONT_WEIGHT[item as keyof FontWeight];

    return { ...res, [`--font-weight-${item}`]: value };
  }, {});

  const typography = Object.keys(DEFAULT_TYPOGRAPHY_MODIFIER).reduce(
    (res, item) => {
      const { fontSize, letterSpacing, lineHeight } =
        DEFAULT_TYPOGRAPHY_MODIFIER[item as keyof TypographyModifier];

      return {
        ...res,
        [`--text-${item}-size`]: fontSize,
        [`--text-${item}-letter`]: letterSpacing,
        [`--text-${item}-line-height`]: lineHeight
      };
    },
    {}
  );

  return { ...fontFamily, ...fontWeight, ...typography };
};

export const genCSSVariableColor = (): Record<string, string | number> => {
  return Object.keys(DEFAULT_COLOR).reduce((res, item) => {
    const value = DEFAULT_COLOR[item as keyof Color];

    return { ...res, [`--${item}`]: value };
  }, {});
};

export const genCSSVariableStyle = (): string => {
  const variables = { ...genCSSVariableColor(), ...genCSSVariableTypography() };

  return Object.keys(variables).reduce((res, item) => {
    return `${res} ${item}: ${variables[item]};`;
  }, '');
};
