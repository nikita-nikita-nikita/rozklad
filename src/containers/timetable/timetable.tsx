import React from "react";
import "./stylesTimetable.scss";
import VerticalScroll from "../../components/verticalScroll";
import DaySchedule from "../daySchedule";

const Timetable:React.FC = () => {
  return (
    <div className="timetable-page">
      <aside>
        Aside
      </aside>
      <main className="timetable-days-navigator">
        <VerticalScroll/>
        <DaySchedule/>
      </main>
      <aside>
        Aside
      </aside>
    </div>
  )
}

export default Timetable;
