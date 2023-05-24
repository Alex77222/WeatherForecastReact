import {getWeather, getWeatherWeek, setDateFrom, setDateTo} from "../redux/weather-reducer";
import {connect} from "react-redux";
import React from "react";
import Weather from "./Weather";

class WeatherContainer extends React.Component {

    componentDidMount() {

        this.props.getWeatherWeek();
    }
    getWeatherToday = () => {
        this.props.getWeather(this.props.dateFrom, this.props.dateTo);
    }

    render() {
        return <Weather
            weather={this.props.weather}
            date={this.props.date}
            temper={this.props.temper}
            dateFrom={this.props.dateFrom}
            dateTo={this.props.dateTo}
            getWeatherToday={this.getWeatherToday.bind(this)}
            setDateTo={this.props.setDateTo}
            setDateFrom={this.props.setDateFrom}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.weather,
        date: state.weather.date,
        temper: state.weather.temper,
        dateFrom:state.weather.dateFrom,
        dateTo:state.weather.dateTo
    }
}
export default connect(mapStateToProps, {getWeatherWeek,getWeather,setDateFrom,setDateTo})(WeatherContainer);