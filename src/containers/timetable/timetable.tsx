import React from "react";
import "./stylesTimetable.scss";
import VerticalScroll from "../../components/verticalScroll";
import DaySchedule from "../daySchedule";
import SubjectService from "../../api/services/subjectService";
import SubjectServiceContext from "../../api/context/subjectServiceContext";
import Todolist from "../todolist";
import Calendar from "../calendar";

const Timetable:React.FC = () => {
  return (
    <>
      <aside className="timetable-aside left-timetable-aside">
        Aside
      </aside>
      <main className="timetable-days-navigator">
        <VerticalScroll/>
        <SubjectServiceContext value={SubjectService}>
          <DaySchedule/>
        </SubjectServiceContext>
      </main>
      <aside className="timetable-aside right-timetable-aside">
        <Todolist/>
        <Calendar/>
      </aside>
    </>
  )
}

export default Timetable;
