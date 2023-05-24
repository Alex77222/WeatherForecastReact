import {getCurrentWeather} from "../redux/weather-reducer";
import {connect} from "react-redux";
import React from "react";
import CurrentWeather from "./CurrentWeather";

class CurrentWeatherContainer extends React.Component {

    componentDidMount() {

        this.props.getCurrentWeather();
    }
    

    render() {
        return <CurrentWeather
            currentWeather={this.props.currentWeather}/>
    }
}

const mapStateToProps = (state) => {
    return {
        currentWeather: state.weather.currentWeather
    }
}
export default connect(mapStateToProps, {getCurrentWeather})(CurrentWeatherContainer);