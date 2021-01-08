import {createContext, useContext} from "react";
import SubjectService from "../services/subjectService";

const SubjectServiceContext = createContext<typeof SubjectService>(SubjectService);

export const useSubjectService = () => useContext(SubjectServiceContext);

export default SubjectServiceContext.Provider;
