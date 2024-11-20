import type {
  Color,
  CustomElementStyle,
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
// Typography Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_FONT_FAMILY: FontFamily = {
  primary: '"Poppins", sans-serif'
};

export const DEFAULT_FONT_WEIGHT: FontWeight = {
  bold: 600,
  medium: 500,
  regular: 400
};

export const DEFAULT_TYPOGRAPHY_MODIFIER: TypographyModifier = {
  'body-lg': {
    fontSize: '16px',
    letterSpacing: '0.01em',
    lineHeight: '22.4px'
  },
  'body-md': {
    fontSize: '14px',
    letterSpacing: '0.01em',
    lineHeight: '19.6px'
  },
  'body-sm': {
    fontSize: '12px',
    letterSpacing: '0.01em',
    lineHeight: '16.8px'
  },
  'body-xs': {
    fontSize: '10px',
    letterSpacing: '0.01em',
    lineHeight: '14px'
  },
  'body-xxs': {
    fontSize: '7px',
    letterSpacing: '0.01em',
    lineHeight: '9.8px'
  },
  'heading-2xl': {
    fontSize: '40px',
    letterSpacing: '0.02em',
    lineHeight: '52px'
  },
  'heading-lg': {
    fontSize: '24px',
    letterSpacing: '0.02em',
    lineHeight: '31.2px'
  },
  'heading-md': {
    fontSize: '20px',
    letterSpacing: '0.02em',
    lineHeight: '26px'
  },
  'heading-sm': {
    fontSize: '18px',
    letterSpacing: '0.02em',
    lineHeight: '23.4px'
  },
  'heading-xl': {
    fontSize: '32px',
    letterSpacing: '0.02em',
    lineHeight: '41.6px'
  }
};

/////////////////////////////////////////////////////////////////////////////
// Color Constant
/////////////////////////////////////////////////////////////////////////////

// Common Color
const _WHITE = '#FFFFFF';
export const WHITE = `var(--WHITE, ${_WHITE})`;
const _BLACK = '#000000';
export const BLACK = `var(--BLACK, ${_BLACK})`;

// Violet Color
const _VIOLET100 = '#FDFDFF';
export const VIOLET100 = `var(--VIOLET100, ${_VIOLET100})`;
const _VIOLET200 = '#F7F8FF';
export const VIOLET200 = `var(--VIOLET200, ${_VIOLET200})`;
const _VIOLET300 = '#EEF1FF';
export const VIOLET300 = `var(--VIOLET300, ${_VIOLET300})`;
const _VIOLET400 = '#E1E8FF';
export const VIOLET400 = `var(--VIOLET400, ${_VIOLET400})`;
const _VIOLET500 = '#D3DCFF';
export const VIOLET500 = `var(--VIOLET500, ${_VIOLET500})`;
const _VIOLET600 = '#C3CEFF';
export const VIOLET600 = `var(--VIOLET600, ${_VIOLET600})`;
const _VIOLET700 = '#ACB9FF';
export const VIOLET700 = `var(--VIOLET700, ${_VIOLET700})`;
const _VIOLET800 = '#8F9DFF';
export const VIOLET800 = `var(--VIOLET800, ${_VIOLET800})`;
const _VIOLET900 = '#544CF6';
export const VIOLET900 = `var(--VIOLET900, ${_VIOLET900})`;
const _VIOLET1000 = '#4941DC';
export const VIOLET1000 = `var(--VIOLET1000, ${_VIOLET1000})`;
const _VIOLET1100 = '#4E48E3';
export const VIOLET1100 = `var(--VIOLET1100, ${_VIOLET1100})`;
const _VIOLET1200 = '#24246F';
export const VIOLET1200 = `var(--VIOLET1200, ${_VIOLET1200})`;

