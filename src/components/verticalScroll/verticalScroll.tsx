import React, {useState, useEffect, useRef, WheelEvent} from "react";
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

enum DIRECTION {
  UP = -1,
  DOWN = 1,
  NEUTRAL = 0
}

const {UP, DOWN, NEUTRAL} = DIRECTION;

const VerticalScroll: React.FC<VerticalScrollType> = ({date, incrementDate, decrementDate}) => {
  // down = 1 ; up = -1;
  const dateService = new DateService(date);
  // const [days, setDays] = useState<Day[]>(dateService.getDisplayedDays());
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // const scroll = (vector: 1|-1|0|2|-2, behavior: "smooth"|"auto" = "smooth") => {
  //   scrollRef.current.scrollTo({
  //     top: 133*vector,
  //     behavior
  //   });
  // }

  const onWheel = ({deltaY}: WheelEvent<HTMLDivElement>) => {
    if (deltaY > 0) {
      incrementDate();
    } else {
      decrementDate();
    }
  }

  console.log('render');

  return (
    <div className="vertical-scroll">
      <div className="vertical-scroll-wrap" onWheel={onWheel} ref={scrollRef}>
        <div className="vertical-scroll__pointer"/>
        {
          dateService.getDisplayedDays().map(day => (
            <DayCell day={day}/>
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
