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

export type Lesson = { subjects:{ name: string, teacher: string, id: string }[], timeStart: string, active?:boolean, empty?:boolean};

const DaySchedule:React.FC<DayScheduleType> = ({group, setGroup, date}) => {
  const { data, error } = useSWR<AxiosResponse<Subject[]>>(`/groups/${group}/timetable`, apiAxios);
  const {data:weekData, error:weekError} =
    useSWR<AxiosResponse<{weekNumber:1|2}>>(`/week/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`, apiAxios);
  const SubjectServiceClass = useSubjectService();
  console.log(data, error, weekData, weekError);
  if(error||weekError) {
    // todo mb handle server errors
    setGroup('');
    return <></>
  }

  if(!data||!weekData)
     return <div className="dat-schedule">Loading...</div>;

  const SubjectService = new SubjectServiceClass(data.data, date.getDay() as 1|2|3|4|5|6, weekData.data.weekNumber);

  const filteredSubjects = SubjectService.getRenderedLessons();

  console.log(filteredSubjects);

  return <DayScheduleRender subjects={filteredSubjects}/>;

}

const mapStateToProps:MapStateToProps<{group:string, date: Date},any,StateType> = ({user, date}) => ({
  group: user.group,
  date: date.date
});

const mapDispatchToProps = {
  setGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySchedule);