// Green Cash Color
const _GREENCASH100 = '#FAFEFA';
export const GREENCASH100 = `var(--GREENCASH100, ${_GREENCASH100})`;
const _GREENCASH200 = '#F4FBF3';
export const GREENCASH200 = `var(--GREENCASH200, ${_GREENCASH200})`;
const _GREENCASH300 = '#E0FBDD';
export const GREENCASH300 = `var(--GREENCASH300, ${_GREENCASH300})`;
const _GREENCASH400 = '#CBF7C7';
export const GREENCASH400 = `var(--GREENCASH400, ${_GREENCASH400})`;
const _GREENCASH500 = '#B6F0B1';
export const GREENCASH500 = `var(--GREENCASH500, ${_GREENCASH500})`;
const _GREENCASH600 = '#9FE49A';
export const GREENCASH600 = `var(--GREENCASH600, ${_GREENCASH600})`;
const _GREENCASH700 = '#82D47C';
export const GREENCASH700 = `var(--GREENCASH700, ${_GREENCASH700})`;
const _GREENCASH800 = '#52C14D';
export const GREENCASH800 = `var(--GREENCASH800, ${_GREENCASH800})`;
const _GREENCASH900 = '#3BDA38';
export const GREENCASH900 = `var(--GREENCASH900, ${_GREENCASH900})`;
const _GREENCASH1000 = '#29CF28';
export const GREENCASH1000 = `var(--GREENCASH1000, ${_GREENCASH1000})`;
const _GREENCASH1100 = '#1E841C';
export const GREENCASH1100 = `var(--GREENCASH1100, ${_GREENCASH1100})`;
const _GREENCASH1200 = '#1E431C';
export const GREENCASH1200 = `var(--GREENCASH1200, ${_GREENCASH1200})`;

// Gray Mauve Color
const _GRAYMAUVE100 = '#FDFCFD';
export const GRAYMAUVE100 = `var(--GRAYMAUVE100, ${_GRAYMAUVE100})`;
const _GRAYMAUVE200 = '#FAF9FB';
export const GRAYMAUVE200 = `var(--GRAYMAUVE200, ${_GRAYMAUVE200})`;
const _GRAYMAUVE300 = '#F2EFF3';
export const GRAYMAUVE300 = `var(--GRAYMAUVE300, ${_GRAYMAUVE300})`;
const _GRAYMAUVE400 = '#EAE7EC';
export const GRAYMAUVE400 = `var(--GRAYMAUVE400, ${_GRAYMAUVE400})`;
const _GRAYMAUVE500 = '#E3DFE6';
export const GRAYMAUVE500 = `var(--GRAYMAUVE500, ${_GRAYMAUVE500})`;
const _GRAYMAUVE600 = '#DBD8E0';
export const GRAYMAUVE600 = `var(--GRAYMAUVE600, ${_GRAYMAUVE600})`;
const _GRAYMAUVE700 = '#D0CDD7';
export const GRAYMAUVE700 = `var(--GRAYMAUVE700, ${_GRAYMAUVE700})`;
const _GRAYMAUVE800 = '#BCBAC7';
export const GRAYMAUVE800 = `var(--GRAYMAUVE800, ${_GRAYMAUVE800})`;
const _GRAYMAUVE900 = '#8E8C99';
export const GRAYMAUVE900 = `var(--GRAYMAUVE900, ${_GRAYMAUVE900})`;
const _GRAYMAUVE1000 = '#84828E';
export const GRAYMAUVE1000 = `var(--GRAYMAUVE1000, ${_GRAYMAUVE1000})`;
const _GRAYMAUVE1100 = '#65636D';
export const GRAYMAUVE1100 = `var(--GRAYMAUVE1100, ${_GRAYMAUVE1100})`;
const _GRAYMAUVE1200 = '#211F26';
export const GRAYMAUVE1200 = `var(--GRAYMAUVE1200, ${_GRAYMAUVE1200})`;

// Red Tomato Color
const _REDTOMATO100 = '#FFF8F7';
export const REDTOMATO100 = `var(--REDTOMATO100, ${_REDTOMATO100})`;
const _REDTOMATO200 = '#FFF8F7';
export const REDTOMATO200 = `var(--REDTOMATO200, ${_REDTOMATO200})`;
const _REDTOMATO300 = '#FEEBE7';
export const REDTOMATO300 = `var(--REDTOMATO300, ${_REDTOMATO300})`;
const _REDTOMATO400 = '#FFDCD3';
export const REDTOMATO400 = `var(--REDTOMATO400, ${_REDTOMATO400})`;
const _REDTOMATO500 = '#FFCDC2';
export const REDTOMATO500 = `var(--REDTOMATO500, ${_REDTOMATO500})`;
const _REDTOMATO600 = '#FDBDAF';
export const REDTOMATO600 = `var(--REDTOMATO600, ${_REDTOMATO600})`;
const _REDTOMATO700 = '#F5A898';
export const REDTOMATO700 = `var(--REDTOMATO700, ${_REDTOMATO700})`;
const _REDTOMATO800 = '#EC8E7B';
export const REDTOMATO800 = `var(--REDTOMATO800, ${_REDTOMATO800})`;
const _REDTOMATO900 = '#E54D2E';
export const REDTOMATO900 = `var(--REDTOMATO900, ${_REDTOMATO900})`;
const _REDTOMATO1000 = '#DD4425';
export const REDTOMATO1000 = `var(--REDTOMATO1000, ${_REDTOMATO1000})`;
const _REDTOMATO1100 = '#D13415';
export const REDTOMATO1100 = `var(--REDTOMATO1100, ${_REDTOMATO1100})`;
const _REDTOMATO1200 = '#5C271F';
export const REDTOMATO1200 = `var(--REDTOMATO1200, ${_REDTOMATO1200})`;

