import {Subject} from "../../containers/daySchedule/dayShedule";
import {Lesson} from "../../containers/daySchedule/dayShedule";
import {NoTimeLesson} from "../../containers/tableview/tableview";

export default class SubjectService {

  static LessonsTimesStarts = {
    "08:30:00": 0,
    "10:25:00": 1,
    "12:20:00": 2,
    "14:15:00": 3,
    "16:10:00": 4,
  }

  // but day will be just from 1 to 6
  constructor(private subjects: Subject[], private day?: 1 | 2 | 3 | 4 | 5 | 6, private week?: 1 | 2) {}

  public setSubjects = (subjects: Subject[]) => {
    this.subjects = subjects;
  }

  static getLessons = (): Lesson[] => Object.keys(SubjectService.LessonsTimesStarts)
    .map<Lesson>(timeStart => ({subjects: [], timeStart, empty:true}));

  private filterByDate = (day = this.day, weekOrder = this.week): Subject[] =>
    this.subjects.filter(({week, dayOfWeek}) => day === dayOfWeek && week === weekOrder);

  static getInitialLessonsByDate = ():NoTimeLesson[][][][] => {
      const lessonsByDate:NoTimeLesson[][][][] = [[],[]];
      for (let i:0|1|2|3|4|5 = 0; i < 5; i++) {
          lessonsByDate[0].push([[],[],[],[],[],[]]);
          lessonsByDate[1].push([[],[],[],[],[],[]]);
      }
      return lessonsByDate
  }

  public getLessonsSortedByDate = ():NoTimeLesson[][][][] => {
      const lessonsByDate:NoTimeLesson[][][][] = SubjectService.getInitialLessonsByDate();
      this.subjects.forEach(
          ({
               week,
               dayOfWeek,
               timeStart,
               type,
               subjectId:id,
               subject: {name, teachers: teacher}}) => {
              lessonsByDate[week-1][SubjectService.LessonsTimesStarts[timeStart]][dayOfWeek-1].push({
                  name: (type ? type + ". " : "") + name,
                  teacher,
                  id
              });
          }
      );
      console.log("lessonsByDate",lessonsByDate[0])
      return lessonsByDate;
  }

  public getRenderedLessons = (day = this.day, weekOrder = this.week): Lesson[] => {
    const lessons: Lesson[] = SubjectService.getLessons();

    const filtered = this.filterByDate(day, weekOrder);

    filtered.forEach(
      ({
         type, subjectId: id, timeStart,
         subject: {name, teachers: teacher}
       }) => {
        lessons[SubjectService.LessonsTimesStarts[timeStart]].subjects.push({
          name: (type ? type + ". " : "") + name,
          teacher,
          id
        })
      }
    );

    lessons.forEach(lesson => {
      lesson.empty = !Boolean(lesson.subjects.length)
    });

    return lessons;
  }

}
