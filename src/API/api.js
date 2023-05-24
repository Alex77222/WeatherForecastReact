import axios from "axios"

const defaultOptions = {
    baseURL:"https://localhost:44331",
    headers:{
        'Content-Type': 'application/json',
    },
};

let instance = axios.create(defaultOptions);

export const weatherAPI={
    getWeatherFrom(dateFrom,dateTo){
        return instance.get(`/today?dateTo=${dateTo}&dateFrom=${dateFrom}`)
            .then(response=>{
                return response.data
            })
    },
    getCurrentWeather(){
        return instance.get('/now')
            .then(response=>{
                return response.data
            })
            .catch(error=>{
                return error.response
            })
    },
    getWeatherWeek(){
        return instance.get('/today')
            .then(response=>{
                return response.data
            })
            .catch(error=>{
                return error.response
            })
    }
}