// Purple Color
const _PURPLE100 = '#FEFCFE';
export const PURPLE100 = `var(--PURPLE100, ${_PURPLE100})`;
const _PURPLE200 = '#FBF7FE';
export const PURPLE200 = `var(--PURPLE200, ${_PURPLE200})`;
const _PURPLE300 = '#F7EDFE';
export const PURPLE300 = `var(--PURPLE300, ${_PURPLE300})`;
const _PURPLE400 = '#F2E2FC';
export const PURPLE400 = `var(--PURPLE400, ${_PURPLE400})`;
const _PURPLE500 = '#EAD5F9';
export const PURPLE500 = `var(--PURPLE500, ${_PURPLE500})`;
const _PURPLE600 = '#E0C4F4';
export const PURPLE600 = `var(--PURPLE600, ${_PURPLE600})`;
const _PURPLE700 = '#D1AFEC';
export const PURPLE700 = `var(--PURPLE700, ${_PURPLE700})`;
const _PURPLE800 = '#BE93E4';
export const PURPLE800 = `var(--PURPLE800, ${_PURPLE800})`;
const _PURPLE900 = '#8E4EC6';
export const PURPLE900 = `var(--PURPLE900, ${_PURPLE900})`;
const _PURPLE1000 = '#8347B9';
export const PURPLE1000 = `var(--PURPLE1000, ${_PURPLE1000})`;
const _PURPLE1100 = '#8145B5';
export const PURPLE1100 = `var(--PURPLE1100, ${_PURPLE1100})`;
const _PURPLE1200 = '#402060';
export const PURPLE1200 = `var(--PURPLE1200, ${_PURPLE1200})`;

// Blue Color
const _BLUE100 = '#FBFDFF';
export const BLUE100 = `var(--BLUE100, ${_BLUE100})`;
const _BLUE200 = '#F4FAFF';
export const BLUE200 = `var(--BLUE200, ${_BLUE200})`;
const _BLUE300 = '#E6F4FE';
export const BLUE300 = `var(--BLUE300, ${_BLUE300})`;
const _BLUE400 = '#D5EFFF';
export const BLUE400 = `var(--BLUE400, ${_BLUE400})`;
const _BLUE500 = '#C2E5FF';
export const BLUE500 = `var(--BLUE500, ${_BLUE500})`;
const _BLUE600 = '#ACD8FC';
export const BLUE600 = `var(--BLUE600, ${_BLUE600})`;
const _BLUE700 = '#8EC8F6';
export const BLUE700 = `var(--BLUE700, ${_BLUE700})`;
const _BLUE800 = '#5EB1EF';
export const BLUE800 = `var(--BLUE800, ${_BLUE800})`;
const _BLUE900 = '#0090FF';
export const BLUE900 = `var(--BLUE900, ${_BLUE900})`;
const _BLUE1000 = '#0588F0';
export const BLUE1000 = `var(--BLUE1000, ${_BLUE1000})`;
const _BLUE1100 = '#0D74CE';
export const BLUE1100 = `var(--BLUE1100, ${_BLUE1100})`;
const _BLUE1200 = '#113264';
export const BLUE1200 = `var(--BLUE1200, ${_BLUE1200})`;

