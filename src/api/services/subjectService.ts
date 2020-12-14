import {Subject} from "../../containers/daySchedule/dayShedule";

export default class SubjectService{
  // but day will be just from 1 to 6
  constructor(private subjects:Subject[], private day:0|1|2|3|4|5|6, private week:1|2) {}

  private filterByDate = () =>
    this.subjects.filter( ({week, day}) => week===this.week &&day===day);

  static LessonsTimesStarts = {
    "08:30:00":0,
    "10:25:00":1,
    "12:20:00":2,
    "14:15:00":3,
    "16:10:00":4,
  }
  //
  // public getRenderedLessons = () => {
  //   const lessons:{name:string,teachers:string}[] = [];
  //   this.subjects.forEach(({subject, timeStart, type}) => {
  //     lessons[SubjectService.LessonsTimesStarts[timeStart]].name += subject.name + " " + type + ";"
  //   })
  // }

}
