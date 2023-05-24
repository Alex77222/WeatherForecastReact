import {MDBContainer} from 'mdb-react-ui-kit';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Body from "./Body/Body";
import CurrentWeatherContainer from "./CurrentWeather/CurrentWeatherContainer";
import WeatherContainer from "./Weather/WeatherContainer";

const App = () => {
    return (
        <BrowserRouter>
            <MDBContainer>
                <div className="col-lg-12 col-md-12 col-sm-auto col-xl-12 align-middle">
                    <div className="justify-content-center">
                        <Body/>
                        <Routes>
                            <Route path='/currentWeather' element={<CurrentWeatherContainer/>}/>
                            <Route path='/weather' element={<WeatherContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </MDBContainer>
        </BrowserRouter>
    )
}

export default App;
