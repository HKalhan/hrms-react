import axios from "axios"

export default class JobAdvertService{
    getAllJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdvert/getAll")
}

addJobAdverts(jobAdvert){
    return axios.post("http://localhost:8080/api/jobAdvert/addDto", jobAdvert)
}


getActiveAdvertByEmployerId(id){
    return axios.get(`http://localhost:8080/api/jobAdvert/getAllActiveJobAdvertByEmployer?id=`+ id )
}


getById(id){
    return axios.get("http://localhost:8080/api/jobAdvert/getById?id=" + id)
}



}