import {AxiosResponse} from "axios";
import {apiAxios} from "../../config/axiosConfig";

export class GroupService{
    // GET
    public getGroups = async ():Promise<AxiosResponse<string[]>> =>
        apiAxios.get<string[]>("/groups");

    public getRecentGroups = ():string[] =>
        JSON.parse(localStorage.getItem('recentGroups') ?? "[]");

    public getGroup = ():string => localStorage.getItem('group') ?? "";

    // SAVE
    public saveGroup = (group:string) => {
        localStorage.setItem('group', group);
        this.saveRecentGroup(group)
    }

    private saveRecentGroup = (group:string) => {
        const previous = localStorage.getItem('recentGroups');
        if(previous===null)
            return localStorage.setItem('recentGroups', JSON.stringify([group]));
        const groups:string[] = JSON.parse(previous);
        if (groups.includes(group)) return;
        groups[1] = groups[0];
        groups[0] = group;
        localStorage.setItem('recentGroups', JSON.stringify(groups));
    }
}

export default new GroupService();
