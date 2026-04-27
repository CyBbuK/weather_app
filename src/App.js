import { useWeather } from './hooks/useWeather';
import LoadingSpinner from './components/LoadingSpinner';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
    const { weatherData, loading, error, fetchWeather } = useWeather();
  return (
    <div className="App">
        <h1>Weather App</h1>
        <p>Welcome to the Weather App! Please enter a city to get the current weather information.</p>
        <SearchBar onSearch={fetchWeather} />
        {loading && <LoadingSpinner />}
        {error && <p className="error-message">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
