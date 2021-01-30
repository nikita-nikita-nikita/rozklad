import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {connect, MapStateToProps} from "react-redux";
import {StateType} from "../../store";
import {apiAxios} from "../../config/axiosConfig";
import { Subject} from "../daySchedule/dayShedule";
import {useSubjectService} from "../../api/context/subjectServiceContext";
import DateService from "../../api/services/dateService";

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const TR = styled.tr`
  display: flex;
  justify-content: space-between;

  &.body {
    min-height: 100px;
  }
`;

const TimeStart = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) rotate(-90deg);
`;

const TD = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 160%;
  &:first-of-type {
    width: 30%;
    position: relative;
  }

  border: 1px solid #E7EDFF;
  box-sizing: border-box;
`;

const TH = styled.th`
  flex-grow: 160;
  width: 160%;

  &:first-of-type {
    width: 30%;
  }

  border: 1px solid #E7EDFF;
  box-sizing: border-box;
`;

type TableviewType = {
    group: string,
    week: 0 | 1
}

export type NoTimeLesson = { name: string, teacher: string, id: string }

const Tableview: React.FC<TableviewType> = ({group, week}) => {
    const SubjectServiceClass = useSubjectService();
    const [schedule, setSchedule] = useState<NoTimeLesson[][][][]>(SubjectServiceClass.getInitialLessonsByDate());
    console.log(SubjectServiceClass.getInitialLessonsByDate())
    const days = DateService.weekdayNamesFull;
    useEffect(() => {
        apiAxios.get<Subject[]>(`/groups/${group}/timetable`)
            .then(({data}) => {
                const service = new SubjectServiceClass(data);
                setSchedule(service.getLessonsSortedByDate());
            })
            .catch(console.log)
    }, [group]);
    return (
        <Table>
            <thead>
            <TR>
                <TH>
                </TH>
                {
                    days.map(day => <TH>{day}</TH>)
                }
            </TR>
            </thead>
            <tbody>
            {
                schedule[week].map(
                    (lesson, index) => {
                        return (
                            <TR className="body">
                                <TD>
                                    <TimeStart>
                                        {
                                            Object.keys(SubjectServiceClass.LessonsTimesStarts)[index].slice(0, 5)
                                        }
                                    </TimeStart>
                                </TD>
                                {
                                    lesson.map(day =>
                                        <TD>
                                            {
                                                day.map(({name, teacher}) =>
                                                    <>
                                                        {name}
                                                        {teacher ? <><br/>{teacher}</> : null}
                                                    </>
                                                )
                                            }
                                        </TD>
                                    )
                                }
                            </TR>
                        )
                    }
                )
            }
            </tbody>
        </Table>
    )
};

const mapStateToProps: MapStateToProps<{ group: string, week: 0 | 1 }, any, StateType> = ({user, date}) => ({
    group: user.group,
    week: date.weekIndex
});

export default connect(mapStateToProps)(Tableview);
