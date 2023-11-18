import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './App.css';
import Search from './component/search/Search';
import CurrentWeather from './component/current-weather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../src/api'
import Forecast from './component/forecast/Forecast';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async(searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        weatherResponse.city=searchData.label;
        forecastResponse.city=searchData.label;

        await setCurrentWeather(weatherResponse);
        await setForecast(forecastResponse.list.splice(0,5));
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <h2 className='header'>Forecast of 5 Day's</h2>}
      {forecast && <Forecast tdata={forecast} />}
    </div>
  );
}

export default App;
