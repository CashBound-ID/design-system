import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { MAXIMUM_CALENDAR_ITEM } from '@/constant/date';
import type { DateCalendarType } from '@/types/date';

dayjs.extend(isoWeek);
dayjs.extend(isSameOrBefore);

/**
 * Generates an array of calendar items for a given month, including disabled dates from the previous and next months to fill the calendar grid.
 *
 * @param {number} monthTimestamp - The timestamp representing the first day of the month for which the calendar is generated.
 * @returns {DateCalendarType[]} An array of calendar items, each containing a date, a disabled status, and a unique key.
 */
export const genCalendarItem = (monthTimestamp: number): DateCalendarType[] => {
  const dateOfMonth: DateCalendarType[] = [];

  /**
   * INFO: Mapping disable date on previous month
   */

  const emptyDatePrevMonth = Array(
    dayjs(monthTimestamp).date(1).isoWeekday()
  ).fill(null);

  emptyDatePrevMonth.forEach((_, index) => {
    const currentDate = dayjs(monthTimestamp)
      .subtract(1, 'month')
      .endOf('month')
      .subtract(emptyDatePrevMonth.length - 1 - index, 'day')
      .toDate();

    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    dateOfMonth.push({
      date: currentDate,
      disabled: true,
      key: `disabled-${dayjs(currentDate).format('DD MMM YYYY')}-${dayjs(monthTimestamp).format('MMM YYYY')}`
    });
  });

  /**
   * INFO: mapping each date on current month
   */

  Array(dayjs(monthTimestamp).daysInMonth())
    .fill(null)
    .forEach((_, index) => {
      const currentDate = dayjs(monthTimestamp).toDate();
      currentDate.setDate(index + 1);
      currentDate.setHours(0);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);

      dateOfMonth.push({
        date: currentDate,
        disabled: false,
        key: dayjs(currentDate).format('DD MMM YYYY')
      });
    });

  /**
   * INFO: Mapping disable date on next month
   */

  const emptyDateNextMonth = Array(
    MAXIMUM_CALENDAR_ITEM - dateOfMonth.length
  ).fill(null);

  emptyDateNextMonth.forEach((_, index) => {
    const currentDate = dayjs(monthTimestamp)
      .add(1, 'month')
      .set('date', index + 1)
      .toDate();

    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    dateOfMonth.push({
      date: currentDate,
      disabled: true,
      key: `disabled-${dayjs(currentDate).format('DD MMM YYYY')}-${dayjs(monthTimestamp).format('MMM YYYY')}`
    });
  });

  return dateOfMonth;
};

/////////////////////////////////////////////////////////////////////////////
// Date Modification Utils
/////////////////////////////////////////////////////////////////////////////

/**
 * Sets the time of the given date to midnight (00:00:00.000).
 *
 * @param {Date} date - The date object to be modified.
 * @returns {Date} The modified date object with the time set to midnight.
 */
export const setToMidnight = (date: Date): Date => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
};

/**
 * Sets the time of the given date to end of day (23:59:59.000).
 *
 * @param {Date} date - The date object to be modified.
 * @returns {Date} The modified date object with the time set to end of day.
 */
export const setToEndOfDay = (date: Date): Date => {
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  date.setMilliseconds(0);

  return date;
};

/**
 * Sets the given date to the first day of the month and sets the time to midnight (00:00:00.000).
 *
 * @param {Date} date - The date object to be modified.
 * @returns {Date} The modified date object set to the first day of the month with the time set to midnight.
 */
export const setToFirstDayOfMonth = (date: Date): Date => {
  date.setDate(1);

  return setToMidnight(date);
};
