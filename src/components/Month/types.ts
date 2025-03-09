import type { NullAble } from '@/types/utils';

export interface MonthsType {
  name: string;
  value: number;
}

export type MonthProps = {
  /**
   * Callback function triggered when a date is selected.
   * @param {number} [args] - The selected date as a timestamp (in milliseconds).
   */
  onChooseMonth: (args?: number) => void;

  /**
   * The currently selected date as a timestamp (in milliseconds).
   * Optional.
   */
  selectedDate?: number;
};

export type MonthRefType = {
  /**
   * Sets the current month in the month.
   * @param {number} args - The month to set (0-11, where 0 = January and 11 = December).
   */
  setCurrentYear: (args: number) => void;
};

export interface MonthActionBarProps {
  /**
   * The current year displayed in the action bar.
   */
  currentYear: number;

  /**
   * Callback function triggered when the year is changed.
   * @param {number} arg - The new year to set.
   */
  onChange: (arg: number) => void;
}

export interface MonthitemProps {
  /**
   * Whether the calendar item is disabled.
   * Optional.
   */
  disabled?: boolean;
  months: MonthsType;

  /**
   * Callback function triggered when a calendar item is clicked.
   * @param {number} date - The selected date as a timestamp (in milliseconds).
   */
  onClickMonthItem: (string: number) => void;

  /**
   * The currently selected date as a timestamp (in milliseconds), or null.
   * Optional.
   */
  selectedDate?: NullAble<number>;

  selectedYear: number;
}
