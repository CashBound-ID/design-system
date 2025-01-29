export interface DateCalendarType {
  date: Date;
  disabled?: boolean;
  key: string;
}

export interface MonthCalendarType {
  dates: DateCalendarType[];
  key: string;
}

export interface getFirstDayOfWeekArgs {
  dateString: Date;
  isNextWeek: boolean;
}
