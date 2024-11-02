import axios from "axios";
import {toast} from "react-toastify";


export const apiClient = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 12000
})

apiClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if(error.response){
        if (error.response.status === 404){
            toast.error('requested source not found')
        }else if (error.response.status === 400){
            toast.error(error.response.data.error.message)
        }else if (error.response.status === 401){
            toast.error(error.response.data.error.message)
        }else if (error.response.status === 403){
            toast.error('you dont have required access to this source')
        } else {
            toast.error('something went wrong')
        }
    }else if (error.request){
        toast.error('server is out')
    }else {
        toast.error("unknown error")

    }
    return Promise.reject(error);
});