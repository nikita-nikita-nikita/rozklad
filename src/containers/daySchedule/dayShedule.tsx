import React, {useEffect} from "react";
import "./stylesDayShedule.scss";
import {connect, MapStateToProps} from "react-redux";
import useSWR from 'swr'
import {StateType} from "../../store";
import {setGroup} from "../../reducers/userReducer/actions";
import {apiAxios} from "../../config/axiosConfig";

type DayScheduleType = {
  group: string
  setGroup: (group: string) => void
}

type Subject = { }

const DaySchedule:React.FC<DayScheduleType> = ({group, setGroup}) => {
  const { data, error } = useSWR(`/groups/${group}/timetable`, apiAxios);

  return (
    <div className="dat-schedule">
    </div>
  )
}

const mapStateToProps:MapStateToProps<{group:string},any,StateType> = ({user}) => ({
  group: user.group
});

const mapDispatchToProps = {
  setGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySchedule);
