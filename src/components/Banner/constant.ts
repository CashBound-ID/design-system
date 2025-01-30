import {
  GREENGRASS900,
  ORANGE900,
  REDTOMATO900,
  VIOLET900,
} from "@/constant/theme";
import { CashboundIconType } from "@/types/icon";

export const ICON_TYPE: Record<
  string,
  { icon: CashboundIconType; color: string }
> = {
  success: {
    icon: "check-circle-fill",
    color: GREENGRASS900,
  },
  neutral: {
    icon: "info-fill",
    color: VIOLET900,
  },
  warning: {
    icon: "warning-fill",
    color: ORANGE900,
  },
  error: {
    icon: "error-fill",
    color: REDTOMATO900,
  },
};
