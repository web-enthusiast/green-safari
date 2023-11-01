import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';
import clear_icon from '../Assets/clear.png';
import drizzle_icon from '../Assets/drizzle.png';
import snow_icon from '../Assets/snow.png';
import rain_icon from '../Assets/rain.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: '',
        windSpeed: '',
        temperature: '',
        location: 'Nairobi',
    });

    const api_key = '1c7bc325ebb36a88e6e076620146edc9';
    const [wicon, setWicon] = useState(cloud_icon);

    const fetchData = async () => {
        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === '') {
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData({
                humidity: data.main.humidity + ' %',
                windSpeed: Math.floor(data.wind.speed) + ' km/h',
                temperature: Math.round(data.main.temp) + ' °c',
                location: data.name,
            });

            if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
                setWicon(clear_icon);
            } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
                setWicon(cloud_icon);
            } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
                setWicon(drizzle_icon);
            } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
                setWicon(rain_icon);
            } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
                setWicon(rain_icon);
            } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Search" />
                    <div className="search-icon" onClick={fetchData}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={wicon} alt="" />
                </div>
                <div className="weather-temp">{weatherData.temperature}</div>
                <div className="weather-location">{weatherData.location}</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humidity_icon} alt="" className="icon" />
                        <div className="data">
                            <div className="humidity-percent">{weatherData.humidity}</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="" className="icon" />
                        <div className="data">
                            <div className="wind-rate">{weatherData.windSpeed}</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WeatherApp;
