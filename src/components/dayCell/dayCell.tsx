import React from "react";
import "./stylesDayCell.scss";
import DateService, {Day} from "../../api/services/dateService";

type DayCellType = {
  day: Day
}
const DayCell: React.FC<DayCellType> = ({day}) => {
  return (
    <li key={day.date.getTime()} className={`day-cell__container`}>
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

export default DayCell;
