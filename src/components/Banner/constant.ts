import {
  GREENGRASS900,
  ORANGE900,
  REDTOMATO900,
  VIOLET900
} from '@/constant/theme';
import type { CashboundIconType } from '@/types/icon';

export const ICON_TYPE: Record<
  string,
  { color: string; icon: CashboundIconType }
> = {
  error: {
    color: REDTOMATO900,
    icon: 'error-fill'
  },
  neutral: {
    color: VIOLET900,
    icon: 'info-fill'
  },
  success: {
    color: GREENGRASS900,
    icon: 'check-circle-fill'
  },
  warning: {
    color: ORANGE900,
    icon: 'warning-fill'
  }
};
