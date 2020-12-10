import React, {useRef} from "react";
import "./verticalScroll.scss";
import {connect, MapStateToProps} from "react-redux";
import DateService, {Day} from "../../api/services/dateService";
import DayCell from "../dayCell";
import {StateType} from "../../store";

type VerticalScrollType = {
  date: Date
};


const VerticalScroll: React.FC<VerticalScrollType> = ({date}) => {
  const dateService = new DateService(date);
  const days: Day[] = dateService.getDisplayedDays();
  console.log(date);
  return (
    <div className="vertical-scroll" onWheel={() => console.log("wheel")}>
      {
        days.map(day => (
          <DayCell day={day} key={""+day.date.getTime()}/>
        ))
      }
    </div>
  )
};

const mapStateToProps:MapStateToProps<{date:Date},any,StateType> = ({date:{date}} )=> ({
  date
});

export default connect(mapStateToProps)(VerticalScroll);
