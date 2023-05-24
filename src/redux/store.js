import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import WeatherReducer from "./weather-reducer";

let reducers = combineReducers({
    weather: WeatherReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;