// Green Grass Color
const _GREENGRASS100 = '#FBFEFB';
export const GREENGRASS100 = `var(--GREENGRASS100, ${_GREENGRASS100})`;
const _GREENGRASS200 = '#F5FBF5';
export const GREENGRASS200 = `var(--GREENGRASS200, ${_GREENGRASS200})`;
const _GREENGRASS300 = '#E9F6E9';
export const GREENGRASS300 = `var(--GREENGRASS300, ${_GREENGRASS300})`;
const _GREENGRASS400 = '#DAF1DB';
export const GREENGRASS400 = `var(--GREENGRASS400, ${_GREENGRASS400})`;
const _GREENGRASS500 = '#C9E8CA';
export const GREENGRASS500 = `var(--GREENGRASS500, ${_GREENGRASS500})`;
const _GREENGRASS600 = '#B2DDB5';
export const GREENGRASS600 = `var(--GREENGRASS600, ${_GREENGRASS600})`;
const _GREENGRASS700 = '#94CE9A';
export const GREENGRASS700 = `var(--GREENGRASS700, ${_GREENGRASS700})`;
const _GREENGRASS800 = '#65BA74';
export const GREENGRASS800 = `var(--GREENGRASS800, ${_GREENGRASS800})`;
const _GREENGRASS900 = '#46A758';
export const GREENGRASS900 = `var(--GREENGRASS900, ${_GREENGRASS900})`;
const _GREENGRASS1000 = '#3E9B4F';
export const GREENGRASS1000 = `var(--GREENGRASS1000, ${_GREENGRASS1000})`;
const _GREENGRASS1100 = '#2A7E3B';
export const GREENGRASS1100 = `var(--GREENGRASS1100, ${_GREENGRASS1100})`;
const _GREENGRASS1200 = '#203C25';
export const GREENGRASS1200 = `var(--GREENGRASS1200, ${_GREENGRASS1200})`;

// Yellow Amber Color
const _YELLOWAMBER100 = '#FEFDFB';
export const YELLOWAMBER100 = `var(--YELLOWAMBER100, ${_YELLOWAMBER100})`;
const _YELLOWAMBER200 = '#FEFBE9';
export const YELLOWAMBER200 = `var(--YELLOWAMBER200, ${_YELLOWAMBER200})`;
const _YELLOWAMBER300 = '#FFF7C2';
export const YELLOWAMBER300 = `var(--YELLOWAMBER300, ${_YELLOWAMBER300})`;
const _YELLOWAMBER400 = '#FFEE9C';
export const YELLOWAMBER400 = `var(--YELLOWAMBER400, ${_YELLOWAMBER400})`;
const _YELLOWAMBER500 = '#FBE577';
export const YELLOWAMBER500 = `var(--YELLOWAMBER500, ${_YELLOWAMBER500})`;
const _YELLOWAMBER600 = '#F3D673';
export const YELLOWAMBER600 = `var(--YELLOWAMBER600, ${_YELLOWAMBER600})`;
const _YELLOWAMBER700 = '#E9C162';
export const YELLOWAMBER700 = `var(--YELLOWAMBER700, ${_YELLOWAMBER700})`;
const _YELLOWAMBER800 = '#E2A336';
export const YELLOWAMBER800 = `var(--YELLOWAMBER800, ${_YELLOWAMBER800})`;
const _YELLOWAMBER900 = '#FFC53D';
export const YELLOWAMBER900 = `var(--YELLOWAMBER900, ${_YELLOWAMBER900})`;
const _YELLOWAMBER1000 = '#FFBA18';
export const YELLOWAMBER1000 = `var(--YELLOWAMBER1000, ${_YELLOWAMBER1000})`;
const _YELLOWAMBER1100 = '#AB6400';
export const YELLOWAMBER1100 = `var(--YELLOWAMBER1100, ${_YELLOWAMBER1100})`;
const _YELLOWAMBER1200 = '#4F3422';
export const YELLOWAMBER1200 = `var(--YELLOWAMBER1200, ${_YELLOWAMBER1200})`;

