import axios from "@/http/axios";


const login=(user)=>{
    return axios.post('/api/login',user, { withCredentials: true })
}

export default login