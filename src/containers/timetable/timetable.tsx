import React from "react";
import "./stylesTimetable.scss";
import VerticalScroll from "../../components/verticalScroll";
import DaySchedule from "../daySchedule";
import SubjectService from "../../api/services/subjectService";
import SubjectServiceContext from "../../api/context/subjectServiceContext";

const Timetable:React.FC = () => {
  return (
    <>
      <aside>
        Aside
      </aside>
      <main className="timetable-days-navigator">
        <VerticalScroll/>
        <SubjectServiceContext value={SubjectService}>
          <DaySchedule/>
        </SubjectServiceContext>
      </main>
      <aside>
        Aside
      </aside>
    </>
  )
}

export default Timetable;
