import axios from "axios";

export default class CVSercice{
    getAllCV(candidateId){
        return axios.get("http://localhost:8080/api/candidates/cv?candidateId="+{candidateId})
    }
}