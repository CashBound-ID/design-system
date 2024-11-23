/////////////////////////////////////////////////////////////////////////////
// Typography Generic
/////////////////////////////////////////////////////////////////////////////

export interface FontFamily {
  primary: string;
  secondary?: string;
}

export interface CustomTypography {
  fontSize: string;
  letterSpacing: string;
  lineHeight: string;
}

export interface FontWeight {
  bold: number;
  medium: number;
  regular: number;
}

export interface TypographyModifier {
  'body-lg': CustomTypography;
  'body-md': CustomTypography;
  'body-sm': CustomTypography;
  'body-xs': CustomTypography;
  'body-xxs': CustomTypography;
  'heading-2xl': CustomTypography;
  'heading-lg': CustomTypography;
  'heading-md': CustomTypography;
  'heading-sm': CustomTypography;
  'heading-xl': CustomTypography;
}

/////////////////////////////////////////////////////////////////////////////
// Color Generic
/////////////////////////////////////////////////////////////////////////////

type Increments =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 550
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200;

export type GenericColor<T extends string> = {
  [K in Increments as `${T}${K}`]?: string;
};

export type VioletColor = GenericColor<'VIOLET'>;
export type GreenCashColor = GenericColor<'GREENCASH'>;
export type GrayMauveColor = GenericColor<'GRAYMAUVE'>;
export type RedTomatoColor = GenericColor<'REDTOMATO'>;
export type PurpleColor = GenericColor<'PURPLE'>;
export type BlueColor = GenericColor<'BLUE'>;
export type GreenGrassColor = GenericColor<'GREENGRASS'>;
export type YellowAmberColor = GenericColor<'YELLOWAMBER'>;
export type OrangeColor = GenericColor<'ORANGE'>;

export interface CommonColor {
  BLACK?: string;
  WHITE?: string;
}

export interface Color
  extends VioletColor,
    GreenCashColor,
    GrayMauveColor,
    RedTomatoColor,
    PurpleColor,
    BlueColor,
    GreenGrassColor,
    YellowAmberColor,
    OrangeColor,
    CommonColor {}

export interface Shadow {
  button: string;
  'button-hover': string;
  default: string;
  element: string;
  lg: string;
  md: string;
  sm: string;
  snackbar: string;
  xl: string;
}

/////////////////////////////////////////////////////////////////////////////
// Spacing Types
/////////////////////////////////////////////////////////////////////////////
export interface Spacing {
  lg: string;
  md: string;
  sm: string;
  xl: string;
  xs: string;
  xxl: string;
}

/////////////////////////////////////////////////////////////////////////////
// Border Radius Types
/////////////////////////////////////////////////////////////////////////////
export interface Radius {
  circle: string;
  lg: string;
  md: string;
  sm: string;
  square: string;
  xl: string;
  xs: string;
}

/////////////////////////////////////////////////////////////////////////////
// Generic Theme Section
/////////////////////////////////////////////////////////////////////////////

export interface Transition {
  duration: string;
  timingFunction: string;
}

export interface CustomElementStyle {
  /**
   * Button Component
   */
  'button-general--lg-icon-size'?: number;
  'button-general--lg-text-modifier'?: keyof TypographyModifier;
  'button-general--md-icon-size'?: number;
  'button-general--md-text-modifier'?: keyof TypographyModifier;
  'button-general--sm-icon-size'?: number;
  'button-general--sm-text-modifier'?: keyof TypographyModifier;

  /**
   * Button Icon Component
   */
  'button-icon--lg-icon-size'?: number;
  'button-icon--md-icon-size'?: number;
  'button-icon--sm-icon-size'?: number;
}

export interface Theme {
  color: Color;
  elements: CustomElementStyle;
  fontFamily: FontFamily;
  fontWeight: FontWeight;
  radius: Radius;
  shadow: Shadow;
  spacing: Spacing;
  transition: Transition;
  typography: TypographyModifier;
}
