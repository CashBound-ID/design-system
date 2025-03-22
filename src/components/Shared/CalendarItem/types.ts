export type CalendarItemProps = {
  /**
   * The date object representing the calendar item.
   */
  date?: Date;

  /**
   * Whether the calendar item is disabled.
   * Optional.
   */
  disabled?: boolean;

  /**
   * Indicates whether the calendar item is currently selected.
   * @type {boolean}
   */
  isSelected: boolean;

  /**
   * Indicates whether the calendar item represents today's date.
   * @type {boolean}
   */
  isToday: boolean;

  /**
   * The label to display for the calendar item.
   */
  label: string;
  /**
   * Callback function triggered when a calendar item is clicked.
   * @param {number} date - The selected date as a timestamp (in milliseconds).
   */
  onClickCalendarItem: (date: number) => void;
};
