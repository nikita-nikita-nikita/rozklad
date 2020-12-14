import React from "react";
import "./stylesDayScheduleSubject.scss";

type DayScheduleSubjectPropsType = {
  active?: boolean
  empty?:boolean
  timeStart: string
  lesson:{
    name: string
    teacher: string
  }
}

const DayScheduleSubject:React.FC<DayScheduleSubjectPropsType> = (
  {
    active,
    empty,
    timeStart,
    lesson:{name, teacher}
  }) => {
  return (
    <div className={`day-schedule${active? ' day-schedule--active':''}${empty? ' day-schedule--empty':''}`}>
      <div className="day-schedule__time">{timeStart}</div>
      {!empty
        ?
        <>
          <div className="day-schedule__name">{name}</div>
          <div className="day-schedule__teacher">{teacher}</div>
        </>
        : null
      }
    </div>
  )
}

export default DayScheduleSubject;
