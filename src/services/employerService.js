import axios from "axios";

export default class EmployerService{
    getEmloyers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+ id)
    }


    getEmployerDto(){
        return axios.get("http://localhost:8080/api/employers/getEmployerDto")
    }
}