// Orange Color
const _ORANGE100 = '#FEFCFB';
export const ORANGE100 = `var(--ORANGE100, ${_ORANGE100})`;
const _ORANGE200 = '#FFF7ED';
export const ORANGE200 = `var(--ORANGE200, ${_ORANGE200})`;
const _ORANGE300 = '#FFEFD6';
export const ORANGE300 = `var(--ORANGE300, ${_ORANGE300})`;
const _ORANGE400 = '#FFDFB5';
export const ORANGE400 = `var(--ORANGE400, ${_ORANGE400})`;
const _ORANGE500 = '#FFD19A';
export const ORANGE500 = `var(--ORANGE500, ${_ORANGE500})`;
const _ORANGE600 = '#FFC182';
export const ORANGE600 = `var(--ORANGE600, ${_ORANGE600})`;
const _ORANGE700 = '#F5AE73';
export const ORANGE700 = `var(--ORANGE700, ${_ORANGE700})`;
const _ORANGE800 = '#EC9455';
export const ORANGE800 = `var(--ORANGE800, ${_ORANGE800})`;
const _ORANGE900 = '#F76B15';
export const ORANGE900 = `var(--ORANGE900, ${_ORANGE900})`;
const _ORANGE1000 = '#EF5F00';
export const ORANGE1000 = `var(--ORANGE1000, ${_ORANGE1000})`;
const _ORANGE1100 = '#CC4E00';
export const ORANGE1100 = `var(--ORANGE1100, ${_ORANGE1100})`;
const _ORANGE1200 = '#582D1D';
export const ORANGE1200 = `var(--ORANGE1200, ${_ORANGE1200})`;

export const DEFAULT_COLOR: Color = {
  BLACK: _BLACK,
  BLUE100: _BLUE100,
  BLUE1000: _BLUE1000,
  BLUE1100: _BLUE1100,
  BLUE1200: _BLUE1200,
  BLUE200: _BLUE200,
  BLUE300: _BLUE300,
  BLUE400: _BLUE400,
  BLUE500: _BLUE500,
  BLUE600: _BLUE600,
  BLUE700: _BLUE700,
  BLUE800: _BLUE800,
  BLUE900: _BLUE900,
  GRAYMAUVE100: _GRAYMAUVE100,
  GRAYMAUVE1000: _GRAYMAUVE1000,
  GRAYMAUVE1100: _GRAYMAUVE1100,
  GRAYMAUVE1200: _GRAYMAUVE1200,
  GRAYMAUVE200: _GRAYMAUVE200,
  GRAYMAUVE300: _GRAYMAUVE300,
  GRAYMAUVE400: _GRAYMAUVE400,
  GRAYMAUVE500: _GRAYMAUVE500,
  GRAYMAUVE600: _GRAYMAUVE600,
  GRAYMAUVE700: _GRAYMAUVE700,
  GRAYMAUVE800: _GRAYMAUVE800,
  GRAYMAUVE900: _GRAYMAUVE900,
  GREENCASH100: _GREENCASH100,
  GREENCASH1000: _GREENCASH1000,
  GREENCASH1100: _GREENCASH1100,
  GREENCASH1200: _GREENCASH1200,
  GREENCASH200: _GREENCASH200,
  GREENCASH300: _GREENCASH300,
  GREENCASH400: _GREENCASH400,
  GREENCASH500: _GREENCASH500,
  GREENCASH600: _GREENCASH600,
  GREENCASH700: _GREENCASH700,
  GREENCASH800: _GREENCASH800,
  GREENCASH900: _GREENCASH900,
  GREENGRASS100: _GREENGRASS100,
  GREENGRASS1000: _GREENGRASS1000,
  GREENGRASS1100: _GREENGRASS1100,
  GREENGRASS1200: _GREENGRASS1200,
  GREENGRASS200: _GREENGRASS200,
  GREENGRASS300: _GREENGRASS300,
  GREENGRASS400: _GREENGRASS400,
  GREENGRASS500: _GREENGRASS500,
  GREENGRASS600: _GREENGRASS600,
  GREENGRASS700: _GREENGRASS700,
  GREENGRASS800: _GREENGRASS800,
  GREENGRASS900: _GREENGRASS900,
  ORANGE100: _ORANGE100,
  ORANGE1000: _ORANGE1000,
  ORANGE1100: _ORANGE1100,
  ORANGE1200: _ORANGE1200,
  ORANGE200: _ORANGE200,
  ORANGE300: _ORANGE300,
  ORANGE400: _ORANGE400,
  ORANGE500: _ORANGE500,
  ORANGE600: _ORANGE600,
  ORANGE700: _ORANGE700,
  ORANGE800: _ORANGE800,
  ORANGE900: _ORANGE900,
  PURPLE100: _PURPLE100,
  PURPLE1000: _PURPLE1000,
  PURPLE1100: _PURPLE1100,
  PURPLE1200: _PURPLE1200,
  PURPLE200: _PURPLE200,
  PURPLE300: _PURPLE300,
  PURPLE400: _PURPLE400,
  PURPLE500: _PURPLE500,
  PURPLE600: _PURPLE600,
  PURPLE700: _PURPLE700,
  PURPLE800: _PURPLE800,
  PURPLE900: _PURPLE900,
  REDTOMATO100: _REDTOMATO100,
  REDTOMATO1000: _REDTOMATO1000,
  REDTOMATO1100: _REDTOMATO1100,
  REDTOMATO1200: _REDTOMATO1200,
  REDTOMATO200: _REDTOMATO200,
  REDTOMATO300: _REDTOMATO300,
  REDTOMATO400: _REDTOMATO400,
  REDTOMATO500: _REDTOMATO500,
  REDTOMATO600: _REDTOMATO600,
  REDTOMATO700: _REDTOMATO700,
  REDTOMATO800: _REDTOMATO800,
  REDTOMATO900: _REDTOMATO900,
  VIOLET100: _VIOLET100,
  VIOLET1000: _VIOLET1000,
  VIOLET1100: _VIOLET1100,
  VIOLET1200: _VIOLET1200,
  VIOLET200: _VIOLET200,
  VIOLET300: _VIOLET300,
  VIOLET400: _VIOLET400,
  VIOLET500: _VIOLET500,
  VIOLET600: _VIOLET600,
  VIOLET700: _VIOLET700,
  VIOLET800: _VIOLET800,
  VIOLET900: _VIOLET900,
  WHITE: _WHITE,
  YELLOWAMBER100: _YELLOWAMBER100,
  YELLOWAMBER1000: _YELLOWAMBER1000,
  YELLOWAMBER1100: _YELLOWAMBER1100,
  YELLOWAMBER1200: _YELLOWAMBER1200,
  YELLOWAMBER200: _YELLOWAMBER200,
  YELLOWAMBER300: _YELLOWAMBER300,
  YELLOWAMBER400: _YELLOWAMBER400,
  YELLOWAMBER500: _YELLOWAMBER500,
  YELLOWAMBER600: _YELLOWAMBER600,
  YELLOWAMBER700: _YELLOWAMBER700,
  YELLOWAMBER800: _YELLOWAMBER800,
  YELLOWAMBER900: _YELLOWAMBER900
};

