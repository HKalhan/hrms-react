import axios from "axios"

export default class JobAdvertService{
    getAllJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdvert/getAll")
}

addJobAdverts(jobAdvert){
    return axios.post("http://localhost:8080/api/jobAdvert/addDto", jobAdvert)
}


getByEmployerId(employerId){
    return axios.get(`http://localhost:8080/api/jobAdvert/getByEmployerId?employerId=`+ employerId )
}


getById(id){
    return axios.get("http://localhost:8080/api/jobAdvert/getById?id=" + id)
}



}