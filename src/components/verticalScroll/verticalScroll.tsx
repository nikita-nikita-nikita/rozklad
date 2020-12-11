import React, {useEffect, useRef} from "react";
import "./verticalScroll.scss";
import {connect, MapStateToProps} from "react-redux";
import DateService, {Day} from "../../api/services/dateService";
import DayCell from "../dayCell";
import {StateType} from "../../store";
import {incrementDate, decrementDate} from "../../reducers/dateReducer/actions";

type VerticalScrollType = {
  date: Date
  incrementDate: () => void
  decrementDate: () => void
};


const VerticalScroll: React.FC<VerticalScrollType> = ({date, incrementDate, decrementDate}) => {
  const dateService = new DateService(date);
  const days: Day[] = dateService.getDisplayedDays();
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    scrollRef.current.scrollTo(0, 133);
  }, [date.getDate()])
  return (
    <div className="vertical-scroll">
      <div className="vertical-scroll-wrap" onWheel={(e) => console.log(e.deltaY)} ref={scrollRef}>
        {
          days.map(day => (
            <DayCell day={day} key={"" + day.date.getTime()}/>
          ))
        }
      </div>
    </div>
  )
};

const mapStateToProps: MapStateToProps<{ date: Date }, any, StateType> = ({date: {date}}) => ({
  date
});

const mapDispatchToProps = {
  incrementDate,
  decrementDate
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalScroll);
