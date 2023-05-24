import {weatherAPI} from "../API/api";

const set_currentWeather ="SET_CURRENT_WEATHER";
const set_weather ="SET_WEATHER";
const set_dateFrom ="SET_DATE_FROM";
const set_dateTo ="SET_DATE_TO";

export const setWeather = (weather) => ({type: set_weather, weather});
export const setCurrentWeather = (currentWeather) => ({type: set_currentWeather, currentWeather});
export const setDateFrom = (dateFrom) => ({type: set_dateFrom, dateFrom});
export const setDateTo = (dateTo) => ({type: set_dateTo, dateTo});

let initialState={
    weather: [],
    currentWeather:[],
    dateFrom:"",
    dateTo:""
};

const weatherReducer =(state = initialState, action ) => {
   switch (action.type){
       case set_currentWeather:{
           return {
               ...state,
               currentWeather:action.currentWeather
           }
       }
       case set_weather:{
           return {
               ...state,
               weather: action.weather,
           }
       }
       case set_dateFrom:{
           return {
               ...state,
               dateFrom: action.dateFrom
           }
       }
       case set_dateTo:{
           return {
               ...state,
               dateTo: action.dateTo
           }
       }
       default:
           return state
   }
}
export const getWeather =(dateFrom, dateTo) =>(dispatch)=>{
    weatherAPI.getWeatherFrom(dateFrom,dateTo).then(response=>{
        dispatch(setWeather(response.data));
    })
}
export const getCurrentWeather =() =>(dispatch)=>{
    weatherAPI.getCurrentWeather().then(response=>{
        dispatch(setCurrentWeather(response.data));
    })
}
export const getWeatherWeek =() =>(dispatch)=>{
    weatherAPI.getWeatherWeek().then(response=>{
        dispatch(setWeather(response.data));
    })
}
export default weatherReducer