import React from "react";
import "./stylesDaySchedule.scss";
import DayScheduleSubject from "../DayScheduleSubject";
import {Lesson} from "../../../containers/daySchedule/dayShedule";

type DayScheduleRenderType = {
  subjects: Lesson[]
}

const DayScheduleRender:React.FC<DayScheduleRenderType> = ({subjects}) => {
  return (
    <div className="day-schedule-container">
      {
        subjects.map(lesson =>
          <DayScheduleSubject lesson={lesson}/>)
      }
    </div>
  )
}

export default DayScheduleRender;
