import { useState } from 'react';
import { getWeather } from '../api/weather';

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeather(city);
            setWeatherData(data);
            localStorage.setItem('lastCity', city);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { weatherData, loading, error, fetchWeather };
};