import React from "react";
import "./stylesTimetable.scss";
import VerticalScroll from "../../components/verticalScroll";

const Timetable = () => {
    return (
        <>
            <aside>
                Aside
            </aside>
            <main className="timetable-days-navigator">
              <VerticalScroll />
            </main>
        </>
    )
}

export default Timetable;
