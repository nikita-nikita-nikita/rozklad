import React, {useEffect} from "react";
import "./stylesDayShedule.scss";
import {connect, MapStateToProps} from "react-redux";
import {AxiosResponse} from "axios";
import useSWR from 'swr'
import {StateType} from "../../store";
import {setGroup} from "../../reducers/userReducer/actions";
import {apiAxios} from "../../config/axiosConfig";
import DayScheduleRender from "../../components/DaySchedule/DayScheduleRender";
import {useSubjectService} from "../../api/context/subjectServiceContext";

type DayScheduleType = {
  group: string
  setGroup: (group: string) => void
  date: Date
}

export type Subject = {
  id:string
  subjectId:string
  timeStart:"08:30:00"|"10:25:00"|"12:20:00"|"14:15:00"|"16:10:00"
  week:1|2
  day: 1|2|3|4|5|6
  type:string
  subject:{
    id: string,
    groupId: string,
    name: string,
    teachers: string,
    lessonsZoom: null,
    labsZoom: null,
    lessonsAccessCode: null,
    labsAccessCode: null
  }
}

const DaySchedule:React.FC<DayScheduleType> = ({group, setGroup, date}) => {
  const { data:res, error } = useSWR<AxiosResponse<Subject[]>>(`/groups/${group}/timetable`, apiAxios);

  // todo get week from api
  if((res&&res.statusText!=='OK')||error) {
    setGroup('');
    return <></>
  }
  if(!res) return <></>;
  const {data:subjects} = res;
  const week = 1;
  const SubjectService = new (useSubjectService())(subjects, date.getDay() as 0|1|2|3|4|5|6, week);
  const filtered = subjects.filter( subject => subject.week === week&&subject.day===date.getDay())
  console.log(res);

  return (
    <div className="dat-schedule">
      {
        res
        ? <DayScheduleRender subjects={[]}/>
        : 'loading'
      }
    </div>
  )
}

const mapStateToProps:MapStateToProps<{group:string, date: Date},any,StateType> = ({user, date}) => ({
  group: user.group,
  date: date.date
});

const mapDispatchToProps = {
  setGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySchedule);
