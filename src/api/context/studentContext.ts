import {createContext, useContext} from "react";
import {StudentService} from "../services/studentService";

const StudentServiceContext = createContext<StudentService>(new StudentService());

export const useStudentService = () => useContext(StudentServiceContext)

export default StudentServiceContext.Provider;