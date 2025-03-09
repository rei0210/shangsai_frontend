import axios from "@/http/axios";

export const getStudentReport=()=>{
    return axios.post('/api/stu_report', {
        headers: { 'Content-Type': 'application/json' },withCredentials: true })
}
