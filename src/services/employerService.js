import axios from "axios";

export default class EmployerService{
    getEmloyers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

}