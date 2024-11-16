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
