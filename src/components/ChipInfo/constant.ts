import {
  BLUE200,
  BLUE700,
  BLUE900,
  BLUE1100,
  GREENCASH200,
  GREENCASH700,
  GREENGRASS900,
  GREENGRASS1100,
  ORANGE200,
  ORANGE700,
  ORANGE900,
  ORANGE1100,
  REDTOMATO200,
  REDTOMATO700,
  REDTOMATO900,
  REDTOMATO1100
} from '@/constant/theme';

import type { ColorType } from './types';

export const CHIP_TYPE: Record<string, ColorType> = {
  error: {
    background: REDTOMATO200,
    border: REDTOMATO700,
    icon: REDTOMATO900,
    text: REDTOMATO1100
  },
  neutral: {
    background: BLUE200,
    border: BLUE700,
    icon: BLUE900,
    text: BLUE1100
  },
  success: {
    background: GREENCASH200,
    border: GREENCASH700,
    icon: GREENGRASS900,
    text: GREENGRASS1100
  },
  warning: {
    background: ORANGE200,
    border: ORANGE700,
    icon: ORANGE900,
    text: ORANGE1100
  }
};
