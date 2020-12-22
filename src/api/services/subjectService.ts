import {Subject} from "../../containers/daySchedule/dayShedule";
import {Lesson} from "../../containers/daySchedule/dayShedule";

export default class SubjectService {

  static LessonsTimesStarts = {
    "08:30:00": 0,
    "10:25:00": 1,
    "12:20:00": 2,
    "14:15:00": 3,
    "16:10:00": 4,
  }

  // but day will be just from 1 to 6
  constructor(private subjects: Subject[], private day: 1 | 2 | 3 | 4 | 5 | 6, private week: 1 | 2) {
    console.log(subjects)
  }

  public setSubjects = (subjects: Subject[]) => {
    this.subjects = subjects;
  }

  static getLessons = (): Lesson[] => Object.keys(SubjectService.LessonsTimesStarts)
    .map<Lesson>((timeStart) => ({subjects: [], timeStart, empty:true}));

  private filterByDate = (): Subject[] =>
    this.subjects.filter(({week, dayOfWeek}) => this.day === dayOfWeek && week === this.week);

  public getRenderedLessons = (): Lesson[] => {
    const lessons: Lesson[] = SubjectService.getLessons();

    const filtered = this.filterByDate();

    filtered.forEach(
      ({
         type, subjectId: id, timeStart,
         subject: {name, teachers: teacher}
       }) => {
        const nm = (type ? type + ". " : "") + name;
        console.log(nm)
        lessons[SubjectService.LessonsTimesStarts[timeStart]].subjects.push({
          name: nm,
          teacher,
          id
        })
      }
    );

    lessons.forEach(lesson => {
      lesson.empty = !Boolean(lesson.subjects.length)
    })

    return lessons;
  }

}
