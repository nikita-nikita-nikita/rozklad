import React, {useEffect, useState} from "react";
import "./stylesDayShedule.scss";
import {connect, MapStateToProps} from "react-redux";
import axios,{AxiosResponse, CancelTokenSource} from "axios";
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
  dayOfWeek: 1|2|3|4|5|6
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

type UseGroupsApi = (data:{group:string, date:Date}) => {error:boolean, lessons:Lesson[]}

const useGroupsApi:UseGroupsApi = ({group, date}) => {
  const SubjectServiceClass = useSubjectService();
  const [subjects, setSubjects] = useState<Subject[]|null>(null);
  const [lessons, setLessons] = useState<Lesson[]>(SubjectServiceClass.getLessons());
  // const [weekNumber, setWeekNumber] = useState<1|2|null>(null);
  const [error, setError] = useState<boolean>(false);
  const [firstLoaded, setFirstLoading] =
    useState<boolean>(false)
  const handleError = () => setError(true);

  // componentDidMount
  const handleWeekResponse = (subjects:Subject[]):void => {
    apiAxios.get<{ weekNumber: 1 | 2 }>(`/week/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
      .then(({data: {weekNumber}}) => {
        const subjectService = new SubjectServiceClass(subjects, date.getDay() as 1 | 2 | 3 | 4 | 5 | 6, weekNumber);
        setLessons(subjectService.getRenderedLessons())
      })
      .catch(handleError)
  }

  useEffect(() => {
    apiAxios.get<Subject[]>(`/groups/${group}/timetable`)
      .then( ({data}) => {
        setSubjects(data);
        setFirstLoading( true);
        handleWeekResponse(data)
      })
      .catch(handleError)
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if(firstLoaded) {
      handleWeekResponse(subjects as Subject[])
    }
  }, [date.getTime()]);
  return ({
    lessons,
    error
  })
}

const DaySchedule:React.FC<DayScheduleType> = ({group, setGroup, date}) => {
  // const { data, error } = useSWR<AxiosResponse<Subject[]>>(`/groups/${group}/timetable`, apiAxios);
  // const {data:weekData, error:weekError} = useSWR<AxiosResponse<{weekNumber:1|2}>>(`/week/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`, apiAxios);

  const {lessons, error} = useGroupsApi({group, date});
  // useEffect(() => {
  //
  //   setGroup('');
  // }, [])
  if(error) {
    setGroup('');
    return <></>
  }
  return <DayScheduleRender subjects={lessons}/>;
}

const mapStateToProps:MapStateToProps<{group:string, date: Date},any,StateType> = ({user, date}) => ({
  group: user.group,
  date: date.date
});

const mapDispatchToProps = {
  setGroup
}

export default connect(mapStateToProps, mapDispatchToProps)(DaySchedule);
