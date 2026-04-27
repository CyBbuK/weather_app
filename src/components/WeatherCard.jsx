import { formatTemp } from '../utils/helpers';

function WeatherCard({ data }) {
    if (!data) return null;
    const { name, main, weather, wind } = data;
    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p className="description">{weather[0].description}</p>
            <p className="temperature">Temperature: {formatTemp(main.temp)}</p>
            <p className="humidity">Humidity: {main.humidity}%</p>
            <p className="wind">Wind: {wind.speed} m/s</p>
        </div>
    );
}

export default WeatherCard;