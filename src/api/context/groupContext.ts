import {createContext, useContext} from "react";
import {GroupService} from "../services/groupService";

const GroupServiceContext = createContext<GroupService>(new GroupService());

export const useGroupService = () => useContext(GroupServiceContext);

export default GroupServiceContext.Provider;
