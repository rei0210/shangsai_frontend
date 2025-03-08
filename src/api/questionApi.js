import axios from "@/http/axios";

export const getQuestion=()=>{
    return axios.get('/api/survey')
}

export const postAnswer=(answer)=>{
    return axios.post('/api/survey',  answer , {
        headers: { 'Content-Type': 'application/json' }
    });
}

