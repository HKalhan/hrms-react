import axios from "axios"

export default class JobAdvertService{
    getAllJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdvert/getAll")
}

addJobAdverts(values){
    return axios.post("http://localhost:8080/api/jobAdvert/add", values)
}


getActiveAdvertByEmployerId(id){
    return axios.get(`http://localhost:8080/api/jobAdvert/getAllActiveJobAdvertByEmployer?id=`+ id )
}


getById(id){
    return axios.get("http://localhost:8080/api/jobAdvert/getById?id=" + id)
}


getJobAdvertRequests(){
    return axios.get("http://localhost:8080/api/jobAdvert/get-requests")
}


getApprove(id){
    return axios.get("http://localhost:8080/api/jobAdvert/approve?id=" + id)
}

getCancel(id){
    return axios.get("http://localhost:8080/api/jobAdvert/cancel?id="+ id)
}

getApprovedAdvert() {
    return axios.get("http://localhost:8080/api/jobAdvert/get-approved")
}
}
