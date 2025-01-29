import type { NullAble } from '@/types/utils';

export type CalendarProps = {
  /**
   * Callback function triggered when a date is selected.
   * @param {number} [args] - The selected date as a timestamp (in milliseconds).
   */
  onChooseDate: (args?: number) => void;

  /**
   * The currently selected date as a timestamp (in milliseconds).
   * Optional.
   */
  selectedDate?: number;
};

export type CalendarRefType = {
  /**
   * Sets the current month in the calendar.
   * @param {number} args - The month to set (0-11, where 0 = January and 11 = December).
   */
  setCurrentMonth: (args: number) => void;
};

export interface OnClickPaginationArgs {
  /**
   * The type of pagination action.
   * - `next`: Move forward.
   * - `previous`: Move backward.
   */
  type: 'next' | 'previous';

  /**
   * The unit of time to paginate by.
   * - `month`: Change by months.
   * - `year`: Change by years.
   */
  unit: 'month' | 'year';
}

export interface CalendarActionBarProps {
  /**
   * The current month being displayed, represented as a timestamp (in milliseconds).
   */
  currentMonth: number;

  /**
   * Callback function triggered when pagination buttons are clicked.
   * @param {OnClickPaginationArgs} args - The pagination action details.
   */
  onClickPagination: (args: OnClickPaginationArgs) => void;
}

export type CalendarItemProps = {
  /**
   * The date object representing the calendar item.
   */
  date: Date;

  /**
   * Whether the calendar item is disabled.
   * Optional.
   */
  disabled?: boolean;

  /**
   * Callback function triggered when a calendar item is clicked.
   * @param {number} date - The selected date as a timestamp (in milliseconds).
   */
  onClickCalendarItem: (date: number) => void;

  /**
   * The currently selected date as a timestamp (in milliseconds), or null.
   * Optional.
   */
  selectedDate?: NullAble<number>;
};
