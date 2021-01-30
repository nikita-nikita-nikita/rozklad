import React from "react";
import "./stylesDayCell.scss";
import { connect } from "react-redux";
import DateService, {Day} from "../../api/services/dateService";
import {setDate} from "../../reducers/dateReducer/actions";

type DayCellType = {
  day: Day
  setDate:(date:Date) => void
}
const DayCell: React.FC<DayCellType> = ({day,setDate}) => {
  return (
    <li className={`day-cell__container`} onClick={() => setDate(day.date)}>
      <div className="day-cell">
        <div className="day-cell__content">
          <p className="day-cell__day-name">{DateService.getWeekdayName(day.date.getDay())}</p>
          <p className="day-cell__date">{day.date.getDate()}</p>
        </div>
        <div className="day-cell__vertical-line"/>
      </div>
    </li>
  )
}

const mapDispatchToProps = {
  setDate
}

export default connect<any,{setDate:(date:Date) => void},{day:Day}>(null,mapDispatchToProps)(DayCell);
