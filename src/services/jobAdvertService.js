import axios from "axios"

export default class JobAdvertService{
    getAllJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdvert/getAll")
}

addJobAdvert(jobAdvert){
    return axios.post("http://localhost:8080/api/jobAdvert/add", jobAdvert)
}



}