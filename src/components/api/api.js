import React, { useState, useEffect } from 'react';
import Weather from '../Weather';


function Api(props) {
    const { city, trigger, setCity } = props;

    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    });

    useEffect(() => {
        if (trigger && city) {
            getLocation();
        }
    }, [trigger])

    useEffect(() => {
        if (trigger) {
            getWeather();
        }
    }, [location]);

    const [weather, setWeather] = useState({
        name: '',
        temp: '',
        humidity: '',
        windSpeed: '',
        icon: ''
    });

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'https://api.openweathermap.org';

    const getLocation = async () => {
        try {
            const response = await fetch(`${baseUrl}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
            const res = await response.json()
            console.log(res);
            setLocation({ latitude: res[0].lat, longitude: res[0].lon });
        } catch (error) {
            console.log(error);
        }
    }

    const getWeather = async () => {
        try {
            const { latitude, longitude } = location;
            const response = await fetch(`${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
            const res = await response.json();
            console.log(res);
            setWeather({
                name: res.name,
                temp: res.main.temp,
                humidity: res.main.humidity,
                windSpeed: res.wind.speed,
                icon: res.weather[0].icon
            });
            setCity('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Weather weather={weather} getLocation={getLocation} getWeather={getWeather} />
    )
}

export default Api