
export type Day = {
    date:Date
    isActive?:boolean
}

export default class DateService{
    private date: Date;

    constructor(date: Date) {
        this.date = new Date(date.getTime());
    }

    private getNthDay = (n:number, date:Date = this.date):Date => {
        const newDate = new Date(date.getTime());
      newDate.setDate(newDate.getDate() + n);
        return newDate;
    }


    static weekdayNames = [
      ,
      "пн",
      "вт",
      "ср",
      "чт",
      "пт",
      "сб"
    ]

    static getWeekdayName = (day:number) => DateService.weekdayNames[day];

    getDay = (date:Date, isActive:boolean = false):Day => ({date, isActive});

    public getDisplayedDays = (length:number = 8) : Day[] => {
      let incr = - 3;
      const daysArray:Day[] = [];
      while (daysArray.length < length) {
        let date = this.getNthDay(incr);
        if(date.getDay()===0) date = this.getNthDay(++incr);
        incr++;
        daysArray.push({date, isActive: date.getTime()===this.date.getTime()});
      }
      return daysArray
    }
}
