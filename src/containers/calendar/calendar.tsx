import React from "react";
import "./stylesCalendar.scss"
import ReactCalendar, {OnChangeDateCallback, ViewCallbackProperties} from "react-calendar";
import {connect, MapStateToProps} from "react-redux";
import DateService from "../../api/services/dateService";
import {StateType} from "../../store";
import {setDate} from "../../reducers/dateReducer/actions";

type CalendarType = {
  date: Date,
  setDate: (date: Date) => void
}

const tileDisabled = ({date, view}: { date: Date, view: string }): boolean => {
  // Disable tiles in month view only
  if (view === 'month') {
    return date.getDay() === 0;
  }
  return false
}


const Calendar: React.FC<CalendarType> = ({date, setDate}) => {

  return (
    <ReactCalendar
                   formatMonthYear={(locale, date) => DateService.GetMonthName(date) + " " + date.getFullYear()}
                   formatMonth={(locale, date) => DateService.GetMonthName(date)}
                   tileDisabled={tileDisabled}
                   activeStartDate={date}
                   value={date}
                   className="calendar"
                   onChange={setDate as OnChangeDateCallback}/>
  )
};

const mapStateToProps: MapStateToProps<{ date: Date }, any, StateType> = ({date}) => ({
  date: date.date
});

const mapDispatchToProps = {
  setDate
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
