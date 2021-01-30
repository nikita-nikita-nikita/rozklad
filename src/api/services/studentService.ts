import {AxiosResponse} from "axios";
import {apiAxios} from "../../config/axiosConfig";

export  class StudentService{
    // POST
    // TODO Add Response Model
    public authGoogleRequest = async (tokenId : string) => {
        let student : any;
        try {
            let student = await apiAxios.post<any>("/student/google", {
                "tokenId": tokenId,
                "groupId" : "5e9bfd0f-8852-4f88-aaa3-104afdd3e5f7"
            });
        }
        catch (e){
            console.error(e)
        }
    }
}

export default new StudentService()