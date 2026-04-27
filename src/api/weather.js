import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric"
            }
        });
        console.log("Полученные данные о погоде:", response.data);
        return response.data;
    } catch (error) {        console.error("Ошибка при получении данных о погоде:", error.response?.data);
        throw error;
    }
};

export const getForecast = async (city) => {
    const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "en",
            cnt: 40
        }
    });
    return response.data;
};