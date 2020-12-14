import React from "react";
import "./stylesDaySchedule.scss";
import DayScheduleSubject from "../DayScheduleSubject";

type DayScheduleRenderType = {
  subjects: {
    lesson:{
      name: string
      teacher: string
    }
    empty?:boolean
    active?:boolean
    timeStart: string
  }[]
}

const DayScheduleRender:React.FC<DayScheduleRenderType> = ({subjects}) => {
  return (
    <div className="day-schedule">
      {
        subjects.map((subject) => <DayScheduleSubject {...subject}/>)
      }

    </div>
  )
}

export default DayScheduleRender;
