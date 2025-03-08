import axios from "@/http/axios";

export const getQuestion=()=>{
    return axios.get('/api/survey', { withCredentials: true })
}

export const postAnswer=(answer)=>{
    console.log(answer)
    return axios.post('/api/survey',  JSON.stringify({ answer: answer }) , {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });
}

