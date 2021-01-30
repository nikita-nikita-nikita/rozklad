export type Day = {
  date: Date
  isActive?: boolean
}

export default class DateService {

  constructor(private date: Date) {}

  private getNthDay = (n: number, date: Date = this.date): Date => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + n);
    return newDate;
  }

  static monthNames = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ]

  static GetMonthName = (date:Date):string => DateService.monthNames[date.getMonth()]

  static weekdayNames = [
    ,
    "пн",
    "вт",
    "ср",
    "чт",
    "пт",
    "сб"
  ]

  static weekdayNamesFull = [
      ,
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота"
  ]

  static getWeekdayName = (day: number) => DateService.weekdayNames[day];

  getDay = (date: Date, isActive: boolean = false): Day => ({date, isActive});

  private getDaysAroundActive = (length: number, step: number, start: Date = this.date): Day[] => {
    const returnedDays: Day[] = [];
    const currentDate:Date = new Date (start.getTime());
    while (returnedDays.length < length) {
      currentDate.setDate(currentDate.getDate() + step);
      if(currentDate.getDay()===0) currentDate.setDate(currentDate.getDate() + step);
      if(step>0) returnedDays.push({date:new Date(currentDate.getTime())});
      else returnedDays.unshift({date:new Date(currentDate.getTime())});
    }
    return returnedDays;
  };

  public getDisplayedDays = (): Day[] => [
    ...this.getDaysAroundActive(2,-1),
    {date:this.date, isActive:true},
    ...this.getDaysAroundActive(3,1)
  ];
}