/////////////////////////////////////////////////////////////////////////////
// Shadow Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_SHADOW: Shadow = {
  button: '0px 1px 2px 0px rgba(0, 0, 0, 0.16)',
  default:
    '0px 0.5px 1.75px 0px rgba(0, 0, 0, 0.04), 0px 1.85px 6.25px 0px rgba(0, 0, 0, 0.19)',
  element: 'rgba(16, 24, 32, 0.04) 0px 1px 2px 1px',
  lg: 'rgba(16, 24, 32, 0.1) 0px 10px 32px 0px, rgba(16, 24, 32, 0.08) 0px 1px 3px 0px',
  md: 'rgba(16, 24, 32, 0.06) 0px 2px 6px 0px',
  sm: 'rgba(16, 24, 32, 0.06) 0px 0px 6px 0px',
  xl: 'rgba(16, 24, 32, 0.16) 0px 10px 20px 0px, rgba(16, 24, 32, 0.04) 0px 1px 2px 0px'
};

/////////////////////////////////////////////////////////////////////////////
// Border Radius
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_RADIUS: Radius = {
  circle: '50%',
  lg: '12px',
  md: '8px',
  sm: '4px',
  square: '0px',
  xl: '16px',
  xs: '2px'
};

/////////////////////////////////////////////////////////////////////////////
// Spacing Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_SPACING: Spacing = {
  lg: '16px',
  md: '12px',
  sm: '8px',
  xl: '24px',
  xs: '4px',
  xxl: '32px'
};

/////////////////////////////////////////////////////////////////////////////
// Transition Constant
/////////////////////////////////////////////////////////////////////////////

export const DEFAULT_TRANSITION: Transition = {
  duration: '300ms',
  timingFunction: 'cubic-bezier(0.63, 0.01, 0.29, 1)'
};

export const DEFAULT_CUSTOM_ELEMENT: CustomElementStyle = {};

export const DEFAULT_THEME: Theme = {
  color: DEFAULT_COLOR,
  elements: {},
  fontFamily: DEFAULT_FONT_FAMILY,
  fontWeight: DEFAULT_FONT_WEIGHT,
  radius: DEFAULT_RADIUS,
  shadow: DEFAULT_SHADOW,
  spacing: DEFAULT_SPACING,
  transition: DEFAULT_TRANSITION,
  typography: DEFAULT_TYPOGRAPHY_MODIFIER
};
