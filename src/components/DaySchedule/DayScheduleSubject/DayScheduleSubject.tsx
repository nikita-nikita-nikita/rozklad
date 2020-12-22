import React from "react";
import "./stylesDayScheduleSubject.scss";
import {Lesson} from "../../../containers/daySchedule/dayShedule";

type DayScheduleSubjectPropsType = {
  lesson:Lesson
}

const DayScheduleSubject:React.FC<DayScheduleSubjectPropsType> = (
  {
    lesson:{subjects, timeStart, active, empty}
  }) => {

  return (
    <div className={`day-schedule${active? ' day-schedule--active':''}${empty ? ' day-schedule--empty' : ''}`}>
      <div className="day-schedule__time">{timeStart}</div>
      {
        subjects.map(({name, teacher}) => (
          <div className="day-schedule__subject">
            <div className="day-schedule__name">{name}.</div>
            <div className="day-schedule__teacher">{teacher}.</div>
          </div>
        ))
      }
    </div>
  )
}

export default DayScheduleSubject;
