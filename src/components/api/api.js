import React, { useState, useEffect } from 'react';
import Weather from '../Weather';


function Api(props) {
    const { city, trigger } = props;

    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    });

    useEffect(() => {
        if (trigger) {
            getLocation();
        }
    }, [trigger])

    useEffect(() => {
        if (trigger) {
            getWeather();
        }
    }, [location]);



    const [weather, setWeather] = useState({
        temp: '',
        humidity: '',
        windSpeed: ''
    });

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'https://api.openweathermap.org';

    const getLocation = async () => {
        const response = await fetch(`${baseUrl}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
        const res = await response.json()
        console.log(res);
        setLocation({ latitude: res[0].lat, longitude: res[0].lon });
    }

    const getWeather = async () => {
        const { latitude, longitude } = location;
        const response = await fetch(`${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        const res = await response.json();
        console.log(res);
        setWeather({
            temp: res.main.temp,
            humidity: res.main.humidity,
            windSpeed: res.wind.speed
        })
    }

    return (
        <Weather weather={weather} />
    )
}

export default Api